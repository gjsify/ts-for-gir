/**
 * GnomeKeyring-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GnomeKeyring {

enum AccessRestriction {
    ASK,
    DENY,
    ALLOW,
}
enum AttributeType {
    STRING,
    UINT32,
}
enum ItemType {
    GENERIC_SECRET,
    NETWORK_PASSWORD,
    NOTE,
    CHAINED_KEYRING_PASSWORD,
    ENCRYPTION_KEY_PASSWORD,
    PK_STORAGE,
    LAST_TYPE,
}
enum Result {
    OK,
    DENIED,
    NO_KEYRING_DAEMON,
    ALREADY_UNLOCKED,
    NO_SUCH_KEYRING,
    BAD_ARGUMENTS,
    IO_ERROR,
    CANCELLED,
    KEYRING_ALREADY_EXISTS,
    NO_MATCH,
}
enum AccessType {
    READ,
    WRITE,
    REMOVE,
}
enum ItemInfoFlags {
    BASICS,
    SECRET,
}
export const ITEM_APPLICATION_SECRET: number
export const ITEM_INFO_ALL: number
export const ITEM_TYPE_MASK: number
export const SESSION: string
function acl_copy(list: AccessControl[]): AccessControl[]
function acl_free(acl: AccessControl[]): void
function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void
function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void
function attribute_list_copy(attributes: AttributeList): AttributeList
function attribute_list_free(attributes: AttributeList): void
function attribute_list_get_type(): GObject.Type
function attribute_list_new(): AttributeList
function attribute_list_to_glist(attributes: AttributeList): Attribute[]
function cancel_request(request: object): void
function change_password_sync(keyring: string, original?: string | null, password?: string | null): Result
function create_sync(keyring_name: string, password?: string | null): Result
function daemon_prepare_environment_sync(): Result
function daemon_set_display_sync(display: string): Result
function delete_sync(keyring: string): Result
function find_items_sync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
function find_network_password_sync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
function found_list_free(found_list: Found[]): void
function free_password(password: string): void
function get_default_keyring_sync(): [ /* returnType */ Result, /* keyring */ string ]
function get_info_sync(keyring?: string | null): [ /* returnType */ Result, /* info */ Info ]
function is_available(): boolean
function item_ac_get_access_type(ac: AccessControl): AccessType
function item_ac_get_display_name(ac: AccessControl): string
function item_ac_get_path_name(ac: AccessControl): string
function item_ac_set_access_type(ac: AccessControl, value: AccessType): void
function item_ac_set_display_name(ac: AccessControl, value: string): void
function item_ac_set_path_name(ac: AccessControl, value: string): void
function item_create_sync(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean): [ /* returnType */ Result, /* item_id */ number ]
function item_delete_sync(keyring: string | null, id: number): Result
function item_get_acl_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function item_get_info_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function item_grant_access_rights_sync(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType): Result
function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result
function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result
function list_item_ids_sync(keyring?: string | null): [ /* returnType */ Result, /* ids */ number[] ]
function list_keyring_names_sync(): [ /* returnType */ Result, /* keyrings */ string[] ]
function lock_all_sync(): Result
function lock_sync(keyring?: string | null): Result
function network_password_free(data?: NetworkPasswordData | null): void
function network_password_list_free(list: NetworkPasswordData[]): void
function result_to_message(res: Result): string
function set_default_keyring_sync(keyring: string): Result
function set_info_sync(keyring: string | null, info: Info): Result
function set_network_password_sync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* item_id */ number ]
function string_list_free(strings: string[]): void
function unlock_sync(keyring?: string | null, password?: string | null): Result
interface OperationDoneCallback {
    (result: Result): void
}
interface OperationGetAttributesCallback {
    (result: Result, attributes: AttributeList): void
}
interface OperationGetIntCallback {
    (result: Result, val: number): void
}
interface OperationGetItemInfoCallback {
    (result: Result, info: ItemInfo): void
}
interface OperationGetKeyringInfoCallback {
    (result: Result, info: Info): void
}
interface OperationGetStringCallback {
    (result: Result, string: string | null): void
}
class AccessControl {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.AccessControl */
    copy(): AccessControl
    free(): void
    static name: string
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
    constructor(application: ApplicationRef, types_allowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
}
class ApplicationRef {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.ApplicationRef */
    copy(): ApplicationRef
    free(): void
    static name: string
    static new(): ApplicationRef
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ApplicationRef
}
class Attribute {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.Attribute */
    name: string
    type: AttributeType
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Attribute */
    get_string(): string
    get_uint32(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static list_append_string(attributes: AttributeList, name: string, value: string): void
    static list_append_uint32(attributes: AttributeList, name: string, value: number): void
    static list_copy(attributes: AttributeList): AttributeList
    static list_free(attributes: AttributeList): void
    static list_new(): AttributeList
    static list_to_glist(attributes: AttributeList): Attribute[]
}
class Found {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.Found */
    keyring: string
    item_id: number
    attributes: AttributeList
    secret: string
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Found */
    copy(): Found
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static list_free(found_list: Found[]): void
}
class Info {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Info */
    copy(): Info
    free(): void
    get_ctime(): number
    get_is_locked(): boolean
    get_lock_on_idle(): boolean
    get_lock_timeout(): number
    get_mtime(): number
    set_lock_on_idle(value: boolean): void
    set_lock_timeout(value: number): void
    static name: string
}
class ItemInfo {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.ItemInfo */
    copy(): ItemInfo
    free(): void
    get_ctime(): number
    get_display_name(): string
    get_mtime(): number
    get_secret(): string
    get_type(): ItemType
    set_display_name(value: string): void
    set_secret(value: string): void
    set_type(type: ItemType): void
    static name: string
    static new(): ItemInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ItemInfo
}
class NetworkPasswordData {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.NetworkPasswordData */
    keyring: string
    item_id: number
    protocol: string
    server: string
    object: string
    authtype: string
    port: number
    user: string
    domain: string
    password: string
    static name: string
}
class PasswordSchema {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchema */
    item_type: ItemType
    attributes: PasswordSchemaAttribute[]
    static name: string
}
class PasswordSchemaAttribute {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchemaAttribute */
    name: string
    type: AttributeType
    static name: string
}
type AttributeList = GLib.Array
}
export default GnomeKeyring