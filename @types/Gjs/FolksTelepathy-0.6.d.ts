/**
 * FolksTelepathy-0.6
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as Gee from './Gee-0.8';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as TelepathyGLib from './TelepathyGLib-0.12';
import type * as Folks from './Folks-0.6';

export interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {
    account?: TelepathyGLib.Account
}
export class PersonaStore {
    /* Properties of Folks.PersonaStore */
    readonly type_id: string
    readonly personas: Gee.Map
    readonly can_add_personas: Folks.MaybeBool
    readonly can_alias_personas: Folks.MaybeBool
    readonly can_group_personas: Folks.MaybeBool
    readonly can_remove_personas: Folks.MaybeBool
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    is_writeable: boolean
    trust_level: Folks.PersonaStoreTrust
    readonly always_writeable_properties: string[]
    is_primary_store: boolean
    is_user_set_default: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksTelepathy.PersonaStore */
    get_account(): TelepathyGLib.Account
    /* Methods of Folks.PersonaStore */
    _emit_personas_changed(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    flush(_callback_?: Gio.AsyncReadyCallback | null): void
    flush_finish(_res_: Gio.AsyncResult): void
    add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Folks.Persona | null
    remove_persona(persona: Folks.Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_display_name(): string
    get_id(): string
    get_personas(): Gee.Map
    get_can_add_personas(): Folks.MaybeBool
    get_can_alias_personas(): Folks.MaybeBool
    get_can_group_personas(): Folks.MaybeBool
    get_can_remove_personas(): Folks.MaybeBool
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_is_writeable(): boolean
    set_is_writeable(value: boolean): void
    get_trust_level(): Folks.PersonaStoreTrust
    set_trust_level(value: Folks.PersonaStoreTrust): void
    get_always_writeable_properties(): string[]
    get_is_primary_store(): boolean
    get_is_user_set_default(): boolean
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
    /* Virtual methods of Folks.PersonaStore */
    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_flush(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(_res_: Gio.AsyncResult): void
    vfunc_add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Folks.Persona | null
    vfunc_remove_persona(persona: Folks.Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void
    vfunc_get_type_id(): string
    vfunc_get_personas(): Gee.Map
    vfunc_get_can_add_personas(): Folks.MaybeBool
    vfunc_get_can_alias_personas(): Folks.MaybeBool
    vfunc_get_can_group_personas(): Folks.MaybeBool
    vfunc_get_can_remove_personas(): Folks.MaybeBool
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_always_writeable_properties(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    emit(sigName: "removed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: TelepathyGLib.Account): PersonaStore
    static list_persona_stores(): Gee.Map
    static dup_for_account(account: TelepathyGLib.Account): PersonaStore
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    is_in_contact_list?: boolean
    contact?: TelepathyGLib.Contact
    alias?: string
    avatar?: Gio.LoadableIcon
    birthday?: GLib.DateTime
    calendar_event_id?: string
    email_addresses?: Gee.Set
    is_favourite?: boolean
    groups?: Gee.Set
    im_addresses?: Gee.MultiMap
    structured_name?: Folks.StructuredName
    full_name?: string
    nickname?: string
    phone_numbers?: Gee.Set
    presence_type?: Folks.PresenceType
    presence_message?: string
    client_types?: string[]
    presence_status?: string
    urls?: Gee.Set
}
export class Persona {
    /* Properties of FolksTelepathy.Persona */
    is_in_contact_list: boolean
    /* Properties of Folks.Persona */
    individual: Folks.Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]
    /* Properties of Folks.AliasDetails */
    alias: string
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendar_event_id: string
    /* Properties of Folks.EmailDetails */
    email_addresses: Gee.Set
    /* Properties of Folks.FavouriteDetails */
    is_favourite: boolean
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks.InteractionDetails */
    readonly im_interaction_count: number
    readonly last_im_interaction_datetime: GLib.DateTime
    readonly call_interaction_count: number
    readonly last_call_interaction_datetime: GLib.DateTime
    /* Properties of Folks.ImDetails */
    im_addresses: Gee.MultiMap
    /* Properties of Folks.NameDetails */
    structured_name: Folks.StructuredName
    full_name: string
    nickname: string
    /* Properties of Folks.PhoneDetails */
    phone_numbers: Gee.Set
    /* Properties of Folks.PresenceDetails */
    presence_type: Folks.PresenceType
    presence_message: string
    client_types: string[]
    presence_status: string
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of FolksTelepathy.Persona */
    _last_im_interaction_datetime: GLib.DateTime | null
    _last_call_interaction_datetime: GLib.DateTime | null
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksTelepathy.Persona */
    get_is_in_contact_list(): boolean
    set_is_in_contact_list(value: boolean): void
    get_contact(): TelepathyGLib.Contact | null
    /* Methods of Folks.Persona */
    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): Folks.PersonaStore
    get_individual(): Folks.Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]
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
    /* Methods of Folks.AliasDetails */
    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string
    set_alias(value: string): void
    /* Methods of Folks.AvatarDetails */
    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks.BirthdayDetails */
    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void
    /* Methods of Folks.EmailDetails */
    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void
    /* Methods of Folks.FavouriteDetails */
    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void
    /* Methods of Folks.GroupDetails */
    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void
    /* Methods of Folks.InteractionDetails */
    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null
    /* Methods of Folks.ImDetails */
    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void
    /* Methods of Folks.NameDetails */
    change_structured_name(name?: Folks.StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): Folks.StructuredName | null
    set_structured_name(value?: Folks.StructuredName | null): void
    get_full_name(): string
    set_full_name(value: string): void
    get_nickname(): string
    set_nickname(value: string): void
    /* Methods of Folks.PhoneDetails */
    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void
    /* Methods of Folks.PresenceDetails */
    is_online(): boolean
    get_presence_type(): Folks.PresenceType
    set_presence_type(value: Folks.PresenceType): void
    get_presence_message(): string
    set_presence_message(value: string): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string
    set_presence_status(value: string): void
    /* Methods of Folks.UrlDetails */
    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void
    /* Virtual methods of FolksTelepathy.Persona */
    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string
    vfunc_set_alias(value: string): void
    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void
    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value?: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value?: string | null): void
    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void
    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void
    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void
    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null
    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void
    vfunc_change_structured_name(name?: Folks.StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): Folks.StructuredName | null
    vfunc_set_structured_name(value?: Folks.StructuredName | null): void
    vfunc_get_full_name(): string
    vfunc_set_full_name(value: string): void
    vfunc_get_nickname(): string
    vfunc_set_nickname(value: string): void
    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void
    vfunc_get_presence_type(): Folks.PresenceType
    vfunc_set_presence_type(value: Folks.PresenceType): void
    vfunc_get_presence_message(): string
    vfunc_set_presence_message(value: string): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string
    vfunc_set_presence_status(value: string): void
    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void
    /* Virtual methods of Folks.Persona */
    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    emit(sigName: "group-changed", group: string, is_member: boolean): void
    connect(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    static dup_for_contact(contact: TelepathyGLib.Contact): Persona | null
    static normalise_im_address(im_address: string, protocol: string): string
    static get_default_message_from_type(type: Folks.PresenceType): string
    static typecmp(type_a: Folks.PresenceType, type_b: Folks.PresenceType): number
    static $gtype: GObject.Type
}
export abstract class PersonaStoreClass {
    static name: string
}
export class PersonaStorePrivate {
    static name: string
}
export abstract class PersonaClass {
    static name: string
}
export class PersonaPrivate {
    static name: string
}