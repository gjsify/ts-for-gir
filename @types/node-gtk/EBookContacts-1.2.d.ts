/**
 * EBookContacts-1.2
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { EDataServer } from './EDataServer-1.2';
import type { Soup } from './Soup-2.4';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';

export declare namespace EBookContacts {

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
    IM_MATRIX_HOME_1,
    IM_MATRIX_HOME_2,
    IM_MATRIX_HOME_3,
    IM_MATRIX_WORK_1,
    IM_MATRIX_WORK_2,
    IM_MATRIX_WORK_3,
    IM_MATRIX,
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
export const EVC_X_MATRIX: string
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
export function addressWesternParse(inAddress: string): AddressWestern
export function bookClientErrorCreate(code: BookClientError, customMsg: string): GLib.Error
export function bookClientErrorQuark(): GLib.Quark
export function bookClientErrorToString(code: BookClientError): string
export function bookQueryAnd(nqs: number, qs: BookQuery, unref: boolean): BookQuery
export function bookQueryAnyFieldContains(value: string): BookQuery
export function bookQueryFieldExists(field: ContactField): BookQuery
export function bookQueryFieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
export function bookQueryFromString(queryString: string): BookQuery
export function bookQueryOr(nqs: number, qs: BookQuery, unref: boolean): BookQuery
export function bookQueryVcardFieldExists(field: string): BookQuery
export function bookQueryVcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
export function bookUtilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
export function bookUtilForeachAddress(emailAddress: string, func: GLib.HRFunc): void
export function bookUtilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
export function contactAttrListCopy(list: string[]): string[]
export function contactAttrListFree(list: string[]): void
export function contactDateFromString(str: string): ContactDate
export function contactNameFromString(nameStr: string): ContactName
export function nameWesternParse(fullName: string): NameWestern
export function phoneNumberCompareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
export function phoneNumberCompareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode?: string | null): PhoneNumberMatch
export function phoneNumberErrorQuark(): GLib.Quark
export function phoneNumberFromString(phoneNumber: string, regionCode?: string | null): PhoneNumber
export function phoneNumberGetCountryCodeForRegion(regionCode?: string | null): number
export function phoneNumberGetDefaultRegion(): string
export function phoneNumberIsSupported(): boolean
export interface Contact_ConstructProps extends VCard_ConstructProps {
    rev?: string
    address?: any
    addressHome?: ContactAddress
    addressLabelHome?: string
    addressLabelOther?: string
    addressLabelWork?: string
    addressOther?: ContactAddress
    addressWork?: ContactAddress
    anniversary?: ContactDate
    assistant?: string
    assistantPhone?: string
    birthDate?: ContactDate
    blogUrl?: string
    bookUid?: string
    businessFax?: string
    businessPhone?: string
    businessPhone2?: string
    callbackPhone?: string
    caluri?: string
    carPhone?: string
    categories?: string
    categoryList?: object
    companyPhone?: string
    email?: any
    email1?: string
    email2?: string
    email3?: string
    email4?: string
    familyName?: string
    fburl?: string
    fileAs?: string
    fullName?: string
    geo?: ContactGeo
    givenName?: string
    homeFax?: string
    homePhone?: string
    homePhone2?: string
    homepageUrl?: string
    icscalendar?: string
    id?: string
    imAim?: any
    imAimHome1?: string
    imAimHome2?: string
    imAimHome3?: string
    imAimWork1?: string
    imAimWork2?: string
    imAimWork3?: string
    imGadugadu?: any
    imGadugaduHome1?: string
    imGadugaduHome2?: string
    imGadugaduHome3?: string
    imGadugaduWork1?: string
    imGadugaduWork2?: string
    imGadugaduWork3?: string
    imGoogleTalk?: any
    imGoogleTalkHome1?: string
    imGoogleTalkHome2?: string
    imGoogleTalkHome3?: string
    imGoogleTalkWork1?: string
    imGoogleTalkWork2?: string
    imGoogleTalkWork3?: string
    imGroupwise?: any
    imGroupwiseHome1?: string
    imGroupwiseHome2?: string
    imGroupwiseHome3?: string
    imGroupwiseWork1?: string
    imGroupwiseWork2?: string
    imGroupwiseWork3?: string
    imIcq?: any
    imIcqHome1?: string
    imIcqHome2?: string
    imIcqHome3?: string
    imIcqWork1?: string
    imIcqWork2?: string
    imIcqWork3?: string
    imJabber?: any
    imJabberHome1?: string
    imJabberHome2?: string
    imJabberHome3?: string
    imJabberWork1?: string
    imJabberWork2?: string
    imJabberWork3?: string
    imMatrix?: any
    imMatrixHome1?: string
    imMatrixHome2?: string
    imMatrixHome3?: string
    imMatrixWork1?: string
    imMatrixWork2?: string
    imMatrixWork3?: string
    imMsn?: any
    imMsnHome1?: string
    imMsnHome2?: string
    imMsnHome3?: string
    imMsnWork1?: string
    imMsnWork2?: string
    imMsnWork3?: string
    imSkype?: any
    imSkypeHome1?: string
    imSkypeHome2?: string
    imSkypeHome3?: string
    imSkypeWork1?: string
    imSkypeWork2?: string
    imSkypeWork3?: string
    imTwitter?: any
    imYahoo?: any
    imYahooHome1?: string
    imYahooHome2?: string
    imYahooHome3?: string
    imYahooWork1?: string
    imYahooWork2?: string
    imYahooWork3?: string
    isdnPhone?: string
    list?: boolean
    listShowAddresses?: boolean
    logo?: ContactPhoto
    mailer?: string
    manager?: string
    mobilePhone?: string
    name?: ContactName
    nickname?: string
    note?: string
    office?: string
    org?: string
    orgUnit?: string
    otherFax?: string
    otherPhone?: string
    pager?: string
    pgpCert?: ContactCert
    phone?: any
    photo?: ContactPhoto
    primaryPhone?: string
    radio?: string
    role?: string
    sip?: any
    spouse?: string
    telex?: string
    title?: string
    tty?: string
    videoUrl?: string
    wantsHtml?: boolean
    x509Cert?: ContactCert
}
export class Contact {
    /* Properties of EBookContacts-1.2.EBookContacts.Contact */
    rev: string
    address: any
    addressHome: ContactAddress
    addressLabelHome: string
    addressLabelOther: string
    addressLabelWork: string
    addressOther: ContactAddress
    addressWork: ContactAddress
    anniversary: ContactDate
    assistant: string
    assistantPhone: string
    birthDate: ContactDate
    blogUrl: string
    bookUid: string
    businessFax: string
    businessPhone: string
    businessPhone2: string
    callbackPhone: string
    caluri: string
    carPhone: string
    categories: string
    categoryList: object
    companyPhone: string
    email: any
    email1: string
    email2: string
    email3: string
    email4: string
    familyName: string
    fburl: string
    fileAs: string
    fullName: string
    geo: ContactGeo
    givenName: string
    homeFax: string
    homePhone: string
    homePhone2: string
    homepageUrl: string
    icscalendar: string
    id: string
    imAim: any
    imAimHome1: string
    imAimHome2: string
    imAimHome3: string
    imAimWork1: string
    imAimWork2: string
    imAimWork3: string
    imGadugadu: any
    imGadugaduHome1: string
    imGadugaduHome2: string
    imGadugaduHome3: string
    imGadugaduWork1: string
    imGadugaduWork2: string
    imGadugaduWork3: string
    imGoogleTalk: any
    imGoogleTalkHome1: string
    imGoogleTalkHome2: string
    imGoogleTalkHome3: string
    imGoogleTalkWork1: string
    imGoogleTalkWork2: string
    imGoogleTalkWork3: string
    imGroupwise: any
    imGroupwiseHome1: string
    imGroupwiseHome2: string
    imGroupwiseHome3: string
    imGroupwiseWork1: string
    imGroupwiseWork2: string
    imGroupwiseWork3: string
    imIcq: any
    imIcqHome1: string
    imIcqHome2: string
    imIcqHome3: string
    imIcqWork1: string
    imIcqWork2: string
    imIcqWork3: string
    imJabber: any
    imJabberHome1: string
    imJabberHome2: string
    imJabberHome3: string
    imJabberWork1: string
    imJabberWork2: string
    imJabberWork3: string
    imMatrix: any
    imMatrixHome1: string
    imMatrixHome2: string
    imMatrixHome3: string
    imMatrixWork1: string
    imMatrixWork2: string
    imMatrixWork3: string
    imMsn: any
    imMsnHome1: string
    imMsnHome2: string
    imMsnHome3: string
    imMsnWork1: string
    imMsnWork2: string
    imMsnWork3: string
    imSkype: any
    imSkypeHome1: string
    imSkypeHome2: string
    imSkypeHome3: string
    imSkypeWork1: string
    imSkypeWork2: string
    imSkypeWork3: string
    imTwitter: any
    imYahoo: any
    imYahooHome1: string
    imYahooHome2: string
    imYahooHome3: string
    imYahooWork1: string
    imYahooWork2: string
    imYahooWork3: string
    isdnPhone: string
    list: boolean
    listShowAddresses: boolean
    logo: ContactPhoto
    mailer: string
    manager: string
    mobilePhone: string
    name: ContactName
    readonly nameOrOrg: string
    nickname: string
    note: string
    office: string
    org: string
    orgUnit: string
    otherFax: string
    otherPhone: string
    pager: string
    pgpCert: ContactCert
    phone: any
    photo: ContactPhoto
    primaryPhone: string
    radio: string
    role: string
    sip: any
    spouse: string
    telex: string
    title: string
    tty: string
    videoUrl: string
    wantsHtml: boolean
    x509Cert: ContactCert
    /* Fields of EBookContacts-1.2.EBookContacts.Contact */
    parent: VCard
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.Contact */
    duplicate(): Contact
    get(fieldId: ContactField): object | null
    getAttributes(fieldId: ContactField): VCardAttribute[]
    getAttributesSet(fieldIds: ContactField[]): VCardAttribute[]
    getConst(fieldId: ContactField): object | null
    inlineLocalPhotos(): boolean
    set(fieldId: ContactField, value?: object | null): void
    setAttributes(fieldId: ContactField, attributes: VCardAttribute[]): void
    /* Methods of EBookContacts-1.2.EBookContacts.VCard */
    addAttribute(attr: VCardAttribute): void
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    appendAttribute(attr: VCardAttribute): void
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    construct(str: string): void
    constructFull(str: string, len: number, uid?: string | null): void
    constructWithUid(str: string, uid?: string | null): void
    dumpStructure(): void
    getAttribute(name: string): VCardAttribute | null
    getAttributeIfParsed(name: string): VCardAttribute | null
    getAttributes(): VCardAttribute[]
    isParsed(): boolean
    removeAttribute(attr: VCardAttribute): void
    removeAttributes(attrGroup: string | null, attrName: string): void
    toString(format: VCardFormat): string
    utilDupXAttribute(xName: string): string | null
    utilSetXAttribute(xName: string, value?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::Rev", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Rev", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::Rev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-home", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-home", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-label-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-label-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-label-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-other", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-other", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-work", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address-work", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anniversary", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anniversary", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anniversary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assistant", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assistant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::assistant-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assistant-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::assistant-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birth-date", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birth-date", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birth-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blog-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blog-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blog-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::book-uid", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book-uid", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::book-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::business-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::business-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::business-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::callback-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callback-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::callback-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caluri", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caluri", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caluri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::car-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::car-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::car-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category-list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::company-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::company-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::company-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-4", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-4", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fburl", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fburl", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fburl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-as", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-as", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-as", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::given-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-phone-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-phone-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homepage-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homepage-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icscalendar", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icscalendar", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icscalendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-aim-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-aim-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-aim-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-gadugadu-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-gadugadu-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-gadugadu-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-google-talk-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-google-talk-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-google-talk-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-groupwise-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-groupwise-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-groupwise-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-icq-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-icq-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-icq-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-jabber-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-jabber-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-jabber-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-matrix-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-matrix-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-matrix-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-msn-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-msn-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-msn-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-skype-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-skype-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-skype-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-twitter", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-twitter", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-twitter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-home-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-home-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-1", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-2", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-yahoo-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-yahoo-work-3", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-yahoo-work-3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::isdn-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::isdn-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::isdn-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::list-show-addresses", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list-show-addresses", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::list-show-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mailer", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mailer", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mailer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mobile-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mobile-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mobile-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name-or-org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-or-org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-or-org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::note", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::note", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::note", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::office", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::office", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::office", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::org", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::org-unit", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::org-unit", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::org-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::other-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-fax", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::other-fax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::other-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::other-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::other-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pager", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pgpCert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pgpCert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pgpCert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photo", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-phone", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-phone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radio", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radio", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sip", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sip", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spouse", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spouse", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spouse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::telex", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::telex", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::telex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tty", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tty", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-url", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wants-html", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wants-html", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wants-html", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x509Cert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x509Cert", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x509Cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    static newFromVcard(vcard: string): Contact
    static newFromVcardWithUid(vcard: string, uid: string): Contact
    static fieldId(fieldName: string): ContactField
    static fieldIdFromVcard(vcardField: string): ContactField
    static fieldIsString(fieldId: ContactField): boolean
    static fieldName(fieldId: ContactField): string
    static fieldType(fieldId: ContactField): GObject.Type
    static prettyName(fieldId: ContactField): string
    static vcardAttribute(fieldId: ContactField): string
    static $gtype: GObject.Type
}
export interface SourceBackendSummarySetup_ConstructProps extends EDataServer.SourceExtension_ConstructProps {
    indexedFields?: string
    summaryFields?: string
}
export class SourceBackendSummarySetup {
    /* Properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup */
    indexedFields: string
    summaryFields: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup */
    getIndexedFields(): { returnType: ContactField, types: BookIndexType, nFields: number }
    getSummaryFields(): { returnType: ContactField, nFields: number }
    setIndexedFieldsv(fields: ContactField, types: BookIndexType, nFields: number): void
    setSummaryFieldsv(fields: ContactField, nFields: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): EDataServer.Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): EDataServer.Source
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
    connect(sigName: "notify", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indexed-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indexed-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indexed-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary-fields", callback: (($obj: SourceBackendSummarySetup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceBackendSummarySetup_ConstructProps)
    _init (config?: SourceBackendSummarySetup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VCard_ConstructProps extends GObject.Object_ConstructProps {
}
export class VCard {
    /* Fields of EBookContacts-1.2.EBookContacts.VCard */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBookContacts-1.2.EBookContacts.VCard */
    addAttribute(attr: VCardAttribute): void
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    appendAttribute(attr: VCardAttribute): void
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    construct(str: string): void
    constructFull(str: string, len: number, uid?: string | null): void
    constructWithUid(str: string, uid?: string | null): void
    dumpStructure(): void
    getAttribute(name: string): VCardAttribute | null
    getAttributeIfParsed(name: string): VCardAttribute | null
    getAttributes(): VCardAttribute[]
    isParsed(): boolean
    removeAttribute(attr: VCardAttribute): void
    removeAttributes(attrGroup: string | null, attrName: string): void
    toString(format: VCardFormat): string
    utilDupXAttribute(xName: string): string | null
    utilSetXAttribute(xName: string, value?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: VCard, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: VCard_ConstructProps)
    _init (config?: VCard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VCard
    static newFromString(str: string): VCard
    static escapeString(s: string): string
    static unescapeString(s: string): string
    static $gtype: GObject.Type
}
export class AddressWestern {
    /* Fields of EBookContacts-1.2.EBookContacts.AddressWestern */
    poBox: string
    extended: string
    street: string
    locality: string
    region: string
    postalCode: string
    country: string
    /* Methods of EBookContacts-1.2.EBookContacts.AddressWestern */
    copy(): AddressWestern
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(inAddress: string): AddressWestern
}
export class BookChange {
    /* Fields of EBookContacts-1.2.EBookContacts.BookChange */
    changeType: BookChangeType
    contact: Contact
    static name: string
}
export class BookQuery {
    /* Methods of EBookContacts-1.2.EBookContacts.BookQuery */
    copy(): BookQuery
    not(unref: boolean): BookQuery
    ref(): BookQuery
    toString(): string
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    static anyFieldContains(value: string): BookQuery
    static fieldExists(field: ContactField): BookQuery
    static fieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
    static fromString(queryString: string): BookQuery
    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    static vcardFieldExists(field: string): BookQuery
    static vcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
}
export class ContactAddress {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactAddress */
    addressFormat: string
    po: string
    ext: string
    street: string
    locality: string
    region: string
    code: string
    country: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactAddress */
    free(): void
    static name: string
    static new(): ContactAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactAddress
}
export class ContactCert {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactCert */
    length: number
    data: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactCert */
    free(): void
    static name: string
    static new(): ContactCert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactCert
}
export abstract class ContactClass {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactClass */
    parentClass: VCardClass
    static name: string
}
export class ContactDate {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactDate */
    year: number
    month: number
    day: number
    /* Methods of EBookContacts-1.2.EBookContacts.ContactDate */
    equal(dt2: ContactDate): boolean
    free(): void
    toString(): string
    static name: string
    static new(): ContactDate
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactDate
    static fromString(str: string): ContactDate
}
export class ContactGeo {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactGeo */
    latitude: number
    longitude: number
    /* Methods of EBookContacts-1.2.EBookContacts.ContactGeo */
    free(): void
    static name: string
    static new(): ContactGeo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactGeo
}
export class ContactName {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactName */
    family: string
    given: string
    additional: string
    prefixes: string
    suffixes: string
    /* Methods of EBookContacts-1.2.EBookContacts.ContactName */
    copy(): ContactName
    free(): void
    toString(): string
    static name: string
    static new(): ContactName
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContactName
    static fromString(nameStr: string): ContactName
}
export class ContactPhoto {
    /* Fields of EBookContacts-1.2.EBookContacts.ContactPhoto */
    type: ContactPhotoType
    /* Methods of EBookContacts-1.2.EBookContacts.ContactPhoto */
    copy(): ContactPhoto
    free(): void
    getInlined(): any[] | null
    getMimeType(): string | null
    getUri(): string | null
    setInlined(data: any[]): void
    setMimeType(mimeType: string): void
    setUri(uri: string): void
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
    /* Fields of EBookContacts-1.2.EBookContacts.NameWestern */
    prefix: string
    first: string
    middle: string
    nick: string
    last: string
    suffix: string
    full: string
    /* Methods of EBookContacts-1.2.EBookContacts.NameWestern */
    copy(): NameWestern
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(fullName: string): NameWestern
}
export class PhoneNumber {
    /* Methods of EBookContacts-1.2.EBookContacts.PhoneNumber */
    compare(secondNumber: PhoneNumber): PhoneNumberMatch
    copy(): PhoneNumber
    free(): void
    getCountryCode(source?: PhoneNumberCountrySource | null): number
    getNationalNumber(): string
    toString(format: PhoneNumberFormat): string
    static name: string
    /* Static methods and pseudo-constructors */
    static compareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
    static compareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode?: string | null): PhoneNumberMatch
    static errorQuark(): GLib.Quark
    static fromString(phoneNumber: string, regionCode?: string | null): PhoneNumber
    static getCountryCodeForRegion(regionCode?: string | null): number
    static getDefaultRegion(): string
    static isSupported(): boolean
}
export abstract class SourceBackendSummarySetupClass {
    /* Fields of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass */
    parentClass: EDataServer.SourceBackendClass
    static name: string
}
export class SourceBackendSummarySetupPrivate {
    static name: string
}
export class VCardAttribute {
    /* Methods of EBookContacts-1.2.EBookContacts.VCardAttribute */
    addParam(param: VCardAttributeParam): void
    addParamWithValue(param: VCardAttributeParam, value: string): void
    addValue(value: string): void
    addValueDecoded(value: string, len: number): void
    copy(): VCardAttribute
    free(): void
    getGroup(): string | null
    getName(): string
    getParam(name: string): string[] | null
    getParams(): VCardAttributeParam[]
    getValue(): string | null
    getValueDecoded(): GLib.String | null
    getValues(): string[]
    getValuesDecoded(): GLib.String[]
    hasType(typestr: string): boolean
    isSingleValued(): boolean
    removeParam(paramName: string): void
    removeParamValue(paramName: string, s: string): void
    removeParams(): void
    removeValue(s: string): void
    removeValues(): void
    static name: string
    static new(attrGroup: string | null, attrName: string): VCardAttribute
    constructor(attrGroup: string | null, attrName: string)
    /* Static methods and pseudo-constructors */
    static new(attrGroup: string | null, attrName: string): VCardAttribute
}
export class VCardAttributeParam {
    /* Methods of EBookContacts-1.2.EBookContacts.VCardAttributeParam */
    addValue(value: string): void
    copy(): VCardAttributeParam
    free(): void
    getName(): string
    getValues(): string[]
    removeValues(): void
    static name: string
    static new(name: string): VCardAttributeParam
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): VCardAttributeParam
}
export abstract class VCardClass {
    /* Fields of EBookContacts-1.2.EBookContacts.VCardClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class VCardPrivate {
    static name: string
}
}