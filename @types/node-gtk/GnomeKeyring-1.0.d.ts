/**
 * GnomeKeyring-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GnomeKeyring {

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
function aclCopy(list: AccessControl[]): AccessControl[]
function aclFree(acl: AccessControl[]): void
function attributeListAppendString(attributes: AttributeList, name: string, value: string): void
function attributeListAppendUint32(attributes: AttributeList, name: string, value: number): void
function attributeListCopy(attributes: AttributeList): AttributeList
function attributeListFree(attributes: AttributeList): void
function attributeListGetType(): GObject.Type
function attributeListNew(): AttributeList
function attributeListToGlist(attributes: AttributeList): Attribute[]
function cancelRequest(request: object): void
function changePasswordSync(keyring: string, original?: string | null, password?: string | null): Result
function createSync(keyringName: string, password?: string | null): Result
function daemonPrepareEnvironmentSync(): Result
function daemonSetDisplaySync(display: string): Result
function deleteSync(keyring: string): Result
function findItemsSync(type: ItemType, attributes: AttributeList): { returnType: Result, found: Found[] }
function findNetworkPasswordSync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): { returnType: Result, results: NetworkPasswordData[] }
function foundListFree(foundList: Found[]): void
function freePassword(password: string): void
function getDefaultKeyringSync(): { returnType: Result, keyring: string }
function getInfoSync(keyring?: string | null): { returnType: Result, info: Info }
function isAvailable(): boolean
function itemAcGetAccessType(ac: AccessControl): AccessType
function itemAcGetDisplayName(ac: AccessControl): string
function itemAcGetPathName(ac: AccessControl): string
function itemAcSetAccessType(ac: AccessControl, value: AccessType): void
function itemAcSetDisplayName(ac: AccessControl, value: string): void
function itemAcSetPathName(ac: AccessControl, value: string): void
function itemCreateSync(keyring: string | null, type: ItemType, displayName: string, attributes: AttributeList, secret: string, updateIfExists: boolean): { returnType: Result, itemId: number }
function itemDeleteSync(keyring: string | null, id: number): Result
function itemGetAclSync(keyring: string | null, id: number): { returnType: Result, acl: AccessControl[] }
function itemGetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
function itemGetInfoFullSync(keyring: string | null, id: number, flags: number): { returnType: Result, info: ItemInfo }
function itemGetInfoSync(keyring: string | null, id: number): { returnType: Result, info: ItemInfo }
function itemGrantAccessRightsSync(keyring: string | null, displayName: string, fullPath: string, id: number, rights: AccessType): Result
function itemSetAclSync(keyring: string | null, id: number, acl: AccessControl[]): Result
function itemSetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
function itemSetInfoSync(keyring: string | null, id: number, info: ItemInfo): Result
function listItemIdsSync(keyring?: string | null): { returnType: Result, ids: number[] }
function listKeyringNamesSync(): { returnType: Result, keyrings: string[] }
function lockAllSync(): Result
function lockSync(keyring?: string | null): Result
function networkPasswordFree(data?: NetworkPasswordData | null): void
function networkPasswordListFree(list: NetworkPasswordData[]): void
function resultToMessage(res: Result): string
function setDefaultKeyringSync(keyring: string): Result
function setInfoSync(keyring: string | null, info: Info): Result
function setNetworkPasswordSync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): { returnType: Result, itemId: number }
function stringListFree(strings: string[]): void
function unlockSync(keyring?: string | null, password?: string | null): Result
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
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
    constructor(application: ApplicationRef, typesAllowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
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
class Found {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.Found */
    keyring: string
    itemId: number
    attributes: AttributeList
    secret: string
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Found */
    copy(): Found
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static listFree(foundList: Found[]): void
}
class Info {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Info */
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
class ItemInfo {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.ItemInfo */
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
class NetworkPasswordData {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.NetworkPasswordData */
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
class PasswordSchema {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchema */
    itemType: ItemType
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