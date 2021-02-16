/**
 * GnomeKeyring-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GnomeKeyring {

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
export function aclCopy(list: AccessControl[]): AccessControl[]
export function aclFree(acl: AccessControl[]): void
export function attributeListAppendString(attributes: AttributeList, name: string, value: string): void
export function attributeListAppendUint32(attributes: AttributeList, name: string, value: number): void
export function attributeListCopy(attributes: AttributeList): AttributeList
export function attributeListFree(attributes: AttributeList): void
export function attributeListGetType(): GObject.Type
export function attributeListNew(): AttributeList
export function attributeListToGlist(attributes: AttributeList): Attribute[]
export function cancelRequest(request: object): void
export function changePasswordSync(keyring: string, original?: string | null, password?: string | null): Result
export function createSync(keyringName: string, password?: string | null): Result
export function daemonPrepareEnvironmentSync(): Result
export function daemonSetDisplaySync(display: string): Result
export function deleteSync(keyring: string): Result
export function findItemsSync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
export function findNetworkPasswordSync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
export function foundListFree(foundList: Found[]): void
export function freePassword(password: string): void
export function getDefaultKeyringSync(): [ /* returnType */ Result, /* keyring */ string ]
export function getInfoSync(keyring?: string | null): [ /* returnType */ Result, /* info */ Info ]
export function isAvailable(): boolean
export function itemAcGetAccessType(ac: AccessControl): AccessType
export function itemAcGetDisplayName(ac: AccessControl): string
export function itemAcGetPathName(ac: AccessControl): string
export function itemAcSetAccessType(ac: AccessControl, value: AccessType): void
export function itemAcSetDisplayName(ac: AccessControl, value: string): void
export function itemAcSetPathName(ac: AccessControl, value: string): void
export function itemCreateSync(keyring: string | null, type: ItemType, displayName: string, attributes: AttributeList, secret: string, updateIfExists: boolean): [ /* returnType */ Result, /* itemId */ number ]
export function itemDeleteSync(keyring: string | null, id: number): Result
export function itemGetAclSync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
export function itemGetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
export function itemGetInfoFullSync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
export function itemGetInfoSync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
export function itemGrantAccessRightsSync(keyring: string | null, displayName: string, fullPath: string, id: number, rights: AccessType): Result
export function itemSetAclSync(keyring: string | null, id: number, acl: AccessControl[]): Result
export function itemSetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
export function itemSetInfoSync(keyring: string | null, id: number, info: ItemInfo): Result
export function listItemIdsSync(keyring?: string | null): [ /* returnType */ Result, /* ids */ number[] ]
export function listKeyringNamesSync(): [ /* returnType */ Result, /* keyrings */ string[] ]
export function lockAllSync(): Result
export function lockSync(keyring?: string | null): Result
export function networkPasswordFree(data?: NetworkPasswordData | null): void
export function networkPasswordListFree(list: NetworkPasswordData[]): void
export function resultToMessage(res: Result): string
export function setDefaultKeyringSync(keyring: string): Result
export function setInfoSync(keyring: string | null, info: Info): Result
export function setNetworkPasswordSync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* itemId */ number ]
export function stringListFree(strings: string[]): void
export function unlockSync(keyring?: string | null, password?: string | null): Result
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
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
    constructor(application: ApplicationRef, typesAllowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
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
    getString(): string
    getUint32(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static listAppendString(attributes: AttributeList, name: string, value: string): void
    static listAppendUint32(attributes: AttributeList, name: string, value: number): void
    static listCopy(attributes: AttributeList): AttributeList
    static listFree(attributes: AttributeList): void
    static listNew(): AttributeList
    static listToGlist(attributes: AttributeList): Attribute[]
}
export class Found {
    /* Fields of GnomeKeyring.Found */
    keyring: string
    itemId: number
    attributes: AttributeList
    secret: string
    /* Methods of GnomeKeyring.Found */
    copy(): Found
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static listFree(foundList: Found[]): void
}
export class Info {
    /* Methods of GnomeKeyring.Info */
    copy(): Info
    free(): void
    getCtime(): number
    getIsLocked(): boolean
    getLockOnIdle(): boolean
    getLockTimeout(): number
    getMtime(): number
    setLockOnIdle(value: boolean): void
    setLockTimeout(value: number): void
    static name: string
}
export class ItemInfo {
    /* Methods of GnomeKeyring.ItemInfo */
    copy(): ItemInfo
    free(): void
    getCtime(): number
    getDisplayName(): string
    getMtime(): number
    getSecret(): string
    getType(): ItemType
    setDisplayName(value: string): void
    setSecret(value: string): void
    setType(type: ItemType): void
    static name: string
    static new(): ItemInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ItemInfo
}
export class NetworkPasswordData {
    /* Fields of GnomeKeyring.NetworkPasswordData */
    keyring: string
    itemId: number
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
    itemType: ItemType
    attributes: PasswordSchemaAttribute[]
    static name: string
}
export class PasswordSchemaAttribute {
    /* Fields of GnomeKeyring.PasswordSchemaAttribute */
    name: string
    type: AttributeType
    static name: string
}
type AttributeList = GLib.Array
}