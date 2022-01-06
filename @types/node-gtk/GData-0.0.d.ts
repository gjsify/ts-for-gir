/**
 * GData-0.0
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';

export declare namespace GData {

export enum BatchOperationType {
    QUERY,
    INSERTION,
    UPDATE,
    DELETION,
}
export enum DocumentsServiceError {
    TYPE,
}
export enum MediaExpression {
    SAMPLE,
    FULL,
    NONSTOP,
}
export enum MediaMedium {
    UNKNOWN,
    IMAGE,
    AUDIO,
    VIDEO,
    DOCUMENT,
    EXECUTABLE,
}
export enum OperationType {
    QUERY,
    INSERTION,
    UPDATE,
    DELETION,
    DOWNLOAD,
    UPLOAD,
    AUTHENTICATION,
    BATCH,
}
export enum ParserError {
    PARSING_STRING,
    EMPTY_DOCUMENT,
}
export enum PicasaWebVisibility {
    PUBLIC,
    PRIVATE,
}
export enum ServiceError {
    UNAVAILABLE,
    PROTOCOL_ERROR,
    ENTRY_ALREADYSERTED,
    AUTHENTICATION_REQUIRED,
    NOT_FOUND,
    CONFLICT,
    FORBIDDEN,
    BAD_QUERY_PARAMETER,
    NETWORK_ERROR,
    PROXY_ERROR,
    WITH_BATCH_OPERATION,
    API_QUOTA_EXCEEDED,
}
export enum YouTubeAge {
    ALL_TIME,
    TODAY,
    THIS_WEEK,
    THIS_MONTH,
}
export enum YouTubePermission {
    ALLOWED,
    DENIED,
    MODERATED,
}
export enum YouTubeSafeSearch {
    NONE,
    MODERATE,
    STRICT,
}
export enum YouTubeServiceError {
    API_QUOTA_EXCEEDED,
    ENTRY_QUOTA_EXCEEDED,
    CHANNEL_REQUIRED,
}
export enum YouTubeStandardFeedType {
    FEED,
}
export const ACCESS_ROLE_NONE: string
export const ACCESS_SCOPE_DEFAULT: string
export const ACCESS_SCOPE_DOMAIN: string
export const ACCESS_SCOPE_USER: string
export const CALENDAR_ACCESS_ROLE_EDITOR: string
export const CALENDAR_ACCESS_ROLE_FREE_BUSY: string
export const CALENDAR_ACCESS_ROLE_OWNER: string
export const CALENDAR_ACCESS_ROLE_READ: string
export const CALENDAR_ACCESS_ROLE_ROOT: string
export const CATEGORY_SCHEMA_LABELS: string
export const DOCUMENTS_ACCESS_ROLE_OWNER: string
export const DOCUMENTS_ACCESS_ROLE_READER: string
export const DOCUMENTS_ACCESS_ROLE_WRITER: string
export const DOCUMENTS_DRAWING_JPEG: string
export const DOCUMENTS_DRAWING_PDF: string
export const DOCUMENTS_DRAWING_PNG: string
export const DOCUMENTS_DRAWING_SVG: string
export const DOCUMENTS_PRESENTATION_PDF: string
export const DOCUMENTS_PRESENTATION_PNG: string
export const DOCUMENTS_PRESENTATION_PPT: string
export const DOCUMENTS_PRESENTATION_TXT: string
export const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string
export const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string
export const DOCUMENTS_SPREADSHEET_CSV: string
export const DOCUMENTS_SPREADSHEET_HTML: string
export const DOCUMENTS_SPREADSHEET_ODS: string
export const DOCUMENTS_SPREADSHEET_PDF: string
export const DOCUMENTS_SPREADSHEET_TSV: string
export const DOCUMENTS_SPREADSHEET_XLS: string
export const DOCUMENTS_TEXT_DOC: string
export const DOCUMENTS_TEXT_HTML: string
export const DOCUMENTS_TEXT_JPEG: string
export const DOCUMENTS_TEXT_ODT: string
export const DOCUMENTS_TEXT_PDF: string
export const DOCUMENTS_TEXT_PNG: string
export const DOCUMENTS_TEXT_RTF: string
export const DOCUMENTS_TEXT_TXT: string
export const DOCUMENTS_TEXT_ZIP: string
export const GCONTACT_CALENDAR_FREE_BUSY: string
export const GCONTACT_CALENDAR_HOME: string
export const GCONTACT_CALENDAR_WORK: string
export const GCONTACT_EVENT_ANNIVERSARY: string
export const GCONTACT_EVENT_OTHER: string
export const GCONTACT_EXTERNAL_ID_ACCOUNT: string
export const GCONTACT_EXTERNAL_ID_CUSTOMER: string
export const GCONTACT_EXTERNAL_ID_NETWORK: string
export const GCONTACT_EXTERNAL_ID_ORGANIZATION: string
export const GCONTACT_JOT_HOME: string
export const GCONTACT_JOT_KEYWORDS: string
export const GCONTACT_JOT_OTHER: string
export const GCONTACT_JOT_USER: string
export const GCONTACT_JOT_WORK: string
export const GCONTACT_RELATION_ASSISTANT: string
export const GCONTACT_RELATION_BROTHER: string
export const GCONTACT_RELATION_CHILD: string
export const GCONTACT_RELATION_DOMESTIC_PARTNER: string
export const GCONTACT_RELATION_FATHER: string
export const GCONTACT_RELATION_FRIEND: string
export const GCONTACT_RELATION_MANAGER: string
export const GCONTACT_RELATION_MOTHER: string
export const GCONTACT_RELATION_PARENT: string
export const GCONTACT_RELATION_PARTNER: string
export const GCONTACT_RELATION_REFERRER: string
export const GCONTACT_RELATION_RELATIVE: string
export const GCONTACT_RELATION_SISTER: string
export const GCONTACT_RELATION_SPOUSE: string
export const GCONTACT_WEBSITE_BLOG: string
export const GCONTACT_WEBSITE_FTP: string
export const GCONTACT_WEBSITE_HOME: string
export const GCONTACT_WEBSITE_HOME_PAGE: string
export const GCONTACT_WEBSITE_OTHER: string
export const GCONTACT_WEBSITE_PROFILE: string
export const GCONTACT_WEBSITE_WORK: string
export const GD_ADDRESS_USAGE_GENERAL: string
export const GD_ADDRESS_USAGE_LOCAL: string
export const GD_EMAIL_ADDRESS_HOME: string
export const GD_EMAIL_ADDRESS_OTHER: string
export const GD_EMAIL_ADDRESS_WORK: string
export const GD_EVENT_STATUS_CANCELED: string
export const GD_EVENT_STATUS_CONFIRMED: string
export const GD_EVENT_STATUS_TENTATIVE: string
export const GD_EVENT_TRANSPARENCY_OPAQUE: string
export const GD_EVENT_TRANSPARENCY_TRANSPARENT: string
export const GD_EVENT_VISIBILITY_CONFIDENTIAL: string
export const GD_EVENT_VISIBILITY_DEFAULT: string
export const GD_EVENT_VISIBILITY_PRIVATE: string
export const GD_EVENT_VISIBILITY_PUBLIC: string
export const GD_IM_ADDRESS_HOME: string
export const GD_IM_ADDRESS_NETMEETING: string
export const GD_IM_ADDRESS_OTHER: string
export const GD_IM_ADDRESS_WORK: string
export const GD_IM_PROTOCOL_AIM: string
export const GD_IM_PROTOCOL_GOOGLE_TALK: string
export const GD_IM_PROTOCOL_ICQ: string
export const GD_IM_PROTOCOL_JABBER: string
export const GD_IM_PROTOCOL_LIVE_MESSENGER: string
export const GD_IM_PROTOCOL_QQ: string
export const GD_IM_PROTOCOL_SKYPE: string
export const GD_IM_PROTOCOL_YAHOO_MESSENGER: string
export const GD_MAIL_CLASS_BOTH: string
export const GD_MAIL_CLASS_LETTERS: string
export const GD_MAIL_CLASS_NEITHER: string
export const GD_MAIL_CLASS_PARCELS: string
export const GD_ORGANIZATION_OTHER: string
export const GD_ORGANIZATION_WORK: string
export const GD_PHONE_NUMBER_ASSISTANT: string
export const GD_PHONE_NUMBER_CALLBACK: string
export const GD_PHONE_NUMBER_CAR: string
export const GD_PHONE_NUMBER_COMPANY_MAIN: string
export const GD_PHONE_NUMBER_FAX: string
export const GD_PHONE_NUMBER_HOME: string
export const GD_PHONE_NUMBER_HOME_FAX: string
export const GD_PHONE_NUMBER_ISDN: string
export const GD_PHONE_NUMBER_MAIN: string
export const GD_PHONE_NUMBER_MOBILE: string
export const GD_PHONE_NUMBER_OTHER: string
export const GD_PHONE_NUMBER_OTHER_FAX: string
export const GD_PHONE_NUMBER_PAGER: string
export const GD_PHONE_NUMBER_RADIO: string
export const GD_PHONE_NUMBER_TELEX: string
export const GD_PHONE_NUMBER_TTY_TDD: string
export const GD_PHONE_NUMBER_WORK: string
export const GD_PHONE_NUMBER_WORK_FAX: string
export const GD_PHONE_NUMBER_WORK_MOBILE: string
export const GD_PHONE_NUMBER_WORK_PAGER: string
export const GD_POSTAL_ADDRESS_HOME: string
export const GD_POSTAL_ADDRESS_OTHER: string
export const GD_POSTAL_ADDRESS_WORK: string
export const GD_REMINDER_ALERT: string
export const GD_REMINDER_EMAIL: string
export const GD_REMINDER_SMS: string
export const GD_WHERE_EVENT: string
export const GD_WHERE_EVENT_ALTERNATE: string
export const GD_WHERE_EVENT_PARKING: string
export const GD_WHO_EVENT_ATTENDEE: string
export const GD_WHO_EVENT_ORGANIZER: string
export const GD_WHO_EVENT_PERFORMER: string
export const GD_WHO_EVENT_SPEAKER: string
export const LINK_ACCESS_CONTROL_LIST: string
export const LINK_ALTERNATE: string
export const LINK_BATCH: string
export const LINK_EDIT: string
export const LINK_EDIT_MEDIA: string
export const LINK_ENCLOSURE: string
export const LINK_PARENT: string
export const LINK_RELATED: string
export const LINK_RESUMABLE_CREATE_MEDIA: string
export const LINK_RESUMABLE_EDIT_MEDIA: string
export const LINK_SELF: string
export const LINK_VIA: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OAUTH2_REDIRECT_URI_OOB: string
export const OAUTH2_REDIRECT_URI_OOB_AUTO: string
export const PICASAWEB_VIDEO_STATUS_FAILED: string
export const PICASAWEB_VIDEO_STATUS_FINAL: string
export const PICASAWEB_VIDEO_STATUS_PENDING: string
export const PICASAWEB_VIDEO_STATUS_READY: string
export const TASKS_STATUS_COMPLETED: string
export const TASKS_STATUS_NEEDS_ACTION: string
export const YOUTUBE_ACTION_COMMENT: string
export const YOUTUBE_ACTION_COMMENT_VOTE: string
export const YOUTUBE_ACTION_EMBED: string
export const YOUTUBE_ACTION_RATE: string
export const YOUTUBE_ACTION_SYNDICATE: string
export const YOUTUBE_ACTION_VIDEO_RESPOND: string
export const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string
export const YOUTUBE_LICENSE_CC: string
export const YOUTUBE_LICENSE_STANDARD: string
export const YOUTUBE_RATING_TYPE_MPAA: string
export const YOUTUBE_RATING_TYPE_V_CHIP: string
export function colorFromHexadecimal(hexadecimal: string): { returnType: boolean, color: Color }
export function documentsServiceErrorQuark(): GLib.Quark
export function parserErrorQuark(): GLib.Quark
export function serviceErrorQuark(): GLib.Quark
export function youtubeServiceErrorQuark(): GLib.Quark
export interface BatchOperationCallback {
    (operationId: number, operationType: BatchOperationType, entry: Entry, error: GLib.Error): void
}
export interface QueryProgressCallback {
    (entry: Entry, entryKey: number, entryCount: number): void
}
export interface AccessHandler_ConstructProps extends Entry_ConstructProps {
}
export class AccessHandler {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessHandler_ConstructProps)
    _init (config?: AccessHandler_ConstructProps): void
    static $gtype: GObject.Type
}
export class Authorizer {
    /* Methods of GData-0.0.GData.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    static name: string
}
export interface Batchable_ConstructProps extends Service_ConstructProps {
}
export class Batchable {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    parent: GObject.Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Batchable_ConstructProps)
    _init (config?: Batchable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Commentable_ConstructProps extends Entry_ConstructProps {
}
export class Commentable {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Commentable_ConstructProps)
    _init (config?: Commentable_ConstructProps): void
    static $gtype: GObject.Type
}
export class Comparable {
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    static name: string
}
export interface APPCategories_ConstructProps extends Parsable_ConstructProps {
}
export class APPCategories {
    /* Properties of GData-0.0.GData.APPCategories */
    readonly isFixed: boolean
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.APPCategories */
    getCategories(): Category[]
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: APPCategories_ConstructProps)
    _init (config?: APPCategories_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AccessRule_ConstructProps extends Entry_ConstructProps {
    role?: string
    scopeType?: string
    scopeValue?: string
}
export class AccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.AccessRule */
    parent: Entry
    priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): { type: string | null, value: string | null }
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessRule_ConstructProps)
    _init (config?: AccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): AccessRule
    static new(id?: string | null): AccessRule
    static $gtype: GObject.Type
}
export interface Author_ConstructProps extends Parsable_ConstructProps {
    emailAddress?: string
    name?: string
    uri?: string
}
export class Author {
    /* Properties of GData-0.0.GData.Author */
    emailAddress: string
    name: string
    uri: string
    /* Fields of GData-0.0.GData.Author */
    parent: Parsable
    priv: AuthorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Author */
    getEmailAddress(): string
    getName(): string
    getUri(): string
    setEmailAddress(emailAddress?: string | null): void
    setName(name: string): void
    setUri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Author_ConstructProps)
    _init (config?: Author_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, uri?: string | null, emailAddress?: string | null): Author
    static $gtype: GObject.Type
}
export interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    scope?: string
    serviceName?: string
}
export class AuthorizationDomain {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AuthorizationDomain */
    getScope(): string
    getServiceName(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BatchOperation_ConstructProps extends GObject.Object_ConstructProps {
    authorizationDomain?: AuthorizationDomain
    feedUri?: string
    service?: Service
}
export class BatchOperation {
    /* Fields of GData-0.0.GData.BatchOperation */
    parent: GObject.Object
    priv: BatchOperationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.BatchOperation */
    addDeletion(entry: Entry, callback: BatchOperationCallback): number
    addInsertion(entry: Entry, callback: BatchOperationCallback): number
    addQuery(id: string, entryType: GObject.Type, callback: BatchOperationCallback): number
    addUpdate(entry: Entry, callback: BatchOperationCallback): number
    getAuthorizationDomain(): AuthorizationDomain | null
    getFeedUri(): string
    getService(): Service
    run(cancellable?: Gio.Cancellable | null): boolean
    runAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runFinish(asyncResult: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BatchOperation_ConstructProps)
    _init (config?: BatchOperation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalendarAccessRule_ConstructProps extends AccessRule_ConstructProps {
}
export class CalendarAccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarAccessRule */
    parent: AccessRule
    /* Fields of GData-0.0.GData.AccessRule */
    priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): { type: string | null, value: string | null }
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarAccessRule_ConstructProps)
    _init (config?: CalendarAccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): CalendarAccessRule
    static new(id?: string | null): CalendarAccessRule
    static $gtype: GObject.Type
}
export interface CalendarCalendar_ConstructProps extends Entry_ConstructProps {
    color?: Color
    isHidden?: boolean
    isSelected?: boolean
    timezone?: string
}
export class CalendarCalendar {
    /* Properties of GData-0.0.GData.CalendarCalendar */
    readonly accessLevel: string
    color: Color
    isHidden: boolean
    isSelected: boolean
    timezone: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarCalendar */
    parent: Entry
    priv: CalendarCalendarPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarCalendar */
    getAccessLevel(): string
    getColor(): { color: Color }
    getTimezone(): string
    setColor(color: Color): void
    setIsHidden(isHidden: boolean): void
    setIsSelected(isSelected: boolean): void
    setTimezone(timezone?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarCalendar_ConstructProps)
    _init (config?: CalendarCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): CalendarCalendar
    static $gtype: GObject.Type
}
export interface CalendarEvent_ConstructProps extends Entry_ConstructProps {
    anyoneCanAddSelf?: boolean
    guestsCanInviteOthers?: boolean
    guestsCanModify?: boolean
    guestsCanSeeGuests?: boolean
    recurrence?: string
    sequence?: number
    status?: string
    transparency?: string
    uid?: string
    visibility?: string
}
export class CalendarEvent {
    /* Properties of GData-0.0.GData.CalendarEvent */
    anyoneCanAddSelf: boolean
    readonly edited: number
    guestsCanInviteOthers: boolean
    guestsCanModify: boolean
    guestsCanSeeGuests: boolean
    readonly originalEventId: string
    readonly originalEventUri: string
    recurrence: string
    sequence: number
    status: string
    transparency: string
    uid: string
    visibility: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarEvent */
    parent: Entry
    priv: CalendarEventPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarEvent */
    addPerson(who: GDWho): void
    addPlace(where: GDWhere): void
    addTime(when: GDWhen): void
    getAnyoneCanAddSelf(): boolean
    getEdited(): number
    getGuestsCanInviteOthers(): boolean
    getGuestsCanModify(): boolean
    getGuestsCanSeeGuests(): boolean
    getOriginalEventDetails(): { eventId: string, eventUri: string }
    getPeople(): GDWho[]
    getPlaces(): GDWhere[]
    getPrimaryTime(): { returnType: boolean, startTime: number, endTime: number, when: GDWhen }
    getRecurrence(): string
    getSequence(): number
    getStatus(): string
    getTimes(): GDWhen[]
    getTransparency(): string
    getUid(): string
    getVisibility(): string
    isException(): boolean
    setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): void
    setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): void
    setGuestsCanModify(guestsCanModify: boolean): void
    setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): void
    setRecurrence(recurrence?: string | null): void
    setSequence(sequence: number): void
    setStatus(status?: string | null): void
    setTransparency(transparency?: string | null): void
    setUid(uid?: string | null): void
    setVisibility(visibility?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarEvent_ConstructProps)
    _init (config?: CalendarEvent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): CalendarEvent
    static $gtype: GObject.Type
}
export interface CalendarFeed_ConstructProps extends Feed_ConstructProps {
}
export class CalendarFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarFeed */
    parent: Feed
    priv: CalendarFeedPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarFeed_ConstructProps)
    _init (config?: CalendarFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalendarQuery_ConstructProps extends Query_ConstructProps {
    futureEvents?: boolean
    maxAttendees?: number
    orderBy?: string
    showDeleted?: boolean
    singleEvents?: boolean
    startMax?: number
    startMin?: number
    timezone?: string
}
export class CalendarQuery {
    /* Properties of GData-0.0.GData.CalendarQuery */
    futureEvents: boolean
    maxAttendees: number
    orderBy: string
    showDeleted: boolean
    singleEvents: boolean
    startMax: number
    startMin: number
    timezone: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.CalendarQuery */
    parent: Query
    priv: CalendarQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarQuery */
    getFutureEvents(): boolean
    getMaxAttendees(): number
    getOrderBy(): string
    getSingleEvents(): boolean
    getStartMax(): number
    getStartMin(): number
    getTimezone(): string
    setFutureEvents(futureEvents: boolean): void
    setMaxAttendees(maxAttendees: number): void
    setOrderBy(orderBy?: string | null): void
    setShowDeleted(showDeleted: boolean): void
    setSingleEvents(singleEvents: boolean): void
    setStartMax(startMax: number): void
    setStartMin(startMin: number): void
    setTimezone(timezone?: string | null): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarQuery_ConstructProps)
    _init (config?: CalendarQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): CalendarQuery
    static newWithLimits(q: string | null, startMin: number, startMax: number): CalendarQuery
    static $gtype: GObject.Type
}
export interface CalendarService_ConstructProps extends Service_ConstructProps {
}
export class CalendarService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.CalendarService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarService */
    insertCalendarEvent(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent
    insertCalendarEventAsync(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllCalendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllCalendarsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryEvents(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryEventsAsync(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryOwnCalendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryOwnCalendarsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarService_ConstructProps)
    _init (config?: CalendarService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): CalendarService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends Parsable_ConstructProps {
    label?: string
    scheme?: string
    term?: string
}
export class Category {
    /* Properties of GData-0.0.GData.Category */
    label: string
    scheme: string
    term: string
    /* Fields of GData-0.0.GData.Category */
    parent: Parsable
    priv: CategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Category */
    getLabel(): string
    getScheme(): string
    getTerm(): string
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    setTerm(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(term: string, scheme?: string | null, label?: string | null): Category
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends Entry_ConstructProps {
}
export class Comment {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Comment */
    parent: Entry
    priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsAccessRule_ConstructProps extends AccessRule_ConstructProps {
}
export class DocumentsAccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsAccessRule */
    parent: AccessRule
    /* Fields of GData-0.0.GData.AccessRule */
    priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): { type: string | null, value: string | null }
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsAccessRule_ConstructProps)
    _init (config?: DocumentsAccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): DocumentsAccessRule
    static new(id?: string | null): DocumentsAccessRule
    static $gtype: GObject.Type
}
export interface DocumentsDocument_ConstructProps extends DocumentsEntry_ConstructProps {
}
export class DocumentsDocument {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    parent: DocumentsEntry
    priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDocument_ConstructProps)
    _init (config?: DocumentsDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsDocument
    static $gtype: GObject.Type
}
export interface DocumentsDrawing_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsDrawing {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDrawing */
    parent: DocumentsDocument
    priv: DocumentsDrawingPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDrawing_ConstructProps)
    _init (config?: DocumentsDrawing_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsDrawing
    static $gtype: GObject.Type
}
export interface DocumentsDrive_ConstructProps extends Entry_ConstructProps {
}
export class DocumentsDrive {
    /* Properties of GData-0.0.GData.DocumentsDrive */
    readonly name: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDrive */
    parentInstance: Entry
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDrive */
    getName(): string | null
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDrive_ConstructProps)
    _init (config?: DocumentsDrive_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsDriveQuery_ConstructProps extends Query_ConstructProps {
}
export class DocumentsDriveQuery {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.DocumentsDriveQuery */
    parentInstance: Query
    /* Fields of GData-0.0.GData.Query */
    parent: GObject.Object
    priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDriveQuery_ConstructProps)
    _init (config?: DocumentsDriveQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsDriveQuery
    static $gtype: GObject.Type
}
export interface DocumentsEntry_ConstructProps extends Entry_ConstructProps {
    isDeleted?: boolean
    writersCanInvite?: boolean
}
export class DocumentsEntry {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsEntry */
    parent: Entry
    priv: DocumentsEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsEntry_ConstructProps)
    _init (config?: DocumentsEntry_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsFeed_ConstructProps extends Feed_ConstructProps {
}
export class DocumentsFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsFeed_ConstructProps)
    _init (config?: DocumentsFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsFolder_ConstructProps extends DocumentsEntry_ConstructProps {
}
export class DocumentsFolder {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsFolder */
    parent: DocumentsEntry
    priv: DocumentsFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsFolder_ConstructProps)
    _init (config?: DocumentsFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsFolder
    static $gtype: GObject.Type
}
export interface DocumentsMetadata_ConstructProps extends Parsable_ConstructProps {
}
export class DocumentsMetadata {
    /* Properties of GData-0.0.GData.DocumentsMetadata */
    readonly quotaTotal: number
    readonly quotaUsed: number
    /* Fields of GData-0.0.GData.DocumentsMetadata */
    parent: Parsable
    priv: DocumentsMetadataPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsMetadata */
    getQuotaTotal(): number
    getQuotaUsed(): number
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsMetadata_ConstructProps)
    _init (config?: DocumentsMetadata_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsPdf_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsPdf {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsPdf */
    parent: DocumentsDocument
    priv: DocumentsPdfPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsPdf_ConstructProps)
    _init (config?: DocumentsPdf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsPdf
    static $gtype: GObject.Type
}
export interface DocumentsPresentation_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsPresentation {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsPresentation */
    parent: DocumentsDocument
    priv: DocumentsPresentationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsPresentation_ConstructProps)
    _init (config?: DocumentsPresentation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsPresentation
    static $gtype: GObject.Type
}
export interface DocumentsProperty_ConstructProps extends Parsable_ConstructProps {
    etag?: string
    key?: string
    value?: string
    visibility?: string
}
export class DocumentsProperty {
    /* Properties of GData-0.0.GData.DocumentsProperty */
    key: string
    value: string
    visibility: string
    /* Fields of GData-0.0.GData.DocumentsProperty */
    parent: Parsable
    priv: DocumentsPropertyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsProperty */
    getEtag(): string
    getKey(): string
    getValue(): string | null
    getVisibility(): string
    setValue(value?: string | null): void
    setVisibility(visibility: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsProperty_ConstructProps)
    _init (config?: DocumentsProperty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key: string): DocumentsProperty
    static $gtype: GObject.Type
}
export interface DocumentsQuery_ConstructProps extends Query_ConstructProps {
    exactTitle?: boolean
    folderId?: string
    showDeleted?: boolean
    showFolders?: boolean
    title?: string
}
export class DocumentsQuery {
    /* Properties of GData-0.0.GData.DocumentsQuery */
    exactTitle: boolean
    folderId: string
    showDeleted: boolean
    showFolders: boolean
    title: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.DocumentsQuery */
    parent: Query
    priv: DocumentsQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsQuery */
    addCollaborator(emailAddress: string): void
    addReader(emailAddress: string): void
    getCollaboratorAddresses(): GDEmailAddress[]
    getExactTitle(): boolean
    getFolderId(): string
    getReaderAddresses(): GDEmailAddress[]
    getTitle(): string
    setFolderId(folderId?: string | null): void
    setShowDeleted(showDeleted: boolean): void
    setShowFolders(showFolders: boolean): void
    setTitle(title: string | null, exactTitle: boolean): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsQuery_ConstructProps)
    _init (config?: DocumentsQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsQuery
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): DocumentsQuery
    static $gtype: GObject.Type
}
export interface DocumentsService_ConstructProps extends Service_ConstructProps {
}
export class DocumentsService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.DocumentsService */
    parent: Service
    priv: DocumentsServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsService */
    addEntryToFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    addEntryToFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addEntryToFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    copyDocument(document: DocumentsDocument, cancellable?: Gio.Cancellable | null): DocumentsDocument
    copyDocumentAsync(document: DocumentsDocument, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    copyDocumentFinish(asyncResult: Gio.AsyncResult): DocumentsDocument
    finishUpload(uploadStream: UploadStream): DocumentsDocument
    getMetadata(cancellable?: Gio.Cancellable | null): DocumentsMetadata
    getMetadataAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMetadataFinish(asyncResult: Gio.AsyncResult): DocumentsMetadata
    queryDocuments(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): DocumentsFeed
    queryDocumentsAsync(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryDrives(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): DocumentsFeed
    queryDrivesAsync(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    removeEntryFromFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    removeEntryFromFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeEntryFromFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    updateDocument(document: DocumentsDocument, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    updateDocumentResumable(document: DocumentsDocument, slug: string, contentType: string, contentLength: number, cancellable?: Gio.Cancellable | null): UploadStream
    uploadDocument(document: DocumentsDocument | null, slug: string, contentType: string, folder?: DocumentsFolder | null, cancellable?: Gio.Cancellable | null): UploadStream
    uploadDocumentResumable(document: DocumentsDocument | null, slug: string, contentType: string, contentLength: number, query?: DocumentsUploadQuery | null, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsService_ConstructProps)
    _init (config?: DocumentsService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): DocumentsService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static getSpreadsheetAuthorizationDomain(): AuthorizationDomain
    static getUploadUri(folder?: DocumentsFolder | null): string
    static $gtype: GObject.Type
}
export interface DocumentsSpreadsheet_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsSpreadsheet {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsSpreadsheet */
    parent: DocumentsDocument
    priv: DocumentsSpreadsheetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsSpreadsheet */
    getDownloadUri(exportFormat: string, gid: number): string
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsSpreadsheet_ConstructProps)
    _init (config?: DocumentsSpreadsheet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsSpreadsheet
    static $gtype: GObject.Type
}
export interface DocumentsText_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsText {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsText */
    parent: DocumentsDocument
    priv: DocumentsTextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsText_ConstructProps)
    _init (config?: DocumentsText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsText
    static $gtype: GObject.Type
}
export interface DocumentsUploadQuery_ConstructProps extends GObject.Object_ConstructProps {
    convert?: boolean
    folder?: DocumentsFolder
}
export class DocumentsUploadQuery {
    /* Properties of GData-0.0.GData.DocumentsUploadQuery */
    convert: boolean
    folder: DocumentsFolder
    /* Fields of GData-0.0.GData.DocumentsUploadQuery */
    parent: GObject.Object
    priv: DocumentsUploadQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsUploadQuery */
    buildUri(): string
    getConvert(): boolean
    getFolder(): DocumentsFolder | null
    setConvert(convert: boolean): void
    setFolder(folder?: DocumentsFolder | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsUploadQuery_ConstructProps)
    _init (config?: DocumentsUploadQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentsUploadQuery
    static $gtype: GObject.Type
}
export interface DownloadStream_ConstructProps extends Gio.InputStream_ConstructProps {
    authorizationDomain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    downloadUri?: string
    service?: Service
}
export class DownloadStream {
    /* Properties of GData-0.0.GData.DownloadStream */
    readonly contentLength: number
    readonly contentType: string
    /* Fields of GData-0.0.GData.DownloadStream */
    parent: Gio.InputStream
    priv: DownloadStreamPrivate
    /* Fields of Gio-2.0.Gio.InputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DownloadStream */
    getAuthorizationDomain(): AuthorizationDomain | null
    getCancellable(): Gio.Cancellable
    getContentLength(): number
    getContentType(): string
    getDownloadUri(): string
    getService(): Service
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): { returnType: number, buffer: any[] }
    readAll(cancellable?: Gio.Cancellable | null): { returnType: boolean, buffer: any[], bytesRead: number }
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesRead: number }
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): { buffer: any[] }
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DownloadStream_ConstructProps)
    _init (config?: DownloadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, downloadUri: string, cancellable?: Gio.Cancellable | null): DownloadStream
    static $gtype: GObject.Type
}
export interface Entry_ConstructProps extends Parsable_ConstructProps {
    content?: string
    contentUri?: string
    etag?: string
    id?: string
    rights?: string
    summary?: string
    title?: string
}
export class Entry {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Entry_ConstructProps)
    _init (config?: Entry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): Entry
    static $gtype: GObject.Type
}
export interface Feed_ConstructProps extends Parsable_ConstructProps {
}
export class Feed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Feed_ConstructProps)
    _init (config?: Feed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GContactCalendar_ConstructProps extends Parsable_ConstructProps {
    isPrimary?: boolean
    label?: string
    relationType?: string
    uri?: string
}
export class GContactCalendar {
    /* Properties of GData-0.0.GData.GContactCalendar */
    isPrimary: boolean
    label: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.GContactCalendar */
    parent: Parsable
    priv: GContactCalendarPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactCalendar */
    getLabel(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactCalendar_ConstructProps)
    _init (config?: GContactCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType: string | null, label: string | null, isPrimary: boolean): GContactCalendar
    static $gtype: GObject.Type
}
export interface GContactEvent_ConstructProps extends Parsable_ConstructProps {
    date?: GLib.Date
    label?: string
    relationType?: string
}
export class GContactEvent {
    /* Properties of GData-0.0.GData.GContactEvent */
    date: GLib.Date
    label: string
    relationType: string
    /* Fields of GData-0.0.GData.GContactEvent */
    parent: Parsable
    priv: GContactEventPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactEvent */
    getDate(): { date: GLib.Date }
    getLabel(): string
    getRelationType(): string
    setDate(date: GLib.Date): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactEvent_ConstructProps)
    _init (config?: GContactEvent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(date: GLib.Date, relationType?: string | null, label?: string | null): GContactEvent
    static $gtype: GObject.Type
}
export interface GContactExternalID_ConstructProps extends Parsable_ConstructProps {
    label?: string
    relationType?: string
    value?: string
}
export class GContactExternalID {
    /* Properties of GData-0.0.GData.GContactExternalID */
    label: string
    relationType: string
    value: string
    /* Fields of GData-0.0.GData.GContactExternalID */
    parent: Parsable
    priv: GContactExternalIDPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactExternalID */
    getLabel(): string
    getRelationType(): string
    getValue(): string
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setValue(value: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactExternalID_ConstructProps)
    _init (config?: GContactExternalID_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, relationType?: string | null, label?: string | null): GContactExternalID
    static $gtype: GObject.Type
}
export interface GContactJot_ConstructProps extends Parsable_ConstructProps {
    content?: string
    relationType?: string
}
export class GContactJot {
    /* Properties of GData-0.0.GData.GContactJot */
    content: string
    relationType: string
    /* Fields of GData-0.0.GData.GContactJot */
    parent: Parsable
    priv: GContactJotPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactJot */
    getContent(): string
    getRelationType(): string
    setContent(content: string): void
    setRelationType(relationType: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactJot_ConstructProps)
    _init (config?: GContactJot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string, relationType: string): GContactJot
    static $gtype: GObject.Type
}
export interface GContactLanguage_ConstructProps extends Parsable_ConstructProps {
    code?: string
    label?: string
}
export class GContactLanguage {
    /* Properties of GData-0.0.GData.GContactLanguage */
    code: string
    label: string
    /* Fields of GData-0.0.GData.GContactLanguage */
    parent: Parsable
    priv: GContactLanguagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactLanguage */
    getCode(): string
    getLabel(): string
    setCode(code?: string | null): void
    setLabel(label?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactLanguage_ConstructProps)
    _init (config?: GContactLanguage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(code?: string | null, label?: string | null): GContactLanguage
    static $gtype: GObject.Type
}
export interface GContactRelation_ConstructProps extends Parsable_ConstructProps {
    label?: string
    name?: string
    relationType?: string
}
export class GContactRelation {
    /* Properties of GData-0.0.GData.GContactRelation */
    label: string
    name: string
    relationType: string
    /* Fields of GData-0.0.GData.GContactRelation */
    parent: Parsable
    priv: GContactRelationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactRelation */
    getLabel(): string
    getName(): string
    getRelationType(): string
    setLabel(label?: string | null): void
    setName(name?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactRelation_ConstructProps)
    _init (config?: GContactRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, relationType?: string | null, label?: string | null): GContactRelation
    static $gtype: GObject.Type
}
export interface GContactWebsite_ConstructProps extends Parsable_ConstructProps {
    isPrimary?: boolean
    label?: string
    relationType?: string
    uri?: string
}
export class GContactWebsite {
    /* Properties of GData-0.0.GData.GContactWebsite */
    isPrimary: boolean
    label: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.GContactWebsite */
    parent: Parsable
    priv: GContactWebsitePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactWebsite */
    getLabel(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType: string): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactWebsite_ConstructProps)
    _init (config?: GContactWebsite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType: string, label: string | null, isPrimary: boolean): GContactWebsite
    static $gtype: GObject.Type
}
export interface GDEmailAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    displayName?: string
    isPrimary?: boolean
    label?: string
    relationType?: string
}
export class GDEmailAddress {
    /* Properties of GData-0.0.GData.GDEmailAddress */
    address: string
    displayName: string
    isPrimary: boolean
    label: string
    relationType: string
    /* Fields of GData-0.0.GData.GDEmailAddress */
    parent: Parsable
    priv: GDEmailAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDEmailAddress */
    getAddress(): string
    getDisplayName(): string
    getLabel(): string
    getRelationType(): string
    setAddress(address: string): void
    setDisplayName(displayName?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDEmailAddress_ConstructProps)
    _init (config?: GDEmailAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, relationType: string | null, label: string | null, isPrimary: boolean): GDEmailAddress
    static $gtype: GObject.Type
}
export interface GDIMAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    isPrimary?: boolean
    label?: string
    protocol?: string
    relationType?: string
}
export class GDIMAddress {
    /* Properties of GData-0.0.GData.GDIMAddress */
    address: string
    isPrimary: boolean
    label: string
    protocol: string
    relationType: string
    /* Fields of GData-0.0.GData.GDIMAddress */
    parent: Parsable
    priv: GDIMAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDIMAddress */
    getAddress(): string
    getLabel(): string
    getProtocol(): string
    getRelationType(): string
    setAddress(address: string): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setProtocol(protocol?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDIMAddress_ConstructProps)
    _init (config?: GDIMAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, protocol: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDIMAddress
    static $gtype: GObject.Type
}
export interface GDName_ConstructProps extends Parsable_ConstructProps {
    additionalName?: string
    familyName?: string
    fullName?: string
    givenName?: string
    prefix?: string
    suffix?: string
}
export class GDName {
    /* Properties of GData-0.0.GData.GDName */
    additionalName: string
    familyName: string
    fullName: string
    givenName: string
    prefix: string
    suffix: string
    /* Fields of GData-0.0.GData.GDName */
    parent: Parsable
    priv: GDNamePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDName */
    getAdditionalName(): string
    getFamilyName(): string
    getFullName(): string
    getGivenName(): string
    getPrefix(): string
    getSuffix(): string
    setAdditionalName(additionalName?: string | null): void
    setFamilyName(familyName?: string | null): void
    setFullName(fullName?: string | null): void
    setGivenName(givenName?: string | null): void
    setPrefix(prefix?: string | null): void
    setSuffix(suffix?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDName_ConstructProps)
    _init (config?: GDName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(givenName?: string | null, familyName?: string | null): GDName
    static $gtype: GObject.Type
}
export interface GDOrganization_ConstructProps extends Parsable_ConstructProps {
    department?: string
    isPrimary?: boolean
    jobDescription?: string
    label?: string
    location?: GDWhere
    name?: string
    relationType?: string
    symbol?: string
    title?: string
}
export class GDOrganization {
    /* Properties of GData-0.0.GData.GDOrganization */
    department: string
    isPrimary: boolean
    jobDescription: string
    label: string
    location: GDWhere
    name: string
    relationType: string
    symbol: string
    title: string
    /* Fields of GData-0.0.GData.GDOrganization */
    parent: Parsable
    priv: GDOrganizationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDOrganization */
    getDepartment(): string
    getJobDescription(): string
    getLabel(): string
    getLocation(): GDWhere
    getName(): string
    getRelationType(): string
    getSymbol(): string
    getTitle(): string
    setDepartment(department?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setJobDescription(jobDescription?: string | null): void
    setLabel(label?: string | null): void
    setLocation(location?: GDWhere | null): void
    setName(name?: string | null): void
    setRelationType(relationType?: string | null): void
    setSymbol(symbol?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDOrganization_ConstructProps)
    _init (config?: GDOrganization_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, title: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDOrganization
    static $gtype: GObject.Type
}
export interface GDPhoneNumber_ConstructProps extends Parsable_ConstructProps {
    isPrimary?: boolean
    label?: string
    number?: string
    relationType?: string
    uri?: string
}
export class GDPhoneNumber {
    /* Properties of GData-0.0.GData.GDPhoneNumber */
    isPrimary: boolean
    label: string
    number: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.GDPhoneNumber */
    parent: Parsable
    priv: GDPhoneNumberPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPhoneNumber */
    getLabel(): string
    getNumber(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setNumber(number: string): void
    setRelationType(relationType?: string | null): void
    setUri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDPhoneNumber_ConstructProps)
    _init (config?: GDPhoneNumber_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(number: string, relationType: string | null, label: string | null, uri: string | null, isPrimary: boolean): GDPhoneNumber
    static $gtype: GObject.Type
}
export interface GDPostalAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    agent?: string
    city?: string
    houseName?: string
    isPrimary?: boolean
    label?: string
    mailClass?: string
    neighborhood?: string
    poBox?: string
    postcode?: string
    region?: string
    relationType?: string
    street?: string
    subregion?: string
    usage?: string
}
export class GDPostalAddress {
    /* Properties of GData-0.0.GData.GDPostalAddress */
    address: string
    agent: string
    city: string
    readonly country: string
    readonly countryCode: string
    houseName: string
    isPrimary: boolean
    label: string
    mailClass: string
    neighborhood: string
    poBox: string
    postcode: string
    region: string
    relationType: string
    street: string
    subregion: string
    usage: string
    /* Fields of GData-0.0.GData.GDPostalAddress */
    parent: Parsable
    priv: GDPostalAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPostalAddress */
    getAddress(): string
    getAgent(): string
    getCity(): string
    getCountry(): string
    getCountryCode(): string
    getHouseName(): string
    getLabel(): string
    getMailClass(): string
    getNeighborhood(): string
    getPoBox(): string
    getPostcode(): string
    getRegion(): string
    getRelationType(): string
    getStreet(): string
    getSubregion(): string
    getUsage(): string
    setAddress(address?: string | null): void
    setAgent(agent?: string | null): void
    setCity(city?: string | null): void
    setCountry(country?: string | null, countryCode?: string | null): void
    setHouseName(houseName?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setMailClass(mailClass?: string | null): void
    setNeighborhood(neighborhood?: string | null): void
    setPoBox(poBox?: string | null): void
    setPostcode(postcode?: string | null): void
    setRegion(region?: string | null): void
    setRelationType(relationType?: string | null): void
    setStreet(street?: string | null): void
    setSubregion(subregion?: string | null): void
    setUsage(usage?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDPostalAddress_ConstructProps)
    _init (config?: GDPostalAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType: string | null, label: string | null, isPrimary: boolean): GDPostalAddress
    static $gtype: GObject.Type
}
export interface GDReminder_ConstructProps extends Parsable_ConstructProps {
    absoluteTime?: number
    method?: string
    relativeTime?: number
}
export class GDReminder {
    /* Properties of GData-0.0.GData.GDReminder */
    absoluteTime: number
    readonly isAbsoluteTime: boolean
    method: string
    relativeTime: number
    /* Fields of GData-0.0.GData.GDReminder */
    parent: Parsable
    priv: GDReminderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDReminder */
    getAbsoluteTime(): number
    getMethod(): string
    getRelativeTime(): number
    setAbsoluteTime(absoluteTime: number): void
    setMethod(method?: string | null): void
    setRelativeTime(relativeTime: number): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDReminder_ConstructProps)
    _init (config?: GDReminder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string | null, absoluteTime: number, relativeTime: number): GDReminder
    static $gtype: GObject.Type
}
export interface GDWhen_ConstructProps extends Parsable_ConstructProps {
    endTime?: number
    isDate?: boolean
    startTime?: number
    valueString?: string
}
export class GDWhen {
    /* Properties of GData-0.0.GData.GDWhen */
    endTime: number
    isDate: boolean
    startTime: number
    valueString: string
    /* Fields of GData-0.0.GData.GDWhen */
    parent: Parsable
    priv: GDWhenPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhen */
    addReminder(reminder: GDReminder): void
    getEndTime(): number
    getReminders(): GDReminder[]
    getStartTime(): number
    getValueString(): string
    setEndTime(endTime: number): void
    setIsDate(isDate: boolean): void
    setStartTime(startTime: number): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWhen_ConstructProps)
    _init (config?: GDWhen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startTime: number, endTime: number, isDate: boolean): GDWhen
    static $gtype: GObject.Type
}
export interface GDWhere_ConstructProps extends Parsable_ConstructProps {
    label?: string
    relationType?: string
    valueString?: string
}
export class GDWhere {
    /* Properties of GData-0.0.GData.GDWhere */
    label: string
    relationType: string
    valueString: string
    /* Fields of GData-0.0.GData.GDWhere */
    parent: Parsable
    priv: GDWherePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhere */
    getLabel(): string
    getRelationType(): string
    getValueString(): string
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWhere_ConstructProps)
    _init (config?: GDWhere_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType?: string | null, valueString?: string | null, label?: string | null): GDWhere
    static $gtype: GObject.Type
}
export interface GDWho_ConstructProps extends Parsable_ConstructProps {
    emailAddress?: string
    relationType?: string
    valueString?: string
}
export class GDWho {
    /* Properties of GData-0.0.GData.GDWho */
    emailAddress: string
    relationType: string
    valueString: string
    /* Fields of GData-0.0.GData.GDWho */
    parent: Parsable
    priv: GDWhoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWho */
    getEmailAddress(): string
    getRelationType(): string
    getValueString(): string
    setEmailAddress(emailAddress?: string | null): void
    setRelationType(relationType?: string | null): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWho_ConstructProps)
    _init (config?: GDWho_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType?: string | null, valueString?: string | null, emailAddress?: string | null): GDWho
    static $gtype: GObject.Type
}
export interface Generator_ConstructProps extends Parsable_ConstructProps {
}
export class Generator {
    /* Properties of GData-0.0.GData.Generator */
    readonly name: string
    readonly uri: string
    readonly version: string
    /* Fields of GData-0.0.GData.Generator */
    parent: Parsable
    priv: GeneratorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Generator */
    getName(): string | null
    getUri(): string | null
    getVersion(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    goaObject?: Goa.Object
}
export class GoaAuthorizer {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GoaAuthorizer */
    getGoaObject(): Goa.Object
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(goaObject: Goa.Object): GoaAuthorizer
    static $gtype: GObject.Type
}
export interface Link_ConstructProps extends Parsable_ConstructProps {
    contentType?: string
    language?: string
    length?: number
    relationType?: string
    title?: string
    uri?: string
}
export class Link {
    /* Properties of GData-0.0.GData.Link */
    contentType: string
    language: string
    length: number
    relationType: string
    title: string
    uri: string
    /* Fields of GData-0.0.GData.Link */
    parent: Parsable
    priv: LinkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Link */
    getContentType(): string | null
    getLanguage(): string | null
    getLength(): number
    getRelationType(): string | null
    getTitle(): string
    getUri(): string
    setContentType(contentType?: string | null): void
    setLanguage(language?: string | null): void
    setLength(length: number): void
    setRelationType(relationType?: string | null): void
    setTitle(title?: string | null): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType?: string | null): Link
    static $gtype: GObject.Type
}
export interface MediaCategory_ConstructProps extends Parsable_ConstructProps {
    category?: string
    label?: string
    scheme?: string
}
export class MediaCategory {
    /* Properties of GData-0.0.GData.MediaCategory */
    category: string
    label: string
    scheme: string
    /* Fields of GData-0.0.GData.MediaCategory */
    parent: Parsable
    priv: MediaCategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCategory */
    getCategory(): string
    getLabel(): string
    getScheme(): string
    setCategory(category: string): void
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaCategory_ConstructProps)
    _init (config?: MediaCategory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(category: string, scheme?: string | null, label?: string | null): MediaCategory
    static $gtype: GObject.Type
}
export interface MediaContent_ConstructProps extends Parsable_ConstructProps {
}
export class MediaContent {
    /* Properties of GData-0.0.GData.MediaContent */
    readonly contentType: string
    readonly duration: number
    readonly expression: MediaExpression
    readonly filesize: number
    readonly height: number
    readonly isDefault: boolean
    readonly medium: MediaMedium
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.MediaContent */
    parent: Parsable
    priv: MediaContentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaContent */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    getContentType(): string
    getDuration(): number
    getExpression(): MediaExpression
    getFilesize(): number
    getHeight(): number
    getMedium(): MediaMedium
    getUri(): string
    getWidth(): number
    /* Methods of GData-0.0.GData.Parsable */
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaContent_ConstructProps)
    _init (config?: MediaContent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaCredit_ConstructProps extends Parsable_ConstructProps {
}
export class MediaCredit {
    /* Properties of GData-0.0.GData.MediaCredit */
    readonly credit: string
    readonly role: string
    readonly scheme: string
    /* Fields of GData-0.0.GData.MediaCredit */
    parent: Parsable
    priv: MediaCreditPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCredit */
    getCredit(): string
    getRole(): string
    getScheme(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaCredit_ConstructProps)
    _init (config?: MediaCredit_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaThumbnail_ConstructProps extends Parsable_ConstructProps {
}
export class MediaThumbnail {
    /* Properties of GData-0.0.GData.MediaThumbnail */
    readonly height: number
    readonly time: number
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.MediaThumbnail */
    parent: Parsable
    priv: MediaThumbnailPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaThumbnail */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    getHeight(): number
    getTime(): number
    getUri(): string
    getWidth(): number
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaThumbnail_ConstructProps)
    _init (config?: MediaThumbnail_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OAuth2Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    clientId?: string
    clientSecret?: string
    locale?: string
    proxyResolver?: Gio.ProxyResolver
    redirectUri?: string
    refreshToken?: string
    timeout?: number
}
export class OAuth2Authorizer {
    /* Properties of GData-0.0.GData.OAuth2Authorizer */
    locale: string
    proxyResolver: Gio.ProxyResolver
    refreshToken: string
    timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.OAuth2Authorizer */
    buildAuthenticationUri(loginHint: string | null, includeGrantedScopes: boolean): string
    dupRefreshToken(): string
    getClientId(): string
    getClientSecret(): string
    getLocale(): string | null
    getProxyResolver(): Gio.ProxyResolver | null
    getRedirectUri(): string
    getTimeout(): number
    requestAuthorization(authorizationCode: string, cancellable?: Gio.Cancellable | null): boolean
    requestAuthorizationAsync(authorizationCode: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setRefreshToken(refreshToken?: string | null): void
    setTimeout(timeout: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2Authorizer_ConstructProps)
    _init (config?: OAuth2Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clientId: string, clientSecret: string, redirectUri: string, serviceType: GObject.Type): OAuth2Authorizer
    static newForAuthorizationDomains(clientId: string, clientSecret: string, redirectUri: string, authorizationDomains: AuthorizationDomain[]): OAuth2Authorizer
    static $gtype: GObject.Type
}
export interface Parsable_ConstructProps extends GObject.Object_ConstructProps {
    constructedFromXml?: boolean
}
export class Parsable {
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parsable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parsable_ConstructProps)
    _init (config?: Parsable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromJson(parsableType: GObject.Type, json: string, length: number): Parsable
    static newFromXml(parsableType: GObject.Type, xml: string, length: number): Parsable
    static $gtype: GObject.Type
}
export interface PicasaWebAlbum_ConstructProps extends Entry_ConstructProps {
    albumId?: string
    isCommentingEnabled?: boolean
    latitude?: number
    location?: string
    longitude?: number
    tags?: string[]
    timestamp?: number
    visibility?: PicasaWebVisibility
}
export class PicasaWebAlbum {
    /* Properties of GData-0.0.GData.PicasaWebAlbum */
    readonly bytesUsed: number
    readonly commentCount: number
    readonly edited: number
    isCommentingEnabled: boolean
    latitude: number
    location: string
    longitude: number
    readonly nickname: string
    readonly numPhotos: number
    readonly numPhotosRemaining: number
    tags: string[]
    timestamp: number
    readonly user: string
    visibility: PicasaWebVisibility
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebAlbum */
    parent: Entry
    priv: PicasaWebAlbumPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebAlbum */
    getBytesUsed(): number
    getCommentCount(): number
    getContents(): MediaContent[]
    getCoordinates(): { latitude: number | null, longitude: number | null }
    getEdited(): number
    getId(): string
    getLocation(): string
    getNickname(): string
    getNumPhotos(): number
    getNumPhotosRemaining(): number
    getTags(): string[]
    getThumbnails(): MediaThumbnail[]
    getTimestamp(): number
    getUser(): string
    getVisibility(): PicasaWebVisibility
    setCoordinates(latitude: number, longitude: number): void
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    setLocation(location?: string | null): void
    setTags(tags?: string[] | null): void
    setTimestamp(timestamp: number): void
    setVisibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebAlbum_ConstructProps)
    _init (config?: PicasaWebAlbum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): PicasaWebAlbum
    static $gtype: GObject.Type
}
export interface PicasaWebComment_ConstructProps extends Comment_ConstructProps {
}
export class PicasaWebComment {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebComment */
    parent: Comment
    priv: PicasaWebCommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebComment_ConstructProps)
    _init (config?: PicasaWebComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): PicasaWebComment
    static new(id?: string | null): PicasaWebComment
    static $gtype: GObject.Type
}
export interface PicasaWebFeed_ConstructProps extends Feed_ConstructProps {
}
export class PicasaWebFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebFeed */
    parent: Feed
    /* Fields of GData-0.0.GData.Parsable */
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebFeed_ConstructProps)
    _init (config?: PicasaWebFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PicasaWebFile_ConstructProps extends Entry_ConstructProps {
    albumId?: string
    caption?: string
    checksum?: string
    fileId?: string
    isCommentingEnabled?: boolean
    latitude?: number
    longitude?: number
    rotation?: number
    tags?: string[]
    timestamp?: number
    version?: string
}
export class PicasaWebFile {
    /* Properties of GData-0.0.GData.PicasaWebFile */
    albumId: string
    caption: string
    checksum: string
    readonly commentCount: number
    readonly credit: string
    readonly distance: number
    readonly edited: number
    readonly exposure: number
    readonly flash: boolean
    readonly focalLength: number
    readonly fstop: number
    readonly height: number
    readonly imageUniqueId: string
    isCommentingEnabled: boolean
    readonly iso: number
    latitude: number
    longitude: number
    readonly make: string
    readonly model: string
    rotation: number
    readonly size: number
    tags: string[]
    timestamp: number
    readonly videoStatus: string
    readonly width: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebFile */
    parent: Entry
    priv: PicasaWebFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebFile */
    getAlbumId(): string
    getCaption(): string
    getChecksum(): string
    getCommentCount(): number
    getContents(): MediaContent[]
    getCoordinates(): { latitude: number | null, longitude: number | null }
    getCredit(): string
    getDistance(): number
    getEdited(): number
    getExposure(): number
    getFlash(): boolean
    getFocalLength(): number
    getFstop(): number
    getHeight(): number
    getId(): string
    getImageUniqueId(): string
    getIso(): number
    getMake(): string
    getModel(): string
    getRotation(): number
    getSize(): number
    getTags(): string[]
    getThumbnails(): MediaThumbnail[]
    getTimestamp(): number
    getVersion(): string
    getVideoStatus(): string
    getWidth(): number
    setAlbumId(albumId: string): void
    setCaption(caption?: string | null): void
    setChecksum(checksum?: string | null): void
    setCoordinates(latitude: number, longitude: number): void
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    setRotation(rotation: number): void
    setTags(tags?: string[] | null): void
    setTimestamp(timestamp: number): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebFile_ConstructProps)
    _init (config?: PicasaWebFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): PicasaWebFile
    static $gtype: GObject.Type
}
export interface PicasaWebQuery_ConstructProps extends Query_ConstructProps {
    imageSize?: string
    location?: string
    tag?: string
    thumbnailSize?: string
    visibility?: number
}
export class PicasaWebQuery {
    /* Properties of GData-0.0.GData.PicasaWebQuery */
    imageSize: string
    location: string
    tag: string
    thumbnailSize: string
    visibility: number
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.PicasaWebQuery */
    parent: Query
    priv: PicasaWebQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebQuery */
    getBoundingBox(): { north: number | null, east: number | null, south: number | null, west: number | null }
    getImageSize(): string
    getLocation(): string
    getTag(): string
    getThumbnailSize(): string
    getVisibility(): PicasaWebVisibility
    setBoundingBox(north: number, east: number, south: number, west: number): void
    setImageSize(imageSize?: string | null): void
    setLocation(location?: string | null): void
    setTag(tag?: string | null): void
    setThumbnailSize(thumbnailSize?: string | null): void
    setVisibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebQuery_ConstructProps)
    _init (config?: PicasaWebQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): PicasaWebQuery
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): PicasaWebQuery
    static $gtype: GObject.Type
}
export interface PicasaWebService_ConstructProps extends Service_ConstructProps {
}
export class PicasaWebService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.PicasaWebService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebService */
    finishFileUpload(uploadStream: UploadStream): PicasaWebFile
    getUser(username?: string | null, cancellable?: Gio.Cancellable | null): PicasaWebUser
    getUserAsync(username?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserFinish(result: Gio.AsyncResult): PicasaWebUser
    insertAlbum(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null): PicasaWebAlbum
    insertAlbumAsync(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllAlbums(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllAlbumsAsync(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFiles(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryFilesAsync(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    uploadFile(album: PicasaWebAlbum | null, fileEntry: PicasaWebFile, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebService_ConstructProps)
    _init (config?: PicasaWebService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): PicasaWebService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface PicasaWebUser_ConstructProps extends Entry_ConstructProps {
}
export class PicasaWebUser {
    /* Properties of GData-0.0.GData.PicasaWebUser */
    readonly maxPhotosPerAlbum: number
    readonly nickname: string
    readonly quotaCurrent: number
    readonly quotaLimit: number
    readonly thumbnailUri: string
    readonly user: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebUser */
    parent: Entry
    priv: PicasaWebUserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebUser */
    getMaxPhotosPerAlbum(): number
    getNickname(): string
    getQuotaCurrent(): number
    getQuotaLimit(): number
    getThumbnailUri(): string
    getUser(): string
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebUser_ConstructProps)
    _init (config?: PicasaWebUser_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    categories?: string
    etag?: string
    isStrict?: boolean
    maxResults?: number
    publishedMax?: number
    publishedMin?: number
    q?: string
    startIndex?: number
    updatedMax?: number
    updatedMin?: number
}
export class Query {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    parent: GObject.Object
    priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): Query
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends GObject.Object_ConstructProps {
    authorizer?: Authorizer
    locale?: string
    proxyResolver?: Gio.ProxyResolver
    timeout?: number
}
export class Service {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    parent: GObject.Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAuthorizationDomains(serviceType: GObject.Type): AuthorizationDomain[]
    static $gtype: GObject.Type
}
export interface TasksQuery_ConstructProps extends Query_ConstructProps {
    completedMax?: number
    completedMin?: number
    dueMax?: number
    dueMin?: number
    showCompleted?: boolean
    showDeleted?: boolean
    showHidden?: boolean
}
export class TasksQuery {
    /* Properties of GData-0.0.GData.TasksQuery */
    completedMax: number
    completedMin: number
    dueMax: number
    dueMin: number
    showCompleted: boolean
    showDeleted: boolean
    showHidden: boolean
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.TasksQuery */
    parent: Query
    priv: TasksQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksQuery */
    getCompletedMax(): number
    getCompletedMin(): number
    getDueMax(): number
    getDueMin(): number
    getShowCompleted(): boolean
    getShowDeleted(): boolean
    getShowHidden(): boolean
    setCompletedMax(completedMax: number): void
    setCompletedMin(completedMin: number): void
    setDueMax(dueMax: number): void
    setDueMin(dueMin: number): void
    setShowCompleted(showCompleted: boolean): void
    setShowDeleted(showDeleted: boolean): void
    setShowHidden(showHidden: boolean): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksQuery_ConstructProps)
    _init (config?: TasksQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): TasksQuery
    static $gtype: GObject.Type
}
export interface TasksService_ConstructProps extends Service_ConstructProps {
}
export class TasksService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.TasksService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksService */
    deleteTask(task: TasksTask, cancellable?: Gio.Cancellable | null): boolean
    deleteTaskAsync(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): boolean
    deleteTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertTask(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTask
    insertTaskAsync(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    insertTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllTasklists(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllTasklistsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryTasks(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryTasksAsync(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    updateTask(task: TasksTask, cancellable?: Gio.Cancellable | null): TasksTask
    updateTaskAsync(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    updateTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksService_ConstructProps)
    _init (config?: TasksService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): TasksService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface TasksTask_ConstructProps extends Entry_ConstructProps {
    completed?: number
    due?: number
    isDeleted?: boolean
    notes?: string
    parent?: string
    position?: string
    status?: string
}
export class TasksTask {
    /* Properties of GData-0.0.GData.TasksTask */
    completed: number
    due: number
    isDeleted: boolean
    readonly isHidden: boolean
    notes: string
    parent: string
    position: string
    status: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.TasksTask */
    priv: TasksTaskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksTask */
    getCompleted(): number
    getDue(): number
    getNotes(): string | null
    getParent(): string | null
    getPosition(): string | null
    getStatus(): string | null
    setCompleted(completed: number): void
    setDue(due: number): void
    setIsDeleted(deleted: boolean): void
    setNotes(notes?: string | null): void
    setParent(parent?: string | null): void
    setPosition(position: string): void
    setStatus(status?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksTask_ConstructProps)
    _init (config?: TasksTask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): TasksTask
    static $gtype: GObject.Type
}
export interface TasksTasklist_ConstructProps extends Entry_ConstructProps {
}
export class TasksTasklist {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.TasksTasklist */
    parent: Entry
    /* Fields of GData-0.0.GData.Entry */
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksTasklist_ConstructProps)
    _init (config?: TasksTasklist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): TasksTasklist
    static $gtype: GObject.Type
}
export interface UploadStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    authorizationDomain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    contentLength?: number
    contentType?: string
    entry?: Entry
    method?: string
    service?: Service
    slug?: string
    uploadUri?: string
}
export class UploadStream {
    /* Fields of GData-0.0.GData.UploadStream */
    parent: Gio.OutputStream
    priv: UploadStreamPrivate
    /* Fields of Gio-2.0.Gio.OutputStream */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.UploadStream */
    getAuthorizationDomain(): AuthorizationDomain | null
    getCancellable(): Gio.Cancellable
    getContentLength(): number
    getContentType(): string
    getEntry(): Entry
    getMethod(): string
    getResponse(): { returnType: string, length: number | null }
    getService(): Service
    getSlug(): string
    getUploadUri(): string
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: any[], cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: any[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writeAllAsync(buffer: any[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
    writeAsync(buffer: any[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): { returnType: boolean, bytesWritten: number | null }
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): { returnType: boolean, bytesWritten: number | null }
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UploadStream_ConstructProps)
    _init (config?: UploadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    static newResumable(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, contentLength: number, cancellable?: Gio.Cancellable | null): UploadStream
    static $gtype: GObject.Type
}
export interface YouTubeCategory_ConstructProps extends Category_ConstructProps {
}
export class YouTubeCategory {
    /* Properties of GData-0.0.GData.YouTubeCategory */
    readonly isAssignable: boolean
    readonly isDeprecated: boolean
    /* Properties of GData-0.0.GData.Category */
    label: string
    scheme: string
    term: string
    /* Fields of GData-0.0.GData.YouTubeCategory */
    parent: Category
    priv: YouTubeCategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeCategory */
    isBrowsable(region: string): boolean
    /* Methods of GData-0.0.GData.Category */
    getLabel(): string
    getScheme(): string
    getTerm(): string
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    setTerm(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeCategory_ConstructProps)
    _init (config?: YouTubeCategory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeComment_ConstructProps extends Comment_ConstructProps {
    parentCommentUri?: string
}
export class YouTubeComment {
    /* Properties of GData-0.0.GData.YouTubeComment */
    parentCommentUri: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.YouTubeComment */
    parent: Comment
    priv: YouTubeCommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeComment */
    getParentCommentUri(): string
    setParentCommentUri(parentCommentUri: string): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeComment_ConstructProps)
    _init (config?: YouTubeComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): YouTubeComment
    static new(id?: string | null): YouTubeComment
    static $gtype: GObject.Type
}
export interface YouTubeFeed_ConstructProps extends Feed_ConstructProps {
}
export class YouTubeFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeFeed_ConstructProps)
    _init (config?: YouTubeFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeQuery_ConstructProps extends Query_ConstructProps {
    age?: YouTubeAge
    latitude?: number
    license?: string
    locationRadius?: number
    longitude?: number
    orderBy?: string
    restriction?: string
    safeSearch?: YouTubeSafeSearch
}
export class YouTubeQuery {
    /* Properties of GData-0.0.GData.YouTubeQuery */
    age: YouTubeAge
    latitude: number
    license: string
    locationRadius: number
    longitude: number
    orderBy: string
    restriction: string
    safeSearch: YouTubeSafeSearch
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.YouTubeQuery */
    parent: Query
    priv: YouTubeQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeQuery */
    getAge(): YouTubeAge
    getLicense(): string
    getLocation(): { latitude: number | null, longitude: number | null, radius: number | null }
    getOrderBy(): string
    getRestriction(): string
    getSafeSearch(): YouTubeSafeSearch
    setAge(age: YouTubeAge): void
    setLicense(license?: string | null): void
    setLocation(latitude: number, longitude: number, radius: number): void
    setOrderBy(orderBy?: string | null): void
    setRestriction(restriction?: string | null): void
    setSafeSearch(safeSearch: YouTubeSafeSearch): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeQuery_ConstructProps)
    _init (config?: YouTubeQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): YouTubeQuery
    static $gtype: GObject.Type
}
export interface YouTubeService_ConstructProps extends Service_ConstructProps {
    developerKey?: string
}
export class YouTubeService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.YouTubeService */
    parent: Service
    priv: YouTubeServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeService */
    finishVideoUpload(uploadStream: UploadStream): YouTubeVideo
    getCategories(cancellable?: Gio.Cancellable | null): APPCategories
    getCategoriesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCategoriesFinish(asyncResult: Gio.AsyncResult): APPCategories
    getDeveloperKey(): string
    queryRelated(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryRelatedAsync(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryStandardFeed(feedType: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryStandardFeedAsync(feedType: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryVideos(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryVideosAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    uploadVideo(video: YouTubeVideo, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeService_ConstructProps)
    _init (config?: YouTubeService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developerKey: string, authorizer?: Authorizer | null): YouTubeService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface YouTubeState_ConstructProps extends Parsable_ConstructProps {
    helpUri?: string
    message?: string
    name?: string
    reasonCode?: string
}
export class YouTubeState {
    /* Fields of GData-0.0.GData.YouTubeState */
    parent: Parsable
    priv: YouTubeStatePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeState */
    getHelpUri(): string
    getMessage(): string
    getName(): string
    getReasonCode(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeState_ConstructProps)
    _init (config?: YouTubeState_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeVideo_ConstructProps extends Entry_ConstructProps {
    aspectRatio?: string
    category?: MediaCategory
    description?: string
    isPrivate?: boolean
    keywords?: string[]
    latitude?: number
    location?: string
    longitude?: number
    recorded?: number
}
export class YouTubeVideo {
    /* Properties of GData-0.0.GData.YouTubeVideo */
    aspectRatio: string
    readonly averageRating: number
    category: MediaCategory
    description: string
    readonly duration: number
    readonly favoriteCount: number
    isPrivate: boolean
    keywords: string[]
    latitude: number
    location: string
    longitude: number
    readonly maxRating: number
    readonly minRating: number
    readonly playerUri: string
    readonly ratingCount: number
    recorded: number
    readonly state: YouTubeState
    readonly uploaded: number
    readonly viewCount: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.YouTubeVideo */
    parent: Entry
    priv: YouTubeVideoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeVideo */
    getAccessControl(action: string): YouTubePermission
    getAspectRatio(): string
    getCategory(): MediaCategory
    getCoordinates(): { latitude: number | null, longitude: number | null }
    getDescription(): string
    getDuration(): number
    getFavoriteCount(): number
    getKeywords(): string[]
    getLocation(): string
    getMediaRating(ratingType: string): string
    getPlayerUri(): string
    getRating(): { min: number | null, max: number | null, count: number | null, average: number | null }
    getRecorded(): number
    getState(): YouTubeState
    getThumbnails(): MediaThumbnail[]
    getUploaded(): number
    getViewCount(): number
    isRestrictedInCountry(country: string): boolean
    setAccessControl(action: string, permission: YouTubePermission): void
    setAspectRatio(aspectRatio?: string | null): void
    setCategory(category: MediaCategory): void
    setCoordinates(latitude: number, longitude: number): void
    setDescription(description?: string | null): void
    setIsPrivate(isPrivate: boolean): void
    setKeywords(keywords: string[]): void
    setLocation(location?: string | null): void
    setRecorded(recorded: number): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeVideo_ConstructProps)
    _init (config?: YouTubeVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): YouTubeVideo
    static getVideoIdFromUri(videoUri: string): string
    static $gtype: GObject.Type
}
export abstract class APPCategoriesClass {
    static name: string
}
export class APPCategoriesPrivate {
    static name: string
}
export abstract class AccessHandlerIface {
    /* Fields of GData-0.0.GData.AccessHandlerIface */
    parent: GObject.TypeInterface
    isOwnerRule: (rule: AccessRule) => boolean
    getRules: (self: AccessHandler, service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null) => Feed
    static name: string
}
export abstract class AccessRuleClass {
    static name: string
}
export class AccessRulePrivate {
    static name: string
}
export abstract class AuthorClass {
    static name: string
}
export class AuthorPrivate {
    static name: string
}
export abstract class AuthorizationDomainClass {
    static name: string
}
export class AuthorizationDomainPrivate {
    static name: string
}
export abstract class AuthorizerInterface {
    /* Fields of GData-0.0.GData.AuthorizerInterface */
    parent: GObject.TypeInterface
    processRequest: (self: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    isAuthorizedForDomain: (self: Authorizer | null, domain: AuthorizationDomain) => boolean
    refreshAuthorization: (self: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    refreshAuthorizationAsync: (self: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    refreshAuthorizationFinish: (self: Authorizer, asyncResult: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class BatchOperationClass {
    static name: string
}
export class BatchOperationPrivate {
    static name: string
}
export abstract class BatchableIface {
    /* Fields of GData-0.0.GData.BatchableIface */
    isSupported: (operationType: BatchOperationType) => boolean
    static name: string
}
export abstract class CalendarAccessRuleClass {
    static name: string
}
export abstract class CalendarCalendarClass {
    static name: string
}
export class CalendarCalendarPrivate {
    static name: string
}
export abstract class CalendarEventClass {
    static name: string
}
export class CalendarEventPrivate {
    static name: string
}
export abstract class CalendarFeedClass {
    static name: string
}
export class CalendarFeedPrivate {
    static name: string
}
export abstract class CalendarQueryClass {
    static name: string
}
export class CalendarQueryPrivate {
    static name: string
}
export abstract class CalendarServiceClass {
    static name: string
}
export class CalendarServicePrivate {
    static name: string
}
export abstract class CategoryClass {
    static name: string
}
export class CategoryPrivate {
    static name: string
}
export class Color {
    /* Fields of GData-0.0.GData.Color */
    red: number
    green: number
    blue: number
    /* Methods of GData-0.0.GData.Color */
    toHexadecimal(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromHexadecimal(hexadecimal: string): { returnType: boolean, color: Color }
}
export abstract class CommentClass {
    static name: string
}
export class CommentPrivate {
    static name: string
}
export abstract class CommentableInterface {
    /* Fields of GData-0.0.GData.CommentableInterface */
    parent: GObject.TypeInterface
    commentType: GObject.Type
    getQueryCommentsUri: (self: Commentable) => string
    getInsertCommentUri: (self: Commentable, comment: Comment) => string
    isCommentDeletable: (self: Commentable, comment: Comment) => boolean
    static name: string
}
export abstract class ComparableIface {
    /* Fields of GData-0.0.GData.ComparableIface */
    parent: GObject.TypeInterface
    compareWith: (self: Comparable, other: Comparable) => number
    static name: string
}
export abstract class DocumentsAccessRuleClass {
    static name: string
}
export abstract class DocumentsDocumentClass {
    static name: string
}
export class DocumentsDocumentPrivate {
    static name: string
}
export abstract class DocumentsDrawingClass {
    static name: string
}
export class DocumentsDrawingPrivate {
    static name: string
}
export abstract class DocumentsDriveClass {
    static name: string
}
export abstract class DocumentsDriveQueryClass {
    static name: string
}
export abstract class DocumentsEntryClass {
    static name: string
}
export class DocumentsEntryPrivate {
    static name: string
}
export abstract class DocumentsFeedClass {
    static name: string
}
export class DocumentsFeedPrivate {
    static name: string
}
export abstract class DocumentsFolderClass {
    static name: string
}
export class DocumentsFolderPrivate {
    static name: string
}
export abstract class DocumentsMetadataClass {
    static name: string
}
export class DocumentsMetadataPrivate {
    static name: string
}
export abstract class DocumentsPdfClass {
    static name: string
}
export class DocumentsPdfPrivate {
    static name: string
}
export abstract class DocumentsPresentationClass {
    static name: string
}
export class DocumentsPresentationPrivate {
    static name: string
}
export abstract class DocumentsPropertyClass {
    static name: string
}
export class DocumentsPropertyPrivate {
    static name: string
}
export abstract class DocumentsQueryClass {
    static name: string
}
export class DocumentsQueryPrivate {
    static name: string
}
export abstract class DocumentsServiceClass {
    static name: string
}
export class DocumentsServicePrivate {
    static name: string
}
export abstract class DocumentsSpreadsheetClass {
    static name: string
}
export class DocumentsSpreadsheetPrivate {
    static name: string
}
export abstract class DocumentsTextClass {
    static name: string
}
export class DocumentsTextPrivate {
    static name: string
}
export abstract class DocumentsUploadQueryClass {
    static name: string
}
export class DocumentsUploadQueryPrivate {
    static name: string
}
export abstract class DownloadStreamClass {
    static name: string
}
export class DownloadStreamPrivate {
    static name: string
}
export abstract class EntryClass {
    /* Fields of GData-0.0.GData.EntryClass */
    parent: ParsableClass
    getEntryUri: (id: string) => string
    kindTerm: string
    static name: string
}
export class EntryPrivate {
    static name: string
}
export abstract class FeedClass {
    static name: string
}
export class FeedPrivate {
    static name: string
}
export abstract class GContactCalendarClass {
    static name: string
}
export class GContactCalendarPrivate {
    static name: string
}
export abstract class GContactEventClass {
    static name: string
}
export class GContactEventPrivate {
    static name: string
}
export abstract class GContactExternalIDClass {
    static name: string
}
export class GContactExternalIDPrivate {
    static name: string
}
export abstract class GContactJotClass {
    static name: string
}
export class GContactJotPrivate {
    static name: string
}
export abstract class GContactLanguageClass {
    static name: string
}
export class GContactLanguagePrivate {
    static name: string
}
export abstract class GContactRelationClass {
    static name: string
}
export class GContactRelationPrivate {
    static name: string
}
export abstract class GContactWebsiteClass {
    static name: string
}
export class GContactWebsitePrivate {
    static name: string
}
export abstract class GDEmailAddressClass {
    static name: string
}
export class GDEmailAddressPrivate {
    static name: string
}
export abstract class GDIMAddressClass {
    static name: string
}
export class GDIMAddressPrivate {
    static name: string
}
export abstract class GDNameClass {
    static name: string
}
export class GDNamePrivate {
    static name: string
}
export abstract class GDOrganizationClass {
    static name: string
}
export class GDOrganizationPrivate {
    static name: string
}
export abstract class GDPhoneNumberClass {
    static name: string
}
export class GDPhoneNumberPrivate {
    static name: string
}
export abstract class GDPostalAddressClass {
    static name: string
}
export class GDPostalAddressPrivate {
    static name: string
}
export abstract class GDReminderClass {
    static name: string
}
export class GDReminderPrivate {
    static name: string
}
export abstract class GDWhenClass {
    static name: string
}
export class GDWhenPrivate {
    static name: string
}
export abstract class GDWhereClass {
    static name: string
}
export class GDWherePrivate {
    static name: string
}
export abstract class GDWhoClass {
    static name: string
}
export class GDWhoPrivate {
    static name: string
}
export abstract class GeneratorClass {
    static name: string
}
export class GeneratorPrivate {
    static name: string
}
export abstract class GoaAuthorizerClass {
    static name: string
}
export class GoaAuthorizerPrivate {
    static name: string
}
export abstract class LinkClass {
    static name: string
}
export class LinkPrivate {
    static name: string
}
export abstract class MediaCategoryClass {
    static name: string
}
export class MediaCategoryPrivate {
    static name: string
}
export abstract class MediaContentClass {
    static name: string
}
export class MediaContentPrivate {
    static name: string
}
export abstract class MediaCreditClass {
    static name: string
}
export class MediaCreditPrivate {
    static name: string
}
export abstract class MediaThumbnailClass {
    static name: string
}
export class MediaThumbnailPrivate {
    static name: string
}
export abstract class OAuth2AuthorizerClass {
    static name: string
}
export class OAuth2AuthorizerPrivate {
    static name: string
}
export abstract class ParsableClass {
    /* Fields of GData-0.0.GData.ParsableClass */
    parent: GObject.ObjectClass
    preParseXml: (parsable: Parsable, doc: libxml2.Doc, rootNode: libxml2.Node) => boolean
    parseXml: (parsable: Parsable, doc: libxml2.Doc, node: libxml2.Node) => boolean
    postParseXml: (parsable: Parsable) => boolean
    preGetXml: (parsable: Parsable, xmlString: GLib.String) => void
    getXml: (parsable: Parsable, xmlString: GLib.String) => void
    getNamespaces: (parsable: Parsable, namespaces: GLib.HashTable) => void
    parseJson: (parsable: Parsable, reader: Json.Reader) => boolean
    postParseJson: (parsable: Parsable) => boolean
    getJson: (parsable: Parsable, builder: Json.Builder) => void
    getContentType: () => string
    elementName: string
    elementNamespace: string
    static name: string
}
export class ParsablePrivate {
    static name: string
}
export abstract class PicasaWebAlbumClass {
    static name: string
}
export class PicasaWebAlbumPrivate {
    static name: string
}
export abstract class PicasaWebCommentClass {
    static name: string
}
export class PicasaWebCommentPrivate {
    static name: string
}
export abstract class PicasaWebFeedClass {
    static name: string
}
export abstract class PicasaWebFileClass {
    static name: string
}
export class PicasaWebFilePrivate {
    static name: string
}
export abstract class PicasaWebQueryClass {
    static name: string
}
export class PicasaWebQueryPrivate {
    static name: string
}
export abstract class PicasaWebServiceClass {
    static name: string
}
export abstract class PicasaWebUserClass {
    static name: string
}
export class PicasaWebUserPrivate {
    static name: string
}
export abstract class QueryClass {
    /* Fields of GData-0.0.GData.QueryClass */
    getQueryUri: (self: Query, feedUri: string, queryUri: GLib.String, paramsStarted: boolean) => void
    static name: string
}
export class QueryPrivate {
    static name: string
}
export abstract class ServiceClass {
    /* Fields of GData-0.0.GData.ServiceClass */
    parent: GObject.ObjectClass
    apiVersion: string
    feedType: GObject.Type
    appendQueryHeaders: (self: Service, domain: AuthorizationDomain, message: Soup.Message) => void
    parseErrorResponse: (self: Service, operationType: OperationType, status: number, reasonPhrase: string, responseBody: string, length: number) => void
    static name: string
}
export class ServicePrivate {
    static name: string
}
export abstract class TasksQueryClass {
    static name: string
}
export class TasksQueryPrivate {
    static name: string
}
export abstract class TasksServiceClass {
    static name: string
}
export abstract class TasksTaskClass {
    static name: string
}
export class TasksTaskPrivate {
    static name: string
}
export abstract class TasksTasklistClass {
    static name: string
}
export abstract class UploadStreamClass {
    static name: string
}
export class UploadStreamPrivate {
    static name: string
}
export abstract class YouTubeCategoryClass {
    static name: string
}
export class YouTubeCategoryPrivate {
    static name: string
}
export abstract class YouTubeCommentClass {
    static name: string
}
export class YouTubeCommentPrivate {
    static name: string
}
export abstract class YouTubeFeedClass {
    static name: string
}
export class YouTubeFeedPrivate {
    static name: string
}
export abstract class YouTubeQueryClass {
    static name: string
}
export class YouTubeQueryPrivate {
    static name: string
}
export abstract class YouTubeServiceClass {
    static name: string
}
export class YouTubeServicePrivate {
    static name: string
}
export abstract class YouTubeStateClass {
    static name: string
}
export class YouTubeStatePrivate {
    static name: string
}
export abstract class YouTubeVideoClass {
    static name: string
}
export class YouTubeVideoPrivate {
    static name: string
}
}