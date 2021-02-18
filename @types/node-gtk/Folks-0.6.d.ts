/**
 * Folks-0.6
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { Gee } from './Gee-0.8';

export declare namespace Folks {

export enum Gender {
    UNSPECIFIED,
    MALE,
    FEMALE,
}
export enum TrustLevel {
    NONE,
    PERSONAS,
}
export enum PersonaStoreTrust {
    NONE,
    PARTIAL,
    FULL,
}
export enum PersonaDetail {
    INVALID,
    ALIAS,
    AVATAR,
    BIRTHDAY,
    EMAIL_ADDRESSES,
    FULL_NAME,
    GENDER,
    IM_ADDRESSES,
    IS_FAVOURITE,
    LOCAL_IDS,
    LOCATION,
    NICKNAME,
    NOTES,
    PHONE_NUMBERS,
    POSTAL_ADDRESSES,
    ROLES,
    STRUCTURED_NAME,
    URLS,
    WEB_SERVICE_ADDRESSES,
    GROUPS,
    IM_INTERACTION_COUNT,
    LAST_IM_INTERACTION_DATETIME,
    CALL_INTERACTION_COUNT,
    LAST_CALL_INTERACTION_DATETIME,
    ANTI_LINKS,
    EXTENDED_INFO,
}
export enum MatchResult {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    MIN,
    MAX,
}
export enum PresenceType {
    UNSET,
    OFFLINE,
    AVAILABLE,
    AWAY,
    EXTENDED_AWAY,
    HIDDEN,
    BUSY,
    UNKNOWN,
    ERROR,
}
export enum MaybeBool {
    UNSET,
    FALSE,
    TRUE,
}
export enum ImDetailsError {
    INVALID_IM_ADDRESS,
}
export enum IndividualAggregatorError {
    ADD_FAILED,
    NO_WRITEABLE_STORE,
    STORE_OFFLINE,
    PROPERTY_NOT_WRITEABLE,
    NO_PRIMARY_STORE,
}
export enum PersonaStoreError {
    INVALID_ARGUMENT,
    CREATE_FAILED,
    UNSUPPORTED_ON_USER,
    STORE_OFFLINE,
    READ_ONLY,
    PERMISSION_DENIED,
    REMOVE_FAILED,
    UNSUPPORTED_ON_NON_USER,
}
export enum PropertyError {
    NOT_WRITEABLE,
    INVALID_VALUE,
    UNKNOWN_ERROR,
    UNAVAILABLE,
}
export enum GroupDetailsChangeReason {
    NONE,
    OFFLINE,
    KICKED,
    BUSY,
    INVITED,
    BANNED,
    ERROR,
    INVALID_MEMBER,
    NO_ANSWER,
    RENAMED,
    PERMISSION_DENIED,
    SEPARATED,
}
export interface AliasDetails_ConstructProps extends GObject.Object_ConstructProps {
    alias?: string
}
export class AliasDetails {
    /* Properties of Folks.AliasDetails */
    alias: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AliasDetails */
    changeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    changeAliasFinish(res: Gio.AsyncResult): void
    getAlias(): string
    setAlias(value: string): void
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
    /* Virtual methods of Folks.AliasDetails */
    vfuncChangeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeAliasFinish(res: Gio.AsyncResult): void
    vfuncGetAlias(): string
    vfuncSetAlias(value: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AliasDetails_ConstructProps)
    _init (config?: AliasDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AntiLinkable_ConstructProps extends Persona_ConstructProps {
    antiLinks?: Gee.Set
}
export class AntiLinkable {
    /* Properties of Folks.AntiLinkable */
    antiLinks: Gee.Set
    /* Properties of Folks.Persona */
    individual: Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AntiLinkable */
    changeAntiLinks(antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeAntiLinksFinish(res: Gio.AsyncResult): void
    hasAntiLinkWithPersona(otherPersona: Persona): boolean
    addAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    addAntiLinksFinish(res: Gio.AsyncResult): void
    removeAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    removeAntiLinksFinish(res: Gio.AsyncResult): void
    addGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    addGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    removeGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    removeGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    hasGlobalAntiLink(): boolean
    getAntiLinks(): Gee.Set
    setAntiLinks(value: Gee.Set): void
    /* Methods of Folks.Persona */
    linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): PersonaStore
    getIndividual(): Individual | null
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]
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
    /* Virtual methods of Folks.AntiLinkable */
    vfuncChangeAntiLinks(antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeAntiLinksFinish(res: Gio.AsyncResult): void
    vfuncGetAntiLinks(): Gee.Set
    vfuncSetAntiLinks(value: Gee.Set): void
    /* Virtual methods of Folks.Persona */
    vfuncLinkablePropertyToLinks(propName: string, callback: any): void
    vfuncGetLinkableProperties(): string[]
    vfuncGetWriteableProperties(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AntiLinkable_ConstructProps)
    _init (config?: AntiLinkable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AvatarDetails_ConstructProps extends GObject.Object_ConstructProps {
    avatar?: Gio.LoadableIcon
}
export class AvatarDetails {
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AvatarDetails */
    changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value?: Gio.LoadableIcon | null): void
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
    /* Virtual methods of Folks.AvatarDetails */
    vfuncChangeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeAvatarFinish(res: Gio.AsyncResult): void
    vfuncGetAvatar(): Gio.LoadableIcon | null
    vfuncSetAvatar(value?: Gio.LoadableIcon | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AvatarDetails_ConstructProps)
    _init (config?: AvatarDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BirthdayDetails_ConstructProps extends GObject.Object_ConstructProps {
    birthday?: GLib.DateTime
    calendarEventId?: string
}
export class BirthdayDetails {
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendarEventId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.BirthdayDetails */
    changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value?: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value?: string | null): void
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
    /* Virtual methods of Folks.BirthdayDetails */
    vfuncChangeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeBirthdayFinish(res: Gio.AsyncResult): void
    vfuncChangeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeCalendarEventIdFinish(res: Gio.AsyncResult): void
    vfuncGetBirthday(): GLib.DateTime | null
    vfuncSetBirthday(value?: GLib.DateTime | null): void
    vfuncGetCalendarEventId(): string | null
    vfuncSetCalendarEventId(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BirthdayDetails_ConstructProps)
    _init (config?: BirthdayDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EmailDetails_ConstructProps extends GObject.Object_ConstructProps {
    emailAddresses?: Gee.Set
}
export class EmailDetails {
    /* Properties of Folks.EmailDetails */
    emailAddresses: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.EmailDetails */
    changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void
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
    /* Virtual methods of Folks.EmailDetails */
    vfuncChangeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeEmailAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetEmailAddresses(): Gee.Set
    vfuncSetEmailAddresses(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EmailDetails_ConstructProps)
    _init (config?: EmailDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtendedInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class ExtendedInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.ExtendedInfo */
    getExtendedField(name: string): ExtendedFieldDetails | null
    changeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    changeExtendedFieldFinish(res: Gio.AsyncResult): void
    removeExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    removeExtendedFieldFinish(res: Gio.AsyncResult): void
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
    /* Virtual methods of Folks.ExtendedInfo */
    vfuncGetExtendedField(name: string): ExtendedFieldDetails | null
    vfuncChangeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeExtendedFieldFinish(res: Gio.AsyncResult): void
    vfuncRemoveExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoveExtendedFieldFinish(res: Gio.AsyncResult): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtendedInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtendedInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ExtendedInfo_ConstructProps)
    _init (config?: ExtendedInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FavouriteDetails_ConstructProps extends GObject.Object_ConstructProps {
    isFavourite?: boolean
}
export class FavouriteDetails {
    /* Properties of Folks.FavouriteDetails */
    isFavourite: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.FavouriteDetails */
    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void
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
    /* Virtual methods of Folks.FavouriteDetails */
    vfuncChangeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeIsFavouriteFinish(res: Gio.AsyncResult): void
    vfuncGetIsFavourite(): boolean
    vfuncSetIsFavourite(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FavouriteDetails_ConstructProps)
    _init (config?: FavouriteDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GenderDetails_ConstructProps extends GObject.Object_ConstructProps {
    gender?: Gender
}
export class GenderDetails {
    /* Properties of Folks.GenderDetails */
    gender: Gender
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.GenderDetails */
    changeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    changeGenderFinish(res: Gio.AsyncResult): void
    getGender(): Gender
    setGender(value: Gender): void
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
    /* Virtual methods of Folks.GenderDetails */
    vfuncChangeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGenderFinish(res: Gio.AsyncResult): void
    vfuncGetGender(): Gender
    vfuncSetGender(value: Gender): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GenderDetails_ConstructProps)
    _init (config?: GenderDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GroupDetails_ConstructProps extends GObject.Object_ConstructProps {
    groups?: Gee.Set
}
export class GroupDetails {
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.GroupDetails */
    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void
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
    /* Virtual methods of Folks.GroupDetails */
    vfuncChangeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupFinish(res: Gio.AsyncResult): void
    vfuncChangeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupsFinish(res: Gio.AsyncResult): void
    vfuncGetGroups(): Gee.Set
    vfuncSetGroups(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: GroupDetails, group: string, isMember: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: GroupDetails, group: string, isMember: boolean) => void)): number
    emit(sigName: "group-changed", group: string, isMember: boolean): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GroupDetails_ConstructProps)
    _init (config?: GroupDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ImDetails_ConstructProps extends GObject.Object_ConstructProps {
    imAddresses?: Gee.MultiMap
}
export class ImDetails {
    /* Properties of Folks.ImDetails */
    imAddresses: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.ImDetails */
    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.ImDetails */
    vfuncChangeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeImAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetImAddresses(): Gee.MultiMap
    vfuncSetImAddresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImDetails_ConstructProps)
    _init (config?: ImDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static normaliseImAddress(imAddress: string, protocol: string): string
    static $gtype: GObject.Type
}
export interface InteractionDetails_ConstructProps extends GObject.Object_ConstructProps {
}
export class InteractionDetails {
    /* Properties of Folks.InteractionDetails */
    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.InteractionDetails */
    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null
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
    /* Virtual methods of Folks.InteractionDetails */
    vfuncGetImInteractionCount(): number
    vfuncGetLastImInteractionDatetime(): GLib.DateTime | null
    vfuncGetCallInteractionCount(): number
    vfuncGetLastCallInteractionDatetime(): GLib.DateTime | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InteractionDetails_ConstructProps)
    _init (config?: InteractionDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocalIdDetails_ConstructProps extends GObject.Object_ConstructProps {
    localIds?: Gee.Set
}
export class LocalIdDetails {
    /* Properties of Folks.LocalIdDetails */
    localIds: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.LocalIdDetails */
    changeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeLocalIdsFinish(res: Gio.AsyncResult): void
    getLocalIds(): Gee.Set
    setLocalIds(value: Gee.Set): void
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
    /* Virtual methods of Folks.LocalIdDetails */
    vfuncChangeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeLocalIdsFinish(res: Gio.AsyncResult): void
    vfuncGetLocalIds(): Gee.Set
    vfuncSetLocalIds(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocalIdDetails_ConstructProps)
    _init (config?: LocalIdDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocationDetails_ConstructProps extends GObject.Object_ConstructProps {
    location?: Location
}
export class LocationDetails {
    /* Properties of Folks.LocationDetails */
    location: Location
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.LocationDetails */
    changeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    changeLocationFinish(res: Gio.AsyncResult): void
    getLocation(): Location | null
    setLocation(value?: Location | null): void
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
    /* Virtual methods of Folks.LocationDetails */
    vfuncChangeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeLocationFinish(res: Gio.AsyncResult): void
    vfuncGetLocation(): Location | null
    vfuncSetLocation(value?: Location | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationDetails_ConstructProps)
    _init (config?: LocationDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NameDetails_ConstructProps extends GObject.Object_ConstructProps {
    structuredName?: StructuredName
    fullName?: string
    nickname?: string
}
export class NameDetails {
    /* Properties of Folks.NameDetails */
    structuredName: StructuredName
    fullName: string
    nickname: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.NameDetails */
    changeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): StructuredName | null
    setStructuredName(value?: StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void
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
    /* Virtual methods of Folks.NameDetails */
    vfuncChangeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeStructuredNameFinish(res: Gio.AsyncResult): void
    vfuncChangeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeFullNameFinish(res: Gio.AsyncResult): void
    vfuncChangeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeNicknameFinish(res: Gio.AsyncResult): void
    vfuncGetStructuredName(): StructuredName | null
    vfuncSetStructuredName(value?: StructuredName | null): void
    vfuncGetFullName(): string
    vfuncSetFullName(value: string): void
    vfuncGetNickname(): string
    vfuncSetNickname(value: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NameDetails_ConstructProps)
    _init (config?: NameDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NoteDetails_ConstructProps extends GObject.Object_ConstructProps {
    notes?: Gee.Set
}
export class NoteDetails {
    /* Properties of Folks.NoteDetails */
    notes: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.NoteDetails */
    changeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeNotesFinish(res: Gio.AsyncResult): void
    getNotes(): Gee.Set
    setNotes(value: Gee.Set): void
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
    /* Virtual methods of Folks.NoteDetails */
    vfuncChangeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeNotesFinish(res: Gio.AsyncResult): void
    vfuncGetNotes(): Gee.Set
    vfuncSetNotes(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoteDetails_ConstructProps)
    _init (config?: NoteDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PhoneDetails_ConstructProps extends GObject.Object_ConstructProps {
    phoneNumbers?: Gee.Set
}
export class PhoneDetails {
    /* Properties of Folks.PhoneDetails */
    phoneNumbers: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PhoneDetails */
    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void
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
    /* Virtual methods of Folks.PhoneDetails */
    vfuncChangePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangePhoneNumbersFinish(res: Gio.AsyncResult): void
    vfuncGetPhoneNumbers(): Gee.Set
    vfuncSetPhoneNumbers(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhoneDetails_ConstructProps)
    _init (config?: PhoneDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PostalAddressDetails_ConstructProps extends GObject.Object_ConstructProps {
    postalAddresses?: Gee.Set
}
export class PostalAddressDetails {
    /* Properties of Folks.PostalAddressDetails */
    postalAddresses: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PostalAddressDetails */
    changePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePostalAddressesFinish(res: Gio.AsyncResult): void
    getPostalAddresses(): Gee.Set
    setPostalAddresses(value: Gee.Set): void
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
    /* Virtual methods of Folks.PostalAddressDetails */
    vfuncChangePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangePostalAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetPostalAddresses(): Gee.Set
    vfuncSetPostalAddresses(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PostalAddressDetails_ConstructProps)
    _init (config?: PostalAddressDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PresenceDetails_ConstructProps extends GObject.Object_ConstructProps {
    presenceType?: PresenceType
    presenceMessage?: string
    clientTypes?: string[]
    presenceStatus?: string
}
export class PresenceDetails {
    /* Properties of Folks.PresenceDetails */
    presenceType: PresenceType
    presenceMessage: string
    clientTypes: string[]
    presenceStatus: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PresenceDetails */
    isOnline(): boolean
    getPresenceType(): PresenceType
    setPresenceType(value: PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void
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
    /* Virtual methods of Folks.PresenceDetails */
    vfuncGetPresenceType(): PresenceType
    vfuncSetPresenceType(value: PresenceType): void
    vfuncGetPresenceMessage(): string
    vfuncSetPresenceMessage(value: string): void
    vfuncGetClientTypes(): string[]
    vfuncSetClientTypes(value: string[]): void
    vfuncGetPresenceStatus(): string
    vfuncSetPresenceStatus(value: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PresenceDetails_ConstructProps)
    _init (config?: PresenceDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefaultMessageFromType(type: PresenceType): string
    static typecmp(typeA: PresenceType, typeB: PresenceType): number
    static $gtype: GObject.Type
}
export interface RoleDetails_ConstructProps extends GObject.Object_ConstructProps {
    roles?: Gee.Set
}
export class RoleDetails {
    /* Properties of Folks.RoleDetails */
    roles: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.RoleDetails */
    changeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeRolesFinish(res: Gio.AsyncResult): void
    getRoles(): Gee.Set
    setRoles(value: Gee.Set): void
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
    /* Virtual methods of Folks.RoleDetails */
    vfuncChangeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeRolesFinish(res: Gio.AsyncResult): void
    vfuncGetRoles(): Gee.Set
    vfuncSetRoles(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RoleDetails_ConstructProps)
    _init (config?: RoleDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UrlDetails_ConstructProps extends GObject.Object_ConstructProps {
    urls?: Gee.Set
}
export class UrlDetails {
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.UrlDetails */
    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void
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
    /* Virtual methods of Folks.UrlDetails */
    vfuncChangeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeUrlsFinish(res: Gio.AsyncResult): void
    vfuncGetUrls(): Gee.Set
    vfuncSetUrls(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UrlDetails_ConstructProps)
    _init (config?: UrlDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebServiceDetails_ConstructProps extends GObject.Object_ConstructProps {
    webServiceAddresses?: Gee.MultiMap
}
export class WebServiceDetails {
    /* Properties of Folks.WebServiceDetails */
    webServiceAddresses: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.WebServiceDetails */
    changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    getWebServiceAddresses(): Gee.MultiMap
    setWebServiceAddresses(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.WebServiceDetails */
    vfuncChangeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetWebServiceAddresses(): Gee.MultiMap
    vfuncSetWebServiceAddresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebServiceDetails_ConstructProps)
    _init (config?: WebServiceDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractFieldDetails_ConstructProps extends GObject.Object_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    value?: object
    id?: string
    parameters?: Gee.MultiMap
}
export class AbstractFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractFieldDetails_ConstructProps)
    _init (config?: AbstractFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static equalStatic(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hashStatic(value: AbstractFieldDetails): number
    static $gtype: GObject.Type
}
export interface AvatarCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class AvatarCache {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AvatarCache */
    loadAvatar(id: string, callback?: Gio.AsyncReadyCallback | null): void
    loadAvatarFinish(res: Gio.AsyncResult): Gio.LoadableIcon | null
    storeAvatar(id: string, avatar: Gio.LoadableIcon, callback?: Gio.AsyncReadyCallback | null): void
    storeAvatarFinish(res: Gio.AsyncResult): string
    removeAvatar(id: string, callback?: Gio.AsyncReadyCallback | null): void
    removeAvatarFinish(res: Gio.AsyncResult): void
    buildUriForAvatar(id: string): string
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AvatarCache_ConstructProps)
    _init (config?: AvatarCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): AvatarCache
    static $gtype: GObject.Type
}
export interface BackendStore_ConstructProps extends GObject.Object_ConstructProps {
    enabledBackends?: Gee.Map
    isPrepared?: boolean
}
export class BackendStore {
    /* Properties of Folks.BackendStore */
    enabledBackends: Gee.Map
    isPrepared: boolean
    /* Fields of Folks.BackendStore */
    folksBackendStoreKEYFILEGROUPALLOTHERS: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.BackendStore */
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    loadBackends(callback?: Gio.AsyncReadyCallback | null): void
    loadBackendsFinish(res: Gio.AsyncResult): void
    addBackend(backend: Backend): void
    dupBackendByName(name: string): Backend | null
    listBackends(): Gee.Collection
    enableBackend(name: string, callback?: Gio.AsyncReadyCallback | null): void
    enableBackendFinish(res: Gio.AsyncResult): void
    disableBackend(name: string, callback?: Gio.AsyncReadyCallback | null): void
    disableBackendFinish(res: Gio.AsyncResult): void
    getEnabledBackends(): Gee.Map
    getIsPrepared(): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.BackendStore */
    connect(sigName: "backend-available", callback: (($obj: BackendStore, backend: Backend) => void)): number
    connect_after(sigName: "backend-available", callback: (($obj: BackendStore, backend: Backend) => void)): number
    emit(sigName: "backend-available", backend: Backend): void
    on(sigName: "backend-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "backend-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "backend-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled-backends", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled-backends", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled-backends", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BackendStore_ConstructProps)
    _init (config?: BackendStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): BackendStore
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Properties of Folks.Backend */
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly name: string
    readonly personaStores: Gee.Map
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Backend */
    disablePersonaStore(store: PersonaStore): void
    enablePersonaStore(store: PersonaStore): void
    setPersonaStores(storeids?: Gee.Set | null): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getName(): string
    getPersonaStores(): Gee.Map
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
    /* Virtual methods of Folks.Backend */
    vfuncDisablePersonaStore(store: PersonaStore): void
    vfuncEnablePersonaStore(store: PersonaStore): void
    vfuncSetPersonaStores(storeids?: Gee.Set | null): void
    vfuncPrepare(callback?: Gio.AsyncReadyCallback | null): void
    vfuncPrepareFinish(res: Gio.AsyncResult): void
    vfuncUnprepare(callback?: Gio.AsyncReadyCallback | null): void
    vfuncUnprepareFinish(res: Gio.AsyncResult): void
    vfuncGetIsPrepared(): boolean
    vfuncGetIsQuiescent(): boolean
    vfuncGetName(): string
    vfuncGetPersonaStores(): Gee.Map
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Backend */
    connect(sigName: "persona-store-added", callback: (($obj: Backend, store: PersonaStore) => void)): number
    connect_after(sigName: "persona-store-added", callback: (($obj: Backend, store: PersonaStore) => void)): number
    emit(sigName: "persona-store-added", store: PersonaStore): void
    on(sigName: "persona-store-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "persona-store-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "persona-store-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "persona-store-removed", callback: (($obj: Backend, store: PersonaStore) => void)): number
    connect_after(sigName: "persona-store-removed", callback: (($obj: Backend, store: PersonaStore) => void)): number
    emit(sigName: "persona-store-removed", store: PersonaStore): void
    on(sigName: "persona-store-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "persona-store-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "persona-store-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persona-stores", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persona-stores", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persona-stores", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Debug_ConstructProps extends GObject.Object_ConstructProps {
    colourEnabled?: boolean
    debugOutputEnabled?: boolean
}
export class Debug {
    /* Properties of Folks.Debug */
    colourEnabled: boolean
    debugOutputEnabled: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Debug */
    emitPrintStatus(): void
    indent(): void
    unindent(): void
    getColourEnabled(): boolean
    setColourEnabled(value: boolean): void
    getDebugOutputEnabled(): boolean
    setDebugOutputEnabled(value: boolean): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Debug */
    connect(sigName: "print-status", callback: (($obj: Debug) => void)): number
    connect_after(sigName: "print-status", callback: (($obj: Debug) => void)): number
    emit(sigName: "print-status"): void
    on(sigName: "print-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "print-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "print-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::colour-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::colour-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::colour-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Debug_ConstructProps)
    _init (config?: Debug_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): Debug
    static dupWithFlags(debugFlags: string | null, colourEnabled: boolean): Debug
    static $gtype: GObject.Type
}
export interface EmailFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class EmailFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EmailFieldDetails_ConstructProps)
    _init (config?: EmailFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails
    static $gtype: GObject.Type
}
export interface ExtendedFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class ExtendedFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtendedFieldDetails_ConstructProps)
    _init (config?: ExtendedFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails
    static $gtype: GObject.Type
}
export interface ImFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class ImFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImFieldDetails_ConstructProps)
    _init (config?: ImFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): ImFieldDetails
    static $gtype: GObject.Type
}
export interface IndividualAggregator_ConstructProps extends GObject.Object_ConstructProps {
    backendStore?: BackendStore
    individuals?: Gee.Map
    user?: Individual
}
export class IndividualAggregator {
    /* Properties of Folks.IndividualAggregator */
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly primaryStore: PersonaStore
    individuals: Gee.Map
    user: Individual
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.IndividualAggregator */
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getPotentialMatches(matchee: Individual, minThreshold: MatchResult): Gee.Map
    getAllPotentialMatches(minThreshold: MatchResult): Gee.Map
    addPersonaFromDetails(parent: Individual | null, personaStore: PersonaStore, details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removeIndividual(individual: Individual, callback?: Gio.AsyncReadyCallback | null): void
    removeIndividualFinish(res: Gio.AsyncResult): void
    removePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    linkPersonas(personas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    linkPersonasFinish(res: Gio.AsyncResult): void
    unlinkIndividual(individual: Individual, callback?: Gio.AsyncReadyCallback | null): void
    unlinkIndividualFinish(res: Gio.AsyncResult): void
    ensureIndividualPropertyWriteable(individual: Individual, propertyName: string, callback?: Gio.AsyncReadyCallback | null): void
    ensureIndividualPropertyWriteableFinish(res: Gio.AsyncResult): Persona
    lookUpIndividual(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookUpIndividualFinish(res: Gio.AsyncResult): Individual | null
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getPrimaryStore(): PersonaStore | null
    getBackendStore(): BackendStore
    getIndividuals(): Gee.Map
    getUser(): Individual | null
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.IndividualAggregator */
    connect(sigName: "individuals-changed", callback: (($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "individuals-changed", callback: (($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    emit(sigName: "individuals-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    on(sigName: "individuals-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "individuals-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "individuals-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "individuals-changed-detailed", callback: (($obj: IndividualAggregator, changes: Gee.MultiMap) => void)): number
    connect_after(sigName: "individuals-changed-detailed", callback: (($obj: IndividualAggregator, changes: Gee.MultiMap) => void)): number
    emit(sigName: "individuals-changed-detailed", changes: Gee.MultiMap): void
    on(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IndividualAggregator_ConstructProps)
    _init (config?: IndividualAggregator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndividualAggregator
    static withBackendStore(store: BackendStore): IndividualAggregator
    static dup(): IndividualAggregator
    static dupWithBackendStore(store: BackendStore): IndividualAggregator | null
    static $gtype: GObject.Type
}
export interface Individual_ConstructProps extends GObject.Object_ConstructProps {
    trustLevel?: TrustLevel
    isUser?: boolean
    id?: string
    personas?: Gee.Set
    alias?: string
    avatar?: Gio.LoadableIcon
    birthday?: GLib.DateTime
    calendarEventId?: string
    emailAddresses?: Gee.Set
    isFavourite?: boolean
    gender?: Gender
    groups?: Gee.Set
    imAddresses?: Gee.MultiMap
    localIds?: Gee.Set
    location?: Location
    structuredName?: StructuredName
    fullName?: string
    nickname?: string
    notes?: Gee.Set
    presenceType?: PresenceType
    presenceMessage?: string
    clientTypes?: string[]
    presenceStatus?: string
    phoneNumbers?: Gee.Set
    postalAddresses?: Gee.Set
    roles?: Gee.Set
    urls?: Gee.Set
    webServiceAddresses?: Gee.MultiMap
}
export class Individual {
    /* Properties of Folks.Individual */
    trustLevel: TrustLevel
    isUser: boolean
    id: string
    readonly displayName: string
    personas: Gee.Set
    /* Properties of Folks.AliasDetails */
    alias: string
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendarEventId: string
    /* Properties of Folks.EmailDetails */
    emailAddresses: Gee.Set
    /* Properties of Folks.FavouriteDetails */
    isFavourite: boolean
    /* Properties of Folks.GenderDetails */
    gender: Gender
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks.ImDetails */
    imAddresses: Gee.MultiMap
    /* Properties of Folks.InteractionDetails */
    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime
    /* Properties of Folks.LocalIdDetails */
    localIds: Gee.Set
    /* Properties of Folks.LocationDetails */
    location: Location
    /* Properties of Folks.NameDetails */
    structuredName: StructuredName
    fullName: string
    nickname: string
    /* Properties of Folks.NoteDetails */
    notes: Gee.Set
    /* Properties of Folks.PresenceDetails */
    presenceType: PresenceType
    presenceMessage: string
    clientTypes: string[]
    presenceStatus: string
    /* Properties of Folks.PhoneDetails */
    phoneNumbers: Gee.Set
    /* Properties of Folks.PostalAddressDetails */
    postalAddresses: Gee.Set
    /* Properties of Folks.RoleDetails */
    roles: Gee.Set
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Properties of Folks.WebServiceDetails */
    webServiceAddresses: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Individual */
    hasAntiLinkWithPersona(p: Persona): boolean
    hasAntiLinkWithIndividual(i: Individual): boolean
    getTrustLevel(): TrustLevel
    getIsUser(): boolean
    getId(): string
    getDisplayName(): string
    getPersonas(): Gee.Set
    setPersonas(value: Gee.Set): void
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
    /* Methods of Folks.AliasDetails */
    changeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    changeAliasFinish(res: Gio.AsyncResult): void
    getAlias(): string
    setAlias(value: string): void
    /* Methods of Folks.AvatarDetails */
    changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks.BirthdayDetails */
    changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value?: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value?: string | null): void
    /* Methods of Folks.EmailDetails */
    changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void
    /* Methods of Folks.ExtendedInfo */
    getExtendedField(name: string): ExtendedFieldDetails | null
    changeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    changeExtendedFieldFinish(res: Gio.AsyncResult): void
    removeExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    removeExtendedFieldFinish(res: Gio.AsyncResult): void
    /* Methods of Folks.FavouriteDetails */
    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void
    /* Methods of Folks.GenderDetails */
    changeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    changeGenderFinish(res: Gio.AsyncResult): void
    getGender(): Gender
    setGender(value: Gender): void
    /* Methods of Folks.GroupDetails */
    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void
    /* Methods of Folks.ImDetails */
    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void
    /* Methods of Folks.InteractionDetails */
    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null
    /* Methods of Folks.LocalIdDetails */
    changeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeLocalIdsFinish(res: Gio.AsyncResult): void
    getLocalIds(): Gee.Set
    setLocalIds(value: Gee.Set): void
    /* Methods of Folks.LocationDetails */
    changeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    changeLocationFinish(res: Gio.AsyncResult): void
    getLocation(): Location | null
    setLocation(value?: Location | null): void
    /* Methods of Folks.NameDetails */
    changeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): StructuredName | null
    setStructuredName(value?: StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void
    /* Methods of Folks.NoteDetails */
    changeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeNotesFinish(res: Gio.AsyncResult): void
    getNotes(): Gee.Set
    setNotes(value: Gee.Set): void
    /* Methods of Folks.PresenceDetails */
    isOnline(): boolean
    getPresenceType(): PresenceType
    setPresenceType(value: PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void
    /* Methods of Folks.PhoneDetails */
    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void
    /* Methods of Folks.PostalAddressDetails */
    changePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePostalAddressesFinish(res: Gio.AsyncResult): void
    getPostalAddresses(): Gee.Set
    setPostalAddresses(value: Gee.Set): void
    /* Methods of Folks.RoleDetails */
    changeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeRolesFinish(res: Gio.AsyncResult): void
    getRoles(): Gee.Set
    setRoles(value: Gee.Set): void
    /* Methods of Folks.UrlDetails */
    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void
    /* Methods of Folks.WebServiceDetails */
    changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    getWebServiceAddresses(): Gee.MultiMap
    setWebServiceAddresses(value: Gee.MultiMap): void
    /* Virtual methods of Folks.Individual */
    vfuncChangeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeAliasFinish(res: Gio.AsyncResult): void
    vfuncGetAlias(): string
    vfuncSetAlias(value: string): void
    vfuncChangeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeAvatarFinish(res: Gio.AsyncResult): void
    vfuncGetAvatar(): Gio.LoadableIcon | null
    vfuncSetAvatar(value?: Gio.LoadableIcon | null): void
    vfuncChangeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeBirthdayFinish(res: Gio.AsyncResult): void
    vfuncChangeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeCalendarEventIdFinish(res: Gio.AsyncResult): void
    vfuncGetBirthday(): GLib.DateTime | null
    vfuncSetBirthday(value?: GLib.DateTime | null): void
    vfuncGetCalendarEventId(): string | null
    vfuncSetCalendarEventId(value?: string | null): void
    vfuncChangeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeEmailAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetEmailAddresses(): Gee.Set
    vfuncSetEmailAddresses(value: Gee.Set): void
    vfuncGetExtendedField(name: string): ExtendedFieldDetails | null
    vfuncChangeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeExtendedFieldFinish(res: Gio.AsyncResult): void
    vfuncRemoveExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemoveExtendedFieldFinish(res: Gio.AsyncResult): void
    vfuncChangeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeIsFavouriteFinish(res: Gio.AsyncResult): void
    vfuncGetIsFavourite(): boolean
    vfuncSetIsFavourite(value: boolean): void
    vfuncChangeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGenderFinish(res: Gio.AsyncResult): void
    vfuncGetGender(): Gender
    vfuncSetGender(value: Gender): void
    vfuncChangeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupFinish(res: Gio.AsyncResult): void
    vfuncChangeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupsFinish(res: Gio.AsyncResult): void
    vfuncGetGroups(): Gee.Set
    vfuncSetGroups(value: Gee.Set): void
    vfuncChangeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeImAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetImAddresses(): Gee.MultiMap
    vfuncSetImAddresses(value: Gee.MultiMap): void
    vfuncGetImInteractionCount(): number
    vfuncGetLastImInteractionDatetime(): GLib.DateTime | null
    vfuncGetCallInteractionCount(): number
    vfuncGetLastCallInteractionDatetime(): GLib.DateTime | null
    vfuncChangeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeLocalIdsFinish(res: Gio.AsyncResult): void
    vfuncGetLocalIds(): Gee.Set
    vfuncSetLocalIds(value: Gee.Set): void
    vfuncChangeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeLocationFinish(res: Gio.AsyncResult): void
    vfuncGetLocation(): Location | null
    vfuncSetLocation(value?: Location | null): void
    vfuncChangeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeStructuredNameFinish(res: Gio.AsyncResult): void
    vfuncChangeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeFullNameFinish(res: Gio.AsyncResult): void
    vfuncChangeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeNicknameFinish(res: Gio.AsyncResult): void
    vfuncGetStructuredName(): StructuredName | null
    vfuncSetStructuredName(value?: StructuredName | null): void
    vfuncGetFullName(): string
    vfuncSetFullName(value: string): void
    vfuncGetNickname(): string
    vfuncSetNickname(value: string): void
    vfuncChangeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeNotesFinish(res: Gio.AsyncResult): void
    vfuncGetNotes(): Gee.Set
    vfuncSetNotes(value: Gee.Set): void
    vfuncGetPresenceType(): PresenceType
    vfuncSetPresenceType(value: PresenceType): void
    vfuncGetPresenceMessage(): string
    vfuncSetPresenceMessage(value: string): void
    vfuncGetClientTypes(): string[]
    vfuncSetClientTypes(value: string[]): void
    vfuncGetPresenceStatus(): string
    vfuncSetPresenceStatus(value: string): void
    vfuncChangePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangePhoneNumbersFinish(res: Gio.AsyncResult): void
    vfuncGetPhoneNumbers(): Gee.Set
    vfuncSetPhoneNumbers(value: Gee.Set): void
    vfuncChangePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangePostalAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetPostalAddresses(): Gee.Set
    vfuncSetPostalAddresses(value: Gee.Set): void
    vfuncChangeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeRolesFinish(res: Gio.AsyncResult): void
    vfuncGetRoles(): Gee.Set
    vfuncSetRoles(value: Gee.Set): void
    vfuncChangeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeUrlsFinish(res: Gio.AsyncResult): void
    vfuncGetUrls(): Gee.Set
    vfuncSetUrls(value: Gee.Set): void
    vfuncChangeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetWebServiceAddresses(): Gee.MultiMap
    vfuncSetWebServiceAddresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Individual */
    connect(sigName: "removed", callback: (($obj: Individual, replacementIndividual?: Individual | null) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Individual, replacementIndividual?: Individual | null) => void)): number
    emit(sigName: "removed", replacementIndividual?: Individual | null): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "personas-changed", callback: (($obj: Individual, added: Gee.Set, removed: Gee.Set) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: Individual, added: Gee.Set, removed: Gee.Set) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set): void
    on(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Individual, group: string, isMember: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Individual, group: string, isMember: boolean) => void)): number
    emit(sigName: "group-changed", group: string, isMember: boolean): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Individual_ConstructProps)
    _init (config?: Individual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(personas?: Gee.Set | null): Individual
    static normaliseImAddress(imAddress: string, protocol: string): string
    static getDefaultMessageFromType(type: PresenceType): string
    static typecmp(typeA: PresenceType, typeB: PresenceType): number
    static $gtype: GObject.Type
}
export interface Location_ConstructProps extends GObject.Object_ConstructProps {
}
export class Location {
    /* Fields of Folks.Location */
    latitude: number
    longitude: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Location */
    equal(other: Location): boolean
    equalCoordinates(latitude: number, longitude: number): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number): Location
    static $gtype: GObject.Type
}
export interface StructuredName_ConstructProps extends GObject.Object_ConstructProps {
    familyName?: string
    givenName?: string
    additionalNames?: string
    prefixes?: string
    suffixes?: string
}
export class StructuredName {
    /* Properties of Folks.StructuredName */
    familyName: string
    givenName: string
    additionalNames: string
    prefixes: string
    suffixes: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.StructuredName */
    isEmpty(): boolean
    equal(other: StructuredName): boolean
    toString(): string
    toStringWithFormat(nameFmt: string): string
    getFamilyName(): string
    setFamilyName(value: string): void
    getGivenName(): string
    setGivenName(value: string): void
    getAdditionalNames(): string
    setAdditionalNames(value: string): void
    getPrefixes(): string
    setPrefixes(value: string): void
    getSuffixes(): string
    setSuffixes(value: string): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::additional-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::additional-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::additional-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suffixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suffixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suffixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructuredName_ConstructProps)
    _init (config?: StructuredName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(familyName?: string | null, givenName?: string | null, additionalNames?: string | null, prefixes?: string | null, suffixes?: string | null): StructuredName
    static simple(familyName?: string | null, givenName?: string | null): StructuredName
    static $gtype: GObject.Type
}
export interface NoteFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
    uid?: string
}
export class NoteFieldDetails {
    /* Properties of Folks.NoteFieldDetails */
    uid: string
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.NoteFieldDetails */
    getUid(): string
    setUid(value: string): void
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoteFieldDetails_ConstructProps)
    _init (config?: NoteFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails
    static $gtype: GObject.Type
}
export interface ObjectCache_ConstructProps extends GObject.Object_ConstructProps {
    tType?: GObject.Type
    tDupFunc?: GObject.BoxedCopyFunc
    tDestroyFunc?: GLib.DestroyNotify
    typeId?: string
    id?: string
}
export class ObjectCache {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.ObjectCache */
    getSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    getSerialisedObjectVersion(): number
    serialiseObject(object?: object | null): GLib.Variant
    deserialiseObject(variant: GLib.Variant, objectVersion: number): object | null
    loadObjects(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadObjectsFinish(res: Gio.AsyncResult): Gee.Set | null
    storeObjects(objects: Gee.Set, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeObjectsFinish(res: Gio.AsyncResult): void
    clearCache(callback?: Gio.AsyncReadyCallback | null): void
    clearCacheFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getId(): string
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
    /* Virtual methods of Folks.ObjectCache */
    vfuncGetSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    vfuncGetSerialisedObjectVersion(): number
    vfuncSerialiseObject(object?: object | null): GLib.Variant
    vfuncDeserialiseObject(variant: GLib.Variant, objectVersion: number): object | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ObjectCache_ConstructProps)
    _init (config?: ObjectCache_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PersonaStore_ConstructProps extends GObject.Object_ConstructProps {
    displayName?: string
    id?: string
    isWriteable?: boolean
    trustLevel?: PersonaStoreTrust
    isPrimaryStore?: boolean
    isUserSetDefault?: boolean
}
export class PersonaStore {
    /* Properties of Folks.PersonaStore */
    readonly typeId: string
    readonly personas: Gee.Map
    readonly canAddPersonas: MaybeBool
    readonly canAliasPersonas: MaybeBool
    readonly canGroupPersonas: MaybeBool
    readonly canRemovePersonas: MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PersonaStore */
    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getDisplayName(): string
    getId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): MaybeBool
    getCanAliasPersonas(): MaybeBool
    getCanGroupPersonas(): MaybeBool
    getCanRemovePersonas(): MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): PersonaStoreTrust
    setTrustLevel(value: PersonaStoreTrust): void
    getAlwaysWriteableProperties(): string[]
    getIsPrimaryStore(): boolean
    getIsUserSetDefault(): boolean
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
    /* Virtual methods of Folks.PersonaStore */
    vfuncPrepare(callback?: Gio.AsyncReadyCallback | null): void
    vfuncPrepareFinish(res: Gio.AsyncResult): void
    vfuncFlush(callback?: Gio.AsyncReadyCallback | null): void
    vfuncFlushFinish(res: Gio.AsyncResult): void
    vfuncAddPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    vfuncAddPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    vfuncRemovePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemovePersonaFinish(res: Gio.AsyncResult): void
    vfuncGetTypeId(): string
    vfuncGetPersonas(): Gee.Map
    vfuncGetCanAddPersonas(): MaybeBool
    vfuncGetCanAliasPersonas(): MaybeBool
    vfuncGetCanGroupPersonas(): MaybeBool
    vfuncGetCanRemovePersonas(): MaybeBool
    vfuncGetIsPrepared(): boolean
    vfuncGetIsQuiescent(): boolean
    vfuncGetAlwaysWriteableProperties(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    on(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    emit(sigName: "removed"): void
    on(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static detailKey(detail: PersonaDetail): string | null
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends GObject.Object_ConstructProps {
    iid?: string
    uid?: string
    displayId?: string
    isUser?: boolean
    store?: PersonaStore
    individual?: Individual
}
export class Persona {
    /* Properties of Folks.Persona */
    individual: Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Persona */
    linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): PersonaStore
    getIndividual(): Individual | null
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]
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
    /* Virtual methods of Folks.Persona */
    vfuncLinkablePropertyToLinks(propName: string, callback: any): void
    vfuncGetLinkableProperties(): string[]
    vfuncGetWriteableProperties(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static buildUid(backendName: string, personaStoreId: string, personaId: string): string
    static splitUid(uid: string): [ /* backendName */ string, /* personaStoreId */ string, /* personaId */ string ]
    static $gtype: GObject.Type
}
export interface PhoneFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class PhoneFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PhoneFieldDetails */
    getNormalised(): string
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhoneFieldDetails_ConstructProps)
    _init (config?: PhoneFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails
    static $gtype: GObject.Type
}
export interface PostalAddress_ConstructProps extends GObject.Object_ConstructProps {
    poBox?: string
    extension?: string
    street?: string
    locality?: string
    region?: string
    postalCode?: string
    country?: string
    addressFormat?: string
    uid?: string
}
export class PostalAddress {
    /* Properties of Folks.PostalAddress */
    poBox: string
    extension: string
    street: string
    locality: string
    region: string
    postalCode: string
    country: string
    addressFormat: string
    uid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PostalAddress */
    isEmpty(): boolean
    equal(with_: PostalAddress): boolean
    toString(): string
    getPoBox(): string
    setPoBox(value: string): void
    getExtension(): string
    setExtension(value: string): void
    getStreet(): string
    setStreet(value: string): void
    getLocality(): string
    setLocality(value: string): void
    getRegion(): string
    setRegion(value: string): void
    getPostalCode(): string
    setPostalCode(value: string): void
    getCountry(): string
    setCountry(value: string): void
    getAddressFormat(): string
    setAddressFormat(value: string): void
    getUid(): string
    setUid(value: string): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PostalAddress_ConstructProps)
    _init (config?: PostalAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(poBox?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postalCode?: string | null, country?: string | null, addressFormat?: string | null, uid?: string | null): PostalAddress
    static $gtype: GObject.Type
}
export interface PostalAddressFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class PostalAddressFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PostalAddressFieldDetails_ConstructProps)
    _init (config?: PostalAddressFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails
    static $gtype: GObject.Type
}
export interface PotentialMatch_ConstructProps extends GObject.Object_ConstructProps {
}
export class PotentialMatch {
    /* Fields of Folks.PotentialMatch */
    folksPotentialMatchKnownEmailAliases: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.PotentialMatch */
    potentialMatch(a: Individual, b: Individual): MatchResult
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PotentialMatch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PotentialMatch, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: PotentialMatch_ConstructProps)
    _init (config?: PotentialMatch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PotentialMatch
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
    matchFields?: string[]
}
export class Query {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Query */
    isMatch(individual: Individual): number
    getMatchFields(): string[]
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
    /* Virtual methods of Folks.Query */
    vfuncIsMatch(individual: Individual): number
    vfuncGetMatchFields(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Role_ConstructProps extends GObject.Object_ConstructProps {
    organisationName?: string
    title?: string
    role?: string
    uid?: string
}
export class Role {
    /* Properties of Folks.Role */
    organisationName: string
    title: string
    role: string
    uid: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.Role */
    isEmpty(): boolean
    toString(): string
    getOrganisationName(): string
    setOrganisationName(value: string): void
    getTitle(): string
    setTitle(value: string): void
    getRole(): string
    setRole(value: string): void
    getUid(): string
    setUid(value: string): void
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::organisation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::organisation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::organisation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Role_ConstructProps)
    _init (config?: Role_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title?: string | null, organisationName?: string | null, uid?: string | null): Role
    static equal(a: Role, b: Role): boolean
    static hash(r: Role): number
    static $gtype: GObject.Type
}
export interface RoleFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class RoleFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RoleFieldDetails_ConstructProps)
    _init (config?: RoleFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails
    static $gtype: GObject.Type
}
export interface SearchView_ConstructProps extends GObject.Object_ConstructProps {
    query?: Query
}
export class SearchView {
    /* Properties of Folks.SearchView */
    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.SearchView */
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    refresh(callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(res: Gio.AsyncResult): void
    getAggregator(): IndividualAggregator
    getQuery(): Query
    setQuery(value: Query): void
    getIndividuals(): Gee.SortedSet
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.SearchView */
    connect(sigName: "individuals-changed-detailed", callback: (($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet) => void)): number
    connect_after(sigName: "individuals-changed-detailed", callback: (($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet) => void)): number
    emit(sigName: "individuals-changed-detailed", added: Gee.SortedSet, removed: Gee.SortedSet): void
    on(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "individuals-changed-detailed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aggregator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aggregator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aggregator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchView_ConstructProps)
    _init (config?: SearchView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    static $gtype: GObject.Type
}
export interface SimpleQuery_ConstructProps extends Query_ConstructProps {
    queryString?: string
    queryLocale?: string
}
export class SimpleQuery {
    /* Properties of Folks.SimpleQuery */
    queryString: string
    queryLocale: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.SimpleQuery */
    getQueryString(): string
    setQueryString(value: string): void
    getQueryLocale(): string | null
    setQueryLocale(value?: string | null): void
    /* Methods of Folks.Query */
    isMatch(individual: Individual): number
    getMatchFields(): string[]
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
    /* Virtual methods of Folks.Query */
    vfuncIsMatch(individual: Individual): number
    vfuncGetMatchFields(): string[]
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::query-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::query-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::query-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::query-locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::query-locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::query-locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleQuery_ConstructProps)
    _init (config?: SimpleQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(queryString: string, matchFields: string[]): SimpleQuery
    static $gtype: GObject.Type
}
export interface UrlFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class UrlFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UrlFieldDetails_ConstructProps)
    _init (config?: UrlFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails
    static $gtype: GObject.Type
}
export interface Utils_ConstructProps extends GObject.Object_ConstructProps {
}
export class Utils {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Utils, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Utils, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Utils_ConstructProps)
    _init (config?: Utils_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Utils
    static multiMapStrStrEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multiMapStrAfdEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static setAfdEqual(a: Gee.Set, b: Gee.Set): boolean
    static setStringAfdEqual(a: Gee.Set, b: Gee.Set): boolean
    static $gtype: GObject.Type
}
export interface WebServiceFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class WebServiceFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly valueType: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value?: object | null): void
    getValueType(): GObject.Type
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void
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
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfuncEqual(that: AbstractFieldDetails): boolean
    vfuncParametersEqual(that: AbstractFieldDetails): boolean
    vfuncValuesEqual(that: AbstractFieldDetails): boolean
    vfuncHash(): number
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetId(): string
    vfuncSetId(value: string): void
    vfuncGetParameters(): Gee.MultiMap
    vfuncSetParameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebServiceFieldDetails_ConstructProps)
    _init (config?: WebServiceFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails
    static $gtype: GObject.Type
}
export abstract class AbstractFieldDetailsClass {
    /* Fields of Folks.AbstractFieldDetailsClass */
    equal: (that: AbstractFieldDetails) => boolean
    parametersEqual: (that: AbstractFieldDetails) => boolean
    valuesEqual: (that: AbstractFieldDetails) => boolean
    hash: () => number
    static name: string
}
export class AbstractFieldDetailsPrivate {
    static name: string
}
export abstract class AvatarCacheClass {
    static name: string
}
export class AvatarCachePrivate {
    static name: string
}
export abstract class BackendStoreClass {
    static name: string
}
export class BackendStorePrivate {
    static name: string
}
export abstract class BackendClass {
    /* Fields of Folks.BackendClass */
    disablePersonaStore: (store: PersonaStore) => void
    enablePersonaStore: (store: PersonaStore) => void
    setPersonaStores: (storeids?: Gee.Set | null) => void
    prepare: (callback?: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (res: Gio.AsyncResult) => void
    unprepare: (callback?: Gio.AsyncReadyCallback | null) => void
    unprepareFinish: (res: Gio.AsyncResult) => void
    static name: string
}
export class BackendPrivate {
    static name: string
}
export abstract class DebugClass {
    static name: string
}
export class DebugPrivate {
    static name: string
}
export abstract class EmailFieldDetailsClass {
    static name: string
}
export class EmailFieldDetailsPrivate {
    static name: string
}
export abstract class ExtendedFieldDetailsClass {
    static name: string
}
export class ExtendedFieldDetailsPrivate {
    static name: string
}
export abstract class ImFieldDetailsClass {
    static name: string
}
export class ImFieldDetailsPrivate {
    static name: string
}
export abstract class IndividualAggregatorClass {
    static name: string
}
export class IndividualAggregatorPrivate {
    static name: string
}
export abstract class IndividualClass {
    static name: string
}
export class IndividualPrivate {
    static name: string
}
export abstract class LocationClass {
    static name: string
}
export class LocationPrivate {
    static name: string
}
export abstract class StructuredNameClass {
    static name: string
}
export class StructuredNamePrivate {
    static name: string
}
export abstract class NoteFieldDetailsClass {
    static name: string
}
export class NoteFieldDetailsPrivate {
    static name: string
}
export abstract class ObjectCacheClass {
    /* Fields of Folks.ObjectCacheClass */
    getSerialisedObjectType: (objectVersion: number) => GLib.VariantType | null
    getSerialisedObjectVersion: () => number
    serialiseObject: (object?: object | null) => GLib.Variant
    deserialiseObject: (variant: GLib.Variant, objectVersion: number) => object | null
    static name: string
}
export class ObjectCachePrivate {
    static name: string
}
export abstract class PersonaStoreClass {
    /* Fields of Folks.PersonaStoreClass */
    prepare: (callback?: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (res: Gio.AsyncResult) => void
    flush: (callback?: Gio.AsyncReadyCallback | null) => void
    flushFinish: (res: Gio.AsyncResult) => void
    addPersonaFromDetails: (details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null) => void
    addPersonaFromDetailsFinish: (res: Gio.AsyncResult) => Persona | null
    removePersona: (persona: Persona, callback?: Gio.AsyncReadyCallback | null) => void
    removePersonaFinish: (res: Gio.AsyncResult) => void
    static name: string
}
export class PersonaStorePrivate {
    static name: string
}
export abstract class PersonaClass {
    /* Fields of Folks.PersonaClass */
    linkablePropertyToLinks: (propName: string, callback: any) => void
    static name: string
}
export class PersonaPrivate {
    static name: string
}
export abstract class PhoneFieldDetailsClass {
    static name: string
}
export class PhoneFieldDetailsPrivate {
    static name: string
}
export abstract class PostalAddressClass {
    static name: string
}
export class PostalAddressPrivate {
    static name: string
}
export abstract class PostalAddressFieldDetailsClass {
    static name: string
}
export class PostalAddressFieldDetailsPrivate {
    static name: string
}
export abstract class PotentialMatchClass {
    static name: string
}
export class PotentialMatchPrivate {
    static name: string
}
export abstract class QueryClass {
    /* Fields of Folks.QueryClass */
    isMatch: (individual: Individual) => number
    static name: string
}
export class QueryPrivate {
    static name: string
}
export abstract class RoleClass {
    static name: string
}
export class RolePrivate {
    static name: string
}
export abstract class RoleFieldDetailsClass {
    static name: string
}
export class RoleFieldDetailsPrivate {
    static name: string
}
export abstract class SearchViewClass {
    static name: string
}
export class SearchViewPrivate {
    static name: string
}
export abstract class SimpleQueryClass {
    static name: string
}
export class SimpleQueryPrivate {
    static name: string
}
export abstract class UrlFieldDetailsClass {
    static name: string
}
export class UrlFieldDetailsPrivate {
    static name: string
}
export abstract class UtilsClass {
    static name: string
}
export class UtilsPrivate {
    static name: string
}
export abstract class WebServiceFieldDetailsClass {
    static name: string
}
export class WebServiceFieldDetailsPrivate {
    static name: string
}
export abstract class AliasDetailsIface {
    /* Fields of Folks.AliasDetailsIface */
    changeAlias: (alias: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeAliasFinish: (res: Gio.AsyncResult) => void
    getAlias: () => string
    setAlias: (value: string) => void
    static name: string
}
export abstract class AntiLinkableIface {
    /* Fields of Folks.AntiLinkableIface */
    changeAntiLinks: (antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeAntiLinksFinish: (res: Gio.AsyncResult) => void
    getAntiLinks: () => Gee.Set
    setAntiLinks: (value: Gee.Set) => void
    static name: string
}
export abstract class AvatarDetailsIface {
    /* Fields of Folks.AvatarDetailsIface */
    changeAvatar: (avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeAvatarFinish: (res: Gio.AsyncResult) => void
    getAvatar: () => Gio.LoadableIcon | null
    setAvatar: (value?: Gio.LoadableIcon | null) => void
    static name: string
}
export abstract class BirthdayDetailsIface {
    /* Fields of Folks.BirthdayDetailsIface */
    changeBirthday: (birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeBirthdayFinish: (res: Gio.AsyncResult) => void
    changeCalendarEventId: (eventId?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeCalendarEventIdFinish: (res: Gio.AsyncResult) => void
    getBirthday: () => GLib.DateTime | null
    setBirthday: (value?: GLib.DateTime | null) => void
    getCalendarEventId: () => string | null
    setCalendarEventId: (value?: string | null) => void
    static name: string
}
export abstract class EmailDetailsIface {
    /* Fields of Folks.EmailDetailsIface */
    changeEmailAddresses: (emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeEmailAddressesFinish: (res: Gio.AsyncResult) => void
    getEmailAddresses: () => Gee.Set
    setEmailAddresses: (value: Gee.Set) => void
    static name: string
}
export abstract class ExtendedInfoIface {
    /* Fields of Folks.ExtendedInfoIface */
    getExtendedField: (name: string) => ExtendedFieldDetails | null
    changeExtendedField: (name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null) => void
    changeExtendedFieldFinish: (res: Gio.AsyncResult) => void
    removeExtendedField: (name: string, callback?: Gio.AsyncReadyCallback | null) => void
    removeExtendedFieldFinish: (res: Gio.AsyncResult) => void
    static name: string
}
export abstract class FavouriteDetailsIface {
    /* Fields of Folks.FavouriteDetailsIface */
    changeIsFavourite: (isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    changeIsFavouriteFinish: (res: Gio.AsyncResult) => void
    getIsFavourite: () => boolean
    setIsFavourite: (value: boolean) => void
    static name: string
}
export abstract class GenderDetailsIface {
    /* Fields of Folks.GenderDetailsIface */
    changeGender: (gender: Gender, callback?: Gio.AsyncReadyCallback | null) => void
    changeGenderFinish: (res: Gio.AsyncResult) => void
    getGender: () => Gender
    setGender: (value: Gender) => void
    static name: string
}
export abstract class GroupDetailsIface {
    /* Fields of Folks.GroupDetailsIface */
    changeGroup: (group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    changeGroupFinish: (res: Gio.AsyncResult) => void
    changeGroups: (groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeGroupsFinish: (res: Gio.AsyncResult) => void
    getGroups: () => Gee.Set
    setGroups: (value: Gee.Set) => void
    static name: string
}
export abstract class ImDetailsIface {
    /* Fields of Folks.ImDetailsIface */
    changeImAddresses: (imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null) => void
    changeImAddressesFinish: (res: Gio.AsyncResult) => void
    getImAddresses: () => Gee.MultiMap
    setImAddresses: (value: Gee.MultiMap) => void
    static name: string
}
export abstract class InteractionDetailsIface {
    /* Fields of Folks.InteractionDetailsIface */
    getImInteractionCount: () => number
    getLastImInteractionDatetime: () => GLib.DateTime | null
    getCallInteractionCount: () => number
    getLastCallInteractionDatetime: () => GLib.DateTime | null
    static name: string
}
export abstract class LocalIdDetailsIface {
    /* Fields of Folks.LocalIdDetailsIface */
    changeLocalIds: (localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeLocalIdsFinish: (res: Gio.AsyncResult) => void
    getLocalIds: () => Gee.Set
    setLocalIds: (value: Gee.Set) => void
    static name: string
}
export abstract class LocationDetailsIface {
    /* Fields of Folks.LocationDetailsIface */
    changeLocation: (location?: Location | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeLocationFinish: (res: Gio.AsyncResult) => void
    getLocation: () => Location | null
    setLocation: (value?: Location | null) => void
    static name: string
}
export abstract class NameDetailsIface {
    /* Fields of Folks.NameDetailsIface */
    changeStructuredName: (name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeStructuredNameFinish: (res: Gio.AsyncResult) => void
    changeFullName: (fullName: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeFullNameFinish: (res: Gio.AsyncResult) => void
    changeNickname: (nickname: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeNicknameFinish: (res: Gio.AsyncResult) => void
    getStructuredName: () => StructuredName | null
    setStructuredName: (value?: StructuredName | null) => void
    getFullName: () => string
    setFullName: (value: string) => void
    getNickname: () => string
    setNickname: (value: string) => void
    static name: string
}
export abstract class NoteDetailsIface {
    /* Fields of Folks.NoteDetailsIface */
    changeNotes: (notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeNotesFinish: (res: Gio.AsyncResult) => void
    getNotes: () => Gee.Set
    setNotes: (value: Gee.Set) => void
    static name: string
}
export abstract class PhoneDetailsIface {
    /* Fields of Folks.PhoneDetailsIface */
    changePhoneNumbers: (phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changePhoneNumbersFinish: (res: Gio.AsyncResult) => void
    getPhoneNumbers: () => Gee.Set
    setPhoneNumbers: (value: Gee.Set) => void
    static name: string
}
export abstract class PostalAddressDetailsIface {
    /* Fields of Folks.PostalAddressDetailsIface */
    changePostalAddresses: (postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changePostalAddressesFinish: (res: Gio.AsyncResult) => void
    getPostalAddresses: () => Gee.Set
    setPostalAddresses: (value: Gee.Set) => void
    static name: string
}
export abstract class PresenceDetailsIface {
    /* Fields of Folks.PresenceDetailsIface */
    getPresenceType: () => PresenceType
    setPresenceType: (value: PresenceType) => void
    getPresenceMessage: () => string
    setPresenceMessage: (value: string) => void
    getClientTypes: () => string[]
    setClientTypes: (value: string[]) => void
    getPresenceStatus: () => string
    setPresenceStatus: (value: string) => void
    static name: string
}
export abstract class RoleDetailsIface {
    /* Fields of Folks.RoleDetailsIface */
    changeRoles: (roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeRolesFinish: (res: Gio.AsyncResult) => void
    getRoles: () => Gee.Set
    setRoles: (value: Gee.Set) => void
    static name: string
}
export abstract class UrlDetailsIface {
    /* Fields of Folks.UrlDetailsIface */
    changeUrls: (urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeUrlsFinish: (res: Gio.AsyncResult) => void
    getUrls: () => Gee.Set
    setUrls: (value: Gee.Set) => void
    static name: string
}
export abstract class WebServiceDetailsIface {
    /* Fields of Folks.WebServiceDetailsIface */
    changeWebServiceAddresses: (webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null) => void
    changeWebServiceAddressesFinish: (res: Gio.AsyncResult) => void
    getWebServiceAddresses: () => Gee.MultiMap
    setWebServiceAddresses: (value: Gee.MultiMap) => void
    static name: string
}
}