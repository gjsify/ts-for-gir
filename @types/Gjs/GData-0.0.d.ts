/**
 * GData-0.0
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';

export enum BatchOperationType {
    QUERY,
    INSERTION,
    UPDATE,
    DELETION,
}
export enum ClientLoginAuthorizerError {
    BAD_AUTHENTICATION,
    NOT_VERIFIED,
    TERMS_NOT_AGREED,
    CAPTCHA_REQUIRED,
    ACCOUNT_DELETED,
    ACCOUNT_DISABLED,
    SERVICE_DISABLED,
    ACCOUNT_MIGRATED,
    INVALID_SECOND_FACTOR,
}
export enum DocumentsServiceError {
    TYPE,
}
export enum FreebaseSearchFilterType {
    ALL,
    ANY,
    NOT,
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
export enum YouTubeFormat {
    UNKNOWN,
    RTSP_H263_AMR,
    HTTP_SWF,
    RTSP_MPEG4_AAC,
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
export enum YouTubeSortOrder {
    NONE,
    ASCENDING,
    DESCENDING,
}
export enum YouTubeStandardFeedType {
    TOP_RATED_FEED,
    TOP_FAVORITES_FEED,
    MOST_VIEWED_FEED,
    MOST_POPULAR_FEED,
    MOST_RECENT_FEED,
    MOST_DISCUSSED_FEED,
    MOST_LINKED_FEED,
    MOST_RESPONDED_FEED,
    RECENTLY_FEATURED_FEED,
    WATCH_ON_MOBILE_FEED,
}
export enum YouTubeUploader {
    ALL,
    PARTNER,
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
export const CONTACTS_GENDER_FEMALE: string
export const CONTACTS_GENDER_MALE: string
export const CONTACTS_GROUP_CONTACTS: string
export const CONTACTS_GROUP_COWORKERS: string
export const CONTACTS_GROUP_FAMILY: string
export const CONTACTS_GROUP_FRIENDS: string
export const CONTACTS_PRIORITY_HIGH: string
export const CONTACTS_PRIORITY_LOW: string
export const CONTACTS_PRIORITY_NORMAL: string
export const CONTACTS_SENSITIVITY_CONFIDENTIAL: string
export const CONTACTS_SENSITIVITY_NORMAL: string
export const CONTACTS_SENSITIVITY_PERSONAL: string
export const CONTACTS_SENSITIVITY_PRIVATE: string
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
export const DOCUMENTS_PRESENTATION_SWF: string
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
export const YOUTUBE_CREDIT_ENTITY_PARTNER: string
export const YOUTUBE_LICENSE_CC: string
export const YOUTUBE_LICENSE_STANDARD: string
export const YOUTUBE_RATING_TYPE_MPAA: string
export const YOUTUBE_RATING_TYPE_SIMPLE: string
export const YOUTUBE_RATING_TYPE_V_CHIP: string
export function client_login_authorizer_error_quark(): GLib.Quark
export function color_from_hexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
export function documents_service_error_quark(): GLib.Quark
export function parser_error_quark(): GLib.Quark
export function service_error_quark(): GLib.Quark
export function youtube_service_error_quark(): GLib.Quark
export interface BatchOperationCallback {
    (operation_id: number, operation_type: BatchOperationType, entry: Entry, error: GLib.Error): void
}
export interface QueryProgressCallback {
    (entry: Entry, entry_key: number, entry_count: number): void
}
export interface AccessHandler_ConstructProps extends Entry_ConstructProps {
}
export class AccessHandler {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.AccessHandler */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccessHandler_ConstructProps)
    _init (config?: AccessHandler_ConstructProps): void
    static $gtype: GObject.Type
}
export class Authorizer {
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GData-0.0.GData.Authorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    static name: string
}
export interface Batchable_ConstructProps extends Service_ConstructProps {
}
export class Batchable {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    parent: GObject.Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Batchable */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Batchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Commentable */
    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean
    delete_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_comment_finish(result: Gio.AsyncResult): boolean
    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insert_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_comment_finish(result: Gio.AsyncResult): Comment | null
    query_comments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed | null
    query_comments_async(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_comments_finish(result: Gio.AsyncResult): Feed | null
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Commentable */
    vfunc_get_insert_comment_uri(comment: Comment): string
    vfunc_get_query_comments_uri(): string
    vfunc_is_comment_deletable(comment: Comment): boolean
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Commentable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Commentable_ConstructProps)
    _init (config?: Commentable_ConstructProps): void
    static $gtype: GObject.Type
}
export class Comparable {
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Comparable */
    vfunc_compare_with(other: Comparable): number
    static name: string
}
export interface APPCategories_ConstructProps extends Parsable_ConstructProps {
}
export class APPCategories {
    /* Properties of GData-0.0.GData.APPCategories */
    readonly is_fixed: boolean
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.APPCategories */
    get_categories(): Category[]
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-fixed", callback: (($obj: APPCategories, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: APPCategories_ConstructProps)
    _init (config?: APPCategories_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AccessRule_ConstructProps extends Entry_ConstructProps {
    role?: string
    scope_type?: string
    scope_value?: string
}
export class AccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scope_type: string
    scope_value: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.AccessRule */
    parent: Entry
    priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    get_edited(): number
    get_key(): string
    get_role(): string
    get_scope(): [ /* type */ string | null, /* value */ string | null ]
    set_role(role: string): void
    set_scope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: AccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccessRule_ConstructProps)
    _init (config?: AccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): AccessRule
    static new(id?: string | null): AccessRule
    static $gtype: GObject.Type
}
export interface Author_ConstructProps extends Parsable_ConstructProps {
    email_address?: string
    name?: string
    uri?: string
}
export class Author {
    /* Properties of GData-0.0.GData.Author */
    email_address: string
    name: string
    uri: string
    /* Fields of GData-0.0.GData.Author */
    parent: Parsable
    priv: AuthorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Author */
    get_email_address(): string
    get_name(): string
    get_uri(): string
    set_email_address(email_address?: string | null): void
    set_name(name: string): void
    set_uri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Author */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Author, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Author_ConstructProps)
    _init (config?: Author_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, uri?: string | null, email_address?: string | null): Author
    static $gtype: GObject.Type
}
export interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    scope?: string
    service_name?: string
}
export class AuthorizationDomain {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AuthorizationDomain */
    get_scope(): string
    get_service_name(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthorizationDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BatchOperation_ConstructProps extends GObject.Object_ConstructProps {
    authorization_domain?: AuthorizationDomain
    feed_uri?: string
    service?: Service
}
export class BatchOperation {
    /* Fields of GData-0.0.GData.BatchOperation */
    parent: GObject.Object
    priv: BatchOperationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.BatchOperation */
    add_deletion(entry: Entry, callback: BatchOperationCallback): number
    add_insertion(entry: Entry, callback: BatchOperationCallback): number
    add_query(id: string, entry_type: GObject.Type, callback: BatchOperationCallback): number
    add_update(entry: Entry, callback: BatchOperationCallback): number
    get_authorization_domain(): AuthorizationDomain | null
    get_feed_uri(): string
    get_service(): Service
    run(cancellable?: Gio.Cancellable | null): boolean
    run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_finish(async_result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BatchOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    scope_type: string
    scope_value: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    get_edited(): number
    get_key(): string
    get_role(): string
    get_scope(): [ /* type */ string | null, /* value */ string | null ]
    set_role(role: string): void
    set_scope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    is_hidden?: boolean
    is_selected?: boolean
    timezone?: string
}
export class CalendarCalendar {
    /* Properties of GData-0.0.GData.CalendarCalendar */
    readonly access_level: string
    color: Color
    readonly edited: number
    is_hidden: boolean
    is_selected: boolean
    readonly times_cleaned: number
    timezone: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarCalendar */
    parent: Entry
    priv: CalendarCalendarPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarCalendar */
    get_access_level(): string
    get_color(): /* color */ Color
    get_edited(): number
    get_times_cleaned(): number
    get_timezone(): string
    set_color(color: Color): void
    set_is_hidden(is_hidden: boolean): void
    set_is_selected(is_selected: boolean): void
    set_timezone(_timezone?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.CalendarCalendar */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-level", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-selected", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::times-cleaned", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::times-cleaned", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarCalendar_ConstructProps)
    _init (config?: CalendarCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): CalendarCalendar
    static $gtype: GObject.Type
}
export interface CalendarEvent_ConstructProps extends Entry_ConstructProps {
    anyone_can_add_self?: boolean
    guests_can_invite_others?: boolean
    guests_can_modify?: boolean
    guests_can_see_guests?: boolean
    recurrence?: string
    sequence?: number
    status?: string
    transparency?: string
    uid?: string
    visibility?: string
}
export class CalendarEvent {
    /* Properties of GData-0.0.GData.CalendarEvent */
    anyone_can_add_self: boolean
    readonly edited: number
    guests_can_invite_others: boolean
    guests_can_modify: boolean
    guests_can_see_guests: boolean
    readonly original_event_id: string
    readonly original_event_uri: string
    recurrence: string
    sequence: number
    status: string
    transparency: string
    uid: string
    visibility: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarEvent */
    parent: Entry
    priv: CalendarEventPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarEvent */
    add_person(who: GDWho): void
    add_place(where: GDWhere): void
    add_time(when: GDWhen): void
    get_anyone_can_add_self(): boolean
    get_edited(): number
    get_guests_can_invite_others(): boolean
    get_guests_can_modify(): boolean
    get_guests_can_see_guests(): boolean
    get_original_event_details(): [ /* event_id */ string, /* event_uri */ string ]
    get_people(): GDWho[]
    get_places(): GDWhere[]
    get_primary_time(): [ /* returnType */ boolean, /* start_time */ number, /* end_time */ number, /* when */ GDWhen ]
    get_recurrence(): string
    get_sequence(): number
    get_status(): string
    get_times(): GDWhen[]
    get_transparency(): string
    get_uid(): string
    get_visibility(): string
    is_exception(): boolean
    set_anyone_can_add_self(anyone_can_add_self: boolean): void
    set_guests_can_invite_others(guests_can_invite_others: boolean): void
    set_guests_can_modify(guests_can_modify: boolean): void
    set_guests_can_see_guests(guests_can_see_guests: boolean): void
    set_recurrence(recurrence?: string | null): void
    set_sequence(sequence: number): void
    set_status(status?: string | null): void
    set_transparency(transparency?: string | null): void
    set_uid(uid?: string | null): void
    set_visibility(visibility?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anyone-can-add-self", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-invite-others", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-modify", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-see-guests", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-id", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sequence", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GData-0.0.GData.CalendarFeed */
    readonly times_cleaned: number
    readonly timezone: string
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly items_per_page: number
    readonly logo: string
    readonly next_page_token: string
    readonly rights: string
    readonly start_index: number
    readonly subtitle: string
    readonly title: string
    readonly total_results: number
    readonly updated: number
    /* Fields of GData-0.0.GData.CalendarFeed */
    parent: Feed
    priv: CalendarFeedPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarFeed */
    get_times_cleaned(): number
    get_timezone(): string
    /* Methods of GData-0.0.GData.Feed */
    get_authors(): Author[]
    get_categories(): Category[]
    get_entries(): Entry[]
    get_etag(): string
    get_generator(): Generator
    get_icon(): string
    get_id(): string
    get_items_per_page(): number
    get_links(): Link[]
    get_logo(): string
    get_next_page_token(): string | null
    get_rights(): string
    get_start_index(): number
    get_subtitle(): string
    get_title(): string
    get_total_results(): number
    get_updated(): number
    look_up_entry(id: string): Entry
    look_up_link(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::times-cleaned", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::times-cleaned", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timezone", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: CalendarFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarFeed_ConstructProps)
    _init (config?: CalendarFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CalendarQuery_ConstructProps extends Query_ConstructProps {
    future_events?: boolean
    max_attendees?: number
    order_by?: string
    recurrence_expansion_end?: number
    recurrence_expansion_start?: number
    show_deleted?: boolean
    single_events?: boolean
    sort_order?: string
    start_max?: number
    start_min?: number
    timezone?: string
}
export class CalendarQuery {
    /* Properties of GData-0.0.GData.CalendarQuery */
    future_events: boolean
    max_attendees: number
    order_by: string
    recurrence_expansion_end: number
    recurrence_expansion_start: number
    show_deleted: boolean
    single_events: boolean
    sort_order: string
    start_max: number
    start_min: number
    timezone: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.CalendarQuery */
    parent: Query
    priv: CalendarQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarQuery */
    get_future_events(): boolean
    get_max_attendees(): number
    get_order_by(): string
    get_recurrence_expansion_end(): number
    get_recurrence_expansion_start(): number
    get_single_events(): boolean
    get_sort_order(): string
    get_start_max(): number
    get_start_min(): number
    get_timezone(): string
    set_future_events(future_events: boolean): void
    set_max_attendees(max_attendees: number): void
    set_order_by(order_by?: string | null): void
    set_recurrence_expansion_end(end: number): void
    set_recurrence_expansion_start(start: number): void
    set_show_deleted(show_deleted: boolean): void
    set_single_events(single_events: boolean): void
    set_sort_order(sort_order?: string | null): void
    set_start_max(start_max: number): void
    set_start_min(start_min: number): void
    set_timezone(_timezone?: string | null): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-attendees", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recurrence-expansion-end", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence-expansion-end", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recurrence-expansion-start", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence-expansion-start", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-events", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-order", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-order", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: CalendarQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarQuery_ConstructProps)
    _init (config?: CalendarQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): CalendarQuery
    static new_with_limits(q: string | null, start_min: number, start_max: number): CalendarQuery
    static $gtype: GObject.Type
}
export interface CalendarService_ConstructProps extends Service_ConstructProps {
}
export class CalendarService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.CalendarService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarService */
    insert_calendar_event(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent
    insert_calendar_event_async(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_event(event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent
    insert_event_async(event: CalendarEvent, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_all_calendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_all_calendars_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_events(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_events_async(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_own_calendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_own_calendars_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: CalendarService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalendarService_ConstructProps)
    _init (config?: CalendarService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): CalendarService
    static get_primary_authorization_domain(): AuthorizationDomain
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Category */
    get_label(): string
    get_scheme(): string
    get_term(): string
    set_label(label?: string | null): void
    set_scheme(scheme?: string | null): void
    set_term(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Category */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(term: string, scheme?: string | null, label?: string | null): Category
    static $gtype: GObject.Type
}
export interface ClientLoginAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    client_id?: string
    proxy_resolver?: Gio.ProxyResolver
    proxy_uri?: Soup.URI
    timeout?: number
}
export class ClientLoginAuthorizer {
    /* Properties of GData-0.0.GData.ClientLoginAuthorizer */
    readonly password: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    readonly username: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.ClientLoginAuthorizer */
    authenticate(username: string, password: string, cancellable?: Gio.Cancellable | null): boolean
    authenticate_async(username: string, password: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(async_result: Gio.AsyncResult): boolean
    get_client_id(): string
    get_password(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    get_username(): string
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GData-0.0.GData.ClientLoginAuthorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GData-0.0.GData.ClientLoginAuthorizer */
    connect(sigName: "captcha-challenge", callback: (($obj: ClientLoginAuthorizer, uri: string) => string)): number
    connect_after(sigName: "captcha-challenge", callback: (($obj: ClientLoginAuthorizer, uri: string) => string)): number
    emit(sigName: "captcha-challenge", uri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: ClientLoginAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientLoginAuthorizer_ConstructProps)
    _init (config?: ClientLoginAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client_id: string, service_type: GObject.Type): ClientLoginAuthorizer
    static new_for_authorization_domains(client_id: string, authorization_domains: AuthorizationDomain[]): ClientLoginAuthorizer
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends Entry_ConstructProps {
}
export class Comment {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Comment */
    parent: Entry
    priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContactsContact_ConstructProps extends Entry_ConstructProps {
    billing_information?: string
    birthday?: GLib.Date
    birthday_has_year?: boolean
    directory_server?: string
    file_as?: string
    gender?: string
    initials?: string
    maiden_name?: string
    mileage?: string
    name?: GDName
    nickname?: string
    occupation?: string
    priority?: string
    sensitivity?: string
    short_name?: string
    subject?: string
}
export class ContactsContact {
    /* Properties of GData-0.0.GData.ContactsContact */
    billing_information: string
    birthday: GLib.Date
    birthday_has_year: boolean
    readonly deleted: boolean
    directory_server: string
    readonly edited: number
    file_as: string
    gender: string
    initials: string
    maiden_name: string
    mileage: string
    name: GDName
    nickname: string
    occupation: string
    readonly photo_etag: string
    priority: string
    sensitivity: string
    short_name: string
    subject: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.ContactsContact */
    parent: Entry
    priv: ContactsContactPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.ContactsContact */
    add_calendar(calendar: GContactCalendar): void
    add_email_address(email_address: GDEmailAddress): void
    add_event(event: GContactEvent): void
    add_external_id(external_id: GContactExternalID): void
    add_group(href: string): void
    add_hobby(hobby: string): void
    add_im_address(im_address: GDIMAddress): void
    add_jot(jot: GContactJot): void
    add_language(language: GContactLanguage): void
    add_organization(organization: GDOrganization): void
    add_phone_number(phone_number: GDPhoneNumber): void
    add_postal_address(postal_address: GDPostalAddress): void
    add_relation(relation: GContactRelation): void
    add_website(website: GContactWebsite): void
    get_billing_information(): string
    get_birthday(): [ /* returnType */ boolean, /* birthday */ GLib.Date | null ]
    get_calendars(): GContactCalendar[]
    get_directory_server(): string
    get_edited(): number
    get_email_addresses(): GDEmailAddress[]
    get_events(): GContactEvent[]
    get_extended_properties(): GLib.HashTable
    get_extended_property(name: string): string
    get_external_ids(): GContactExternalID[]
    get_file_as(): string
    get_gender(): string
    get_groups(): string[]
    get_hobbies(): string[]
    get_im_addresses(): GDIMAddress[]
    get_initials(): string
    get_jots(): GContactJot[]
    get_languages(): GContactLanguage[]
    get_maiden_name(): string
    get_mileage(): string
    get_name(): GDName
    get_nickname(): string
    get_occupation(): string
    get_organizations(): GDOrganization[]
    get_phone_numbers(): GDPhoneNumber[]
    get_photo(service: ContactsService, cancellable?: Gio.Cancellable | null): [ /* returnType */ Uint8Array[], /* content_type */ string | null ]
    get_photo_async(service: ContactsService, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_photo_etag(): string
    get_photo_finish(async_result: Gio.AsyncResult): [ /* returnType */ Uint8Array[], /* content_type */ string | null ]
    get_postal_addresses(): GDPostalAddress[]
    get_primary_calendar(): GContactCalendar
    get_primary_email_address(): GDEmailAddress
    get_primary_im_address(): GDIMAddress
    get_primary_organization(): GDOrganization
    get_primary_phone_number(): GDPhoneNumber
    get_primary_postal_address(): GDPostalAddress
    get_primary_website(): GContactWebsite
    get_priority(): string
    get_relations(): GContactRelation[]
    get_sensitivity(): string
    get_short_name(): string
    get_subject(): string
    get_user_defined_field(name: string): string
    get_user_defined_fields(): GLib.HashTable
    get_websites(): GContactWebsite[]
    is_deleted(): boolean
    is_group_deleted(href: string): boolean
    remove_all_calendars(): void
    remove_all_email_addresses(): void
    remove_all_events(): void
    remove_all_external_ids(): void
    remove_all_hobbies(): void
    remove_all_im_addresses(): void
    remove_all_jots(): void
    remove_all_languages(): void
    remove_all_organizations(): void
    remove_all_phone_numbers(): void
    remove_all_postal_addresses(): void
    remove_all_relations(): void
    remove_all_websites(): void
    remove_group(href: string): void
    set_billing_information(billing_information?: string | null): void
    set_birthday(birthday: GLib.Date | null, birthday_has_year: boolean): void
    set_directory_server(directory_server?: string | null): void
    set_extended_property(name: string, value?: string | null): boolean
    set_file_as(file_as?: string | null): void
    set_gender(gender?: string | null): void
    set_initials(initials?: string | null): void
    set_maiden_name(maiden_name?: string | null): void
    set_mileage(mileage?: string | null): void
    set_name(name: GDName): void
    set_nickname(nickname?: string | null): void
    set_occupation(occupation?: string | null): void
    set_photo(service: ContactsService, data: number | null, length: number, content_type?: string | null, cancellable?: Gio.Cancellable | null): boolean
    set_photo_async(service: ContactsService, data: number | null, length: number, content_type?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_photo_finish(async_result: Gio.AsyncResult): boolean
    set_priority(priority?: string | null): void
    set_sensitivity(sensitivity?: string | null): void
    set_short_name(short_name?: string | null): void
    set_subject(subject?: string | null): void
    set_user_defined_field(name: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::billing-information", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::billing-information", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birthday", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birthday-has-year", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday-has-year", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deleted", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::directory-server", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory-server", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-as", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-as", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gender", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initials", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initials", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maiden-name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maiden-name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mileage", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mileage", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::occupation", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occupation", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photo-etag", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photo-etag", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitivity", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitivity", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::short-name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-name", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: ContactsContact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsContact_ConstructProps)
    _init (config?: ContactsContact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): ContactsContact
    static $gtype: GObject.Type
}
export interface ContactsGroup_ConstructProps extends Entry_ConstructProps {
}
export class ContactsGroup {
    /* Properties of GData-0.0.GData.ContactsGroup */
    readonly deleted: boolean
    readonly edited: number
    readonly system_group_id: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.ContactsGroup */
    parent: Entry
    priv: ContactsGroupPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.ContactsGroup */
    get_edited(): number
    get_extended_properties(): GLib.HashTable
    get_extended_property(name: string): string
    get_system_group_id(): string
    is_deleted(): boolean
    set_extended_property(name: string, value?: string | null): boolean
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deleted", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-group-id", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-group-id", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: ContactsGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsGroup_ConstructProps)
    _init (config?: ContactsGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): ContactsGroup
    static $gtype: GObject.Type
}
export interface ContactsQuery_ConstructProps extends Query_ConstructProps {
    group?: string
    order_by?: string
    show_deleted?: boolean
    sort_order?: string
}
export class ContactsQuery {
    /* Properties of GData-0.0.GData.ContactsQuery */
    group: string
    order_by: string
    show_deleted: boolean
    sort_order: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.ContactsQuery */
    parent: Query
    priv: ContactsQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.ContactsQuery */
    get_group(): string
    get_order_by(): string
    get_sort_order(): string
    set_group(group?: string | null): void
    set_order_by(order_by?: string | null): void
    set_show_deleted(show_deleted: boolean): void
    set_sort_order(sort_order?: string | null): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::group", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order-by", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-deleted", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-order", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-order", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: ContactsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsQuery_ConstructProps)
    _init (config?: ContactsQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): ContactsQuery
    static new_with_limits(q: string | null, start_index: number, max_results: number): ContactsQuery
    static $gtype: GObject.Type
}
export interface ContactsService_ConstructProps extends Service_ConstructProps {
}
export class ContactsService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.ContactsService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.ContactsService */
    insert_contact(contact: ContactsContact, cancellable?: Gio.Cancellable | null): ContactsContact
    insert_contact_async(contact: ContactsContact, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_group(group: ContactsGroup, cancellable?: Gio.Cancellable | null): ContactsGroup
    insert_group_async(group: ContactsGroup, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_contacts(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_contacts_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_groups(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_groups_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: ContactsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContactsService_ConstructProps)
    _init (config?: ContactsService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): ContactsService
    static get_primary_authorization_domain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface DocumentsAccessRule_ConstructProps extends AccessRule_ConstructProps {
}
export class DocumentsAccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scope_type: string
    scope_value: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    get_edited(): number
    get_key(): string
    get_role(): string
    get_scope(): [ /* type */ string | null, /* value */ string | null ]
    set_role(role: string): void
    set_scope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsAccessRule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    parent: DocumentsEntry
    priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDrawing */
    parent: DocumentsDocument
    priv: DocumentsDrawingPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDrive */
    parent_instance: Entry
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDrive */
    get_name(): string | null
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsDrive, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.DocumentsDriveQuery */
    parent_instance: Query
    /* Fields of GData-0.0.GData.Query */
    parent: GObject.Object
    priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsDriveQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsDriveQuery_ConstructProps)
    _init (config?: DocumentsDriveQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsDriveQuery
    static $gtype: GObject.Type
}
export interface DocumentsEntry_ConstructProps extends Entry_ConstructProps {
    is_deleted?: boolean
    writers_can_invite?: boolean
}
export class DocumentsEntry {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsEntry */
    parent: Entry
    priv: DocumentsEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly items_per_page: number
    readonly logo: string
    readonly next_page_token: string
    readonly rights: string
    readonly start_index: number
    readonly subtitle: string
    readonly title: string
    readonly total_results: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    get_authors(): Author[]
    get_categories(): Category[]
    get_entries(): Entry[]
    get_etag(): string
    get_generator(): Generator
    get_icon(): string
    get_id(): string
    get_items_per_page(): number
    get_links(): Link[]
    get_logo(): string
    get_next_page_token(): string | null
    get_rights(): string
    get_start_index(): number
    get_subtitle(): string
    get_title(): string
    get_total_results(): number
    get_updated(): number
    look_up_entry(id: string): Entry
    look_up_link(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsFeed_ConstructProps)
    _init (config?: DocumentsFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsFolder_ConstructProps extends DocumentsEntry_ConstructProps {
}
export class DocumentsFolder {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsFolder */
    parent: DocumentsEntry
    priv: DocumentsFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly quota_total: number
    readonly quota_used: number
    /* Fields of GData-0.0.GData.DocumentsMetadata */
    parent: Parsable
    priv: DocumentsMetadataPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsMetadata */
    get_quota_total(): number
    get_quota_used(): number
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-total", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsMetadata_ConstructProps)
    _init (config?: DocumentsMetadata_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentsPdf_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsPdf {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsPdf */
    parent: DocumentsDocument
    priv: DocumentsPdfPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPdf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsPresentation */
    parent: DocumentsDocument
    priv: DocumentsPresentationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsProperty */
    get_etag(): string
    get_key(): string
    get_value(): string | null
    get_visibility(): string
    set_value(value?: string | null): void
    set_visibility(visibility: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.DocumentsProperty */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DocumentsProperty, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsProperty_ConstructProps)
    _init (config?: DocumentsProperty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key: string): DocumentsProperty
    static $gtype: GObject.Type
}
export interface DocumentsQuery_ConstructProps extends Query_ConstructProps {
    exact_title?: boolean
    folder_id?: string
    show_deleted?: boolean
    show_folders?: boolean
    title?: string
}
export class DocumentsQuery {
    /* Properties of GData-0.0.GData.DocumentsQuery */
    exact_title: boolean
    folder_id: string
    show_deleted: boolean
    show_folders: boolean
    title: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.DocumentsQuery */
    parent: Query
    priv: DocumentsQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsQuery */
    add_collaborator(email_address: string): void
    add_reader(email_address: string): void
    get_collaborator_addresses(): GDEmailAddress[]
    get_exact_title(): boolean
    get_folder_id(): string
    get_reader_addresses(): GDEmailAddress[]
    get_title(): string
    set_folder_id(folder_id?: string | null): void
    set_show_deleted(show_deleted: boolean): void
    set_show_folders(show_folders: boolean): void
    set_title(title: string | null, exact_title: boolean): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exact-title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-id", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-folders", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: DocumentsQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsQuery_ConstructProps)
    _init (config?: DocumentsQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsQuery
    static new_with_limits(q: string | null, start_index: number, max_results: number): DocumentsQuery
    static $gtype: GObject.Type
}
export interface DocumentsService_ConstructProps extends Service_ConstructProps {
}
export class DocumentsService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.DocumentsService */
    parent: Service
    priv: DocumentsServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsService */
    add_entry_to_folder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    add_entry_to_folder_async(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_entry_to_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry
    copy_document(document: DocumentsDocument, cancellable?: Gio.Cancellable | null): DocumentsDocument
    copy_document_async(document: DocumentsDocument, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    copy_document_finish(async_result: Gio.AsyncResult): DocumentsDocument
    finish_upload(upload_stream: UploadStream): DocumentsDocument
    get_metadata(cancellable?: Gio.Cancellable | null): DocumentsMetadata
    get_metadata_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_metadata_finish(async_result: Gio.AsyncResult): DocumentsMetadata
    query_documents(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): DocumentsFeed
    query_documents_async(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_drives(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): DocumentsFeed
    query_drives_async(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_entry_from_folder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    remove_entry_from_folder_async(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_entry_from_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry
    update_document(document: DocumentsDocument, slug: string, content_type: string, cancellable?: Gio.Cancellable | null): UploadStream
    update_document_resumable(document: DocumentsDocument, slug: string, content_type: string, content_length: number, cancellable?: Gio.Cancellable | null): UploadStream
    upload_document(document: DocumentsDocument | null, slug: string, content_type: string, folder?: DocumentsFolder | null, cancellable?: Gio.Cancellable | null): UploadStream
    upload_document_resumable(document: DocumentsDocument | null, slug: string, content_type: string, content_length: number, query?: DocumentsUploadQuery | null, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: DocumentsService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsService_ConstructProps)
    _init (config?: DocumentsService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): DocumentsService
    static get_primary_authorization_domain(): AuthorizationDomain
    static get_spreadsheet_authorization_domain(): AuthorizationDomain
    static get_upload_uri(folder?: DocumentsFolder | null): string
    static $gtype: GObject.Type
}
export interface DocumentsSpreadsheet_ConstructProps extends DocumentsDocument_ConstructProps {
}
export class DocumentsSpreadsheet {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsSpreadsheet */
    parent: DocumentsDocument
    priv: DocumentsSpreadsheetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsSpreadsheet */
    get_download_uri(export_format: string, gid: number): string
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsSpreadsheet, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly can_edit: boolean
    readonly document_id: string
    readonly edited: number
    readonly file_size: number
    is_deleted: boolean
    readonly last_modified_by: Author
    readonly last_viewed: number
    readonly quota_used: number
    readonly resource_id: string
    readonly shared_with_me_date: number
    writers_can_invite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsText */
    parent: DocumentsDocument
    priv: DocumentsTextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream
    get_download_uri(export_format: string): string | null
    get_thumbnail_uri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    add_documents_property(property: DocumentsProperty): boolean
    get_document_id(): string
    get_document_properties(): DocumentsProperty[]
    get_edited(): number
    get_file_size(): number
    get_last_modified_by(): Author
    get_last_viewed(): number
    get_path(): string
    get_quota_used(): number
    get_resource_id(): string
    get_shared_with_me_date(): number
    remove_documents_property(property: DocumentsProperty): boolean
    set_writers_can_invite(writers_can_invite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    get_rules_async(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Virtual methods of GData-0.0.GData.DocumentsEntry */
    vfunc_get_rules(service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: DocumentsText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsUploadQuery */
    build_uri(): string
    get_convert(): boolean
    get_folder(): DocumentsFolder | null
    set_convert(convert: boolean): void
    set_folder(folder?: DocumentsFolder | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: (($obj: DocumentsUploadQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentsUploadQuery_ConstructProps)
    _init (config?: DocumentsUploadQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentsUploadQuery
    static $gtype: GObject.Type
}
export interface DownloadStream_ConstructProps extends Gio.InputStream_ConstructProps {
    authorization_domain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    download_uri?: string
    service?: Service
}
export class DownloadStream {
    /* Properties of GData-0.0.GData.DownloadStream */
    readonly content_length: number
    readonly content_type: string
    /* Fields of GData-0.0.GData.DownloadStream */
    parent: Gio.InputStream
    priv: DownloadStreamPrivate
    /* Fields of Gio-2.0.Gio.InputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DownloadStream */
    get_authorization_domain(): AuthorizationDomain | null
    get_cancellable(): Gio.Cancellable
    get_content_length(): number
    get_content_type(): string
    get_download_uri(): string
    get_service(): Service
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array[] ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array[], /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[]
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GData-0.0.GData.DownloadStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array[] | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DownloadStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DownloadStream_ConstructProps)
    _init (config?: DownloadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, download_uri: string, cancellable?: Gio.Cancellable | null): DownloadStream
    static $gtype: GObject.Type
}
export interface Entry_ConstructProps extends Parsable_ConstructProps {
    content?: string
    content_uri?: string
    etag?: string
    id?: string
    rights?: string
    summary?: string
    title?: string
}
export class Entry {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    parent: Parsable
    priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly items_per_page: number
    readonly logo: string
    readonly next_page_token: string
    readonly rights: string
    readonly start_index: number
    readonly subtitle: string
    readonly title: string
    readonly total_results: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    get_authors(): Author[]
    get_categories(): Category[]
    get_entries(): Entry[]
    get_etag(): string
    get_generator(): Generator
    get_icon(): string
    get_id(): string
    get_items_per_page(): number
    get_links(): Link[]
    get_logo(): string
    get_next_page_token(): string | null
    get_rights(): string
    get_start_index(): number
    get_subtitle(): string
    get_title(): string
    get_total_results(): number
    get_updated(): number
    look_up_entry(id: string): Entry
    look_up_link(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: Feed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Feed_ConstructProps)
    _init (config?: Feed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FreebaseQuery_ConstructProps extends Query_ConstructProps {
    variant?: GLib.Variant
}
export class FreebaseQuery {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.FreebaseQuery */
    parent: Query
    /* Fields of GData-0.0.GData.Query */
    priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: FreebaseQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseQuery_ConstructProps)
    _init (config?: FreebaseQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mql: string): FreebaseQuery
    static new(q?: string | null): FreebaseQuery
    static new_from_variant(variant: GLib.Variant): FreebaseQuery
    static $gtype: GObject.Type
}
export interface FreebaseResult_ConstructProps extends Entry_ConstructProps {
}
export class FreebaseResult {
    /* Properties of GData-0.0.GData.FreebaseResult */
    readonly variant: GLib.Variant
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.FreebaseResult */
    parent: Entry
    priv: FreebaseResultPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseResult */
    dup_variant(): GLib.Variant | null
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variant", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: FreebaseResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseResult_ConstructProps)
    _init (config?: FreebaseResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FreebaseResult
    static new(id?: string | null): FreebaseResult
    static $gtype: GObject.Type
}
export interface FreebaseSearchQuery_ConstructProps extends Query_ConstructProps {
    language?: string
    stemmed?: boolean
}
export class FreebaseSearchQuery {
    /* Properties of GData-0.0.GData.FreebaseSearchQuery */
    language: string
    stemmed: boolean
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.FreebaseSearchQuery */
    parent: Query
    priv: FreebaseSearchQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseSearchQuery */
    add_filter(property: string, value: string): void
    add_location(radius: number, lat: number, lon: number): void
    close_filter(): void
    get_language(): string | null
    get_stemmed(): boolean
    open_filter(filter_type: FreebaseSearchFilterType): void
    set_language(lang?: string | null): void
    set_stemmed(stemmed: boolean): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::language", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stemmed", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stemmed", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: FreebaseSearchQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseSearchQuery_ConstructProps)
    _init (config?: FreebaseSearchQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(search_terms: string): FreebaseSearchQuery
    static new(q?: string | null): FreebaseSearchQuery
    static $gtype: GObject.Type
}
export interface FreebaseSearchResult_ConstructProps extends FreebaseResult_ConstructProps {
}
export class FreebaseSearchResult {
    /* Properties of GData-0.0.GData.FreebaseResult */
    readonly variant: GLib.Variant
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.FreebaseSearchResult */
    parent: FreebaseResult
    priv: FreebaseSearchResultPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseSearchResult */
    get_item(i: number): FreebaseSearchResultItem | null
    get_num_items(): number
    get_total_hits(): number
    /* Methods of GData-0.0.GData.FreebaseResult */
    dup_variant(): GLib.Variant | null
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variant", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: FreebaseSearchResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseSearchResult_ConstructProps)
    _init (config?: FreebaseSearchResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FreebaseSearchResult
    static new(id?: string | null): FreebaseSearchResult
    static $gtype: GObject.Type
}
export interface FreebaseService_ConstructProps extends Service_ConstructProps {
    developer_key?: string
}
export class FreebaseService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.FreebaseService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseService */
    get_image(value: FreebaseTopicValue, cancellable: Gio.Cancellable | null, max_width: number, max_height: number): Gio.InputStream
    get_topic(query: FreebaseTopicQuery, cancellable?: Gio.Cancellable | null): FreebaseTopicResult
    get_topic_async(query: FreebaseTopicQuery, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query(query: FreebaseQuery, cancellable?: Gio.Cancellable | null): FreebaseResult
    query_async(query: FreebaseQuery, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    search(query: FreebaseSearchQuery, cancellable?: Gio.Cancellable | null): FreebaseSearchResult
    search_async(query: FreebaseSearchQuery, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: FreebaseService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseService_ConstructProps)
    _init (config?: FreebaseService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developer_key?: string | null, authorizer?: Authorizer | null): FreebaseService
    static get_primary_authorization_domain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface FreebaseTopicQuery_ConstructProps extends Query_ConstructProps {
    filter?: string[]
    language?: string
}
export class FreebaseTopicQuery {
    /* Properties of GData-0.0.GData.FreebaseTopicQuery */
    filter: string[]
    language: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.FreebaseTopicQuery */
    parent: Query
    priv: FreebaseTopicQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseTopicQuery */
    get_filter(): string[] | null
    get_language(): string | null
    set_filter(filter?: string[] | null): void
    set_language(lang?: string | null): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: FreebaseTopicQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseTopicQuery_ConstructProps)
    _init (config?: FreebaseTopicQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): FreebaseTopicQuery
    static new(q?: string | null): FreebaseTopicQuery
    static $gtype: GObject.Type
}
export interface FreebaseTopicResult_ConstructProps extends FreebaseResult_ConstructProps {
}
export class FreebaseTopicResult {
    /* Properties of GData-0.0.GData.FreebaseResult */
    readonly variant: GLib.Variant
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.FreebaseTopicResult */
    parent: FreebaseResult
    priv: FreebaseTopicResultPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.FreebaseTopicResult */
    dup_object(): FreebaseTopicObject
    /* Methods of GData-0.0.GData.FreebaseResult */
    dup_variant(): GLib.Variant | null
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variant", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: FreebaseTopicResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FreebaseTopicResult_ConstructProps)
    _init (config?: FreebaseTopicResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FreebaseTopicResult
    static new(id?: string | null): FreebaseTopicResult
    static $gtype: GObject.Type
}
export interface GContactCalendar_ConstructProps extends Parsable_ConstructProps {
    is_primary?: boolean
    label?: string
    relation_type?: string
    uri?: string
}
export class GContactCalendar {
    /* Properties of GData-0.0.GData.GContactCalendar */
    is_primary: boolean
    label: string
    relation_type: string
    uri: string
    /* Fields of GData-0.0.GData.GContactCalendar */
    parent: Parsable
    priv: GContactCalendarPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactCalendar */
    get_label(): string
    get_relation_type(): string
    get_uri(): string
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_uri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GContactCalendar */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactCalendar_ConstructProps)
    _init (config?: GContactCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relation_type: string | null, label: string | null, is_primary: boolean): GContactCalendar
    static $gtype: GObject.Type
}
export interface GContactEvent_ConstructProps extends Parsable_ConstructProps {
    date?: GLib.Date
    label?: string
    relation_type?: string
}
export class GContactEvent {
    /* Properties of GData-0.0.GData.GContactEvent */
    date: GLib.Date
    label: string
    relation_type: string
    /* Fields of GData-0.0.GData.GContactEvent */
    parent: Parsable
    priv: GContactEventPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactEvent */
    get_date(): /* date */ GLib.Date
    get_label(): string
    get_relation_type(): string
    set_date(date: GLib.Date): void
    set_label(label?: string | null): void
    set_relation_type(relation_type?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactEvent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactEvent_ConstructProps)
    _init (config?: GContactEvent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(date: GLib.Date, relation_type?: string | null, label?: string | null): GContactEvent
    static $gtype: GObject.Type
}
export interface GContactExternalID_ConstructProps extends Parsable_ConstructProps {
    label?: string
    relation_type?: string
    value?: string
}
export class GContactExternalID {
    /* Properties of GData-0.0.GData.GContactExternalID */
    label: string
    relation_type: string
    value: string
    /* Fields of GData-0.0.GData.GContactExternalID */
    parent: Parsable
    priv: GContactExternalIDPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactExternalID */
    get_label(): string
    get_relation_type(): string
    get_value(): string
    set_label(label?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_value(value: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GContactExternalID */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GContactExternalID, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactExternalID_ConstructProps)
    _init (config?: GContactExternalID_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, relation_type?: string | null, label?: string | null): GContactExternalID
    static $gtype: GObject.Type
}
export interface GContactJot_ConstructProps extends Parsable_ConstructProps {
    content?: string
    relation_type?: string
}
export class GContactJot {
    /* Properties of GData-0.0.GData.GContactJot */
    content: string
    relation_type: string
    /* Fields of GData-0.0.GData.GContactJot */
    parent: Parsable
    priv: GContactJotPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactJot */
    get_content(): string
    get_relation_type(): string
    set_content(content: string): void
    set_relation_type(relation_type: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactJot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactJot_ConstructProps)
    _init (config?: GContactJot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string, relation_type: string): GContactJot
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactLanguage */
    get_code(): string
    get_label(): string
    set_code(code?: string | null): void
    set_label(label?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GContactLanguage */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactLanguage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    relation_type?: string
}
export class GContactRelation {
    /* Properties of GData-0.0.GData.GContactRelation */
    label: string
    name: string
    relation_type: string
    /* Fields of GData-0.0.GData.GContactRelation */
    parent: Parsable
    priv: GContactRelationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactRelation */
    get_label(): string
    get_name(): string
    get_relation_type(): string
    set_label(label?: string | null): void
    set_name(name?: string | null): void
    set_relation_type(relation_type?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactRelation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactRelation_ConstructProps)
    _init (config?: GContactRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, relation_type?: string | null, label?: string | null): GContactRelation
    static $gtype: GObject.Type
}
export interface GContactWebsite_ConstructProps extends Parsable_ConstructProps {
    is_primary?: boolean
    label?: string
    relation_type?: string
    uri?: string
}
export class GContactWebsite {
    /* Properties of GData-0.0.GData.GContactWebsite */
    is_primary: boolean
    label: string
    relation_type: string
    uri: string
    /* Fields of GData-0.0.GData.GContactWebsite */
    parent: Parsable
    priv: GContactWebsitePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactWebsite */
    get_label(): string
    get_relation_type(): string
    get_uri(): string
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_relation_type(relation_type: string): void
    set_uri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GContactWebsite */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GContactWebsite, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContactWebsite_ConstructProps)
    _init (config?: GContactWebsite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relation_type: string, label: string | null, is_primary: boolean): GContactWebsite
    static $gtype: GObject.Type
}
export interface GDEmailAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    display_name?: string
    is_primary?: boolean
    label?: string
    relation_type?: string
}
export class GDEmailAddress {
    /* Properties of GData-0.0.GData.GDEmailAddress */
    address: string
    display_name: string
    is_primary: boolean
    label: string
    relation_type: string
    /* Fields of GData-0.0.GData.GDEmailAddress */
    parent: Parsable
    priv: GDEmailAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDEmailAddress */
    get_address(): string
    get_display_name(): string
    get_label(): string
    get_relation_type(): string
    set_address(address: string): void
    set_display_name(display_name?: string | null): void
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_relation_type(relation_type?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDEmailAddress */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDEmailAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDEmailAddress_ConstructProps)
    _init (config?: GDEmailAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, relation_type: string | null, label: string | null, is_primary: boolean): GDEmailAddress
    static $gtype: GObject.Type
}
export interface GDIMAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    is_primary?: boolean
    label?: string
    protocol?: string
    relation_type?: string
}
export class GDIMAddress {
    /* Properties of GData-0.0.GData.GDIMAddress */
    address: string
    is_primary: boolean
    label: string
    protocol: string
    relation_type: string
    /* Fields of GData-0.0.GData.GDIMAddress */
    parent: Parsable
    priv: GDIMAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDIMAddress */
    get_address(): string
    get_label(): string
    get_protocol(): string
    get_relation_type(): string
    set_address(address: string): void
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_protocol(protocol?: string | null): void
    set_relation_type(relation_type?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDIMAddress */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDIMAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDIMAddress_ConstructProps)
    _init (config?: GDIMAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, protocol: string | null, relation_type: string | null, label: string | null, is_primary: boolean): GDIMAddress
    static $gtype: GObject.Type
}
export interface GDName_ConstructProps extends Parsable_ConstructProps {
    additional_name?: string
    family_name?: string
    full_name?: string
    given_name?: string
    prefix?: string
    suffix?: string
}
export class GDName {
    /* Properties of GData-0.0.GData.GDName */
    additional_name: string
    family_name: string
    full_name: string
    given_name: string
    prefix: string
    suffix: string
    /* Fields of GData-0.0.GData.GDName */
    parent: Parsable
    priv: GDNamePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDName */
    get_additional_name(): string
    get_family_name(): string
    get_full_name(): string
    get_given_name(): string
    get_prefix(): string
    get_suffix(): string
    set_additional_name(additional_name?: string | null): void
    set_family_name(family_name?: string | null): void
    set_full_name(full_name?: string | null): void
    set_given_name(given_name?: string | null): void
    set_prefix(prefix?: string | null): void
    set_suffix(suffix?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDName */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: GDName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDName_ConstructProps)
    _init (config?: GDName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(given_name?: string | null, family_name?: string | null): GDName
    static $gtype: GObject.Type
}
export interface GDOrganization_ConstructProps extends Parsable_ConstructProps {
    department?: string
    is_primary?: boolean
    job_description?: string
    label?: string
    location?: GDWhere
    name?: string
    relation_type?: string
    symbol?: string
    title?: string
}
export class GDOrganization {
    /* Properties of GData-0.0.GData.GDOrganization */
    department: string
    is_primary: boolean
    job_description: string
    label: string
    location: GDWhere
    name: string
    relation_type: string
    symbol: string
    title: string
    /* Fields of GData-0.0.GData.GDOrganization */
    parent: Parsable
    priv: GDOrganizationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDOrganization */
    get_department(): string
    get_job_description(): string
    get_label(): string
    get_location(): GDWhere
    get_name(): string
    get_relation_type(): string
    get_symbol(): string
    get_title(): string
    set_department(department?: string | null): void
    set_is_primary(is_primary: boolean): void
    set_job_description(job_description?: string | null): void
    set_label(label?: string | null): void
    set_location(location?: GDWhere | null): void
    set_name(name?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_symbol(symbol?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDOrganization */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::department", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job-description", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GDOrganization, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDOrganization_ConstructProps)
    _init (config?: GDOrganization_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, title: string | null, relation_type: string | null, label: string | null, is_primary: boolean): GDOrganization
    static $gtype: GObject.Type
}
export interface GDPhoneNumber_ConstructProps extends Parsable_ConstructProps {
    is_primary?: boolean
    label?: string
    number?: string
    relation_type?: string
    uri?: string
}
export class GDPhoneNumber {
    /* Properties of GData-0.0.GData.GDPhoneNumber */
    is_primary: boolean
    label: string
    number: string
    relation_type: string
    uri: string
    /* Fields of GData-0.0.GData.GDPhoneNumber */
    parent: Parsable
    priv: GDPhoneNumberPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPhoneNumber */
    get_label(): string
    get_number(): string
    get_relation_type(): string
    get_uri(): string
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_number(number: string): void
    set_relation_type(relation_type?: string | null): void
    set_uri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDPhoneNumber */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GDPhoneNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDPhoneNumber_ConstructProps)
    _init (config?: GDPhoneNumber_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(number: string, relation_type: string | null, label: string | null, uri: string | null, is_primary: boolean): GDPhoneNumber
    static $gtype: GObject.Type
}
export interface GDPostalAddress_ConstructProps extends Parsable_ConstructProps {
    address?: string
    agent?: string
    city?: string
    house_name?: string
    is_primary?: boolean
    label?: string
    mail_class?: string
    neighborhood?: string
    po_box?: string
    postcode?: string
    region?: string
    relation_type?: string
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
    readonly country_code: string
    house_name: string
    is_primary: boolean
    label: string
    mail_class: string
    neighborhood: string
    po_box: string
    postcode: string
    region: string
    relation_type: string
    street: string
    subregion: string
    usage: string
    /* Fields of GData-0.0.GData.GDPostalAddress */
    parent: Parsable
    priv: GDPostalAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPostalAddress */
    get_address(): string
    get_agent(): string
    get_city(): string
    get_country(): string
    get_country_code(): string
    get_house_name(): string
    get_label(): string
    get_mail_class(): string
    get_neighborhood(): string
    get_po_box(): string
    get_postcode(): string
    get_region(): string
    get_relation_type(): string
    get_street(): string
    get_subregion(): string
    get_usage(): string
    set_address(address?: string | null): void
    set_agent(agent?: string | null): void
    set_city(city?: string | null): void
    set_country(country?: string | null, country_code?: string | null): void
    set_house_name(house_name?: string | null): void
    set_is_primary(is_primary: boolean): void
    set_label(label?: string | null): void
    set_mail_class(mail_class?: string | null): void
    set_neighborhood(neighborhood?: string | null): void
    set_po_box(po_box?: string | null): void
    set_postcode(postcode?: string | null): void
    set_region(region?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_street(street?: string | null): void
    set_subregion(subregion?: string | null): void
    set_usage(usage?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDPostalAddress */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::city", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::house-name", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-class", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::neighborhood", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postcode", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subregion", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usage", callback: (($obj: GDPostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDPostalAddress_ConstructProps)
    _init (config?: GDPostalAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relation_type: string | null, label: string | null, is_primary: boolean): GDPostalAddress
    static $gtype: GObject.Type
}
export interface GDReminder_ConstructProps extends Parsable_ConstructProps {
    absolute_time?: number
    method?: string
    relative_time?: number
}
export class GDReminder {
    /* Properties of GData-0.0.GData.GDReminder */
    absolute_time: number
    readonly is_absolute_time: boolean
    method: string
    relative_time: number
    /* Fields of GData-0.0.GData.GDReminder */
    parent: Parsable
    priv: GDReminderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDReminder */
    get_absolute_time(): number
    get_method(): string
    get_relative_time(): number
    set_absolute_time(absolute_time: number): void
    set_method(method?: string | null): void
    set_relative_time(relative_time: number): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDReminder */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-absolute-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-time", callback: (($obj: GDReminder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDReminder_ConstructProps)
    _init (config?: GDReminder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string | null, absolute_time: number, relative_time: number): GDReminder
    static $gtype: GObject.Type
}
export interface GDWhen_ConstructProps extends Parsable_ConstructProps {
    end_time?: number
    is_date?: boolean
    start_time?: number
    value_string?: string
}
export class GDWhen {
    /* Properties of GData-0.0.GData.GDWhen */
    end_time: number
    is_date: boolean
    start_time: number
    value_string: string
    /* Fields of GData-0.0.GData.GDWhen */
    parent: Parsable
    priv: GDWhenPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhen */
    add_reminder(reminder: GDReminder): void
    get_end_time(): number
    get_reminders(): GDReminder[]
    get_start_time(): number
    get_value_string(): string
    set_end_time(end_time: number): void
    set_is_date(is_date: boolean): void
    set_start_time(start_time: number): void
    set_value_string(value_string?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDWhen */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-date", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDWhen_ConstructProps)
    _init (config?: GDWhen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(start_time: number, end_time: number, is_date: boolean): GDWhen
    static $gtype: GObject.Type
}
export interface GDWhere_ConstructProps extends Parsable_ConstructProps {
    label?: string
    relation_type?: string
    value_string?: string
}
export class GDWhere {
    /* Properties of GData-0.0.GData.GDWhere */
    label: string
    relation_type: string
    value_string: string
    /* Fields of GData-0.0.GData.GDWhere */
    parent: Parsable
    priv: GDWherePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhere */
    get_label(): string
    get_relation_type(): string
    get_value_string(): string
    set_label(label?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_value_string(value_string?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDWhere */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWhere, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDWhere_ConstructProps)
    _init (config?: GDWhere_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relation_type?: string | null, value_string?: string | null, label?: string | null): GDWhere
    static $gtype: GObject.Type
}
export interface GDWho_ConstructProps extends Parsable_ConstructProps {
    email_address?: string
    relation_type?: string
    value_string?: string
}
export class GDWho {
    /* Properties of GData-0.0.GData.GDWho */
    email_address: string
    relation_type: string
    value_string: string
    /* Fields of GData-0.0.GData.GDWho */
    parent: Parsable
    priv: GDWhoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWho */
    get_email_address(): string
    get_relation_type(): string
    get_value_string(): string
    set_email_address(email_address?: string | null): void
    set_relation_type(relation_type?: string | null): void
    set_value_string(value_string?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.GDWho */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: (($obj: GDWho, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDWho_ConstructProps)
    _init (config?: GDWho_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relation_type?: string | null, value_string?: string | null, email_address?: string | null): GDWho
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Generator */
    get_name(): string | null
    get_uri(): string | null
    get_version(): string
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Generator */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    goa_object?: Goa.Object
}
export class GoaAuthorizer {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GoaAuthorizer */
    get_goa_object(): Goa.Object
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GData-0.0.GData.GoaAuthorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(goa_object: Goa.Object): GoaAuthorizer
    static $gtype: GObject.Type
}
export interface Link_ConstructProps extends Parsable_ConstructProps {
    content_type?: string
    language?: string
    length?: number
    relation_type?: string
    title?: string
    uri?: string
}
export class Link {
    /* Properties of GData-0.0.GData.Link */
    content_type: string
    language: string
    length: number
    relation_type: string
    title: string
    uri: string
    /* Fields of GData-0.0.GData.Link */
    parent: Parsable
    priv: LinkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Link */
    get_content_type(): string | null
    get_language(): string | null
    get_length(): number
    get_relation_type(): string | null
    get_title(): string
    get_uri(): string
    set_content_type(content_type?: string | null): void
    set_language(language?: string | null): void
    set_length(length: number): void
    set_relation_type(relation_type?: string | null): void
    set_title(title?: string | null): void
    set_uri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Link */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relation_type?: string | null): Link
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCategory */
    get_category(): string
    get_label(): string
    get_scheme(): string
    set_category(category: string): void
    set_label(label?: string | null): void
    set_scheme(scheme?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly content_type: string
    readonly duration: number
    readonly expression: MediaExpression
    readonly filesize: number
    readonly height: number
    readonly is_default: boolean
    readonly medium: MediaMedium
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.MediaContent */
    parent: Parsable
    priv: MediaContentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaContent */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    get_content_type(): string
    get_duration(): number
    get_expression(): MediaExpression
    get_filesize(): number
    get_height(): number
    get_medium(): MediaMedium
    get_uri(): string
    get_width(): number
    /* Methods of GData-0.0.GData.Parsable */
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesize", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-default", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::medium", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCredit */
    get_credit(): string
    get_role(): string
    get_scheme(): string
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: MediaCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaThumbnail */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    get_height(): number
    get_time(): number
    get_uri(): string
    get_width(): number
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaThumbnail_ConstructProps)
    _init (config?: MediaThumbnail_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OAuth1Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    application_name?: string
    locale?: string
    proxy_resolver?: Gio.ProxyResolver
    proxy_uri?: Soup.URI
    timeout?: number
}
export class OAuth1Authorizer {
    /* Properties of GData-0.0.GData.OAuth1Authorizer */
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.OAuth1Authorizer */
    get_application_name(): string | null
    get_locale(): string | null
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI | null
    get_timeout(): number
    request_authentication_uri(cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* token */ string, /* token_secret */ string ]
    request_authentication_uri_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_authentication_uri_finish(async_result: Gio.AsyncResult): [ /* returnType */ string, /* token */ string, /* token_secret */ string ]
    request_authorization(token: string, token_secret: string, verifier: string, cancellable?: Gio.Cancellable | null): boolean
    request_authorization_async(token: string, token_secret: string, verifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_authorization_finish(async_result: Gio.AsyncResult): boolean
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GData-0.0.GData.OAuth1Authorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: OAuth1Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth1Authorizer_ConstructProps)
    _init (config?: OAuth1Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application_name: string | null, service_type: GObject.Type): OAuth1Authorizer
    static new_for_authorization_domains(application_name: string | null, authorization_domains: AuthorizationDomain[]): OAuth1Authorizer
    static $gtype: GObject.Type
}
export interface OAuth2Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    client_id?: string
    client_secret?: string
    locale?: string
    proxy_resolver?: Gio.ProxyResolver
    redirect_uri?: string
    refresh_token?: string
    timeout?: number
}
export class OAuth2Authorizer {
    /* Properties of GData-0.0.GData.OAuth2Authorizer */
    locale: string
    proxy_resolver: Gio.ProxyResolver
    refresh_token: string
    timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.OAuth2Authorizer */
    build_authentication_uri(login_hint: string | null, include_granted_scopes: boolean): string
    dup_refresh_token(): string
    get_client_id(): string
    get_client_secret(): string
    get_locale(): string | null
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_redirect_uri(): string
    get_timeout(): number
    request_authorization(authorization_code: string, cancellable?: Gio.Cancellable | null): boolean
    request_authorization_async(authorization_code: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    request_authorization_finish(async_result: Gio.AsyncResult): boolean
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_refresh_token(refresh_token?: string | null): void
    set_timeout(timeout: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: AuthorizationDomain): boolean
    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GData-0.0.GData.OAuth2Authorizer */
    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean
    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-token", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: OAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2Authorizer_ConstructProps)
    _init (config?: OAuth2Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client_id: string, client_secret: string, redirect_uri: string, service_type: GObject.Type): OAuth2Authorizer
    static new_for_authorization_domains(client_id: string, client_secret: string, redirect_uri: string, authorization_domains: AuthorizationDomain[]): OAuth2Authorizer
    static $gtype: GObject.Type
}
export interface Parsable_ConstructProps extends GObject.Object_ConstructProps {
    constructed_from_xml?: boolean
}
export class Parsable {
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parsable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parsable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parsable_ConstructProps)
    _init (config?: Parsable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_json(parsable_type: GObject.Type, json: string, length: number): Parsable
    static new_from_xml(parsable_type: GObject.Type, xml: string, length: number): Parsable
    static $gtype: GObject.Type
}
export interface PicasaWebAlbum_ConstructProps extends Entry_ConstructProps {
    album_id?: string
    is_commenting_enabled?: boolean
    latitude?: number
    location?: string
    longitude?: number
    tags?: string[]
    timestamp?: number
    visibility?: PicasaWebVisibility
}
export class PicasaWebAlbum {
    /* Properties of GData-0.0.GData.PicasaWebAlbum */
    readonly bytes_used: number
    readonly comment_count: number
    readonly edited: number
    is_commenting_enabled: boolean
    latitude: number
    location: string
    longitude: number
    readonly nickname: string
    readonly num_photos: number
    readonly num_photos_remaining: number
    tags: string[]
    timestamp: number
    readonly user: string
    visibility: PicasaWebVisibility
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebAlbum */
    parent: Entry
    priv: PicasaWebAlbumPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebAlbum */
    get_bytes_used(): number
    get_comment_count(): number
    get_contents(): MediaContent[]
    get_coordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    get_edited(): number
    get_id(): string
    get_location(): string
    get_nickname(): string
    get_num_photos(): number
    get_num_photos_remaining(): number
    get_tags(): string[]
    get_thumbnails(): MediaThumbnail[]
    get_timestamp(): number
    get_user(): string
    get_visibility(): PicasaWebVisibility
    set_coordinates(latitude: number, longitude: number): void
    set_is_commenting_enabled(is_commenting_enabled: boolean): void
    set_location(location?: string | null): void
    set_tags(tags?: string[] | null): void
    set_timestamp(timestamp: number): void
    set_visibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes-used", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos-remaining", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebAlbum, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebComment */
    parent: Comment
    priv: PicasaWebCommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly items_per_page: number
    readonly logo: string
    readonly next_page_token: string
    readonly rights: string
    readonly start_index: number
    readonly subtitle: string
    readonly title: string
    readonly total_results: number
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebFeed */
    parent: Feed
    /* Fields of GData-0.0.GData.Parsable */
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    get_authors(): Author[]
    get_categories(): Category[]
    get_entries(): Entry[]
    get_etag(): string
    get_generator(): Generator
    get_icon(): string
    get_id(): string
    get_items_per_page(): number
    get_links(): Link[]
    get_logo(): string
    get_next_page_token(): string | null
    get_rights(): string
    get_start_index(): number
    get_subtitle(): string
    get_title(): string
    get_total_results(): number
    get_updated(): number
    look_up_entry(id: string): Entry
    look_up_link(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PicasaWebFeed_ConstructProps)
    _init (config?: PicasaWebFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PicasaWebFile_ConstructProps extends Entry_ConstructProps {
    album_id?: string
    caption?: string
    checksum?: string
    file_id?: string
    is_commenting_enabled?: boolean
    latitude?: number
    longitude?: number
    rotation?: number
    tags?: string[]
    timestamp?: number
    version?: string
}
export class PicasaWebFile {
    /* Properties of GData-0.0.GData.PicasaWebFile */
    album_id: string
    caption: string
    checksum: string
    readonly comment_count: number
    readonly credit: string
    readonly distance: number
    readonly edited: number
    readonly exposure: number
    readonly flash: boolean
    readonly focal_length: number
    readonly fstop: number
    readonly height: number
    readonly image_unique_id: string
    is_commenting_enabled: boolean
    readonly iso: number
    latitude: number
    longitude: number
    readonly make: string
    readonly model: string
    rotation: number
    readonly size: number
    tags: string[]
    timestamp: number
    readonly video_status: string
    readonly width: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebFile */
    parent: Entry
    priv: PicasaWebFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebFile */
    get_album_id(): string
    get_caption(): string
    get_checksum(): string
    get_comment_count(): number
    get_contents(): MediaContent[]
    get_coordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    get_credit(): string
    get_distance(): number
    get_edited(): number
    get_exposure(): number
    get_flash(): boolean
    get_focal_length(): number
    get_fstop(): number
    get_height(): number
    get_id(): string
    get_image_unique_id(): string
    get_iso(): number
    get_make(): string
    get_model(): string
    get_rotation(): number
    get_size(): number
    get_tags(): string[]
    get_thumbnails(): MediaThumbnail[]
    get_timestamp(): number
    get_version(): string
    get_video_status(): string
    get_width(): number
    set_album_id(album_id: string): void
    set_caption(caption?: string | null): void
    set_checksum(checksum?: string | null): void
    set_coordinates(latitude: number, longitude: number): void
    set_is_commenting_enabled(is_commenting_enabled: boolean): void
    set_rotation(rotation: number): void
    set_tags(tags?: string[] | null): void
    set_timestamp(timestamp: number): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean
    delete_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_comment_finish(result: Gio.AsyncResult): boolean
    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insert_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_comment_finish(result: Gio.AsyncResult): Comment | null
    query_comments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed | null
    query_comments_async(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_comments_finish(result: Gio.AsyncResult): Feed | null
    /* Virtual methods of GData-0.0.GData.PicasaWebFile */
    vfunc_get_insert_comment_uri(comment: Comment): string
    vfunc_get_query_comments_uri(): string
    vfunc_is_comment_deletable(comment: Comment): boolean
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caption", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exposure", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flash", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focal-length", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstop", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-unique-id", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iso", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::make", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-status", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PicasaWebFile_ConstructProps)
    _init (config?: PicasaWebFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): PicasaWebFile
    static $gtype: GObject.Type
}
export interface PicasaWebQuery_ConstructProps extends Query_ConstructProps {
    image_size?: string
    location?: string
    tag?: string
    thumbnail_size?: string
    visibility?: number
}
export class PicasaWebQuery {
    /* Properties of GData-0.0.GData.PicasaWebQuery */
    image_size: string
    location: string
    tag: string
    thumbnail_size: string
    visibility: number
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.PicasaWebQuery */
    parent: Query
    priv: PicasaWebQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebQuery */
    get_bounding_box(): [ /* north */ number | null, /* east */ number | null, /* south */ number | null, /* west */ number | null ]
    get_image_size(): string
    get_location(): string
    get_tag(): string
    get_thumbnail_size(): string
    get_visibility(): PicasaWebVisibility
    set_bounding_box(north: number, east: number, south: number, west: number): void
    set_image_size(image_size?: string | null): void
    set_location(location?: string | null): void
    set_tag(tag?: string | null): void
    set_thumbnail_size(thumbnail_size?: string | null): void
    set_visibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-size", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: PicasaWebQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PicasaWebQuery_ConstructProps)
    _init (config?: PicasaWebQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): PicasaWebQuery
    static new_with_limits(q: string | null, start_index: number, max_results: number): PicasaWebQuery
    static $gtype: GObject.Type
}
export interface PicasaWebService_ConstructProps extends Service_ConstructProps {
}
export class PicasaWebService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.PicasaWebService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebService */
    finish_file_upload(upload_stream: UploadStream): PicasaWebFile
    get_user(username?: string | null, cancellable?: Gio.Cancellable | null): PicasaWebUser
    get_user_async(username?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_user_finish(result: Gio.AsyncResult): PicasaWebUser
    insert_album(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null): PicasaWebAlbum
    insert_album_async(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_all_albums(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_all_albums_async(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_files(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_files_async(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    upload_file(album: PicasaWebAlbum | null, file_entry: PicasaWebFile, slug: string, content_type: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PicasaWebService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PicasaWebService_ConstructProps)
    _init (config?: PicasaWebService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): PicasaWebService
    static get_primary_authorization_domain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface PicasaWebUser_ConstructProps extends Entry_ConstructProps {
}
export class PicasaWebUser {
    /* Properties of GData-0.0.GData.PicasaWebUser */
    readonly max_photos_per_album: number
    readonly nickname: string
    readonly quota_current: number
    readonly quota_limit: number
    readonly thumbnail_uri: string
    readonly user: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.PicasaWebUser */
    parent: Entry
    priv: PicasaWebUserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebUser */
    get_max_photos_per_album(): number
    get_nickname(): string
    get_quota_current(): number
    get_quota_limit(): number
    get_thumbnail_uri(): string
    get_user(): string
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-photos-per-album", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-current", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-limit", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: PicasaWebUser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PicasaWebUser_ConstructProps)
    _init (config?: PicasaWebUser_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    categories?: string
    etag?: string
    is_strict?: boolean
    max_results?: number
    published_max?: number
    published_min?: number
    q?: string
    start_index?: number
    updated_max?: number
    updated_min?: number
}
export class Query {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.Query */
    parent: GObject.Object
    priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): Query
    static new_with_limits(q: string | null, start_index: number, max_results: number): Query
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends GObject.Object_ConstructProps {
    authorizer?: Authorizer
    locale?: string
    proxy_resolver?: Gio.ProxyResolver
    proxy_uri?: Soup.URI
    timeout?: number
}
export class Service {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    parent: GObject.Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_authorization_domains(service_type: GObject.Type): AuthorizationDomain[]
    static $gtype: GObject.Type
}
export interface TasksQuery_ConstructProps extends Query_ConstructProps {
    completed_max?: number
    completed_min?: number
    due_max?: number
    due_min?: number
    show_completed?: boolean
    show_deleted?: boolean
    show_hidden?: boolean
}
export class TasksQuery {
    /* Properties of GData-0.0.GData.TasksQuery */
    completed_max: number
    completed_min: number
    due_max: number
    due_min: number
    show_completed: boolean
    show_deleted: boolean
    show_hidden: boolean
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.TasksQuery */
    parent: Query
    priv: TasksQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksQuery */
    get_completed_max(): number
    get_completed_min(): number
    get_due_max(): number
    get_due_min(): number
    get_show_completed(): boolean
    get_show_deleted(): boolean
    get_show_hidden(): boolean
    set_completed_max(completed_max: number): void
    set_completed_min(completed_min: number): void
    set_due_max(due_max: number): void
    set_due_min(due_min: number): void
    set_show_completed(show_completed: boolean): void
    set_show_deleted(show_deleted: boolean): void
    set_show_hidden(show_hidden: boolean): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-completed", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-hidden", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: TasksQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.TasksService */
    parent: Service
    /* Fields of GData-0.0.GData.Service */
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksService */
    delete_task(task: TasksTask, cancellable?: Gio.Cancellable | null): boolean
    delete_task_async(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): boolean
    delete_tasklist_async(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_task(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTask
    insert_task_async(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    insert_tasklist_async(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_all_tasklists(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_all_tasklists_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_tasks(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_tasks_async(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    update_task(task: TasksTask, cancellable?: Gio.Cancellable | null): TasksTask
    update_task_async(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    update_tasklist_async(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TasksService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TasksService_ConstructProps)
    _init (config?: TasksService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): TasksService
    static get_primary_authorization_domain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface TasksTask_ConstructProps extends Entry_ConstructProps {
    completed?: number
    due?: number
    is_deleted?: boolean
    notes?: string
    parent?: string
    position?: string
    status?: string
}
export class TasksTask {
    /* Properties of GData-0.0.GData.TasksTask */
    completed: number
    due: number
    is_deleted: boolean
    readonly is_hidden: boolean
    notes: string
    parent: string
    position: string
    status: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.TasksTask */
    priv: TasksTaskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksTask */
    get_completed(): number
    get_due(): number
    get_notes(): string | null
    get_parent(): string | null
    get_position(): string | null
    get_status(): string | null
    set_completed(completed: number): void
    set_due(due: number): void
    set_is_deleted(deleted: boolean): void
    set_notes(notes?: string | null): void
    set_parent(parent?: string | null): void
    set_position(position: string): void
    set_status(status?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    content_uri: string
    readonly is_inserted: boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: TasksTasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TasksTasklist_ConstructProps)
    _init (config?: TasksTasklist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): TasksTasklist
    static $gtype: GObject.Type
}
export interface UploadStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    authorization_domain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    content_length?: number
    content_type?: string
    entry?: Entry
    method?: string
    service?: Service
    slug?: string
    upload_uri?: string
}
export class UploadStream {
    /* Fields of GData-0.0.GData.UploadStream */
    parent: Gio.OutputStream
    priv: UploadStreamPrivate
    /* Fields of Gio-2.0.Gio.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.UploadStream */
    get_authorization_domain(): AuthorizationDomain | null
    get_cancellable(): Gio.Cancellable
    get_content_length(): number
    get_content_type(): string
    get_entry(): Entry
    get_method(): string
    get_response(): [ /* returnType */ string, /* length */ number | null ]
    get_service(): Service
    get_slug(): string
    get_upload_uri(): string
    /* Methods of Gio-2.0.Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    splice_finish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array[], cancellable?: Gio.Cancellable | null): number
    write_all(buffer: Uint8Array[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes_finish(result: Gio.AsyncResult): number
    write_finish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gio-2.0.Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(result: Gio.AsyncResult): boolean
    vfunc_splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfunc_splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_splice_finish(result: Gio.AsyncResult): number
    vfunc_write_async(buffer: Uint8Array[] | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): number
    vfunc_write_fn(buffer: Uint8Array[] | null, cancellable?: Gio.Cancellable | null): number
    vfunc_writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UploadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UploadStream_ConstructProps)
    _init (config?: UploadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, method: string, upload_uri: string, entry: Entry | null, slug: string, content_type: string, cancellable?: Gio.Cancellable | null): UploadStream
    static new_resumable(service: Service, domain: AuthorizationDomain | null, method: string, upload_uri: string, entry: Entry | null, slug: string, content_type: string, content_length: number, cancellable?: Gio.Cancellable | null): UploadStream
    static $gtype: GObject.Type
}
export interface YouTubeCategory_ConstructProps extends Category_ConstructProps {
}
export class YouTubeCategory {
    /* Properties of GData-0.0.GData.YouTubeCategory */
    readonly is_assignable: boolean
    readonly is_deprecated: boolean
    /* Properties of GData-0.0.GData.Category */
    label: string
    scheme: string
    term: string
    /* Fields of GData-0.0.GData.YouTubeCategory */
    parent: Category
    priv: YouTubeCategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeCategory */
    is_browsable(region: string): boolean
    /* Methods of GData-0.0.GData.Category */
    get_label(): string
    get_scheme(): string
    get_term(): string
    set_label(label?: string | null): void
    set_scheme(scheme?: string | null): void
    set_term(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Virtual methods of GData-0.0.GData.Category */
    vfunc_compare_with(other: Comparable): number
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-assignable", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deprecated", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: (($obj: YouTubeCategory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeCategory_ConstructProps)
    _init (config?: YouTubeCategory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeComment_ConstructProps extends Comment_ConstructProps {
    parent_comment_uri?: string
}
export class YouTubeComment {
    /* Properties of GData-0.0.GData.YouTubeComment */
    parent_comment_uri: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.YouTubeComment */
    parent: Comment
    priv: YouTubeCommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeComment */
    get_parent_comment_uri(): string
    set_parent_comment_uri(parent_comment_uri: string): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-comment-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeComment_ConstructProps)
    _init (config?: YouTubeComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): YouTubeComment
    static new(id?: string | null): YouTubeComment
    static $gtype: GObject.Type
}
export interface YouTubeContent_ConstructProps extends MediaContent_ConstructProps {
}
export class YouTubeContent {
    /* Properties of GData-0.0.GData.YouTubeContent */
    readonly format: YouTubeFormat
    /* Properties of GData-0.0.GData.MediaContent */
    readonly content_type: string
    readonly duration: number
    readonly expression: MediaExpression
    readonly filesize: number
    readonly height: number
    readonly is_default: boolean
    readonly medium: MediaMedium
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.YouTubeContent */
    parent: MediaContent
    priv: YouTubeContentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeContent */
    get_format(): YouTubeFormat
    /* Methods of GData-0.0.GData.MediaContent */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    get_content_type(): string
    get_duration(): number
    get_expression(): MediaExpression
    get_filesize(): number
    get_height(): number
    get_medium(): MediaMedium
    get_uri(): string
    get_width(): number
    /* Methods of GData-0.0.GData.Parsable */
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::format", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-type", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expression", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filesize", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesize", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-default", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-default", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::medium", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::medium", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: YouTubeContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeContent_ConstructProps)
    _init (config?: YouTubeContent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeCredit_ConstructProps extends MediaCredit_ConstructProps {
}
export class YouTubeCredit {
    /* Properties of GData-0.0.GData.YouTubeCredit */
    readonly entity_type: string
    /* Properties of GData-0.0.GData.MediaCredit */
    readonly credit: string
    readonly role: string
    readonly scheme: string
    /* Fields of GData-0.0.GData.YouTubeCredit */
    parent: MediaCredit
    priv: YouTubeCreditPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeCredit */
    get_entity_type(): string
    /* Methods of GData-0.0.GData.MediaCredit */
    get_credit(): string
    get_role(): string
    get_scheme(): string
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::entity-type", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entity-type", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::credit", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: YouTubeCredit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeCredit_ConstructProps)
    _init (config?: YouTubeCredit_ConstructProps): void
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
    readonly items_per_page: number
    readonly logo: string
    readonly next_page_token: string
    readonly rights: string
    readonly start_index: number
    readonly subtitle: string
    readonly title: string
    readonly total_results: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    parent: GObject.Object
    priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    get_authors(): Author[]
    get_categories(): Category[]
    get_entries(): Entry[]
    get_etag(): string
    get_generator(): Generator
    get_icon(): string
    get_id(): string
    get_items_per_page(): number
    get_links(): Link[]
    get_logo(): string
    get_next_page_token(): string | null
    get_rights(): string
    get_start_index(): number
    get_subtitle(): string
    get_title(): string
    get_total_results(): number
    get_updated(): number
    look_up_entry(id: string): Entry
    look_up_link(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeFeed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeFeed_ConstructProps)
    _init (config?: YouTubeFeed_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeQuery_ConstructProps extends Query_ConstructProps {
    age?: YouTubeAge
    format?: YouTubeFormat
    has_location?: boolean
    language?: string
    latitude?: number
    license?: string
    location_radius?: number
    longitude?: number
    order_by?: string
    restriction?: string
    safe_search?: YouTubeSafeSearch
    sort_order?: YouTubeSortOrder
    uploader?: YouTubeUploader
}
export class YouTubeQuery {
    /* Properties of GData-0.0.GData.YouTubeQuery */
    age: YouTubeAge
    format: YouTubeFormat
    has_location: boolean
    language: string
    latitude: number
    license: string
    location_radius: number
    longitude: number
    order_by: string
    restriction: string
    safe_search: YouTubeSafeSearch
    sort_order: YouTubeSortOrder
    uploader: YouTubeUploader
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    is_strict: boolean
    max_results: number
    published_max: number
    published_min: number
    q: string
    start_index: number
    updated_max: number
    updated_min: number
    /* Fields of GData-0.0.GData.YouTubeQuery */
    parent: Query
    priv: YouTubeQueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeQuery */
    get_age(): YouTubeAge
    get_format(): YouTubeFormat
    get_language(): string
    get_license(): string
    get_location(): [ /* latitude */ number | null, /* longitude */ number | null, /* radius */ number | null, /* has_location */ boolean | null ]
    get_order_by(): string
    get_restriction(): string
    get_safe_search(): YouTubeSafeSearch
    get_sort_order(): YouTubeSortOrder
    get_uploader(): YouTubeUploader
    set_age(age: YouTubeAge): void
    set_format(format: YouTubeFormat): void
    set_language(language?: string | null): void
    set_license(license?: string | null): void
    set_location(latitude: number, longitude: number, radius: number, has_location: boolean): void
    set_order_by(order_by?: string | null): void
    set_restriction(restriction?: string | null): void
    set_safe_search(safe_search: YouTubeSafeSearch): void
    set_sort_order(sort_order: YouTubeSortOrder): void
    set_uploader(uploader: YouTubeUploader): void
    /* Methods of GData-0.0.GData.Query */
    get_author(): string
    get_categories(): string
    get_etag(): string
    get_max_results(): number
    get_published_max(): number
    get_published_min(): number
    get_q(): string
    get_query_uri(feed_uri: string): string
    get_start_index(): number
    get_updated_max(): number
    get_updated_min(): number
    next_page(): void
    previous_page(): boolean
    set_author(author?: string | null): void
    set_categories(categories?: string | null): void
    set_etag(etag?: string | null): void
    set_is_strict(is_strict: boolean): void
    set_max_results(max_results: number): void
    set_published_max(published_max: number): void
    set_published_min(published_min: number): void
    set_q(q?: string | null): void
    set_start_index(start_index: number): void
    set_updated_max(updated_max: number): void
    set_updated_min(updated_min: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Query */
    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::age", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-location", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-location", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location-radius", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::safe-search", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-order", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-order", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uploader", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uploader", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: (($obj: YouTubeQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeQuery_ConstructProps)
    _init (config?: YouTubeQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): YouTubeQuery
    static $gtype: GObject.Type
}
export interface YouTubeService_ConstructProps extends Service_ConstructProps {
    developer_key?: string
}
export class YouTubeService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    timeout: number
    /* Fields of GData-0.0.GData.YouTubeService */
    parent: Service
    priv: YouTubeServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeService */
    finish_video_upload(upload_stream: UploadStream): YouTubeVideo
    get_categories(cancellable?: Gio.Cancellable | null): APPCategories
    get_categories_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_categories_finish(async_result: Gio.AsyncResult): APPCategories
    get_developer_key(): string
    query_related(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_related_async(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_standard_feed(feed_type: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_standard_feed_async(feed_type: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_videos(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_videos_async(query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    upload_video(video: YouTubeVideo, slug: string, content_type: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    delete_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_entry_finish(async_result: Gio.AsyncResult): boolean
    get_authorizer(): Authorizer
    get_locale(): string
    get_proxy_resolver(): Gio.ProxyResolver | null
    get_proxy_uri(): Soup.URI
    get_timeout(): number
    insert_entry(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insert_entry_async(domain: AuthorizationDomain | null, upload_uri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_entry_finish(async_result: Gio.AsyncResult): Entry
    is_authorized(): boolean
    query(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed
    query_async(domain: AuthorizationDomain | null, feed_uri: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_finish(async_result: Gio.AsyncResult): Feed
    query_single_entry(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    query_single_entry_async(domain: AuthorizationDomain | null, entry_id: string, query: Query | null, entry_type: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_single_entry_finish(async_result: Gio.AsyncResult): Entry
    set_authorizer(authorizer: Authorizer): void
    set_locale(locale?: string | null): void
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    set_proxy_uri(proxy_uri?: Soup.URI | null): void
    set_timeout(timeout: number): void
    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    update_entry_async(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    update_entry_finish(async_result: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation
    /* Virtual methods of GData-0.0.GData.Service */
    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void
    vfunc_parse_error_response(operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: YouTubeService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeService_ConstructProps)
    _init (config?: YouTubeService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developer_key: string, authorizer?: Authorizer | null): YouTubeService
    static get_primary_authorization_domain(): AuthorizationDomain
    static $gtype: GObject.Type
}
export interface YouTubeState_ConstructProps extends Parsable_ConstructProps {
    help_uri?: string
    message?: string
    name?: string
    reason_code?: string
}
export class YouTubeState {
    /* Fields of GData-0.0.GData.YouTubeState */
    parent: Parsable
    priv: YouTubeStatePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeState */
    get_help_uri(): string
    get_message(): string
    get_name(): string
    get_reason_code(): string
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeState_ConstructProps)
    _init (config?: YouTubeState_ConstructProps): void
    static $gtype: GObject.Type
}
export interface YouTubeVideo_ConstructProps extends Entry_ConstructProps {
    aspect_ratio?: string
    category?: MediaCategory
    description?: string
    is_draft?: boolean
    is_private?: boolean
    keywords?: string[]
    latitude?: number
    location?: string
    longitude?: number
    recorded?: number
}
export class YouTubeVideo {
    /* Properties of GData-0.0.GData.YouTubeVideo */
    aspect_ratio: string
    readonly average_rating: number
    category: MediaCategory
    readonly credit: YouTubeCredit
    description: string
    readonly duration: number
    readonly favorite_count: number
    is_draft: boolean
    is_private: boolean
    keywords: string[]
    latitude: number
    location: string
    longitude: number
    readonly max_rating: number
    readonly min_rating: number
    readonly player_uri: string
    readonly rating_count: number
    recorded: number
    readonly state: YouTubeState
    readonly uploaded: number
    readonly video_id: string
    readonly view_count: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    content_uri: string
    readonly is_inserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.YouTubeVideo */
    parent: Entry
    priv: YouTubeVideoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeVideo */
    get_access_control(action: string): YouTubePermission
    get_aspect_ratio(): string
    get_category(): MediaCategory
    get_coordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    get_credit(): YouTubeCredit
    get_description(): string
    get_duration(): number
    get_favorite_count(): number
    get_keywords(): string[]
    get_location(): string
    get_media_rating(rating_type: string): string
    get_player_uri(): string
    get_rating(): [ /* min */ number | null, /* max */ number | null, /* count */ number | null, /* average */ number | null ]
    get_recorded(): number
    get_state(): YouTubeState
    get_thumbnails(): MediaThumbnail[]
    get_uploaded(): number
    get_video_id(): string
    get_view_count(): number
    is_restricted_in_country(country: string): boolean
    look_up_content(type: string): YouTubeContent
    set_access_control(action: string, permission: YouTubePermission): void
    set_aspect_ratio(aspect_ratio?: string | null): void
    set_category(category: MediaCategory): void
    set_coordinates(latitude: number, longitude: number): void
    set_description(description?: string | null): void
    set_is_draft(is_draft: boolean): void
    set_is_private(is_private: boolean): void
    set_keywords(keywords: string[]): void
    set_location(location?: string | null): void
    set_recorded(recorded: number): void
    /* Methods of GData-0.0.GData.Entry */
    add_author(author: Author): void
    add_category(category: Category): void
    add_link(_link: Link): void
    get_authors(): Author[]
    get_categories(): Category[]
    get_content(): string
    get_content_uri(): string
    get_etag(): string | null
    get_id(): string | null
    get_published(): number
    get_rights(): string
    get_summary(): string
    get_title(): string
    get_updated(): number
    look_up_link(rel: string): Link
    look_up_links(rel: string): Link[]
    remove_link(_link: Link): boolean
    set_content(content?: string | null): void
    set_content_uri(content_uri?: string | null): void
    set_rights(rights?: string | null): void
    set_summary(summary?: string | null): void
    set_title(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    get_content_type(): string
    get_json(): string
    get_xml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean
    delete_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_comment_finish(result: Gio.AsyncResult): boolean
    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insert_comment_async(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insert_comment_finish(result: Gio.AsyncResult): Comment | null
    query_comments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null): Feed | null
    query_comments_async(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    query_comments_finish(result: Gio.AsyncResult): Feed | null
    /* Virtual methods of GData-0.0.GData.YouTubeVideo */
    vfunc_get_insert_comment_uri(comment: Comment): string
    vfunc_get_query_comments_uri(): string
    vfunc_is_comment_deletable(comment: Comment): boolean
    /* Virtual methods of GData-0.0.GData.Parsable */
    vfunc_get_json(builder: Json.Builder): void
    vfunc_get_namespaces(namespaces: GLib.HashTable): void
    vfunc_get_xml(xml_string: GLib.String): void
    vfunc_parse_json(reader: Json.Reader): boolean
    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean
    vfunc_post_parse_json(): boolean
    vfunc_post_parse_xml(): boolean
    vfunc_pre_get_xml(xml_string: GLib.String): void
    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aspect-ratio", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::average-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::credit", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favorite-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-draft", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-draft", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-private", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-rating", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recorded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uploaded", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-id", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-id", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-count", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: (($obj: YouTubeVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: YouTubeVideo_ConstructProps)
    _init (config?: YouTubeVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): YouTubeVideo
    static get_video_id_from_uri(video_uri: string): string
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
    is_owner_rule: (rule: AccessRule) => boolean
    get_rules: (self: AccessHandler, service: Service, cancellable?: Gio.Cancellable | null, progress_callback?: QueryProgressCallback | null) => Feed
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
    process_request: (self: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    is_authorized_for_domain: (self: Authorizer | null, domain: AuthorizationDomain) => boolean
    refresh_authorization: (self: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    refresh_authorization_async: (self: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    refresh_authorization_finish: (self: Authorizer, async_result: Gio.AsyncResult) => boolean
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
    is_supported: (operation_type: BatchOperationType) => boolean
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
export abstract class ClientLoginAuthorizerClass {
    static name: string
}
export class ClientLoginAuthorizerPrivate {
    static name: string
}
export class Color {
    /* Fields of GData-0.0.GData.Color */
    red: number
    green: number
    blue: number
    /* Methods of GData-0.0.GData.Color */
    to_hexadecimal(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_hexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
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
    comment_type: GObject.Type
    get_query_comments_uri: (self: Commentable) => string
    get_insert_comment_uri: (self: Commentable, comment: Comment) => string
    is_comment_deletable: (self: Commentable, comment: Comment) => boolean
    static name: string
}
export abstract class ComparableIface {
    /* Fields of GData-0.0.GData.ComparableIface */
    parent: GObject.TypeInterface
    compare_with: (self: Comparable, other: Comparable) => number
    static name: string
}
export abstract class ContactsContactClass {
    static name: string
}
export class ContactsContactPrivate {
    static name: string
}
export abstract class ContactsGroupClass {
    static name: string
}
export class ContactsGroupPrivate {
    static name: string
}
export abstract class ContactsQueryClass {
    static name: string
}
export class ContactsQueryPrivate {
    static name: string
}
export abstract class ContactsServiceClass {
    static name: string
}
export class ContactsServicePrivate {
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
    get_entry_uri: (id: string) => string
    kind_term: string
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
export abstract class FreebaseQueryClass {
    static name: string
}
export class FreebaseQueryPrivate {
    static name: string
}
export abstract class FreebaseResultClass {
    static name: string
}
export class FreebaseResultPrivate {
    static name: string
}
export abstract class FreebaseSearchQueryClass {
    static name: string
}
export class FreebaseSearchQueryPrivate {
    static name: string
}
export abstract class FreebaseSearchResultClass {
    static name: string
}
export class FreebaseSearchResultItem {
    /* Methods of GData-0.0.GData.FreebaseSearchResultItem */
    get_id(): string
    get_language(): string
    get_mid(): string
    get_name(): string
    get_notable_id(): string | null
    get_notable_name(): string | null
    get_score(): number
    static name: string
}
export class FreebaseSearchResultPrivate {
    static name: string
}
export abstract class FreebaseServiceClass {
    static name: string
}
export class FreebaseServicePrivate {
    static name: string
}
export class FreebaseTopicObject {
    /* Methods of GData-0.0.GData.FreebaseTopicObject */
    get_id(): string
    get_property_count(property: string): number
    get_property_hits(property: string): number
    get_property_value(property: string, item: number): FreebaseTopicValue | null
    list_properties(): string[]
    ref(): FreebaseTopicObject
    unref(): void
    static name: string
}
export abstract class FreebaseTopicQueryClass {
    static name: string
}
export class FreebaseTopicQueryPrivate {
    static name: string
}
export abstract class FreebaseTopicResultClass {
    static name: string
}
export class FreebaseTopicResultPrivate {
    static name: string
}
export class FreebaseTopicValue {
    /* Methods of GData-0.0.GData.FreebaseTopicValue */
    copy_value(): /* gvalue */ any
    get_creator(): string
    get_double(): number
    get_int(): number
    get_language(): string
    get_object(): FreebaseTopicObject
    get_property(): string
    get_string(): string
    get_text(): string
    get_timestamp(): number
    get_value_type(): GObject.Type
    is_image(): boolean
    ref(): FreebaseTopicValue
    unref(): void
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
export abstract class OAuth1AuthorizerClass {
    static name: string
}
export class OAuth1AuthorizerPrivate {
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
    pre_parse_xml: (parsable: Parsable, doc: libxml2.Doc, root_node: libxml2.Node) => boolean
    parse_xml: (parsable: Parsable, doc: libxml2.Doc, node: libxml2.Node) => boolean
    post_parse_xml: (parsable: Parsable) => boolean
    pre_get_xml: (parsable: Parsable, xml_string: GLib.String) => void
    get_xml: (parsable: Parsable, xml_string: GLib.String) => void
    get_namespaces: (parsable: Parsable, namespaces: GLib.HashTable) => void
    parse_json: (parsable: Parsable, reader: Json.Reader) => boolean
    post_parse_json: (parsable: Parsable) => boolean
    get_json: (parsable: Parsable, builder: Json.Builder) => void
    get_content_type: () => string
    element_name: string
    element_namespace: string
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
    get_query_uri: (self: Query, feed_uri: string, query_uri: GLib.String, params_started: boolean) => void
    static name: string
}
export class QueryPrivate {
    static name: string
}
export abstract class ServiceClass {
    /* Fields of GData-0.0.GData.ServiceClass */
    parent: GObject.ObjectClass
    api_version: string
    feed_type: GObject.Type
    append_query_headers: (self: Service, domain: AuthorizationDomain, message: Soup.Message) => void
    parse_error_response: (self: Service, operation_type: OperationType, status: number, reason_phrase: string, response_body: string, length: number) => void
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
export abstract class YouTubeContentClass {
    static name: string
}
export class YouTubeContentPrivate {
    static name: string
}
export abstract class YouTubeCreditClass {
    static name: string
}
export class YouTubeCreditPrivate {
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