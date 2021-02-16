/**
 * TelepathyLogger-0.2
 */

import type * as Gjs from './Gjs';
import type * as TelepathyGLib from './TelepathyGLib-0.12';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum EntityType {
    UNKNOWN,
    CONTACT,
    ROOM,
    SELF,
}
export enum LogManagerError {
    LOG_MANAGER_ERROR_ADD_EVENT,
}
export enum EventTypeMask {
    TEXT,
    CALL,
    ANY,
}
export interface LogEventFilter {
    (event: Event): boolean
}
export interface CallEvent_ConstructProps extends Event_ConstructProps {
    detailed_end_reason?: string
    duration?: number
    end_actor?: Entity
    end_reason?: number
}
export class CallEvent {
    /* Properties of TelepathyLogger.Event */
    readonly account_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.CallEvent */
    get_detailed_end_reason(): string
    get_duration(): GLib.TimeSpan
    get_end_actor(): Entity
    get_end_reason(): TelepathyGLib.CallStateChangeReason
    /* Methods of TelepathyLogger.Event */
    equal(data: Event): boolean
    get_account(): TelepathyGLib.Account
    get_account_path(): string
    get_receiver(): Entity
    get_sender(): Entity
    get_timestamp(): number
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
    connect(sigName: "notify", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CallEvent_ConstructProps)
    _init (config?: CallEvent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Entity_ConstructProps extends GObject.Object_ConstructProps {
    alias?: string
    avatar_token?: string
    identifier?: string
    type?: number
}
export class Entity {
    /* Fields of TelepathyLogger.Entity */
    parent: GObject.Object
    priv: EntityPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.Entity */
    get_alias(): string
    get_avatar_token(): string
    get_entity_type(): EntityType
    get_identifier(): string
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
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, type: EntityType, alias: string, avatar_token: string): Entity
    static new_from_room_id(room_id: string): Entity
    static new_from_tp_contact(contact: TelepathyGLib.Contact, type: EntityType): Entity
    static $gtype: GObject.Type
}
export interface Event_ConstructProps extends GObject.Object_ConstructProps {
    account?: TelepathyGLib.Account
    channel_path?: string
    receiver?: Entity
    sender?: Entity
    timestamp?: number
}
export class Event {
    /* Properties of TelepathyLogger.Event */
    readonly account_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.Event */
    equal(data: Event): boolean
    get_account(): TelepathyGLib.Account
    get_account_path(): string
    get_receiver(): Entity
    get_sender(): Entity
    get_timestamp(): number
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
    connect(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LogManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class LogManager {
    /* Fields of TelepathyLogger.LogManager */
    parent: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.LogManager */
    disable_for_entity(account: TelepathyGLib.Account, entity: Entity): void
    enable_for_entity(account: TelepathyGLib.Account, entity: Entity): void
    exists(account: TelepathyGLib.Account, target: Entity, type_mask: number): boolean
    get_dates_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, callback?: Gio.AsyncReadyCallback | null): void
    get_dates_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* dates */ GLib.Date[] ]
    get_entities_async(account: TelepathyGLib.Account, callback?: Gio.AsyncReadyCallback | null): void
    get_entities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* entities */ Entity[] ]
    get_events_for_date_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, date: GLib.Date, callback?: Gio.AsyncReadyCallback | null): void
    get_events_for_date_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    get_filtered_events_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, num_events: number, filter?: LogEventFilter | null, callback?: Gio.AsyncReadyCallback | null): void
    get_filtered_events_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    is_disabled_for_entity(account: TelepathyGLib.Account, entity: Entity): boolean
    search_async(text: string, type_mask: number, callback?: Gio.AsyncReadyCallback | null): void
    search_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* hits */ LogSearchHit[] ]
    walk_filtered_events(account: TelepathyGLib.Account, target: Entity, type_mask: number, filter?: LogEventFilter | null): LogWalker
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
    connect(sigName: "notify", callback: (($obj: LogManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LogManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LogManager_ConstructProps)
    _init (config?: LogManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup_singleton(): LogManager
    static errors_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface LogWalker_ConstructProps extends GObject.Object_ConstructProps {
    filter?: object
    filter_data?: object
}
export class LogWalker {
    /* Fields of TelepathyLogger.LogWalker */
    parent_instance: GObject.Object
    priv: LogWalkerPriv
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.LogWalker */
    get_events_async(num_events: number, callback?: Gio.AsyncReadyCallback | null): void
    get_events_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    is_end(): boolean
    is_start(): boolean
    rewind_async(num_events: number, callback?: Gio.AsyncReadyCallback | null): void
    rewind_finish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LogWalker_ConstructProps)
    _init (config?: LogWalker_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextEvent_ConstructProps extends Event_ConstructProps {
    edit_timestamp?: number
    message?: string
    message_token?: string
    message_type?: number
    supersedes_token?: string
}
export class TextEvent {
    /* Properties of TelepathyLogger.Event */
    readonly account_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyLogger.TextEvent */
    get_edit_timestamp(): number
    get_message(): string
    get_message_token(): string
    get_message_type(): TelepathyGLib.ChannelTextMessageType
    get_supersedes(): TextEvent[]
    get_supersedes_token(): string
    /* Methods of TelepathyLogger.Event */
    equal(data: Event): boolean
    get_account(): TelepathyGLib.Account
    get_account_path(): string
    get_receiver(): Entity
    get_sender(): Entity
    get_timestamp(): number
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
    connect(sigName: "notify", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextEvent_ConstructProps)
    _init (config?: TextEvent_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class CallEventClass {
    static name: string
}
export class CallEventPriv {
    static name: string
}
export class EntityPriv {
    static name: string
}
export abstract class EventClass {
    static name: string
}
export class EventPriv {
    static name: string
}
export abstract class LogManagerClass {
    /* Fields of TelepathyLogger.LogManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class LogSearchHit {
    /* Fields of TelepathyLogger.LogSearchHit */
    account: TelepathyGLib.Account
    target: Entity
    date: GLib.Date
    static name: string
}
export abstract class LogWalkerClass {
    static name: string
}
export class LogWalkerPriv {
    static name: string
}
export abstract class TextEventClass {
    static name: string
}
export class TextEventPriv {
    static name: string
}