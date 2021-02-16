/**
 * GnomeKeyring-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AccessRestriction {
    ASK,
    DENY,
    ALLOW,
}
export enum AttributeType {
    STRING,
    UINT32,
}
export enum ItemType {
    GENERIC_SECRET,
    NETWORK_PASSWORD,
    NOTE,
    CHAINED_KEYRING_PASSWORD,
    ENCRYPTION_KEY_PASSWORD,
    PK_STORAGE,
    LAST_TYPE,
}
export enum Result {
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
export enum AccessType {
    READ,
    WRITE,
    REMOVE,
}
export enum ItemInfoFlags {
    BASICS,
    SECRET,
}
export const ITEM_APPLICATION_SECRET: number
export const ITEM_INFO_ALL: number
export const ITEM_TYPE_MASK: number
export const SESSION: string
export function acl_copy(list: AccessControl[]): AccessControl[]
export function acl_free(acl: AccessControl[]): void
export function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void
export function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void
export function attribute_list_copy(attributes: AttributeList): AttributeList
export function attribute_list_free(attributes: AttributeList): void
export function attribute_list_get_type(): GObject.Type
export function attribute_list_new(): AttributeList
export function attribute_list_to_glist(attributes: AttributeList): Attribute[]
export function cancel_request(request: object): void
export function change_password_sync(keyring: string, original?: string | null, password?: string | null): Result
export function create_sync(keyring_name: string, password?: string | null): Result
export function daemon_prepare_environment_sync(): Result
export function daemon_set_display_sync(display: string): Result
export function delete_sync(keyring: string): Result
export function find_items_sync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
export function find_network_password_sync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
export function found_list_free(found_list: Found[]): void
export function free_password(password: string): void
export function get_default_keyring_sync(): [ /* returnType */ Result, /* keyring */ string ]
export function get_info_sync(keyring?: string | null): [ /* returnType */ Result, /* info */ Info ]
export function is_available(): boolean
export function item_ac_get_access_type(ac: AccessControl): AccessType
export function item_ac_get_display_name(ac: AccessControl): string
export function item_ac_get_path_name(ac: AccessControl): string
export function item_ac_set_access_type(ac: AccessControl, value: AccessType): void
export function item_ac_set_display_name(ac: AccessControl, value: string): void
export function item_ac_set_path_name(ac: AccessControl, value: string): void
export function item_create_sync(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean): [ /* returnType */ Result, /* item_id */ number ]
export function item_delete_sync(keyring: string | null, id: number): Result
export function item_get_acl_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
export function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
export function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
export function item_get_info_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
export function item_grant_access_rights_sync(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType): Result
export function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result
export function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
export function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result
export function list_item_ids_sync(keyring?: string | null): [ /* returnType */ Result, /* ids */ number[] ]
export function list_keyring_names_sync(): [ /* returnType */ Result, /* keyrings */ string[] ]
export function lock_all_sync(): Result
export function lock_sync(keyring?: string | null): Result
export function network_password_free(data?: NetworkPasswordData | null): void
export function network_password_list_free(list: NetworkPasswordData[]): void
export function result_to_message(res: Result): string
export function set_default_keyring_sync(keyring: string): Result
export function set_info_sync(keyring: string | null, info: Info): Result
export function set_network_password_sync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* item_id */ number ]
export function string_list_free(strings: string[]): void
export function unlock_sync(keyring?: string | null, password?: string | null): Result
export interface OperationDoneCallback {
    (result: Result): void
}
export interface OperationGetAttributesCallback {
    (result: Result, attributes: AttributeList): void
}
export interface OperationGetIntCallback {
    (result: Result, val: number): void
}
export interface OperationGetItemInfoCallback {
    (result: Result, info: ItemInfo): void
}
export interface OperationGetKeyringInfoCallback {
    (result: Result, info: Info): void
}
export interface OperationGetStringCallback {
    (result: Result, string: string | null): void
}
export class AccessControl {
    /* Methods of GnomeKeyring.AccessControl */
    copy(): AccessControl
    free(): void
    static name: string
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
    constructor(application: ApplicationRef, types_allowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
}
export class ApplicationRef {
    /* Methods of GnomeKeyring.ApplicationRef */
    copy(): ApplicationRef
    free(): void
    static name: string
    static new(): ApplicationRef
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ApplicationRef
}
export class Attribute {
    /* Fields of GnomeKeyring.Attribute */
    name: string
    type: AttributeType
    /* Methods of GnomeKeyring.Attribute */
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
export class Found {
    /* Fields of GnomeKeyring.Found */
    keyring: string
    item_id: number
    attributes: AttributeList
    secret: string
    /* Methods of GnomeKeyring.Found */
    copy(): Found
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static list_free(found_list: Found[]): void
}
export class Info {
    /* Methods of GnomeKeyring.Info */
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
export class ItemInfo {
    /* Methods of GnomeKeyring.ItemInfo */
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
export class NetworkPasswordData {
    /* Fields of GnomeKeyring.NetworkPasswordData */
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
export class PasswordSchema {
    /* Fields of GnomeKeyring.PasswordSchema */
    item_type: ItemType
    attributes: PasswordSchemaAttribute[]
    static name: string
}
export class PasswordSchemaAttribute {
    /* Fields of GnomeKeyring.PasswordSchemaAttribute */
    name: string
    type: AttributeType
    static name: string
}
export type AttributeList = GLib.Array