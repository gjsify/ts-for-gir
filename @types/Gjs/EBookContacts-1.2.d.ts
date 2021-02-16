/**
 * EBookContacts-1.2
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as EDataServer from './EDataServer-1.2';
import type * as Soup from './Soup-2.4';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';

export enum BookChangeType {
    ADDED,
    DELETED,
    MODIFIED,
}
export enum BookClientError {
    NO_SUCH_BOOK,
    CONTACT_NOT_FOUND,
    CONTACT_ID_ALREADY_EXISTS,
    NO_SUCH_SOURCE,
    NO_SPACE,
}
export enum BookCursorOrigin {
    CURRENT,
    BEGIN,
    END,
}
export enum BookCursorSortType {
    ASCENDING,
    DESCENDING,
}
export enum BookIndexType {
    PREFIX,
    SUFFIX,
    PHONE,
    SORT_KEY,
}
export enum BookQueryTest {
    IS,
    CONTAINS,
    BEGINS_WITH,
    ENDS_WITH,
    EQUALS_PHONE_NUMBER,
    EQUALS_NATIONAL_PHONE_NUMBER,
    EQUALS_SHORT_PHONE_NUMBER,
    REGEX_NORMAL,
    REGEX_RAW,
    LAST,
}
export enum BookViewStatus {
    STATUS_OK,
    STATUS_TIME_LIMIT_EXCEEDED,
    STATUS_SIZE_LIMIT_EXCEEDED,
    ERROR_INVALID_QUERY,
    ERROR_QUERY_REFUSED,
    ERROR_OTHER_ERROR,
}
export enum ContactField {
    UID,
    FILE_AS,
    BOOK_UID,
    FULL_NAME,
    GIVEN_NAME,
    FAMILY_NAME,
    NICKNAME,
    EMAIL_1,
    EMAIL_2,
    EMAIL_3,
    EMAIL_4,
    MAILER,
    ADDRESS_LABEL_HOME,
    ADDRESS_LABEL_WORK,
    ADDRESS_LABEL_OTHER,
    PHONE_ASSISTANT,
    PHONE_BUSINESS,
    PHONE_BUSINESS_2,
    PHONE_BUSINESS_FAX,
    PHONE_CALLBACK,
    PHONE_CAR,
    PHONE_COMPANY,
    PHONE_HOME,
    PHONE_HOME_2,
    PHONE_HOME_FAX,
    PHONE_ISDN,
    PHONE_MOBILE,
    PHONE_OTHER,
    PHONE_OTHER_FAX,
    PHONE_PAGER,
    PHONE_PRIMARY,
    PHONE_RADIO,
    PHONE_TELEX,
    PHONE_TTYTDD,
    ORG,
    ORG_UNIT,
    OFFICE,
    TITLE,
    ROLE,
    MANAGER,
    ASSISTANT,
    HOMEPAGE_URL,
    BLOG_URL,
    CATEGORIES,
    CALENDAR_URI,
    FREEBUSY_URL,
    ICS_CALENDAR,
    VIDEO_URL,
    SPOUSE,
    NOTE,
    IM_AIM_HOME_1,
    IM_AIM_HOME_2,
    IM_AIM_HOME_3,
    IM_AIM_WORK_1,
    IM_AIM_WORK_2,
    IM_AIM_WORK_3,
    IM_GROUPWISE_HOME_1,
    IM_GROUPWISE_HOME_2,
    IM_GROUPWISE_HOME_3,
    IM_GROUPWISE_WORK_1,
    IM_GROUPWISE_WORK_2,
    IM_GROUPWISE_WORK_3,
    IM_JABBER_HOME_1,
    IM_JABBER_HOME_2,
    IM_JABBER_HOME_3,
    IM_JABBER_WORK_1,
    IM_JABBER_WORK_2,
    IM_JABBER_WORK_3,
    IM_YAHOO_HOME_1,
    IM_YAHOO_HOME_2,
    IM_YAHOO_HOME_3,
    IM_YAHOO_WORK_1,
    IM_YAHOO_WORK_2,
    IM_YAHOO_WORK_3,
    IM_MSN_HOME_1,
    IM_MSN_HOME_2,
    IM_MSN_HOME_3,
    IM_MSN_WORK_1,
    IM_MSN_WORK_2,
    IM_MSN_WORK_3,
    IM_ICQ_HOME_1,
    IM_ICQ_HOME_2,
    IM_ICQ_HOME_3,
    IM_ICQ_WORK_1,
    IM_ICQ_WORK_2,
    IM_ICQ_WORK_3,
    REV,
    NAME_OR_ORG,
    ADDRESS,
    ADDRESS_HOME,
    ADDRESS_WORK,
    ADDRESS_OTHER,
    CATEGORY_LIST,
    PHOTO,
    LOGO,
    NAME,
    EMAIL,
    IM_AIM,
    IM_GROUPWISE,
    IM_JABBER,
    IM_YAHOO,
    IM_MSN,
    IM_ICQ,
    WANTS_HTML,
    IS_LIST,
    LIST_SHOW_ADDRESSES,
    BIRTH_DATE,
    ANNIVERSARY,
    X509_CERT,
    PGP_CERT,
    IM_GADUGADU_HOME_1,
    IM_GADUGADU_HOME_2,
    IM_GADUGADU_HOME_3,
    IM_GADUGADU_WORK_1,
    IM_GADUGADU_WORK_2,
    IM_GADUGADU_WORK_3,
    IM_GADUGADU,
    GEO,
    TEL,
    IM_SKYPE_HOME_1,
    IM_SKYPE_HOME_2,
    IM_SKYPE_HOME_3,
    IM_SKYPE_WORK_1,
    IM_SKYPE_WORK_2,
    IM_SKYPE_WORK_3,
    IM_SKYPE,
    SIP,
    IM_GOOGLE_TALK_HOME_1,
    IM_GOOGLE_TALK_HOME_2,
    IM_GOOGLE_TALK_HOME_3,
    IM_GOOGLE_TALK_WORK_1,
    IM_GOOGLE_TALK_WORK_2,
    IM_GOOGLE_TALK_WORK_3,
    IM_GOOGLE_TALK,
    IM_TWITTER,
    FIELD_LAST,
    FIELD_FIRST,
    LAST_SIMPLE_STRING,
    FIRST_PHONE_ID,
    LAST_PHONE_ID,
    FIRST_EMAIL_ID,
    LAST_EMAIL_ID,
    FIRST_ADDRESS_ID,
    LAST_ADDRESS_ID,
    FIRST_LABEL_ID,
    LAST_LABEL_ID,
}
export enum ContactPhotoType {
    INLINED,
    URI,
}
export enum PhoneNumberCountrySource {
    FQTN,
    IDD,
    DEFAULT,
}
export enum PhoneNumberError {
    NOT_IMPLEMENTED,
    UNKNOWN,
    NOT_A_NUMBER,
    INVALID_COUNTRY_CODE,
    TOO_SHORT_AFTER_IDD,
    TOO_SHORT,
    TOO_LONG,
}
export enum PhoneNumberFormat {
    E164,
    INTERNATIONAL,
    NATIONAL,
    RFC3966,
}
export enum PhoneNumberMatch {
    NONE,
    EXACT,
    NATIONAL,
    SHORT,
}
export enum VCardFormat {
    /* 21 (invalid, starts with a number) */
    /* 30 (invalid, starts with a number) */
}
export enum BookClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
export enum BookCursorStepFlags {
    MOVE,
    FETCH,
}
export enum BookOperationFlags {
    NONE,
    CONFLICT_FAIL,
    CONFLICT_USE_NEWER,
    CONFLICT_KEEP_SERVER,
    CONFLICT_KEEP_LOCAL,
    CONFLICT_WRITE_COPY,
}
export const BOOK_BACKEND_PROPERTY_REQUIRED_FIELDS: string
export const BOOK_BACKEND_PROPERTY_REVISION: string
export const BOOK_BACKEND_PROPERTY_SUPPORTED_FIELDS: string
export const EVC_ADR: string
export const EVC_BDAY: string
export const EVC_CALURI: string
export const EVC_CATEGORIES: string
export const EVC_CL_UID: string
export const EVC_CONTACT_LIST: string
export const EVC_EMAIL: string
export const EVC_ENCODING: string
export const EVC_FBURL: string
export const EVC_FN: string
export const EVC_GEO: string
export const EVC_ICSCALENDAR: string
export const EVC_KEY: string
export const EVC_LABEL: string
export const EVC_LOGO: string
export const EVC_MAILER: string
export const EVC_N: string
export const EVC_NICKNAME: string
export const EVC_NOTE: string
export const EVC_ORG: string
export const EVC_PARENT_CL: string
export const EVC_PHOTO: string
export const EVC_PRODID: string
export const EVC_QUOTEDPRINTABLE: string
export const EVC_REV: string
export const EVC_ROLE: string
export const EVC_TEL: string
export const EVC_TITLE: string
export const EVC_TYPE: string
export const EVC_UID: string
export const EVC_URL: string
export const EVC_VALUE: string
export const EVC_VERSION: string
export const EVC_X_AIM: string
export const EVC_X_ANNIVERSARY: string
export const EVC_X_ASSISTANT: string
export const EVC_X_BIRTHDAY: string
export const EVC_X_BLOG_URL: string
export const EVC_X_BOOK_UID: string
export const EVC_X_CALLBACK: string
export const EVC_X_COMPANY: string
export const EVC_X_DEST_CONTACT_UID: string
export const EVC_X_DEST_EMAIL: string
export const EVC_X_DEST_EMAIL_NUM: string
export const EVC_X_DEST_HTML_MAIL: string
export const EVC_X_DEST_NAME: string
export const EVC_X_DEST_SOURCE_UID: string
export const EVC_X_E164: string
export const EVC_X_FILE_AS: string
export const EVC_X_GADUGADU: string
export const EVC_X_GOOGLE_TALK: string
export const EVC_X_GROUPWISE: string
export const EVC_X_ICQ: string
export const EVC_X_JABBER: string
export const EVC_X_LIST: string
export const EVC_X_LIST_NAME: string
export const EVC_X_LIST_SHOW_ADDRESSES: string
export const EVC_X_MANAGER: string
export const EVC_X_MSN: string
export const EVC_X_RADIO: string
export const EVC_X_SIP: string
export const EVC_X_SKYPE: string
export const EVC_X_SPOUSE: string
export const EVC_X_TELEX: string
export const EVC_X_TTYTDD: string
export const EVC_X_TWITTER: string
export const EVC_X_VIDEO_URL: string
export const EVC_X_WANTS_HTML: string
export const EVC_X_YAHOO: string
export const SOURCE_EXTENSION_BACKEND_SUMMARY_SETUP: string
export const VCARD_21_VALID_PARAMETERS: string
export const VCARD_21_VALID_PROPERTIES: string
export function address_western_parse(in_address: string): AddressWestern
export function book_client_error_create(code: BookClientError, custom_msg: string): GLib.Error
export function book_client_error_quark(): GLib.Quark
export function book_client_error_to_string(code: BookClientError): string
export function book_query_and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
export function book_query_any_field_contains(value: string): BookQuery
export function book_query_field_exists(field: ContactField): BookQuery
export function book_query_field_test(field: ContactField, test: BookQueryTest, value: string): BookQuery
export function book_query_from_string(query_string: string): BookQuery
export function book_query_or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
export function book_query_vcard_field_exists(field: string): BookQuery
export function book_query_vcard_field_test(field: string, test: BookQueryTest, value: string): BookQuery
export function book_util_conflict_resolution_to_operation_flags(conflict_resolution: EDataServer.ConflictResolution): number
export function book_util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution
export function contact_attr_list_copy(list: string[]): string[]
export function contact_attr_list_free(list: string[]): void
export function contact_date_from_string(str: string): ContactDate
export function contact_name_from_string(name_str: string): ContactName
export function name_western_parse(full_name: string): NameWestern
export function phone_number_compare_strings(first_number: string, second_number: string): PhoneNumberMatch
export function phone_number_compare_strings_with_region(first_number: string, second_number: string, region_code?: string | null): PhoneNumberMatch
export function phone_number_error_quark(): GLib.Quark
export function phone_number_from_string(phone_number: string, region_code?: string | null): PhoneNumber
export function phone_number_get_country_code_for_region(region_code?: string | null): number
export function phone_number_get_default_region(): string
export function phone_number_is_supported(): boolean
export interface Contact_ConstructProps extends VCard_ConstructProps {
    Rev?: string
    address?: ContactAttrList
    address_home?: ContactAddress
    address_label_home?: string
    address_label_other?: string
    address_label_work?: string
    address_other?: ContactAddress
    address_work?: ContactAddress
    anniversary?: ContactDate
    assistant?: string
    assistant_phone?: string
    birth_date?: ContactDate
    blog_url?: string
    book_uid?: string
    business_fax?: string
    business_phone?: string
    business_phone_2?: string
    callback_phone?: string
    caluri?: string
    car_phone?: string
    categories?: string
    category_list?: object
    company_phone?: string
    email?: ContactAttrList
    email_1?: string
    email_2?: string
    email_3?: string
    email_4?: string
    family_name?: string
    fburl?: string
    file_as?: string
    full_name?: string
    geo?: ContactGeo
    given_name?: string
    home_fax?: string
    home_phone?: string
    home_phone_2?: string
    homepage_url?: string
    icscalendar?: string
    id?: string
    im_aim?: ContactAttrList
    im_aim_home_1?: string
    im_aim_home_2?: string
    im_aim_home_3?: string
    im_aim_work_1?: string
    im_aim_work_2?: string
    im_aim_work_3?: string
    im_gadugadu?: ContactAttrList
    im_gadugadu_home_1?: string
    im_gadugadu_home_2?: string
    im_gadugadu_home_3?: string
    im_gadugadu_work_1?: string
    im_gadugadu_work_2?: string
    im_gadugadu_work_3?: string
    im_google_talk?: ContactAttrList
    im_google_talk_home_1?: string
    im_google_talk_home_2?: string
    im_google_talk_home_3?: string
    im_google_talk_work_1?: string
    im_google_talk_work_2?: string
    im_google_talk_work_3?: string
    im_groupwise?: ContactAttrList
    im_groupwise_home_1?: string
    im_groupwise_home_2?: string
    im_groupwise_home_3?: string
    im_groupwise_work_1?: string
    im_groupwise_work_2?: string
    im_groupwise_work_3?: string
    im_icq?: ContactAttrList
    im_icq_home_1?: string
    im_icq_home_2?: string
    im_icq_home_3?: string
    im_icq_work_1?: string
    im_icq_work_2?: string
    im_icq_work_3?: string
    im_jabber?: ContactAttrList
    im_jabber_home_1?: string
    im_jabber_home_2?: string
    im_jabber_home_3?: string
    im_jabber_work_1?: string
    im_jabber_work_2?: string
    im_jabber_work_3?: string
    im_msn?: ContactAttrList
    im_msn_home_1?: string
    im_msn_home_2?: string
    im_msn_home_3?: string
    im_msn_work_1?: string
    im_msn_work_2?: string
    im_msn_work_3?: string
    im_skype?: ContactAttrList
    im_skype_home_1?: string
    im_skype_home_2?: string
    im_skype_home_3?: string
    im_skype_work_1?: string
    im_skype_work_2?: string
    im_skype_work_3?: string
    im_twitter?: ContactAttrList
    im_yahoo?: ContactAttrList
    im_yahoo_home_1?: string
    im_yahoo_home_2?: string
    im_yahoo_home_3?: string
    im_yahoo_work_1?: string
    im_yahoo_work_2?: string
    im_yahoo_work_3?: string
    isdn_phone?: string
    list?: boolean
    list_show_addresses?: boolean
    logo?: ContactPhoto
    mailer?: string
    manager?: string
    mobile_phone?: string
    name?: ContactName
    nickname?: string
    note?: string
    office?: string
    org?: string
    org_unit?: string
    other_fax?: string
    other_phone?: string
    pager?: string
    pgpCert?: ContactCert
    phone?: ContactAttrList
    photo?: ContactPhoto
    primary_phone?: string
    radio?: string
    role?: string
    sip?: ContactAttrList
    spouse?: string
    telex?: string
    title?: string
    tty?: string
    video_url?: string
    wants_html?: boolean
    x509Cert?: ContactCert
}
export class Contact {
    /* Properties of EBookContacts.Contact */
    Rev: string
    address: ContactAttrList
    address_home: ContactAddress
    address_label_home: string
    address_label_other: string
    address_label_work: string
    address_other: ContactAddress
    address_work: ContactAddress
    anniversary: ContactDate
    assistant: string
    assistant_phone: string
    birth_date: ContactDate
    blog_url: string
    book_uid: string
    business_fax: string
    business_phone: string
    business_phone_2: string
    callback_phone: string
    caluri: string
    car_phone: string
    categories: string
    category_list: object
    company_phone: string
    email: ContactAttrList
    email_1: string
    email_2: string
    email_3: string
    email_4: string
    family_name: string
    fburl: string
    file_as: string
    full_name: string
    geo: ContactGeo
    given_name: string
    home_fax: string
    home_phone: string
    home_phone_2: string
    homepage_url: string
    icscalendar: string
    id: string
    im_aim: ContactAttrList
    im_aim_home_1: string
    im_aim_home_2: string
    im_aim_home_3: string
    im_aim_work_1: string
    im_aim_work_2: string
    im_aim_work_3: string
    im_gadugadu: ContactAttrList
    im_gadugadu_home_1: string
    im_gadugadu_home_2: string
    im_gadugadu_home_3: string
    im_gadugadu_work_1: string
    im_gadugadu_work_2: string
    im_gadugadu_work_3: string
    im_google_talk: ContactAttrList
    im_google_talk_home_1: string
    im_google_talk_home_2: string
    im_google_talk_home_3: string
    im_google_talk_work_1: string
    im_google_talk_work_2: string
    im_google_talk_work_3: string
    im_groupwise: ContactAttrList
    im_groupwise_home_1: string
    im_groupwise_home_2: string
    im_groupwise_home_3: string
    im_groupwise_work_1: string
    im_groupwise_work_2: string
    im_groupwise_work_3: string
    im_icq: ContactAttrList
    im_icq_home_1: string
    im_icq_home_2: string
    im_icq_home_3: string
    im_icq_work_1: string
    im_icq_work_2: string
    im_icq_work_3: string
    im_jabber: ContactAttrList
    im_jabber_home_1: string
    im_jabber_home_2: string
    im_jabber_home_3: string
    im_jabber_work_1: string
    im_jabber_work_2: string
    im_jabber_work_3: string
    im_msn: ContactAttrList
    im_msn_home_1: string
    im_msn_home_2: string
    im_msn_home_3: string
    im_msn_work_1: string
    im_msn_work_2: string
    im_msn_work_3: string
    im_skype: ContactAttrList
    im_skype_home_1: string
    im_skype_home_2: string
    im_skype_home_3: string
    im_skype_work_1: string
    im_skype_work_2: string
    im_skype_work_3: string
    im_twitter: ContactAttrList
    im_yahoo: ContactAttrList
    im_yahoo_home_1: string
    im_yahoo_home_2: string
    im_yahoo_home_3: string
    im_yahoo_work_1: string
    im_yahoo_work_2: string
    im_yahoo_work_3: string
    isdn_phone: string
    list: boolean
    list_show_addresses: boolean
    logo: ContactPhoto
    mailer: string
    manager: string
    mobile_phone: string
    name: ContactName
    readonly name_or_org: string
    nickname: string
    note: string
    office: string
    org: string
    org_unit: string
    other_fax: string
    other_phone: string
    pager: string
    pgpCert: ContactCert
    phone: ContactAttrList
    photo: ContactPhoto
    primary_phone: string
    radio: string
    role: string
    sip: ContactAttrList
    spouse: string
    telex: string
    title: string
    tty: string
    video_url: string
    wants_html: boolean
    x509Cert: ContactCert
    /* Fields of EBookContacts.Contact */
    parent: VCard
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBookContacts.Contact */
    duplicate(): Contact
    get(field_id: ContactField): object | null
    get_attributes(field_id: ContactField): VCardAttribute[]
    get_attributes_set(field_ids: ContactField, size: number): VCardAttribute[]
    get_const(field_id: ContactField): object | null
    inline_local_photos(): boolean
    set(field_id: ContactField, value?: object | null): void
    set_attributes(field_id: ContactField, attributes: VCardAttribute[]): void
    /* Methods of EBookContacts.VCard */
    add_attribute(attr: VCardAttribute): void
    add_attribute_with_value(attr: VCardAttribute, value: string): void
    append_attribute(attr: VCardAttribute): void
    append_attribute_with_value(attr: VCardAttribute, value: string): void
    construct(str: string): void
    construct_full(str: string, len: number, uid?: string | null): void
    construct_with_uid(str: string, uid?: string | null): void
    dump_structure(): void
    get_attribute(name: string): VCardAttribute | null
    get_attribute_if_parsed(name: string): VCardAttribute | null
    get_attributes(): VCardAttribute[]
    is_parsed(): boolean
    remove_attribute(attr: VCardAttribute): void
    remove_attributes(attr_group: string | null, attr_name: string): void
    to_string(format: VCardFormat): string
    util_dup_x_attribute(x_name: string): string | null
    util_set_x_attribute(x_name: string, value?: string | null): void
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::Rev", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Rev", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-label-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-label-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-label-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anniversary", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anniversary", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assistant", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assistant-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birth-date", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birth-date", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blog-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blog-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::book-uid", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book-uid", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::business-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::business-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::business-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::callback-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callback-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caluri", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caluri", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::car-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::car-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category-list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::company-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::company-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-4", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-4", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fburl", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fburl", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-as", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-as", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::given-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homepage-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icscalendar", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icscalendar", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-aim-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-gadugadu-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-google-talk-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-groupwise-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-icq-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-jabber-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-msn-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-skype-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-twitter", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-twitter", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-yahoo-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::isdn-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::isdn-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::list-show-addresses", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list-show-addresses", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::logo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mailer", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mailer", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mobile-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mobile-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name-or-org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-or-org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::note", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::note", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::office", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::office", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::org-unit", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org-unit", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::other-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::other-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pgpCert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pgpCert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::photo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radio", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radio", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sip", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sip", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spouse", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spouse", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::telex", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::telex", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tty", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tty", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wants-html", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wants-html", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x509Cert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x509Cert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    static new_from_vcard(vcard: string): Contact
    static new_from_vcard_with_uid(vcard: string, uid: string): Contact
    static field_id(field_name: string): ContactField
    static field_id_from_vcard(vcard_field: string): ContactField
    static field_is_string(field_id: ContactField): boolean
    static field_name(field_id: ContactField): string
    static field_type(field_id: ContactField): GObject.Type
    static pretty_name(field_id: ContactField): string
    static vcard_attribute(field_id: ContactField): string
    static $gtype: GObject.Type
}
export interface SourceBackendSummarySetup_ConstructProps extends EDataServer.SourceExtension_ConstructProps {
    indexed_fields?: string
    summary_fields?: string
}
export class SourceBackendSummarySetup {
    /* Properties of EBookContacts.SourceBackendSummarySetup */
    indexed_fields: string
    summary_fields: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBookContacts.SourceBackendSummarySetup */
    get_indexed_fields(): [ /* returnType */ ContactField, /* types */ BookIndexType, /* n_fields */ number ]
    get_summary_fields(): [ /* returnType */ ContactField, /* n_fields */ number ]
    set_indexed_fieldsv(fields: ContactField, types: BookIndexType, n_fields: number): void
    set_summary_fieldsv(fields: ContactField, n_fields: number): void
    /* Methods of EDataServer.SourceExtension */
    get_source(): EDataServer.Source
    property_lock(): void
    property_unlock(): void
    ref_source(): EDataServer.Source
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indexed-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indexed-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceBackendSummarySetup_ConstructProps)
    _init (config?: SourceBackendSummarySetup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VCard_ConstructProps extends GObject.Object_ConstructProps {
}
export class VCard {
    /* Fields of EBookContacts.VCard */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EBookContacts.VCard */
    add_attribute(attr: VCardAttribute): void
    add_attribute_with_value(attr: VCardAttribute, value: string): void
    append_attribute(attr: VCardAttribute): void
    append_attribute_with_value(attr: VCardAttribute, value: string): void
    construct(str: string): void
    construct_full(str: string, len: number, uid?: string | null): void
    construct_with_uid(str: string, uid?: string | null): void
    dump_structure(): void
    get_attribute(name: string): VCardAttribute | null
    get_attribute_if_parsed(name: string): VCardAttribute | null
    get_attributes(): VCardAttribute[]
    is_parsed(): boolean
    remove_attribute(attr: VCardAttribute): void
    remove_attributes(attr_group: string | null, attr_name: string): void
    to_string(format: VCardFormat): string
    util_dup_x_attribute(x_name: string): string | null
    util_set_x_attribute(x_name: string, value?: string | null): void
    /* Methods of GObject.Object */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VCard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VCard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VCard_ConstructProps)
    _init (config?: VCard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VCard
    static new_from_string(str: string): VCard
    static escape_string(s: string): string
    static unescape_string(s: string): string
    static $gtype: GObject.Type
}
export class AddressWestern {
    /* Fields of EBookContacts.AddressWestern */
    po_box: string
    extended: string
    street: string
    locality: string
    region: string
    postal_code: string
    country: string
    /* Methods of EBookContacts.AddressWestern */
    copy(): AddressWestern
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(in_address: string): AddressWestern
}
export class BookChange {
    /* Fields of EBookContacts.BookChange */
    change_type: BookChangeType
    contact: Contact
    static name: string
}
export class BookQuery {
    /* Methods of EBookContacts.BookQuery */
    copy(): BookQuery
    not(unref: boolean): BookQuery
    ref(): BookQuery
    to_string(): string
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    static any_field_contains(value: string): BookQuery
    static field_exists(field: ContactField): BookQuery
    static field_test(field: ContactField, test: BookQueryTest, value: string): BookQuery
    static from_string(query_string: string): BookQuery
    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    static vcard_field_exists(field: string): BookQuery
    static vcard_field_test(field: string, test: BookQueryTest, value: string): BookQuery
}
export class ContactAddress {
    /* Fields of EBookContacts.ContactAddress */
    address_format: string
    po: string
    ext: string
    street: string
    locality: string
    region: string
    code: string
    country: string
    /* Methods of EBookContacts.ContactAddress */
    free(): void
    static name: string
    static new(): ContactAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactAddress
}
export class ContactCert {
    /* Fields of EBookContacts.ContactCert */
    length: number
    data: string
    /* Methods of EBookContacts.ContactCert */
    free(): void
    static name: string
    static new(): ContactCert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactCert
}
export abstract class ContactClass {
    /* Fields of EBookContacts.ContactClass */
    parent_class: VCardClass
    static name: string
}
export class ContactDate {
    /* Fields of EBookContacts.ContactDate */
    year: number
    month: number
    day: number
    /* Methods of EBookContacts.ContactDate */
    equal(dt2: ContactDate): boolean
    free(): void
    to_string(): string
    static name: string
    static new(): ContactDate
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactDate
    static from_string(str: string): ContactDate
}
export class ContactGeo {
    /* Fields of EBookContacts.ContactGeo */
    latitude: number
    longitude: number
    /* Methods of EBookContacts.ContactGeo */
    free(): void
    static name: string
    static new(): ContactGeo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactGeo
}
export class ContactName {
    /* Fields of EBookContacts.ContactName */
    family: string
    given: string
    additional: string
    prefixes: string
    suffixes: string
    /* Methods of EBookContacts.ContactName */
    copy(): ContactName
    free(): void
    to_string(): string
    static name: string
    static new(): ContactName
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactName
    static from_string(name_str: string): ContactName
}
export class ContactPhoto {
    /* Fields of EBookContacts.ContactPhoto */
    type: ContactPhotoType
    /* Methods of EBookContacts.ContactPhoto */
    copy(): ContactPhoto
    free(): void
    get_inlined(): Uint8Array | null
    get_mime_type(): string | null
    get_uri(): string | null
    set_inlined(data: Uint8Array): void
    set_mime_type(mime_type: string): void
    set_uri(uri: string): void
    static name: string
    static new(): ContactPhoto
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactPhoto
}
export class ContactPrivate {
    static name: string
}
export class NameWestern {
    /* Fields of EBookContacts.NameWestern */
    prefix: string
    first: string
    middle: string
    nick: string
    last: string
    suffix: string
    full: string
    /* Methods of EBookContacts.NameWestern */
    copy(): NameWestern
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(full_name: string): NameWestern
}
export class PhoneNumber {
    /* Methods of EBookContacts.PhoneNumber */
    compare(second_number: PhoneNumber): PhoneNumberMatch
    copy(): PhoneNumber
    free(): void
    get_country_code(source: PhoneNumberCountrySource): number
    get_national_number(): string
    to_string(format: PhoneNumberFormat): string
    static name: string
    /* Static methods and pseudo-constructors */
    static compare_strings(first_number: string, second_number: string): PhoneNumberMatch
    static compare_strings_with_region(first_number: string, second_number: string, region_code?: string | null): PhoneNumberMatch
    static error_quark(): GLib.Quark
    static from_string(phone_number: string, region_code?: string | null): PhoneNumber
    static get_country_code_for_region(region_code?: string | null): number
    static get_default_region(): string
    static is_supported(): boolean
}
export abstract class SourceBackendSummarySetupClass {
    /* Fields of EBookContacts.SourceBackendSummarySetupClass */
    parent_class: EDataServer.SourceBackendClass
    static name: string
}
export class SourceBackendSummarySetupPrivate {
    static name: string
}
export class VCardAttribute {
    /* Methods of EBookContacts.VCardAttribute */
    add_param(param: VCardAttributeParam): void
    add_param_with_value(param: VCardAttributeParam, value: string): void
    add_value(value: string): void
    add_value_decoded(value: string, len: number): void
    copy(): VCardAttribute
    free(): void
    get_group(): string | null
    get_name(): string
    get_param(name: string): string[] | null
    get_params(): VCardAttributeParam[]
    get_value(): string | null
    get_value_decoded(): GLib.String | null
    get_values(): string[]
    get_values_decoded(): GLib.String[]
    has_type(typestr: string): boolean
    is_single_valued(): boolean
    remove_param(param_name: string): void
    remove_param_value(param_name: string, s: string): void
    remove_params(): void
    remove_value(s: string): void
    remove_values(): void
    static name: string
    static new(attr_group: string | null, attr_name: string): VCardAttribute
    constructor(attr_group: string | null, attr_name: string)
    /* Static methods and pseudo-constructors */
    static new(attr_group: string | null, attr_name: string): VCardAttribute
}
export class VCardAttributeParam {
    /* Methods of EBookContacts.VCardAttributeParam */
    add_value(value: string): void
    copy(): VCardAttributeParam
    free(): void
    get_name(): string
    get_values(): string[]
    remove_values(): void
    static name: string
    static new(name: string): VCardAttributeParam
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): VCardAttributeParam
}
export abstract class VCardClass {
    /* Fields of EBookContacts.VCardClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class VCardPrivate {
    static name: string
}