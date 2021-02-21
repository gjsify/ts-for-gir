/**
 * FolksEds-0.7
 */

import type * as Gjs from './Gjs';
import type * as EBookContacts from './EBookContacts-1.2';
import type * as libxml2 from './libxml2-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as Soup from './Soup-2.4';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';
import type * as Gee from './Gee-0.8';
import type * as Folks from './Folks-0.7';

export interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {
    source?: EDataServer.Source
}
export class PersonaStore {
    /* Properties of Folks-0.7.Folks.PersonaStore */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksEds-0.7.FolksEds.PersonaStore */
    get_source(): EDataServer.Source
    /* Methods of Folks-0.7.Folks.PersonaStore */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Folks-0.7.Folks.PersonaStore */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks-0.7.Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    emit(sigName: "removed"): void
    /* Signals of GObject-2.0.GObject.Object */
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
    static new(s: EDataServer.Source): PersonaStore
    static with_source_registry(r: EDataServer.SourceRegistry, s: EDataServer.Source): PersonaStore
    static create_address_book(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    static create_address_book_finish(_res_: Gio.AsyncResult): void
    static remove_address_book(store: PersonaStore, _callback_?: Gio.AsyncReadyCallback | null): void
    static remove_address_book_finish(_res_: Gio.AsyncResult): void
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    contact?: EBookContacts.Contact
    contact_id?: string
    system_groups?: Gee.Set
    in_google_personal_group?: boolean
    anti_links?: Gee.Set
    avatar?: Gio.LoadableIcon
    birthday?: GLib.DateTime
    calendar_event_id?: string
    email_addresses?: Gee.Set
    is_favourite?: boolean
    gender?: Folks.Gender
    groups?: Gee.Set
    im_addresses?: Gee.MultiMap
    local_ids?: Gee.Set
    location?: Folks.Location
    structured_name?: Folks.StructuredName
    full_name?: string
    nickname?: string
    notes?: Gee.Set
    phone_numbers?: Gee.Set
    roles?: Gee.Set
    urls?: Gee.Set
    postal_addresses?: Gee.Set
    web_service_addresses?: Gee.MultiMap
}
export class Persona {
    /* Properties of FolksEds-0.7.FolksEds.Persona */
    system_groups: Gee.Set
    in_google_personal_group: boolean
    /* Properties of Folks-0.7.Folks.Persona */
    individual: Folks.Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]
    /* Properties of Folks-0.7.Folks.AntiLinkable */
    anti_links: Gee.Set
    /* Properties of Folks-0.7.Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks-0.7.Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendar_event_id: string
    /* Properties of Folks-0.7.Folks.EmailDetails */
    email_addresses: Gee.Set
    /* Properties of Folks-0.7.Folks.FavouriteDetails */
    is_favourite: boolean
    /* Properties of Folks-0.7.Folks.GenderDetails */
    gender: Folks.Gender
    /* Properties of Folks-0.7.Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks-0.7.Folks.ImDetails */
    im_addresses: Gee.MultiMap
    /* Properties of Folks-0.7.Folks.LocalIdDetails */
    local_ids: Gee.Set
    /* Properties of Folks-0.7.Folks.LocationDetails */
    location: Folks.Location
    /* Properties of Folks-0.7.Folks.NameDetails */
    structured_name: Folks.StructuredName
    full_name: string
    nickname: string
    /* Properties of Folks-0.7.Folks.NoteDetails */
    notes: Gee.Set
    /* Properties of Folks-0.7.Folks.PhoneDetails */
    phone_numbers: Gee.Set
    /* Properties of Folks-0.7.Folks.RoleDetails */
    roles: Gee.Set
    /* Properties of Folks-0.7.Folks.UrlDetails */
    urls: Gee.Set
    /* Properties of Folks-0.7.Folks.PostalAddressDetails */
    postal_addresses: Gee.Set
    /* Properties of Folks-0.7.Folks.WebServiceDetails */
    web_service_addresses: Gee.MultiMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksEds-0.7.FolksEds.Persona */
    change_system_groups(system_groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_system_groups_finish(_res_: Gio.AsyncResult): void
    change_in_google_personal_group(in_personal: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_in_google_personal_group_finish(_res_: Gio.AsyncResult): void
    get_contact(): EBookContacts.Contact
    get_contact_id(): string
    get_system_groups(): Gee.Set | null
    set_system_groups(value?: Gee.Set | null): void
    get_in_google_personal_group(): boolean
    set_in_google_personal_group(value: boolean): void
    /* Methods of Folks-0.7.Folks.Persona */
    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): Folks.PersonaStore
    get_individual(): Folks.Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Folks-0.7.Folks.AntiLinkable */
    change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_anti_links_finish(_res_: Gio.AsyncResult): void
    has_anti_link_with_persona(other_persona: Folks.Persona): boolean
    add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    add_anti_links_finish(_res_: Gio.AsyncResult): void
    remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_anti_links_finish(_res_: Gio.AsyncResult): void
    add_global_anti_link(_callback_?: Gio.AsyncReadyCallback | null): void
    add_global_anti_link_finish(_res_: Gio.AsyncResult): void
    remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback | null): void
    remove_global_anti_link_finish(_res_: Gio.AsyncResult): void
    has_global_anti_link(): boolean
    get_anti_links(): Gee.Set
    set_anti_links(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.AvatarDetails */
    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks-0.7.Folks.BirthdayDetails */
    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void
    /* Methods of Folks-0.7.Folks.EmailDetails */
    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.ExtendedInfo */
    get_extended_field(name: string): Folks.ExtendedFieldDetails | null
    change_extended_field(name: string, value: Folks.ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    change_extended_field_finish(_res_: Gio.AsyncResult): void
    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_extended_field_finish(_res_: Gio.AsyncResult): void
    /* Methods of Folks-0.7.Folks.FavouriteDetails */
    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void
    /* Methods of Folks-0.7.Folks.GenderDetails */
    change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    change_gender_finish(_res_: Gio.AsyncResult): void
    get_gender(): Folks.Gender
    set_gender(value: Folks.Gender): void
    /* Methods of Folks-0.7.Folks.GroupDetails */
    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.ImDetails */
    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void
    /* Methods of Folks-0.7.Folks.LocalIdDetails */
    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_local_ids_finish(_res_: Gio.AsyncResult): void
    get_local_ids(): Gee.Set
    set_local_ids(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.LocationDetails */
    change_location(location?: Folks.Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_location_finish(_res_: Gio.AsyncResult): void
    get_location(): Folks.Location | null
    set_location(value?: Folks.Location | null): void
    /* Methods of Folks-0.7.Folks.NameDetails */
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
    /* Methods of Folks-0.7.Folks.NoteDetails */
    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_notes_finish(_res_: Gio.AsyncResult): void
    get_notes(): Gee.Set
    set_notes(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.PhoneDetails */
    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.RoleDetails */
    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_roles_finish(_res_: Gio.AsyncResult): void
    get_roles(): Gee.Set
    set_roles(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.UrlDetails */
    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.PostalAddressDetails */
    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    get_postal_addresses(): Gee.Set
    set_postal_addresses(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.WebServiceDetails */
    change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    get_web_service_addresses(): Gee.MultiMap
    set_web_service_addresses(value: Gee.MultiMap): void
    /* Virtual methods of FolksEds-0.7.FolksEds.Persona */
    vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void
    vfunc_get_anti_links(): Gee.Set
    vfunc_set_anti_links(value: Gee.Set): void
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
    vfunc_get_extended_field(name: string): Folks.ExtendedFieldDetails | null
    vfunc_change_extended_field(name: string, value: Folks.ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void
    vfunc_change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void
    vfunc_get_gender(): Folks.Gender
    vfunc_set_gender(value: Folks.Gender): void
    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void
    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void
    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void
    vfunc_get_local_ids(): Gee.Set
    vfunc_set_local_ids(value: Gee.Set): void
    vfunc_change_location(location?: Folks.Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_location_finish(_res_: Gio.AsyncResult): void
    vfunc_get_location(): Folks.Location | null
    vfunc_set_location(value?: Folks.Location | null): void
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
    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void
    vfunc_get_notes(): Gee.Set
    vfunc_set_notes(value: Gee.Set): void
    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void
    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void
    vfunc_get_roles(): Gee.Set
    vfunc_set_roles(value: Gee.Set): void
    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void
    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_postal_addresses(): Gee.Set
    vfunc_set_postal_addresses(value: Gee.Set): void
    vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_web_service_addresses(): Gee.MultiMap
    vfunc_set_web_service_addresses(value: Gee.MultiMap): void
    /* Virtual methods of Folks-0.7.Folks.Persona */
    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Folks-0.7.Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    emit(sigName: "group-changed", group: string, is_member: boolean): void
    connect(sigName: "notify::system-groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-google-personal-group", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-google-personal-group", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anti-links", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-ids", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notes", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::roles", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postal-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(store: PersonaStore, contact: EBookContacts.Contact): Persona
    static normalise_im_address(im_address: string, protocol: string): string
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