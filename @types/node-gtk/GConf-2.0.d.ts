/**
 * GConf-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GConf {

export enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
export enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
export enum Error {
    SUCCESS,
    FAILED,
    NO_SERVER,
    NO_PERMISSION,
    BAD_ADDRESS,
    BAD_KEY,
    PARSE_ERROR,
    CORRUPT,
    TYPE_MISMATCH,
    IS_DIR,
    IS_KEY,
    OVERRIDDEN,
    OAF_ERROR,
    LOCAL_ENGINE,
    LOCK_FAILED,
    NO_WRITABLE_DATABASE,
    IN_SHUTDOWN,
}
export enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
export enum UnsetFlags {
    NAMES,
}
export function concatDirAndKey(dir: string, key: string): string
export function debugShutdown(): number
export function enumToString(lookupTable: EnumStringPair, enumValue: number): string
export function errorQuark(): GLib.Quark
export function escapeKey(arbitraryText: string, len: number): string
export function init(argc: number, argv: string): boolean
export function isInitialized(): boolean
export function keyIsBelow(above: string, below: string): boolean
export function postinit(app?: object | null, modInfo?: object | null): void
export function preinit(app?: object | null, modInfo?: object | null): void
export function stringToEnum(lookupTable: EnumStringPair, str: string, enumValueRetloc: number): boolean
export function unescapeKey(escapedKey: string, len: number): string
export function uniqueKey(): string
export function validKey(key: string, whyInvalid: string): boolean
export function valueDecode(encoded: string): Value
export interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string, value: Value): void
}
export interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
export interface ClientNotifyFunc {
    (client: Client, cnxnId: number, entry: Entry): void
}
export interface ListenersForeach {
    (location: string, cnxnId: number, listenerData?: object | null): void
}
export interface ListenersPredicate {
    (location: string, cnxnId: number, listenerData?: object | null): boolean
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of GConf.Client */
    object: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GConf.Client */
    addDir(dir: string, preload: ClientPreloadType): void
    allDirs(dir: string): string[]
    allEntries(dir: string): Entry[]
    changeSetFromCurrentv(keys: string): ChangeSet
    clearCache(): void
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    error(error: GLib.Error): void
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notify(key: string): void
    notifyAdd(namespaceSection: string, func: ClientNotifyFunc): number
    notifyRemove(cnxn: number): void
    preload(dirname: string, type: ClientPreloadType): void
    recursiveUnset(key: string, flags: UnsetFlags): boolean
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, val: Value): void
    setBool(key: string, val: boolean): boolean
    setErrorHandling(mode: ClientErrorHandlingMode): void
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    suggestSync(): void
    unreturnedError(error: GLib.Error): void
    unset(key: string): boolean
    valueChanged(key: string, value: Value): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GConf.Client */
    vfuncError(error: GLib.Error): void
    vfuncUnreturnedError(error: GLib.Error): void
    vfuncValueChanged(key: string, value: Value): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GConf.Client */
    connect(sigName: "error", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "error", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "error", object?: object | null): void
    on(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unreturned-error", callback: (($obj: Client, object?: object | null) => void)): number
    connect_after(sigName: "unreturned-error", callback: (($obj: Client, object?: object | null) => void)): number
    emit(sigName: "unreturned-error", object?: object | null): void
    on(sigName: "unreturned-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unreturned-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unreturned-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "value-changed", callback: (($obj: Client, object: string, p0?: object | null) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Client, object: string, p0?: object | null) => void)): number
    emit(sigName: "value-changed", object: string, p0?: object | null): void
    on(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Client
    static $gtype: GObject.Type
}
export class ChangeSet {
    /* Methods of GConf.ChangeSet */
    checkValue(key: string, valueRetloc: Value): boolean
    clear(): void
    foreach(func: ChangeSetForeachFunc): void
    ref(): ChangeSet
    remove(key: string): void
    set(key: string, value: Value): void
    setBool(key: string, val: boolean): void
    setFloat(key: string, val: number): void
    setInt(key: string, val: number): void
    setNocopy(key: string, value: Value): void
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): void
    setString(key: string, val: string): void
    size(): number
    unref(): void
    unset(key: string): void
    static name: string
    static new(): ChangeSet
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ChangeSet
}
export abstract class ClientClass {
    /* Fields of GConf.ClientClass */
    parentClass: GObject.ObjectClass
    valueChanged: (client: Client, key: string, value: Value) => void
    unreturnedError: (client: Client, error: GLib.Error) => void
    error: (client: Client, error: GLib.Error) => void
    pad1: GLib.Func
    pad2: GLib.Func
    pad3: GLib.Func
    static name: string
}
export class Engine {
    /* Methods of GConf.Engine */
    allDirs(dir: string): string[]
    allEntries(dir: string): Entry[]
    associateSchema(key: string, schemaKey: string): boolean
    changeSetFromCurrent(err: GLib.Error, firstKey: string, ...args: any): ChangeSet
    changeSetFromCurrentv(keys: string): ChangeSet
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getFull(key: string, locale: string, useSchemaDefault: boolean, isDefaultP: boolean, isWritableP: boolean): Value
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getUserData(): object | null
    getWithLocale(key: string, locale: string): Value
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notifyRemove(cnxn: number): void
    ref(): void
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, value: Value): boolean
    setBool(key: string, val: boolean): boolean
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setList(key: string, listType: ValueType, list: object[]): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    setUserData(data: object | null, dnotify: GLib.DestroyNotify): void
    suggestSync(): void
    unref(): void
    unset(key: string): boolean
    static name: string
}
export class Entry {
    /* Fields of GConf.Entry */
    key: string
    value: Value
    /* Methods of GConf.Entry */
    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    getIsDefault(): boolean
    getIsWritable(): boolean
    getKey(): string
    getSchemaName(): string
    getValue(): Value
    ref(): Entry
    setIsDefault(isDefault: boolean): void
    setIsWritable(isWritable: boolean): void
    setSchemaName(name: string): void
    setValue(val: Value): void
    setValueNocopy(val: Value): void
    stealValue(): Value
    unref(): void
    static name: string
    static new(key: string, val: Value): Entry
    constructor(key: string, val: Value)
    /* Static methods and pseudo-constructors */
    static new(key: string, val: Value): Entry
    static newNocopy(key: string, val: Value): Entry
}
export class EnumStringPair {
    /* Fields of GConf.EnumStringPair */
    enumValue: number
    str: string
    static name: string
}
export class Listeners {
    /* Methods of GConf.Listeners */
    add(listenPoint: string, listenerData: object | null, destroyNotify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    getData(cnxnId: number, listenerDataP: object | null, locationP: string): boolean
    notify(allAbove: string, callback: any): void
    remove(cnxnId: number): void
    removeIf(predicate: ListenersPredicate): void
    static name: string
}
export class MetaInfo {
    /* Fields of GConf.MetaInfo */
    schema: string
    modUser: string
    modTime: GLib.Time
    /* Methods of GConf.MetaInfo */
    free(): void
    getModUser(): string
    getSchema(): string
    setModTime(modTime: GLib.Time): void
    setModUser(modUser: string): void
    setSchema(schemaName: string): void
    static name: string
}
export class Schema {
    /* Methods of GConf.Schema */
    free(): void
    getCarType(): ValueType
    getCdrType(): ValueType
    getDefaultValue(): Value
    getListType(): ValueType
    getLocale(): string
    getLongDesc(): string
    getOwner(): string
    getShortDesc(): string
    getType(): ValueType
    setCarType(type: ValueType): void
    setCdrType(type: ValueType): void
    setDefaultValue(val: Value): void
    setDefaultValueNocopy(val: Value): void
    setListType(type: ValueType): void
    setLocale(locale: string): void
    setLongDesc(desc: string): void
    setOwner(owner: string): void
    setShortDesc(desc: string): void
    setType(type: ValueType): void
    static name: string
}
export class Value {
    /* Fields of GConf.Value */
    type: ValueType
    /* Methods of GConf.Value */
    compare(valueB: Value): number
    copy(): Value
    encode(): string
    free(): void
    getBool(): boolean
    getCar(): Value
    getCdr(): Value
    getFloat(): number
    getInt(): number
    getList(): Value[]
    getListType(): ValueType
    getString(): string
    setBool(theBool: boolean): void
    setCar(car: Value): void
    setCarNocopy(car: Value): void
    setCdr(cdr: Value): void
    setCdrNocopy(cdr: Value): void
    setFloat(theFloat: number): void
    setInt(theInt: number): void
    setListType(type: ValueType): void
    setString(theStr: string): void
    toString(): string
    static name: string
    static new(type: ValueType): Value
    constructor(type: ValueType)
    /* Static methods and pseudo-constructors */
    static new(type: ValueType): Value
    static newFromString(type: ValueType, str: string): Value
    static decode(encoded: string): Value
}
}