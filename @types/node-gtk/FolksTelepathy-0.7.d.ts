/**
 * FolksTelepathy-0.7
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { GObject } from './GObject-2.0';
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { TelepathyGLib } from './TelepathyGLib-0.12';
import type { Folks } from './Folks-0.7';

export declare namespace FolksTelepathy {

export interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {
    account?: TelepathyGLib.Account
}
export class PersonaStore {
    /* Properties of Folks.PersonaStore */
    readonly typeId: string
    readonly personas: Gee.Map
    readonly canAddPersonas: Folks.MaybeBool
    readonly canAliasPersonas: Folks.MaybeBool
    readonly canGroupPersonas: Folks.MaybeBool
    readonly canRemovePersonas: Folks.MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: Folks.PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksTelepathy.PersonaStore */
    getAccount(): TelepathyGLib.Account
    /* Methods of Folks.PersonaStore */
    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Folks.Persona | null
    removePersona(persona: Folks.Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getDisplayName(): string
    getId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): Folks.MaybeBool
    getCanAliasPersonas(): Folks.MaybeBool
    getCanGroupPersonas(): Folks.MaybeBool
    getCanRemovePersonas(): Folks.MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): Folks.PersonaStoreTrust
    setTrustLevel(value: Folks.PersonaStoreTrust): void
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
    vfuncAddPersonaFromDetailsFinish(res: Gio.AsyncResult): Folks.Persona | null
    vfuncRemovePersona(persona: Folks.Persona, callback?: Gio.AsyncReadyCallback | null): void
    vfuncRemovePersonaFinish(res: Gio.AsyncResult): void
    vfuncGetTypeId(): string
    vfuncGetPersonas(): Gee.Map
    vfuncGetCanAddPersonas(): Folks.MaybeBool
    vfuncGetCanAliasPersonas(): Folks.MaybeBool
    vfuncGetCanGroupPersonas(): Folks.MaybeBool
    vfuncGetCanRemovePersonas(): Folks.MaybeBool
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
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
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
    static new(account: TelepathyGLib.Account): PersonaStore
    static listPersonaStores(): Gee.Map
    static dupForAccount(account: TelepathyGLib.Account): PersonaStore
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    isInContactList?: boolean
    contact?: TelepathyGLib.Contact
    alias?: string
    avatar?: Gio.LoadableIcon
    birthday?: GLib.DateTime
    calendarEventId?: string
    emailAddresses?: Gee.Set
    isFavourite?: boolean
    groups?: Gee.Set
    imAddresses?: Gee.MultiMap
    structuredName?: Folks.StructuredName
    fullName?: string
    nickname?: string
    phoneNumbers?: Gee.Set
    presenceType?: Folks.PresenceType
    presenceMessage?: string
    clientTypes?: string[]
    presenceStatus?: string
    urls?: Gee.Set
}
export class Persona {
    /* Properties of FolksTelepathy.Persona */
    isInContactList: boolean
    /* Properties of Folks.Persona */
    individual: Folks.Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
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
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks.InteractionDetails */
    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime
    /* Properties of Folks.ImDetails */
    imAddresses: Gee.MultiMap
    /* Properties of Folks.NameDetails */
    structuredName: Folks.StructuredName
    fullName: string
    nickname: string
    /* Properties of Folks.PhoneDetails */
    phoneNumbers: Gee.Set
    /* Properties of Folks.PresenceDetails */
    presenceType: Folks.PresenceType
    presenceMessage: string
    clientTypes: string[]
    presenceStatus: string
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksTelepathy.Persona */
    getIsInContactList(): boolean
    setIsInContactList(value: boolean): void
    getContact(): TelepathyGLib.Contact | null
    /* Methods of Folks.Persona */
    linkablePropertyToLinks(propName: string, callback: Folks.PersonaLinkablePropertyCallback): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): Folks.PersonaStore
    getIndividual(): Folks.Individual | null
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
    /* Methods of Folks.FavouriteDetails */
    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void
    /* Methods of Folks.GroupDetails */
    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void
    /* Methods of Folks.InteractionDetails */
    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null
    /* Methods of Folks.ImDetails */
    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void
    /* Methods of Folks.NameDetails */
    changeStructuredName(name?: Folks.StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): Folks.StructuredName | null
    setStructuredName(value?: Folks.StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void
    /* Methods of Folks.PhoneDetails */
    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void
    /* Methods of Folks.PresenceDetails */
    isOnline(): boolean
    getPresenceType(): Folks.PresenceType
    setPresenceType(value: Folks.PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void
    /* Methods of Folks.UrlDetails */
    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void
    /* Virtual methods of FolksTelepathy.Persona */
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
    vfuncChangeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeIsFavouriteFinish(res: Gio.AsyncResult): void
    vfuncGetIsFavourite(): boolean
    vfuncSetIsFavourite(value: boolean): void
    vfuncChangeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupFinish(res: Gio.AsyncResult): void
    vfuncChangeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeGroupsFinish(res: Gio.AsyncResult): void
    vfuncGetGroups(): Gee.Set
    vfuncSetGroups(value: Gee.Set): void
    vfuncGetImInteractionCount(): number
    vfuncGetLastImInteractionDatetime(): GLib.DateTime | null
    vfuncGetCallInteractionCount(): number
    vfuncGetLastCallInteractionDatetime(): GLib.DateTime | null
    vfuncChangeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeImAddressesFinish(res: Gio.AsyncResult): void
    vfuncGetImAddresses(): Gee.MultiMap
    vfuncSetImAddresses(value: Gee.MultiMap): void
    vfuncChangeStructuredName(name?: Folks.StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeStructuredNameFinish(res: Gio.AsyncResult): void
    vfuncChangeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeFullNameFinish(res: Gio.AsyncResult): void
    vfuncChangeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeNicknameFinish(res: Gio.AsyncResult): void
    vfuncGetStructuredName(): Folks.StructuredName | null
    vfuncSetStructuredName(value?: Folks.StructuredName | null): void
    vfuncGetFullName(): string
    vfuncSetFullName(value: string): void
    vfuncGetNickname(): string
    vfuncSetNickname(value: string): void
    vfuncChangePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangePhoneNumbersFinish(res: Gio.AsyncResult): void
    vfuncGetPhoneNumbers(): Gee.Set
    vfuncSetPhoneNumbers(value: Gee.Set): void
    vfuncGetPresenceType(): Folks.PresenceType
    vfuncSetPresenceType(value: Folks.PresenceType): void
    vfuncGetPresenceMessage(): string
    vfuncSetPresenceMessage(value: string): void
    vfuncGetClientTypes(): string[]
    vfuncSetClientTypes(value: string[]): void
    vfuncGetPresenceStatus(): string
    vfuncSetPresenceStatus(value: string): void
    vfuncChangeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    vfuncChangeUrlsFinish(res: Gio.AsyncResult): void
    vfuncGetUrls(): Gee.Set
    vfuncSetUrls(value: Gee.Set): void
    /* Virtual methods of Folks.Persona */
    vfuncLinkablePropertyToLinks(propName: string, callback: Folks.PersonaLinkablePropertyCallback): void
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
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Persona, group: string, isMember: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Persona, group: string, isMember: boolean) => void)): number
    emit(sigName: "group-changed", group: string, isMember: boolean): void
    on(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    static dupForContact(contact: TelepathyGLib.Contact): Persona | null
    static normaliseImAddress(imAddress: string, protocol: string): string
    static getDefaultMessageFromType(type: Folks.PresenceType): string
    static typecmp(typeA: Folks.PresenceType, typeB: Folks.PresenceType): number
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
}