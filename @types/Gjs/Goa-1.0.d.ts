/**
 * Goa-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum Error {
    FAILED,
    NOT_SUPPORTED,
    DIALOG_DISMISSED,
    ACCOUNT_EXISTS,
    NOT_AUTHORIZED,
    SSL,
}
export const ERROR_NUM_ENTRIES: number
export function account_interface_info(): Gio.DBusInterfaceInfo
export function account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function calendar_interface_info(): Gio.DBusInterfaceInfo
export function calendar_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function chat_interface_info(): Gio.DBusInterfaceInfo
export function chat_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function check_version(required_major: number, required_minor: number, required_micro: number): string
export function contacts_interface_info(): Gio.DBusInterfaceInfo
export function contacts_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function documents_interface_info(): Gio.DBusInterfaceInfo
export function documents_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function error_quark(): GLib.Quark
export function exchange_interface_info(): Gio.DBusInterfaceInfo
export function exchange_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function files_interface_info(): Gio.DBusInterfaceInfo
export function files_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function mail_interface_info(): Gio.DBusInterfaceInfo
export function mail_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function manager_interface_info(): Gio.DBusInterfaceInfo
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function maps_interface_info(): Gio.DBusInterfaceInfo
export function maps_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function media_server_interface_info(): Gio.DBusInterfaceInfo
export function media_server_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function music_interface_info(): Gio.DBusInterfaceInfo
export function music_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function oauth2_based_interface_info(): Gio.DBusInterfaceInfo
export function oauth2_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function oauth_based_interface_info(): Gio.DBusInterfaceInfo
export function oauth_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function password_based_interface_info(): Gio.DBusInterfaceInfo
export function password_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function photos_interface_info(): Gio.DBusInterfaceInfo
export function photos_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function printers_interface_info(): Gio.DBusInterfaceInfo
export function printers_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function read_later_interface_info(): Gio.DBusInterfaceInfo
export function read_later_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function ticketing_interface_info(): Gio.DBusInterfaceInfo
export function ticketing_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function todo_interface_info(): Gio.DBusInterfaceInfo
export function todo_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class Account {
    /* Properties of Goa-1.0.Goa.Account */
    attention_needed: boolean
    calendar_disabled: boolean
    chat_disabled: boolean
    contacts_disabled: boolean
    documents_disabled: boolean
    files_disabled: boolean
    id: string
    identity: string
    is_locked: boolean
    is_temporary: boolean
    mail_disabled: boolean
    maps_disabled: boolean
    music_disabled: boolean
    photos_disabled: boolean
    presentation_identity: string
    printers_disabled: boolean
    provider_icon: string
    provider_name: string
    provider_type: string
    read_later_disabled: boolean
    ticketing_disabled: boolean
    todo_disabled: boolean
    /* Methods of Goa-1.0.Goa.Account */
    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_ensure_credentials_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_finish(res: Gio.AsyncResult): boolean
    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void
    complete_remove(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.Account */
    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: Account, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Calendar {
    /* Properties of Goa-1.0.Goa.Calendar */
    accept_ssl_errors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Chat {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Contacts {
    /* Properties of Goa-1.0.Goa.Contacts */
    accept_ssl_errors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Documents {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Exchange {
    /* Properties of Goa-1.0.Goa.Exchange */
    accept_ssl_errors: boolean
    host: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Files {
    /* Properties of Goa-1.0.Goa.Files */
    accept_ssl_errors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Mail {
    /* Properties of Goa-1.0.Goa.Mail */
    email_address: string
    imap_accept_ssl_errors: boolean
    imap_host: string
    imap_supported: boolean
    imap_use_ssl: boolean
    imap_use_tls: boolean
    imap_user_name: string
    name: string
    smtp_accept_ssl_errors: boolean
    smtp_auth_login: boolean
    smtp_auth_plain: boolean
    smtp_auth_xoauth2: boolean
    smtp_host: string
    smtp_supported: boolean
    smtp_use_auth: boolean
    smtp_use_ssl: boolean
    smtp_use_tls: boolean
    smtp_user_name: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Manager {
    /* Methods of Goa-1.0.Goa.Manager */
    call_add_account(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_account_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_add_account_sync(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_is_supported_provider(arg_provider_type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_is_supported_provider_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    call_is_supported_provider_sync(arg_provider_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void
    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void
    /* Virtual methods of Goa-1.0.Goa.Manager */
    vfunc_handle_add_account(invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): boolean
    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, arg_provider_type: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Maps {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class MediaServer {
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlna_supported: boolean
    udn: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Music {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class OAuth2Based {
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    client_id: string
    client_secret: string
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuth2Based */
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class OAuthBased {
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumer_key: string
    consumer_secret: string
    /* Methods of Goa-1.0.Goa.OAuthBased */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, access_token_secret: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuthBased */
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Object {
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    media_server: MediaServer
    music: Music
    oauth_based: OAuthBased
    oauth2_based: OAuth2Based
    password_based: PasswordBased
    photos: Photos
    printers: Printers
    read_later: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Methods of Goa-1.0.Goa.Object */
    get_account(): Account | null
    get_calendar(): Calendar | null
    get_chat(): Chat | null
    get_contacts(): Contacts | null
    get_documents(): Documents | null
    get_exchange(): Exchange | null
    get_files(): Files | null
    get_mail(): Mail | null
    get_manager(): Manager | null
    get_maps(): Maps | null
    get_media_server(): MediaServer | null
    get_music(): Music | null
    get_oauth2_based(): OAuth2Based | null
    get_oauth_based(): OAuthBased | null
    get_password_based(): PasswordBased | null
    get_photos(): Photos | null
    get_printers(): Printers | null
    get_read_later(): ReadLater | null
    get_ticketing(): Ticketing | null
    get_todo(): Todo | null
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio-2.0.Gio.DBusObject */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: Object, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    static name: string
}
export class PasswordBased {
    /* Methods of Goa-1.0.Goa.PasswordBased */
    call_get_password(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_password_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string | null ]
    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string | null ]
    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Virtual methods of Goa-1.0.Goa.PasswordBased */
    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBased, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBased, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Photos {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Printers {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class ReadLater {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Ticketing {
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Methods of Goa-1.0.Goa.Ticketing */
    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_ticket_finish(res: Gio.AsyncResult): boolean
    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.Ticketing */
    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Todo {
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface AccountProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    attention_needed?: boolean
    calendar_disabled?: boolean
    chat_disabled?: boolean
    contacts_disabled?: boolean
    documents_disabled?: boolean
    files_disabled?: boolean
    id?: string
    identity?: string
    is_locked?: boolean
    is_temporary?: boolean
    mail_disabled?: boolean
    maps_disabled?: boolean
    music_disabled?: boolean
    photos_disabled?: boolean
    presentation_identity?: string
    printers_disabled?: boolean
    provider_icon?: string
    provider_name?: string
    provider_type?: string
    read_later_disabled?: boolean
    ticketing_disabled?: boolean
    todo_disabled?: boolean
}
export class AccountProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Account */
    attention_needed: boolean
    calendar_disabled: boolean
    chat_disabled: boolean
    contacts_disabled: boolean
    documents_disabled: boolean
    files_disabled: boolean
    id: string
    identity: string
    is_locked: boolean
    is_temporary: boolean
    mail_disabled: boolean
    maps_disabled: boolean
    music_disabled: boolean
    photos_disabled: boolean
    presentation_identity: string
    printers_disabled: boolean
    provider_icon: string
    provider_name: string
    provider_type: string
    read_later_disabled: boolean
    ticketing_disabled: boolean
    todo_disabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Account */
    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_ensure_credentials_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_finish(res: Gio.AsyncResult): boolean
    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void
    complete_remove(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.AccountProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: AccountProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: AccountProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: AccountProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: AccountProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: AccountProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccountProxy_ConstructProps)
    _init (config?: AccountProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): AccountProxy
    static new_for_bus_finish(res: Gio.AsyncResult): AccountProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface AccountSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    attention_needed?: boolean
    calendar_disabled?: boolean
    chat_disabled?: boolean
    contacts_disabled?: boolean
    documents_disabled?: boolean
    files_disabled?: boolean
    id?: string
    identity?: string
    is_locked?: boolean
    is_temporary?: boolean
    mail_disabled?: boolean
    maps_disabled?: boolean
    music_disabled?: boolean
    photos_disabled?: boolean
    presentation_identity?: string
    printers_disabled?: boolean
    provider_icon?: string
    provider_name?: string
    provider_type?: string
    read_later_disabled?: boolean
    ticketing_disabled?: boolean
    todo_disabled?: boolean
}
export class AccountSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Account */
    attention_needed: boolean
    calendar_disabled: boolean
    chat_disabled: boolean
    contacts_disabled: boolean
    documents_disabled: boolean
    files_disabled: boolean
    id: string
    identity: string
    is_locked: boolean
    is_temporary: boolean
    mail_disabled: boolean
    maps_disabled: boolean
    music_disabled: boolean
    photos_disabled: boolean
    presentation_identity: string
    printers_disabled: boolean
    provider_icon: string
    provider_name: string
    provider_type: string
    read_later_disabled: boolean
    ticketing_disabled: boolean
    todo_disabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Account */
    call_ensure_credentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_ensure_credentials_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_expires_in */ number | null ]
    call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_remove_finish(res: Gio.AsyncResult): boolean
    call_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void
    complete_remove(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.AccountSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-ensure-credentials", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-remove", callback: (($obj: AccountSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccountSkeleton_ConstructProps)
    _init (config?: AccountSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AccountSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface CalendarProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class CalendarProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Calendar */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.CalendarProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: CalendarProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: CalendarProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: CalendarProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: CalendarProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarProxy_ConstructProps)
    _init (config?: CalendarProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): CalendarProxy
    static new_for_bus_finish(res: Gio.AsyncResult): CalendarProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface CalendarSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class CalendarSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Calendar */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.CalendarSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: CalendarSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: CalendarSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarSkeleton_ConstructProps)
    _init (config?: CalendarSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CalendarSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ChatProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ChatProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.ChatProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ChatProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ChatProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ChatProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ChatProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChatProxy_ConstructProps)
    _init (config?: ChatProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ChatProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ChatProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ChatSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ChatSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.ChatSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ChatSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ChatSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChatSkeleton_ConstructProps)
    _init (config?: ChatSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChatSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of Goa-1.0.Goa.Client */
    readonly object_manager: Gio.DBusObjectManager
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Goa-1.0.Goa.Client */
    get_accounts(): Object[]
    get_manager(): Manager | null
    get_object_manager(): Gio.DBusObjectManager
    lookup_by_id(id: string): Object
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.Client */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Client */
    connect(sigName: "account-added", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-added", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-added", object: Object): void
    connect(sigName: "account-changed", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-changed", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-changed", object: Object): void
    connect(sigName: "account-removed", callback: (($obj: Client, object: Object) => void)): number
    connect_after(sigName: "account-removed", callback: (($obj: Client, object: Object) => void)): number
    emit(sigName: "account-removed", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Client
    static new_sync(cancellable?: Gio.Cancellable | null): Client
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ContactsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class ContactsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Contacts */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.ContactsProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ContactsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ContactsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ContactsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ContactsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsProxy_ConstructProps)
    _init (config?: ContactsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ContactsProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ContactsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ContactsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class ContactsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Contacts */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.ContactsSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ContactsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ContactsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsSkeleton_ConstructProps)
    _init (config?: ContactsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContactsSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DocumentsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class DocumentsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.DocumentsProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DocumentsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DocumentsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DocumentsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DocumentsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsProxy_ConstructProps)
    _init (config?: DocumentsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DocumentsProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DocumentsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DocumentsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class DocumentsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.DocumentsSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DocumentsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DocumentsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsSkeleton_ConstructProps)
    _init (config?: DocumentsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentsSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ExchangeProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accept_ssl_errors?: boolean
    host?: string
}
export class ExchangeProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Exchange */
    accept_ssl_errors: boolean
    host: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.ExchangeProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ExchangeProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ExchangeProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ExchangeProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ExchangeProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExchangeProxy_ConstructProps)
    _init (config?: ExchangeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ExchangeProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ExchangeProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ExchangeSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accept_ssl_errors?: boolean
    host?: string
}
export class ExchangeSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Exchange */
    accept_ssl_errors: boolean
    host: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.ExchangeSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ExchangeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ExchangeSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExchangeSkeleton_ConstructProps)
    _init (config?: ExchangeSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExchangeSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface FilesProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class FilesProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Files */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.FilesProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: FilesProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: FilesProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: FilesProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: FilesProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilesProxy_ConstructProps)
    _init (config?: FilesProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): FilesProxy
    static new_for_bus_finish(res: Gio.AsyncResult): FilesProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface FilesSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    accept_ssl_errors?: boolean
    uri?: string
}
export class FilesSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Files */
    accept_ssl_errors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.FilesSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: FilesSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: FilesSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilesSkeleton_ConstructProps)
    _init (config?: FilesSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilesSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MailProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    email_address?: string
    imap_accept_ssl_errors?: boolean
    imap_host?: string
    imap_supported?: boolean
    imap_use_ssl?: boolean
    imap_use_tls?: boolean
    imap_user_name?: string
    name?: string
    smtp_accept_ssl_errors?: boolean
    smtp_auth_login?: boolean
    smtp_auth_plain?: boolean
    smtp_auth_xoauth2?: boolean
    smtp_host?: string
    smtp_supported?: boolean
    smtp_use_auth?: boolean
    smtp_use_ssl?: boolean
    smtp_use_tls?: boolean
    smtp_user_name?: string
}
export class MailProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Mail */
    email_address: string
    imap_accept_ssl_errors: boolean
    imap_host: string
    imap_supported: boolean
    imap_use_ssl: boolean
    imap_use_tls: boolean
    imap_user_name: string
    name: string
    smtp_accept_ssl_errors: boolean
    smtp_auth_login: boolean
    smtp_auth_plain: boolean
    smtp_auth_xoauth2: boolean
    smtp_host: string
    smtp_supported: boolean
    smtp_use_auth: boolean
    smtp_use_ssl: boolean
    smtp_use_tls: boolean
    smtp_user_name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.MailProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MailProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MailProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: MailProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MailProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MailProxy_ConstructProps)
    _init (config?: MailProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): MailProxy
    static new_for_bus_finish(res: Gio.AsyncResult): MailProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): MailProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MailProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): MailProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MailProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MailSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    email_address?: string
    imap_accept_ssl_errors?: boolean
    imap_host?: string
    imap_supported?: boolean
    imap_use_ssl?: boolean
    imap_use_tls?: boolean
    imap_user_name?: string
    name?: string
    smtp_accept_ssl_errors?: boolean
    smtp_auth_login?: boolean
    smtp_auth_plain?: boolean
    smtp_auth_xoauth2?: boolean
    smtp_host?: string
    smtp_supported?: boolean
    smtp_use_auth?: boolean
    smtp_use_ssl?: boolean
    smtp_use_tls?: boolean
    smtp_user_name?: string
}
export class MailSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Mail */
    email_address: string
    imap_accept_ssl_errors: boolean
    imap_host: string
    imap_supported: boolean
    imap_use_ssl: boolean
    imap_use_tls: boolean
    imap_user_name: string
    name: string
    smtp_accept_ssl_errors: boolean
    smtp_auth_login: boolean
    smtp_auth_plain: boolean
    smtp_auth_xoauth2: boolean
    smtp_host: string
    smtp_supported: boolean
    smtp_use_auth: boolean
    smtp_use_ssl: boolean
    smtp_use_tls: boolean
    smtp_user_name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.MailSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MailSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MailSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MailSkeleton_ConstructProps)
    _init (config?: MailSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MailSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Manager */
    call_add_account(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_account_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_add_account_sync(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_is_supported_provider(arg_provider_type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_is_supported_provider_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    call_is_supported_provider_sync(arg_provider_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void
    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void
    /* Virtual methods of Goa-1.0.Goa.ManagerProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_add_account(invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): boolean
    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: ManagerProxy, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, arg_provider_type: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Manager */
    call_add_account(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_add_account_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_add_account_sync(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    call_is_supported_provider(arg_provider_type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_is_supported_provider_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    call_is_supported_provider_sync(arg_provider_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_is_supported */ boolean | null ]
    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void
    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void
    /* Virtual methods of Goa-1.0.Goa.ManagerSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_add_account(invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): boolean
    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-add-account", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean)): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    connect_after(sigName: "handle-is-supported-provider", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean)): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, arg_provider_type: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MapsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MapsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.MapsProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MapsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MapsProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: MapsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MapsProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapsProxy_ConstructProps)
    _init (config?: MapsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): MapsProxy
    static new_for_bus_finish(res: Gio.AsyncResult): MapsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MapsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MapsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.MapsSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MapsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MapsSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapsSkeleton_ConstructProps)
    _init (config?: MapsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MapsSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MediaServerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    dlna_supported?: boolean
    udn?: string
}
export class MediaServerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlna_supported: boolean
    udn: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.MediaServerProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MediaServerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MediaServerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: MediaServerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MediaServerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaServerProxy_ConstructProps)
    _init (config?: MediaServerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): MediaServerProxy
    static new_for_bus_finish(res: Gio.AsyncResult): MediaServerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MediaServerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    dlna_supported?: boolean
    udn?: string
}
export class MediaServerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlna_supported: boolean
    udn: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.MediaServerSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MediaServerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MediaServerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaServerSkeleton_ConstructProps)
    _init (config?: MediaServerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaServerSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MusicProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class MusicProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.MusicProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: MusicProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: MusicProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: MusicProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: MusicProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicProxy_ConstructProps)
    _init (config?: MusicProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): MusicProxy
    static new_for_bus_finish(res: Gio.AsyncResult): MusicProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface MusicSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class MusicSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.MusicSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: MusicSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: MusicSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicSkeleton_ConstructProps)
    _init (config?: MusicSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MusicSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface OAuth2BasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    client_id?: string
    client_secret?: string
}
export class OAuth2BasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    client_id: string
    client_secret: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuth2BasedProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: OAuth2BasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: OAuth2BasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: OAuth2BasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: OAuth2BasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2BasedProxy_ConstructProps)
    _init (config?: OAuth2BasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): OAuth2BasedProxy
    static new_for_bus_finish(res: Gio.AsyncResult): OAuth2BasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface OAuth2BasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    client_id?: string
    client_secret?: string
}
export class OAuth2BasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    client_id: string
    client_secret: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuth2BasedSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuth2BasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2BasedSkeleton_ConstructProps)
    _init (config?: OAuth2BasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuth2BasedSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface OAuthBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    consumer_key?: string
    consumer_secret?: string
}
export class OAuthBasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumer_key: string
    consumer_secret: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.OAuthBased */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, access_token_secret: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuthBasedProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: OAuthBasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: OAuthBasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: OAuthBasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: OAuthBasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuthBasedProxy_ConstructProps)
    _init (config?: OAuthBasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): OAuthBasedProxy
    static new_for_bus_finish(res: Gio.AsyncResult): OAuthBasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface OAuthBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    consumer_key?: string
    consumer_secret?: string
}
export class OAuthBasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumer_key: string
    consumer_secret: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.OAuthBased */
    call_get_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    call_get_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number | null ]
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, access_token_secret: string, expires_in: number): void
    /* Virtual methods of Goa-1.0.Goa.OAuthBasedSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-access-token", callback: (($obj: OAuthBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuthBasedSkeleton_ConstructProps)
    _init (config?: OAuthBasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuthBasedSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
export class ObjectManagerClient {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    get_connection(): Gio.DBusConnection
    get_flags(): Gio.DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    get_object(object_path: string): Gio.DBusObject
    get_object_path(): string
    get_objects(): Gio.DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.ObjectManagerClient */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface
    vfunc_get_object(object_path: string): Gio.DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): Gio.DBusObject[]
    vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void
    vfunc_object_added(object: Gio.DBusObject): void
    vfunc_object_removed(object: Gio.DBusObject): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: ObjectManagerClient, object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: Gio.DBusObjectProxy, interface_proxy: Gio.DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: ObjectManagerClient, object: Gio.DBusObject) => void)): number
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectManagerClient_ConstructProps)
    _init (config?: ObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ObjectManagerClient
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name?: string | null, user_data?: object | null): GObject.Type
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    account?: Account
    calendar?: Calendar
    chat?: Chat
    contacts?: Contacts
    documents?: Documents
    exchange?: Exchange
    files?: Files
    mail?: Mail
    manager?: Manager
    maps?: Maps
    media_server?: MediaServer
    music?: Music
    oauth_based?: OAuthBased
    oauth2_based?: OAuth2Based
    password_based?: PasswordBased
    photos?: Photos
    printers?: Printers
    read_later?: ReadLater
    ticketing?: Ticketing
    todo?: Todo
}
export class ObjectProxy {
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    media_server: MediaServer
    music: Music
    oauth_based: OAuthBased
    oauth2_based: OAuth2Based
    password_based: PasswordBased
    photos: Photos
    printers: Printers
    read_later: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    get_connection(): Gio.DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of Goa-1.0.Goa.Object */
    get_account(): Account | null
    get_calendar(): Calendar | null
    get_chat(): Chat | null
    get_contacts(): Contacts | null
    get_documents(): Documents | null
    get_exchange(): Exchange | null
    get_files(): Files | null
    get_mail(): Mail | null
    get_manager(): Manager | null
    get_maps(): Maps | null
    get_media_server(): MediaServer | null
    get_music(): Music | null
    get_oauth2_based(): OAuth2Based | null
    get_oauth_based(): OAuthBased | null
    get_password_based(): PasswordBased | null
    get_photos(): Photos | null
    get_printers(): Printers | null
    get_read_later(): ReadLater | null
    get_ticketing(): Ticketing | null
    get_todo(): Todo | null
    /* Virtual methods of Goa-1.0.Goa.ObjectProxy */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectProxy, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectProxy_ConstructProps)
    _init (config?: ObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, object_path: string): ObjectProxy
    static $gtype: GObject.Type
}
export interface ObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    account?: Account
    calendar?: Calendar
    chat?: Chat
    contacts?: Contacts
    documents?: Documents
    exchange?: Exchange
    files?: Files
    mail?: Mail
    manager?: Manager
    maps?: Maps
    media_server?: MediaServer
    music?: Music
    oauth_based?: OAuthBased
    oauth2_based?: OAuth2Based
    password_based?: PasswordBased
    photos?: Photos
    printers?: Printers
    read_later?: ReadLater
    ticketing?: Ticketing
    todo?: Todo
}
export class ObjectSkeleton {
    /* Properties of Gio-2.0.Gio.DBusObjectSkeleton */
    g_object_path: string
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    media_server: MediaServer
    music: Music
    oauth_based: OAuthBased
    oauth2_based: OAuth2Based
    password_based: PasswordBased
    photos: Photos
    printers: Printers
    read_later: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Goa-1.0.Goa.ObjectSkeleton */
    set_account(interface_?: Account | null): void
    set_calendar(interface_?: Calendar | null): void
    set_chat(interface_?: Chat | null): void
    set_contacts(interface_?: Contacts | null): void
    set_documents(interface_?: Documents | null): void
    set_exchange(interface_?: Exchange | null): void
    set_files(interface_?: Files | null): void
    set_mail(interface_?: Mail | null): void
    set_manager(interface_?: Manager | null): void
    set_maps(interface_?: Maps | null): void
    set_media_server(interface_?: MediaServer | null): void
    set_music(interface_?: Music | null): void
    set_oauth2_based(interface_?: OAuth2Based | null): void
    set_oauth_based(interface_?: OAuthBased | null): void
    set_password_based(interface_?: PasswordBased | null): void
    set_photos(interface_?: Photos | null): void
    set_printers(interface_?: Printers | null): void
    set_read_later(interface_?: ReadLater | null): void
    set_ticketing(interface_?: Ticketing | null): void
    set_todo(interface_?: Todo | null): void
    /* Methods of Gio-2.0.Gio.DBusObjectSkeleton */
    add_interface(interface_: Gio.DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: Gio.DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    get_interface(interface_name: string): Gio.DBusInterface | null
    get_interfaces(): Gio.DBusInterface[]
    get_object_path(): string
    /* Methods of Goa-1.0.Goa.Object */
    get_account(): Account | null
    get_calendar(): Calendar | null
    get_chat(): Chat | null
    get_contacts(): Contacts | null
    get_documents(): Documents | null
    get_exchange(): Exchange | null
    get_files(): Files | null
    get_mail(): Mail | null
    get_manager(): Manager | null
    get_maps(): Maps | null
    get_media_server(): MediaServer | null
    get_music(): Music | null
    get_oauth2_based(): OAuth2Based | null
    get_oauth_based(): OAuthBased | null
    get_password_based(): PasswordBased | null
    get_photos(): Photos | null
    get_printers(): Printers | null
    get_read_later(): ReadLater | null
    get_ticketing(): Ticketing | null
    get_todo(): Todo | null
    /* Virtual methods of Goa-1.0.Goa.ObjectSkeleton */
    vfunc_get_interface(interface_name: string): Gio.DBusInterface | null
    vfunc_get_interfaces(): Gio.DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: Gio.DBusInterface): void
    vfunc_interface_removed(interface_: Gio.DBusInterface): void
    /* Virtual methods of Gio-2.0.Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: ObjectSkeleton, interface: Gio.DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectSkeleton_ConstructProps)
    _init (config?: ObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): ObjectSkeleton
    static $gtype: GObject.Type
}
export interface PasswordBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PasswordBasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.PasswordBased */
    call_get_password(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_password_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string | null ]
    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string | null ]
    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Virtual methods of Goa-1.0.Goa.PasswordBasedProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PasswordBasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PasswordBasedProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: PasswordBasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PasswordBasedProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBasedProxy, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBasedProxy, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PasswordBasedProxy_ConstructProps)
    _init (config?: PasswordBasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): PasswordBasedProxy
    static new_for_bus_finish(res: Gio.AsyncResult): PasswordBasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PasswordBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PasswordBasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.PasswordBased */
    call_get_password(arg_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_password_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string | null ]
    call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string | null ]
    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Virtual methods of Goa-1.0.Goa.PasswordBasedSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    connect_after(sigName: "handle-get-password", callback: (($obj: PasswordBasedSkeleton, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean)): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, arg_id: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PasswordBasedSkeleton_ConstructProps)
    _init (config?: PasswordBasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PasswordBasedSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PhotosProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PhotosProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.PhotosProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PhotosProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PhotosProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: PhotosProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PhotosProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhotosProxy_ConstructProps)
    _init (config?: PhotosProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): PhotosProxy
    static new_for_bus_finish(res: Gio.AsyncResult): PhotosProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PhotosSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PhotosSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.PhotosSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PhotosSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PhotosSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhotosSkeleton_ConstructProps)
    _init (config?: PhotosSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PhotosSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PrintersProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class PrintersProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.PrintersProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: PrintersProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: PrintersProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: PrintersProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: PrintersProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintersProxy_ConstructProps)
    _init (config?: PrintersProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): PrintersProxy
    static new_for_bus_finish(res: Gio.AsyncResult): PrintersProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface PrintersSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class PrintersSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.PrintersSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: PrintersSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: PrintersSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintersSkeleton_ConstructProps)
    _init (config?: PrintersSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PrintersSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ReadLaterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ReadLaterProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.ReadLaterProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ReadLaterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ReadLaterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ReadLaterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ReadLaterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ReadLaterProxy_ConstructProps)
    _init (config?: ReadLaterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ReadLaterProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ReadLaterProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ReadLaterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ReadLaterSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.ReadLaterSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ReadLaterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ReadLaterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ReadLaterSkeleton_ConstructProps)
    _init (config?: ReadLaterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ReadLaterSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface TicketingProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    details?: GLib.Variant
}
export class TicketingProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Ticketing */
    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_ticket_finish(res: Gio.AsyncResult): boolean
    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.TicketingProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: TicketingProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: TicketingProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: TicketingProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: TicketingProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: TicketingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: TicketingProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TicketingProxy_ConstructProps)
    _init (config?: TicketingProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): TicketingProxy
    static new_for_bus_finish(res: Gio.AsyncResult): TicketingProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface TicketingSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    details?: GLib.Variant
}
export class TicketingSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Ticketing */
    call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_ticket_finish(res: Gio.AsyncResult): boolean
    call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Goa-1.0.Goa.TicketingSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-ticket", callback: (($obj: TicketingSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TicketingSkeleton_ConstructProps)
    _init (config?: TicketingSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TicketingSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface TodoProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class TodoProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Goa-1.0.Goa.TodoProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: TodoProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: TodoProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: TodoProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: TodoProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TodoProxy_ConstructProps)
    _init (config?: TodoProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): TodoProxy
    static new_for_bus_finish(res: Gio.AsyncResult): TodoProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface TodoSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class TodoSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Goa-1.0.Goa.TodoSkeleton */
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: TodoSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: TodoSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TodoSkeleton_ConstructProps)
    _init (config?: TodoSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TodoSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export abstract class AccountIface {
    /* Fields of Goa-1.0.Goa.AccountIface */
    parent_iface: GObject.TypeInterface
    handle_ensure_credentials: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    handle_remove: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    get_attention_needed: (object: Account) => boolean
    get_calendar_disabled: (object: Account) => boolean
    get_chat_disabled: (object: Account) => boolean
    get_contacts_disabled: (object: Account) => boolean
    get_documents_disabled: (object: Account) => boolean
    get_id: (object: Account) => string | null
    get_identity: (object: Account) => string | null
    get_is_temporary: (object: Account) => boolean
    get_mail_disabled: (object: Account) => boolean
    get_presentation_identity: (object: Account) => string | null
    get_provider_icon: (object: Account) => string | null
    get_provider_name: (object: Account) => string | null
    get_provider_type: (object: Account) => string | null
    get_ticketing_disabled: (object: Account) => boolean
    get_files_disabled: (object: Account) => boolean
    get_photos_disabled: (object: Account) => boolean
    get_printers_disabled: (object: Account) => boolean
    get_read_later_disabled: (object: Account) => boolean
    get_maps_disabled: (object: Account) => boolean
    get_is_locked: (object: Account) => boolean
    get_music_disabled: (object: Account) => boolean
    get_todo_disabled: (object: Account) => boolean
    static name: string
}
export abstract class AccountProxyClass {
    /* Fields of Goa-1.0.Goa.AccountProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class AccountProxyPrivate {
    static name: string
}
export abstract class AccountSkeletonClass {
    /* Fields of Goa-1.0.Goa.AccountSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class AccountSkeletonPrivate {
    static name: string
}
export abstract class CalendarIface {
    /* Fields of Goa-1.0.Goa.CalendarIface */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Calendar) => boolean
    get_uri: (object: Calendar) => string | null
    static name: string
}
export abstract class CalendarProxyClass {
    /* Fields of Goa-1.0.Goa.CalendarProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class CalendarProxyPrivate {
    static name: string
}
export abstract class CalendarSkeletonClass {
    /* Fields of Goa-1.0.Goa.CalendarSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class CalendarSkeletonPrivate {
    static name: string
}
export abstract class ChatIface {
    /* Fields of Goa-1.0.Goa.ChatIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ChatProxyClass {
    /* Fields of Goa-1.0.Goa.ChatProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ChatProxyPrivate {
    static name: string
}
export abstract class ChatSkeletonClass {
    /* Fields of Goa-1.0.Goa.ChatSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ChatSkeletonPrivate {
    static name: string
}
export abstract class ClientClass {
    /* Fields of Goa-1.0.Goa.ClientClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContactsIface {
    /* Fields of Goa-1.0.Goa.ContactsIface */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Contacts) => boolean
    get_uri: (object: Contacts) => string | null
    static name: string
}
export abstract class ContactsProxyClass {
    /* Fields of Goa-1.0.Goa.ContactsProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ContactsProxyPrivate {
    static name: string
}
export abstract class ContactsSkeletonClass {
    /* Fields of Goa-1.0.Goa.ContactsSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ContactsSkeletonPrivate {
    static name: string
}
export abstract class DocumentsIface {
    /* Fields of Goa-1.0.Goa.DocumentsIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class DocumentsProxyClass {
    /* Fields of Goa-1.0.Goa.DocumentsProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DocumentsProxyPrivate {
    static name: string
}
export abstract class DocumentsSkeletonClass {
    /* Fields of Goa-1.0.Goa.DocumentsSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DocumentsSkeletonPrivate {
    static name: string
}
export abstract class ExchangeIface {
    /* Fields of Goa-1.0.Goa.ExchangeIface */
    parent_iface: GObject.TypeInterface
    get_host: (object: Exchange) => string | null
    get_accept_ssl_errors: (object: Exchange) => boolean
    static name: string
}
export abstract class ExchangeProxyClass {
    /* Fields of Goa-1.0.Goa.ExchangeProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ExchangeProxyPrivate {
    static name: string
}
export abstract class ExchangeSkeletonClass {
    /* Fields of Goa-1.0.Goa.ExchangeSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ExchangeSkeletonPrivate {
    static name: string
}
export abstract class FilesIface {
    /* Fields of Goa-1.0.Goa.FilesIface */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Files) => boolean
    get_uri: (object: Files) => string | null
    static name: string
}
export abstract class FilesProxyClass {
    /* Fields of Goa-1.0.Goa.FilesProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class FilesProxyPrivate {
    static name: string
}
export abstract class FilesSkeletonClass {
    /* Fields of Goa-1.0.Goa.FilesSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class FilesSkeletonPrivate {
    static name: string
}
export abstract class MailIface {
    /* Fields of Goa-1.0.Goa.MailIface */
    parent_iface: GObject.TypeInterface
    get_email_address: (object: Mail) => string | null
    get_imap_host: (object: Mail) => string | null
    get_imap_supported: (object: Mail) => boolean
    get_imap_use_tls: (object: Mail) => boolean
    get_imap_user_name: (object: Mail) => string | null
    get_smtp_host: (object: Mail) => string | null
    get_smtp_supported: (object: Mail) => boolean
    get_smtp_use_tls: (object: Mail) => boolean
    get_smtp_user_name: (object: Mail) => string | null
    get_imap_accept_ssl_errors: (object: Mail) => boolean
    get_imap_use_ssl: (object: Mail) => boolean
    get_name: (object: Mail) => string | null
    get_smtp_accept_ssl_errors: (object: Mail) => boolean
    get_smtp_use_auth: (object: Mail) => boolean
    get_smtp_use_ssl: (object: Mail) => boolean
    get_smtp_auth_login: (object: Mail) => boolean
    get_smtp_auth_plain: (object: Mail) => boolean
    get_smtp_auth_xoauth2: (object: Mail) => boolean
    static name: string
}
export abstract class MailProxyClass {
    /* Fields of Goa-1.0.Goa.MailProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class MailProxyPrivate {
    static name: string
}
export abstract class MailSkeletonClass {
    /* Fields of Goa-1.0.Goa.MailSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MailSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Goa-1.0.Goa.ManagerIface */
    parent_iface: GObject.TypeInterface
    handle_add_account: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean
    handle_is_supported_provider: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_provider_type: string) => boolean
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Goa-1.0.Goa.ManagerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Goa-1.0.Goa.ManagerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class MapsIface {
    /* Fields of Goa-1.0.Goa.MapsIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class MapsProxyClass {
    /* Fields of Goa-1.0.Goa.MapsProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class MapsProxyPrivate {
    static name: string
}
export abstract class MapsSkeletonClass {
    /* Fields of Goa-1.0.Goa.MapsSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MapsSkeletonPrivate {
    static name: string
}
export abstract class MediaServerIface {
    /* Fields of Goa-1.0.Goa.MediaServerIface */
    parent_iface: GObject.TypeInterface
    get_dlna_supported: (object: MediaServer) => boolean
    get_udn: (object: MediaServer) => string | null
    static name: string
}
export abstract class MediaServerProxyClass {
    /* Fields of Goa-1.0.Goa.MediaServerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class MediaServerProxyPrivate {
    static name: string
}
export abstract class MediaServerSkeletonClass {
    /* Fields of Goa-1.0.Goa.MediaServerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MediaServerSkeletonPrivate {
    static name: string
}
export abstract class MusicIface {
    /* Fields of Goa-1.0.Goa.MusicIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class MusicProxyClass {
    /* Fields of Goa-1.0.Goa.MusicProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class MusicProxyPrivate {
    static name: string
}
export abstract class MusicSkeletonClass {
    /* Fields of Goa-1.0.Goa.MusicSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class MusicSkeletonPrivate {
    static name: string
}
export abstract class OAuth2BasedIface {
    /* Fields of Goa-1.0.Goa.OAuth2BasedIface */
    parent_iface: GObject.TypeInterface
    handle_get_access_token: (object: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean
    get_client_id: (object: OAuth2Based) => string | null
    get_client_secret: (object: OAuth2Based) => string | null
    static name: string
}
export abstract class OAuth2BasedProxyClass {
    /* Fields of Goa-1.0.Goa.OAuth2BasedProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class OAuth2BasedProxyPrivate {
    static name: string
}
export abstract class OAuth2BasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.OAuth2BasedSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class OAuth2BasedSkeletonPrivate {
    static name: string
}
export abstract class OAuthBasedIface {
    /* Fields of Goa-1.0.Goa.OAuthBasedIface */
    parent_iface: GObject.TypeInterface
    handle_get_access_token: (object: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean
    get_consumer_key: (object: OAuthBased) => string | null
    get_consumer_secret: (object: OAuthBased) => string | null
    static name: string
}
export abstract class OAuthBasedProxyClass {
    /* Fields of Goa-1.0.Goa.OAuthBasedProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class OAuthBasedProxyPrivate {
    static name: string
}
export abstract class OAuthBasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.OAuthBasedSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class OAuthBasedSkeletonPrivate {
    static name: string
}
export abstract class ObjectIface {
    /* Fields of Goa-1.0.Goa.ObjectIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ObjectManagerClientClass {
    /* Fields of Goa-1.0.Goa.ObjectManagerClientClass */
    parent_class: Gio.DBusObjectManagerClientClass
    static name: string
}
export class ObjectManagerClientPrivate {
    static name: string
}
export abstract class ObjectProxyClass {
    /* Fields of Goa-1.0.Goa.ObjectProxyClass */
    parent_class: Gio.DBusObjectProxyClass
    static name: string
}
export class ObjectProxyPrivate {
    static name: string
}
export abstract class ObjectSkeletonClass {
    /* Fields of Goa-1.0.Goa.ObjectSkeletonClass */
    parent_class: Gio.DBusObjectSkeletonClass
    static name: string
}
export class ObjectSkeletonPrivate {
    static name: string
}
export abstract class PasswordBasedIface {
    /* Fields of Goa-1.0.Goa.PasswordBasedIface */
    parent_iface: GObject.TypeInterface
    handle_get_password: (object: PasswordBased, invocation: Gio.DBusMethodInvocation, arg_id: string) => boolean
    static name: string
}
export abstract class PasswordBasedProxyClass {
    /* Fields of Goa-1.0.Goa.PasswordBasedProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class PasswordBasedProxyPrivate {
    static name: string
}
export abstract class PasswordBasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.PasswordBasedSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PasswordBasedSkeletonPrivate {
    static name: string
}
export abstract class PhotosIface {
    /* Fields of Goa-1.0.Goa.PhotosIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class PhotosProxyClass {
    /* Fields of Goa-1.0.Goa.PhotosProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class PhotosProxyPrivate {
    static name: string
}
export abstract class PhotosSkeletonClass {
    /* Fields of Goa-1.0.Goa.PhotosSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PhotosSkeletonPrivate {
    static name: string
}
export abstract class PrintersIface {
    /* Fields of Goa-1.0.Goa.PrintersIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class PrintersProxyClass {
    /* Fields of Goa-1.0.Goa.PrintersProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class PrintersProxyPrivate {
    static name: string
}
export abstract class PrintersSkeletonClass {
    /* Fields of Goa-1.0.Goa.PrintersSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class PrintersSkeletonPrivate {
    static name: string
}
export abstract class ReadLaterIface {
    /* Fields of Goa-1.0.Goa.ReadLaterIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ReadLaterProxyClass {
    /* Fields of Goa-1.0.Goa.ReadLaterProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ReadLaterProxyPrivate {
    static name: string
}
export abstract class ReadLaterSkeletonClass {
    /* Fields of Goa-1.0.Goa.ReadLaterSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ReadLaterSkeletonPrivate {
    static name: string
}
export abstract class TicketingIface {
    /* Fields of Goa-1.0.Goa.TicketingIface */
    parent_iface: GObject.TypeInterface
    handle_get_ticket: (object: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean
    get_details: (object: Ticketing) => GLib.Variant | null
    static name: string
}
export abstract class TicketingProxyClass {
    /* Fields of Goa-1.0.Goa.TicketingProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class TicketingProxyPrivate {
    static name: string
}
export abstract class TicketingSkeletonClass {
    /* Fields of Goa-1.0.Goa.TicketingSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class TicketingSkeletonPrivate {
    static name: string
}
export abstract class TodoIface {
    /* Fields of Goa-1.0.Goa.TodoIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class TodoProxyClass {
    /* Fields of Goa-1.0.Goa.TodoProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class TodoProxyPrivate {
    static name: string
}
export abstract class TodoSkeletonClass {
    /* Fields of Goa-1.0.Goa.TodoSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class TodoSkeletonPrivate {
    static name: string
}