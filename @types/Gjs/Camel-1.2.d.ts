/**
 * Camel-1.2
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AuthenticationResult {
    ERROR,
    ACCEPTED,
    REJECTED,
}
export enum CertTrust {
    UNKNOWN,
    NEVER,
    MARGINAL,
    FULLY,
    ULTIMATE,
    TEMPORARY,
}
export enum CipherHash {
    DEFAULT,
    MD2,
    MD5,
    SHA1,
    SHA256,
    SHA384,
    SHA512,
    RIPEMD160,
    TIGER192,
    HAVAL5160,
}
export enum CipherValidityEncrypt {
    NONE,
    WEAK,
    ENCRYPTED,
    STRONG,
}
export enum CipherValidityMode {
    SIGN,
    ENCRYPT,
}
export enum CipherValiditySign {
    NONE,
    GOOD,
    BAD,
    UNKNOWN,
    NEED_PUBLIC_KEY,
}
export enum CompareType {
    INSENSITIVE,
    SENSITIVE,
}
export enum DBKnownColumnNames {
    UNKNOWN,
    ATTACHMENT,
    BDATA,
    CINFO,
    DELETED,
    DELETED_COUNT,
    DRECEIVED,
    DSENT,
    FLAGS,
    FOLDER_NAME,
    FOLLOWUP_COMPLETED_ON,
    FOLLOWUP_DUE_BY,
    FOLLOWUP_FLAG,
    IMPORTANT,
    JND_COUNT,
    JUNK,
    JUNK_COUNT,
    LABELS,
    MAIL_CC,
    MAIL_FROM,
    MAIL_TO,
    MLIST,
    NEXTUID,
    PART,
    PREVIEW,
    READ,
    REPLIED,
    SAVED_COUNT,
    SIZE,
    SUBJECT,
    TIME,
    UID,
    UNREAD_COUNT,
    USERHEADERS,
    USERTAGS,
    VERSION,
    VISIBLE_COUNT,
    VUID,
}
export enum Error {
    ERROR_GENERIC,
}
export enum FetchHeadersType {
    BASIC,
    BASIC_AND_MAILING_LIST,
    ALL,
}
export enum FetchType {
    OLD_MESSAGES,
    NEW_MESSAGES,
}
export enum FolderError {
    INVALID,
    INVALID_STATE,
    NON_EMPTY,
    NON_UID,
    INSUFFICIENT_PERMISSION,
    INVALID_PATH,
    INVALID_UID,
    SUMMARY_INVALID,
}
export enum HTMLParserState {
    DATA,
    ENT,
    ELEMENT,
    TAG,
    DTDENT,
    COMMENT0,
    COMMENT,
    ATTR0,
    ATTR,
    VAL0,
    VAL,
    VAL_ENT,
    EOD,
    EOF,
}
export enum HeaderAddressType {
    NONE,
    NAME,
    GROUP,
}
export enum JunkStatus {
    ERROR,
    INCONCLUSIVE,
    MESSAGE_IS_JUNK,
    MESSAGE_IS_NOT_JUNK,
}
export enum LockType {
    READ,
    WRITE,
}
export enum MemPoolFlags {
    STRUCT,
    WORD,
    BYTE,
    MASK,
}
export enum MimeFilterBasicType {
    INVALID,
    BASE64_ENC,
    BASE64_DEC,
    QP_ENC,
    QP_DEC,
    UU_ENC,
    UU_DEC,
}
export enum MimeFilterCRLFDirection {
    ENCODE,
    DECODE,
}
export enum MimeFilterCRLFMode {
    DOTS,
    ONLY,
}
export enum MimeFilterGZipMode {
    ZIP,
    UNZIP,
}
export enum MimeFilterYencDirection {
    ENCODE,
    DECODE,
}
export enum MimeParserState {
    INITIAL,
    PRE_FROM,
    FROM,
    HEADER,
    BODY,
    MULTIPART,
    MESSAGE,
    PART,
    END,
    EOF,
    PRE_FROM_END,
    FROM_END,
    HEADER_END,
    BODY_END,
    MULTIPART_END,
    MESSAGE_END,
}
export enum NetworkSecurityMethod {
    NONE,
    SSL_ON_ALTERNATE_PORT,
    STARTTLS_ON_STANDARD_PORT,
}
export enum ProviderConfType {
    END,
    SECTION_START,
    SECTION_END,
    CHECKBOX,
    CHECKSPIN,
    ENTRY,
    LABEL,
    HIDDEN,
    OPTIONS,
    PLACEHOLDER,
}
export enum ProviderType {
    STORE,
    TRANSPORT,
}
export enum SExpResultType {
    ARRAY_PTR,
    INT,
    STRING,
    BOOL,
    TIME,
    UNDEFINED,
}
export enum SExpTermType {
    INT,
    BOOL,
    STRING,
    TIME,
    FUNC,
    IFUNC,
    VAR,
}
export enum SMIMESign {
    CLEARSIGN,
    ENVELOPED,
}
export enum SaslAnonTraceType {
    EMAIL,
    OPAQUE,
    EMPTY,
}
export enum ServiceConnectionStatus {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    DISCONNECTING,
}
export enum ServiceError {
    INVALID,
    URL_INVALID,
    UNAVAILABLE,
    CANT_AUTHENTICATE,
    NOT_CONNECTED,
}
export enum SessionAlertType {
    INFO,
    WARNING,
    ERROR,
}
export enum SortType {
    ASCENDING,
    DESCENDING,
}
export enum StoreError {
    INVALID,
    NO_FOLDER,
}
export enum StreamBufferMode {
    BUFFER,
    NONE,
    READ,
    WRITE,
    MODE,
}
export enum ThreeState {
    OFF,
    ON,
    INCONSISTENT,
}
export enum TimeUnit {
    DAYS,
    WEEKS,
    MONTHS,
    YEARS,
}
export enum TransferEncoding {
    ENCODING_DEFAULT,
    ENCODING_7BIT,
    ENCODING_8BIT,
    ENCODING_BASE64,
    ENCODING_QUOTEDPRINTABLE,
    ENCODING_BINARY,
    ENCODING_UUENCODE,
    NUM_ENCODINGS,
}
export enum VTrashFolderType {
    TRASH,
    JUNK,
    LAST,
}
export enum _search_match_t {
    EXACT,
    CONTAINS,
    WORD,
    STARTS,
    ENDS,
    SOUNDEX,
}
export enum _search_t {
    ASIS,
    ENCODED,
    ADDRESS,
    ADDRESS_ENCODED,
    MLIST,
}
export enum _search_word_t {
    SIMPLE,
    COMPLEX,
    /* 8BIT (invalid, starts with a number) */
}
export enum BestencEncoding {
    /* 7BIT (invalid, starts with a number) */
    /* 8BIT (invalid, starts with a number) */
    BINARY,
    TEXT,
}
export enum BestencRequired {
    GET_ENCODING,
    GET_CHARSET,
    LF_IS_CRLF,
    NO_FROM,
}
export enum BlockFileFlags {
    BLOCK_FILE_SYNC,
}
export enum BlockFlags {
    DIRTY,
    DETACHED,
}
export enum FolderFlags {
    HAS_SUMMARY_CAPABILITY,
    FILTER_RECENT,
    HAS_BEEN_DELETED,
    IS_TRASH,
    IS_JUNK,
    FILTER_JUNK,
}
export enum FolderInfoFlags {
    NOSELECT,
    NOINFERIORS,
    CHILDREN,
    NOCHILDREN,
    SUBSCRIBED,
    VIRTUAL,
    SYSTEM,
    VTRASH,
    SHARED_TO_ME,
    SHARED_BY_ME,
    TYPE_NORMAL,
    TYPE_INBOX,
    TYPE_OUTBOX,
    TYPE_TRASH,
    TYPE_JUNK,
    TYPE_SENT,
    TYPE_CONTACTS,
    TYPE_EVENTS,
    TYPE_MEMOS,
    TYPE_TASKS,
    TYPE_ALL,
    TYPE_ARCHIVE,
    TYPE_DRAFTS,
    READONLY,
    WRITEONLY,
    FLAGGED,
    FLAGS_LAST,
}
export enum FolderSummaryFlags {
    DIRTY,
    IN_MEMORY_ONLY,
}
export enum MessageFlags {
    ANSWERED,
    DELETED,
    DRAFT,
    FLAGGED,
    SEEN,
    ATTACHMENTS,
    ANSWERED_ALL,
    JUNK,
    SECURE,
    NOTJUNK,
    FORWARDED,
    FOLDER_FLAGGED,
    JUNK_LEARN,
    USER,
}
export enum MimeFilterCanonFlags {
    CRLF,
    FROM,
    STRIP,
}
export enum MimeFilterEnrichedFlags {
    NONE,
    IS_RICHTEXT,
}
export enum MimeFilterToHTMLFlags {
    PRE,
    CONVERT_NL,
    CONVERT_SPACES,
    CONVERT_URLS,
    MARK_CITATION,
    CONVERT_ADDRESSES,
    ESCAPE_8BIT,
    CITE,
    PRESERVE_8BIT,
    FORMAT_FLOWED,
    QUOTE_CITATION,
    DIV,
    PRESERVE_TABS,
}
export enum ParamFlags {
    PARAM_PERSISTENT,
}
export enum ProviderFlags {
    IS_REMOTE,
    IS_LOCAL,
    IS_EXTERNAL,
    IS_SOURCE,
    IS_STORAGE,
    SUPPORTS_SSL,
    HAS_LICENSE,
    DISABLE_SENT_FOLDER,
    ALLOW_REAL_TRASH_FOLDER,
    ALLOW_REAL_JUNK_FOLDER,
    SUPPORTS_MOBILE_DEVICES,
    SUPPORTS_BATCH_FETCH,
    SUPPORTS_PURGE_MESSAGE_CACHE,
}
export enum ProviderURLFlags {
    ALLOW_USER,
    ALLOW_AUTH,
    ALLOW_PASSWORD,
    ALLOW_HOST,
    ALLOW_PORT,
    ALLOW_PATH,
    NEED_USER,
    NEED_AUTH,
    NEED_PASSWORD,
    NEED_HOST,
    NEED_PORT,
    NEED_PATH,
    NEED_PATH_DIR,
    HIDDEN_USER,
    HIDDEN_AUTH,
    HIDDEN_PASSWORD,
    HIDDEN_HOST,
    HIDDEN_PORT,
    HIDDEN_PATH,
    FRAGMENT_IS_PATH,
    PATH_IS_ABSOLUTE,
}
export enum RecipientCertificateFlags {
    SMIME,
    PGP,
}
export enum SMIMEDescribe {
    SIGNED,
    ENCRYPTED,
    CERTS,
    CRLS,
}
export enum StoreFlags {
    VTRASH,
    VJUNK,
    PROXY,
    IS_MIGRATING,
    REAL_JUNK_FOLDER,
    CAN_EDIT_FOLDERS,
    USE_CACHE_DIR,
    CAN_DELETE_FOLDERS_AT_ONCE,
    SUPPORTS_INITIAL_SETUP,
}
export enum StoreGetFolderFlags {
    NONE,
    CREATE,
    EXCL,
    BODY_INDEX,
    PRIVATE,
}
export enum StoreGetFolderInfoFlags {
    FAST,
    RECURSIVE,
    SUBSCRIBED,
    NO_VIRTUAL,
    SUBSCRIPTION_LIST,
    REFRESH,
}
export enum StoreInfoFlags {
    NOSELECT,
    NOINFERIORS,
    CHILDREN,
    NOCHILDREN,
    SUBSCRIBED,
    VIRTUAL,
    SYSTEM,
    VTRASH,
    SHARED_TO_ME,
    SHARED_BY_ME,
    TYPE_NORMAL,
    TYPE_INBOX,
    TYPE_OUTBOX,
    TYPE_TRASH,
    TYPE_JUNK,
    TYPE_SENT,
    TYPE_CONTACTS,
    TYPE_EVENTS,
    TYPE_MEMOS,
    TYPE_TASKS,
    TYPE_ALL,
    TYPE_ARCHIVE,
    TYPE_DRAFTS,
    READONLY,
    WRITEONLY,
    FLAGGED,
}
export enum StorePermissionFlags {
    READ,
    WRITE,
}
export enum URLFlags {
    PARAMS,
    AUTH,
}
export enum UUDecodeState {
    INIT,
    BEGIN,
    END,
}
export enum _search_flags_t {
    START,
    END,
    REGEX,
    ICASE,
    NEWLINE,
}
export const AI_CANONNAME: number
export const AI_NUMERICHOST: number
export const BLOCK_SIZE: number
export const BLOCK_SIZE_BITS: number
export const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string
export const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string
export const DB_FILE: string
export const DB_FREE_CACHE_SIZE: number
export const DB_IN_MEMORY_DB: string
export const DB_IN_MEMORY_TABLE: string
export const DB_IN_MEMORY_TABLE_LIMIT: number
export const DB_SLEEP_INTERVAL: number
export const DEBUG_IMAP: string
export const DEBUG_IMAP_FOLDER: string
export const DOT_LOCK_REFRESH: number
export const EAI_ADDRFAMILY: number
export const EAI_AGAIN: number
export const EAI_BADFLAGS: number
export const EAI_FAIL: number
export const EAI_FAMILY: number
export const EAI_MEMORY: number
export const EAI_NODATA: number
export const EAI_NONAME: number
export const EAI_OVERFLOW: number
export const EAI_SERVICE: number
export const EAI_SOCKTYPE: number
export const EAI_SYSTEM: number
export const EDS_CAMEL_PROVIDER_DIR: string
export const FOLDER_TYPE_BIT: number
export const FOLDER_TYPE_MASK: number
export const FOLD_MAX_SIZE: number
export const FOLD_SIZE: number
export const INDEX_DELETED: number
export const KEY_TABLE_MAX_KEY: number
export const LOCK_DELAY: number
export const LOCK_DOT_DELAY: number
export const LOCK_DOT_RETRY: number
export const LOCK_DOT_STALE: number
export const LOCK_RETRY: number
export const MESSAGE_DATE_CURRENT: number
export const MESSAGE_SYSTEM_MASK: number
export const MIME_YDECODE_STATE_BEGIN: number
export const MIME_YDECODE_STATE_DECODE: number
export const MIME_YDECODE_STATE_END: number
export const MIME_YDECODE_STATE_EOLN: number
export const MIME_YDECODE_STATE_ESCAPE: number
export const MIME_YDECODE_STATE_INIT: number
export const MIME_YDECODE_STATE_PART: number
export const MIME_YENCODE_CRC_INIT: number
export const MIME_YENCODE_STATE_INIT: number
export const NI_DGRAM: number
export const NI_NAMEREQD: number
export const NI_NOFQDN: number
export const NI_NUMERICHOST: number
export const NI_NUMERICSERV: number
export const O_BINARY: number
export const RECIPIENT_TYPE_BCC: string
export const RECIPIENT_TYPE_CC: string
export const RECIPIENT_TYPE_RESENT_BCC: string
export const RECIPIENT_TYPE_RESENT_CC: string
export const RECIPIENT_TYPE_RESENT_TO: string
export const RECIPIENT_TYPE_TO: string
export const SESSION_BOOK_UID_ANY: string
export const SESSION_BOOK_UID_COMPLETION: string
export const STORE_INFO_FOLDER_TYPE_BIT: number
export const STORE_INFO_FOLDER_TYPE_MASK: number
export const STORE_INFO_FOLDER_UNKNOWN: number
export const STORE_SETUP_ARCHIVE_FOLDER: string
export const STORE_SETUP_DRAFTS_FOLDER: string
export const STORE_SETUP_SENT_FOLDER: string
export const STORE_SETUP_TEMPLATES_FOLDER: string
export const UNMATCHED_NAME: string
export const URL_HIDE_ALL: number
export const URL_PART_AUTH: number
export const URL_PART_HIDDEN: number
export const URL_PART_HOST: number
export const URL_PART_NEED: number
export const URL_PART_PASSWORD: number
export const URL_PART_PATH: number
export const URL_PART_PATH_DIR: number
export const URL_PART_PORT: number
export const URL_PART_USER: number
export const UTILS_MAX_USER_HEADERS: number
export const UUDECODE_STATE_MASK: number
export const VJUNK_NAME: string
export const VTRASH_NAME: string
export function binding_bind_property(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
export function binding_bind_property_full(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
export function charset_best(in_: number[]): string | null
export function charset_iso_to_windows(isocharset: string): string
export function cipher_can_load_photos(): boolean
export function cipher_canonical_to_stream(part: MimePart, flags: number, ostream: Stream, cancellable?: Gio.Cancellable | null): number
export function cipher_certinfo_get_property(cert_info: CipherCertInfo, name: string): object | null
export function cipher_certinfo_set_property(cert_info: CipherCertInfo, name: string, value?: object | null, value_clone?: CipherCloneFunc | null): void
export function content_disposition_decode(in_: string): ContentDisposition
export function content_transfer_encoding_decode(in_: string): string
export function content_type_decode(in_: string): ContentType
export function debug(mode: string): boolean
export function debug_demangle_backtrace(bt?: GLib.String | null): /* bt */ GLib.String | null
export function debug_end(): void
export function debug_get_backtrace(): GLib.String
export function debug_get_raw_backtrace(): GLib.String
export function debug_init(): void
export function debug_ref_unref_dump_backtraces(): void
export function debug_ref_unref_push_backtrace(backtrace: GLib.String, object_ref_count: number): void
export function debug_ref_unref_push_backtrace_for_object(_object?: object | null): void
export function debug_start(mode: string): boolean
export function enriched_to_html(in_: string, flags: MimeFilterEnrichedFlags): string
export function error_quark(): GLib.Quark
export function file_util_decode_fixed_int32(in_: object | null, dest: number): number
export function file_util_decode_fixed_string(in_: object | null, str: string, len: number): number
export function file_util_decode_gsize(in_: object | null, dest: number): number
export function file_util_decode_off_t(in_: object | null, dest: number): number
export function file_util_decode_string(in_: object | null, str: string): number
export function file_util_decode_time_t(in_: object | null, dest: number): number
export function file_util_decode_uint32(in_: object | null, dest: number): number
export function file_util_encode_fixed_int32(out: object | null, value: number): number
export function file_util_encode_fixed_string(out: object | null, str: string, len: number): number
export function file_util_encode_gsize(out: object | null, value: number): number
export function file_util_encode_off_t(out: object | null, value: number): number
export function file_util_encode_string(out: object | null, str: string): number
export function file_util_encode_time_t(out: object | null, value: number): number
export function file_util_encode_uint32(out: object | null, value: number): number
export function file_util_safe_filename(name: string): string
export function file_util_savename(filename: string): string
export function folder_error_quark(): GLib.Quark
export function folder_info_build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
export function freeaddrinfo(host?: object | null): void
export function getaddrinfo(name: string, service: string, hints?: object | null, cancellable?: Gio.Cancellable | null): object | null
export function header_address_decode(in_: string, charset: string): HeaderAddress
export function header_address_fold(in_: string, headerlen: number): string
export function header_address_list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
export function header_address_list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
export function header_address_list_clear(addrlistp: HeaderAddress[]): void
export function header_address_list_encode(addrlist: HeaderAddress[]): string
export function header_address_list_format(addrlist: HeaderAddress[]): string
export function header_contentid_decode(in_: string): string
export function header_decode_date(str: string, tz_offset: number): number
export function header_decode_int(in_: string): number
export function header_decode_string(in_: string, default_charset: string): string
export function header_encode_phrase(in_: number): string
export function header_encode_string(in_: number): string
export function header_fold(in_: string, headerlen: number): string
export function header_format_ctext(in_: string, default_charset: string): string
export function header_format_date(date: number, tz_offset: number): string
export function header_location_decode(in_: string): string
export function header_mailbox_decode(in_: string, charset: string): HeaderAddress
export function header_mime_decode(in_: string, maj: number, min: number): void
export function header_msgid_decode(in_: string): string
export function header_msgid_generate(domain: string): string
export function header_newsgroups_decode(in_: string): string[]
export function header_param(params: object | null, name: string): string
export function header_param_list_decode(in_?: string | null): object | null
export function header_param_list_format(params?: object | null): string
export function header_param_list_format_append(out: GLib.String, params?: object | null): void
export function header_param_list_free(params?: object | null): void
export function header_references_decode(in_: string): string[]
export function header_set_param(paramsp: object | null, name: string, value: string): object | null
export function header_token_decode(in_: string): string
export function header_unfold(in_: string): string
export function headers_dup_mailing_list(headers: NameValueArray): string | null
export function host_idna_to_ascii(host: string): string
export function hostname_utils_requires_ascii(hostname: string): boolean
export function iconv_charset_language(charset: string): string
export function iconv_charset_name(charset: string): string
export function iconv_locale_charset(): string
export function iconv_locale_language(): string
export function init(certdb_dir: string, nss_init: boolean): number
export function localtime_with_offset(tt: number, tm: object | null, offset: number): void
export function lock_dot(path: string): number
export function lock_fcntl(fd: number, type: LockType): number
export function lock_flock(fd: number, type: LockType): number
export function lock_folder(path: string, fd: number, type: LockType): number
export function lock_helper_lock(path: string): number
export function lock_helper_unlock(lockid: number): number
export function mktime_utc(tm?: object | null): number
export function movemail(source: string, dest: string): number
export function pointer_tracker_dump(): void
export function pointer_tracker_track_with_info(ptr: object | null, info: string): void
export function pointer_tracker_untrack(ptr?: object | null): void
export function provider_get(protocol: string): Provider
export function provider_init(): void
export function provider_list(load: boolean): Provider[]
export function provider_load(path: string): boolean
export function provider_module_init(): void
export function pstring_add(string: string, own: boolean): string
export function pstring_contains(string: string): boolean
export function pstring_dump_stat(): void
export function pstring_free(string: string): void
export function pstring_peek(string: string): string
export function pstring_strdup(string: string): string
export function quoted_decode_step(in_: Uint8Array[], out: Uint8Array[], saveme: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* saveme */ number[] ]
export function quoted_encode_close(in_: Uint8Array[], out: Uint8Array[], save: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* save */ number[] ]
export function quoted_encode_step(in_: Uint8Array[], out: Uint8Array[], save: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* save */ number[] ]
export function read(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
export function search_camel_header_soundex(header: string, match: string): boolean
export function search_get_all_headers_decoded(message: MimeMessage): string
export function search_get_default_charset_from_headers(headers: NameValueArray): string
export function search_get_default_charset_from_message(message: MimeMessage): string
export function search_get_header_decoded(header_name: string, header_value: string, default_charset?: string | null): string
export function search_get_headers_decoded(headers: NameValueArray, default_charset?: string | null): string
export function search_header_is_address(header_name: string): boolean
export function search_header_match(value: string, match: string, how: _search_match_t, type: _search_t, default_charset: string): boolean
export function search_words_free(words?: object | null): void
export function search_words_simple(words?: object | null): object | null
export function search_words_split(in_: number): object | null
export function service_error_quark(): GLib.Quark
export function shutdown(): void
export function store_error_quark(): GLib.Quark
export function store_info_name(summary: StoreSummary, info: StoreInfo): string
export function store_info_path(summary: StoreSummary, info: StoreInfo): string
export function store_info_set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
export function strcase_equal(a?: object | null, b?: object | null): number
export function strcase_hash(v?: object | null): number
export function strdown(str: string): string
export function string_is_all_ascii(str?: string | null): boolean
export function strstrcase(haystack: string, needle: string): string
export function system_flag(name: string): MessageFlags
export function system_flag_get(flags: MessageFlags, name: string): boolean
export function text_to_html(in_: string, flags: MimeFilterToHTMLFlags, color: number): string
export function time_value_apply(src_time: number, unit: TimeUnit, value: number): number
export function transfer_encoding_from_string(string: string): TransferEncoding
export function transfer_encoding_to_string(encoding: TransferEncoding): string
export function ucs2_utf8(ptr: string): string
export function uid_cache_free_uids(uids: string[]): void
export function unlock_dot(path: string): void
export function unlock_fcntl(fd: number): void
export function unlock_flock(fd: number): void
export function unlock_folder(path: string, fd: number): void
export function url_addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function url_addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function url_decode(part: string): void
export function url_decode_path(path: string): string
export function url_encode(part: string, escape_extra: string): string
export function url_file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function url_file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function url_web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function url_web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
export function ustrstrcase(haystack: string, needle: string): string
export function utf7_utf8(ptr: string): string
export function utf8_getc(ptr: number): [ /* returnType */ number, /* ptr */ number ]
export function utf8_getc_limit(ptr: number, end: number): [ /* returnType */ number, /* ptr */ number ]
export function utf8_make_valid(text: string): string
export function utf8_make_valid_len(text: string, text_len: number): string
export function utf8_putc(ptr: number, c: number): /* ptr */ number
export function utf8_ucs2(ptr: string): string
export function utf8_utf7(ptr: string): string
export function util_bdata_get_number(bdata_ptr: string, default_value: number): number
export function util_bdata_get_string(bdata_ptr: string, default_value: string): string
export function util_bdata_put_number(bdata_str: GLib.String, value: number): void
export function util_bdata_put_string(bdata_str: GLib.String, value: string): void
export function util_decode_user_header_setting(setting_value: string): [ /* out_display_name */ string | null, /* out_header_name */ string ]
export function util_encode_user_header_setting(display_name: string | null, header_name: string): string
export function util_fill_message_info_user_headers(info: MessageInfo, headers: NameValueArray): boolean
export function util_get_directory_variants(main_path: string, replace_prefix: string, with_modules_dir: boolean): string[]
export function utils_sanitize_ascii_domain_in_address(email_address: string, do_format: boolean): string | null
export function utils_sanitize_ascii_domain_in_url(url: URL): boolean
export function utils_sanitize_ascii_domain_in_url_str(url_str: string): string | null
export function uudecode_step(in_: Uint8Array[], out: Uint8Array[], save: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* save */ number[] ]
export function uuencode_close(in_: Uint8Array[], out: Uint8Array[], uubuf: Uint8Array[], save: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* uubuf */ Uint8Array[], /* save */ number[] ]
export function uuencode_step(in_: Uint8Array[], out: Uint8Array[], uubuf: Uint8Array[], save: number[]): [ /* returnType */ number, /* out */ Uint8Array[], /* uubuf */ Uint8Array[], /* save */ number[] ]
export function write(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
export function ydecode_step(in_: Uint8Array[]): [ /* returnType */ number, /* out */ Uint8Array[], /* state */ number, /* pcrc */ number, /* crc */ number ]
export function yencode_close(in_: Uint8Array[]): [ /* returnType */ number, /* out */ Uint8Array[], /* state */ number, /* pcrc */ number, /* crc */ number ]
export function yencode_step(in_: Uint8Array[]): [ /* returnType */ number, /* out */ Uint8Array[], /* state */ number, /* pcrc */ number, /* crc */ number ]
export interface CipherCloneFunc {
    (value?: object | null): object | null
}
export interface CopyFunc {
    (object?: object | null): object | null
}
export interface DBCollate {
    (enc: object | null, length1: number, data1: object | null, length2: number, data2?: object | null): number
}
export interface DBSelectCB {
    (colvalues: string[], colnames: string[]): number
}
export interface DataCacheRemoveFunc {
    (cdc: DataCache, filename: string): boolean
}
export interface FilterPlaySoundFunc {
    (driver: FilterDriver, filename: string): void
}
export interface FilterShellFunc {
    (driver: FilterDriver, argc: number, argv: string): void
}
export interface FilterStatusFunc {
    (driver: FilterDriver, status: object | null, pc: number, desc: string): void
}
export interface FilterSystemBeepFunc {
    (driver: FilterDriver): void
}
export interface ForeachInfoData {
    (mi_data: VeeMessageInfoData, subfolder: Folder): void
}
export interface ForeachPartFunc {
    (message: MimeMessage, part: MimePart, parent_part?: MimePart | null): boolean
}
export interface IndexNorm {
    (index: Index, word: string): string
}
export interface MessageContentInfoTraverseCallback {
    (ci: MessageContentInfo, depth: number): boolean
}
export interface ProviderAutoDetectFunc {
    (url: URL): number
}
export interface SessionCallback {
    (session: Session, cancellable?: Gio.Cancellable | null): void
}
export interface TextIndexFunc {
    (idx: TextIndex, word: string, buffer: string): void
}
export interface UrlScanFunc {
    (in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
export class JunkFilter {
    /* Methods of Camel-1.2.Camel.JunkFilter */
    classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus
    learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    synchronize(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.JunkFilter */
    vfunc_classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus
    vfunc_learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    vfunc_learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
export interface NetworkService_ConstructProps extends Service_ConstructProps {
    connectable?: Gio.SocketConnectable
}
export class NetworkService {
    /* Properties of Camel-1.2.Camel.NetworkService */
    connectable: Gio.SocketConnectable
    readonly host_reachable: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Service */
    parent: Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkService */
    can_reach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_reach_finish(result: Gio.AsyncResult): boolean
    can_reach_sync(cancellable?: Gio.Cancellable | null): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream
    get_default_port(method: NetworkSecurityMethod): number
    get_host_reachable(): boolean
    get_service_name(method: NetworkSecurityMethod): string
    ref_connectable(): Gio.SocketConnectable
    set_connectable(connectable: Gio.SocketConnectable): void
    starttls(base_stream: Gio.IOStream): Gio.IOStream
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.NetworkService */
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_default_port(method: NetworkSecurityMethod): number
    vfunc_get_service_name(method: NetworkSecurityMethod): string
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkSettings_ConstructProps extends Settings_ConstructProps {
    auth_mechanism?: string
    host?: string
    port?: number
    security_method?: NetworkSecurityMethod
    user?: string
}
export class NetworkSettings {
    /* Properties of Camel-1.2.Camel.NetworkSettings */
    auth_mechanism: string
    host: string
    port: number
    security_method: NetworkSecurityMethod
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkSettings */
    dup_auth_mechanism(): string
    dup_host(): string
    dup_host_ensure_ascii(): string
    dup_user(): string
    get_auth_mechanism(): string
    get_host(): string
    get_port(): number
    get_security_method(): NetworkSecurityMethod
    get_user(): string
    set_auth_mechanism(auth_mechanism: string): void
    set_host(host: string): void
    set_port(port: number): void
    set_security_method(method: NetworkSecurityMethod): void
    set_user(user: string): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkSettings_ConstructProps)
    _init (config?: NetworkSettings_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Subscribable_ConstructProps extends Store_ConstructProps {
}
export class Subscribable {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Store */
    parent: Service
    priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Subscribable */
    folder_is_subscribed(folder_name: string): boolean
    folder_subscribed(folder_info: FolderInfo): void
    folder_unsubscribed(folder_info: FolderInfo): void
    subscribe_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    subscribe_folder_finish(result: Gio.AsyncResult): boolean
    subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    unsubscribe_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsubscribe_folder_finish(result: Gio.AsyncResult): boolean
    unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Subscribable */
    vfunc_folder_is_subscribed(folder_name: string): boolean
    vfunc_folder_subscribed(folder_info: FolderInfo): void
    vfunc_folder_unsubscribed(folder_info: FolderInfo): void
    vfunc_subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Subscribable */
    connect(sigName: "folder-subscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-subscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-subscribed", object: FolderInfo): void
    connect(sigName: "folder-unsubscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-unsubscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-unsubscribed", object: FolderInfo): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: Subscribable) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: Subscribable) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: Subscribable, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: Subscribable, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: Subscribable, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: Subscribable, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subscribable_ConstructProps)
    _init (config?: Subscribable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Address_ConstructProps extends GObject.Object_ConstructProps {
}
export class Address {
    /* Fields of Camel-1.2.Camel.Address */
    parent: GObject.Object
    priv: AddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Address_ConstructProps)
    _init (config?: Address_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Address
    static $gtype: GObject.Type
}
export interface BlockFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class BlockFile {
    /* Fields of Camel-1.2.Camel.BlockFile */
    parent: GObject.Object
    priv: BlockFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.BlockFile */
    attach_block(bl: Block): void
    delete(): number
    detach_block(bl: Block): void
    free_block(id: _block_t): number
    get_cache_limit(): number
    get_root(): BlockRoot
    get_root_block(): Block
    rename(path: string): number
    set_cache_limit(block_cache_limit: number): void
    sync(): number
    sync_block(bl: Block): number
    touch_block(bl: Block): void
    unref_block(bl: Block): void
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
    /* Virtual methods of Camel-1.2.Camel.BlockFile */
    vfunc_init_root(): number
    vfunc_validate_root(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockFile_ConstructProps)
    _init (config?: BlockFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, version: string, block_size: number): BlockFile
    static $gtype: GObject.Type
}
export interface CertDB_ConstructProps extends GObject.Object_ConstructProps {
}
export class CertDB {
    /* Fields of Camel-1.2.Camel.CertDB */
    parent: GObject.Object
    priv: CertDBPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CertDB */
    clear(): void
    get_host(hostname: string, fingerprint: string): Cert | null
    list_certs(): Cert[]
    load(): number
    put(cert: Cert): void
    remove_host(hostname: string, fingerprint: string): void
    save(): number
    set_default(): void
    set_filename(filename: string): void
    touch(): void
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
    /* Virtual methods of Camel-1.2.Camel.CertDB */
    vfunc_cert_load(istream?: object | null): Cert
    vfunc_cert_save(cert: Cert, ostream?: object | null): number
    vfunc_header_load(istream?: object | null): number
    vfunc_header_save(ostream?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CertDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertDB_ConstructProps)
    _init (config?: CertDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertDB
    static get_default(): CertDB
    static $gtype: GObject.Type
}
export interface CipherContext_ConstructProps extends GObject.Object_ConstructProps {
    session?: Session
}
export class CipherContext {
    /* Fields of Camel-1.2.Camel.CipherContext */
    parent: GObject.Object
    priv: CipherContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CipherContext_ConstructProps)
    _init (config?: CipherContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): CipherContext
    static $gtype: GObject.Type
}
export interface DB_ConstructProps extends GObject.Object_ConstructProps {
}
export class DB {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DB */
    abort_transaction(): number
    add_to_transaction(query: string): number
    begin_transaction(): number
    clear_folder_summary(folder_name: string): number
    command(stmt: string): number
    count_deleted_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_junk_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_junk_not_deleted_message_info(table_name: string, count: number): number
    count_message_info(query: string): [ /* returnType */ number, /* count */ number ]
    count_total_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_visible_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_visible_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    create_folders_table(): number
    delete_folder(folder_name: string): number
    delete_uid(folder_name: string, uid: string): number
    delete_uids(folder_name: string, uids: string[]): number
    end_transaction(): number
    flush_in_memory_transactions(folder_name: string): number
    get_filename(): string
    get_folder_deleted_uids(folder_name: string): string[] | null
    get_folder_junk_uids(folder_name: string): string[] | null
    get_folder_uids(folder_name: string, sort_by: string | null, collate: string | null, hash: GLib.HashTable): number
    maybe_run_maintenance(): boolean
    prepare_message_info_table(folder_name: string): number
    read_folder_info_record(folder_name: string): [ /* returnType */ number, /* record */ FIRecord ]
    read_message_info_record_with_uid(folder_name: string, uid: string, callback: DBSelectCB): number
    read_message_info_records(folder_name: string, callback: DBSelectCB): number
    rename_folder(old_folder_name: string, new_folder_name: string): number
    reset_folder_version(folder_name: string, reset_version: number): number
    select(stmt: string, callback: DBSelectCB): number
    set_collate(col: string, collate: string, func: DBCollate): number
    start_in_memory_transactions(): number
    transaction_command(qry_list: string[]): number
    write_folder_info_record(record: FIRecord): number
    write_message_info_record(folder_name: string, record: MIRecord): number
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
    connect(sigName: "notify", callback: (($obj: DB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DB_ConstructProps)
    _init (config?: DB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): DB
    static camel_mir_free(record?: MIRecord | null): void
    static free_sqlized_string(string?: string | null): void
    static get_column_ident(hash: GLib.HashTable, index: number, col_names: string[]): [ /* returnType */ DBKnownColumnNames, /* hash */ GLib.HashTable ]
    static get_column_name(raw_name: string): string | null
    static release_cache_memory(): void
    static sqlize_string(string: string): string
    static $gtype: GObject.Type
}
export interface DataCache_ConstructProps extends GObject.Object_ConstructProps {
    expire_enabled?: boolean
    path?: string
}
export class DataCache {
    /* Properties of Camel-1.2.Camel.DataCache */
    expire_enabled: boolean
    path: string
    /* Fields of Camel-1.2.Camel.DataCache */
    parent: GObject.Object
    priv: DataCachePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataCache */
    add(path: string, key: string): Gio.IOStream
    clear(path: string): void
    foreach_remove(path: string, func: DataCacheRemoveFunc): void
    get(path: string, key: string): Gio.IOStream
    get_expire_enabled(): boolean
    get_filename(path: string, key: string): string
    get_path(): string
    remove(path: string, key: string): number
    set_expire_access(when: number): void
    set_expire_age(when: number): void
    set_expire_enabled(expire_enabled: boolean): void
    set_path(path: string): void
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
    connect(sigName: "notify", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataCache_ConstructProps)
    _init (config?: DataCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): DataCache
    static $gtype: GObject.Type
}
export interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataWrapper {
    /* Fields of Camel-1.2.Camel.DataWrapper */
    parent: GObject.Object
    priv: DataWrapperPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataWrapper_ConstructProps)
    _init (config?: DataWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataWrapper
    static $gtype: GObject.Type
}
export interface FilterDriver_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilterDriver {
    /* Fields of Camel-1.2.Camel.FilterDriver */
    parent: GObject.Object
    priv: FilterDriverPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterDriver */
    add_rule(name: string, match: string, action: string): void
    filter_folder(folder: Folder, cache: UIDCache, uids: string[], remove: boolean, cancellable?: Gio.Cancellable | null): number
    filter_mbox(mbox: string, original_source_url?: string | null, cancellable?: Gio.Cancellable | null): number
    filter_message(message: MimeMessage, info: MessageInfo, uid: string, source: Folder, store_uid: string, original_store_uid: string, cancellable?: Gio.Cancellable | null): number
    flush(): void
    remove_rule_by_name(name: string): boolean
    set_default_folder(def?: Folder | null): void
    set_logfile(logfile?: object | null): void
    set_play_sound_func(func: FilterPlaySoundFunc): void
    set_shell_func(func: FilterShellFunc): void
    set_status_func(func: FilterStatusFunc): void
    set_system_beep_func(func: FilterSystemBeepFunc): void
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
    connect(sigName: "notify", callback: (($obj: FilterDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterDriver_ConstructProps)
    _init (config?: FilterDriver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): FilterDriver
    static $gtype: GObject.Type
}
export interface FilterInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    filter?: MimeFilter
}
export class FilterInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Camel-1.2.Camel.FilterInputStream */
    parent: Gio.FilterInputStream
    priv: FilterInputStreamPrivate
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    parent_instance: Gio.InputStream
    base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterInputStream */
    get_filter(): MimeFilter
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
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
    connect(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.InputStream, filter: MimeFilter): FilterInputStream
    static $gtype: GObject.Type
}
export interface FilterOutputStream_ConstructProps extends Gio.FilterOutputStream_ConstructProps {
    filter?: MimeFilter
}
export class FilterOutputStream {
    /* Fields of Camel-1.2.Camel.FilterOutputStream */
    parent: Gio.FilterOutputStream
    priv: FilterOutputStreamPrivate
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    parent_instance: Gio.OutputStream
    base_stream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterOutputStream */
    get_filter(): MimeFilter
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    get_base_stream(): Gio.OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
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
    connect(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream
    static $gtype: GObject.Type
}
export interface Folder_ConstructProps extends Object_ConstructProps {
    description?: string
    display_name?: string
    full_name?: string
    mark_seen?: ThreeState
    mark_seen_timeout?: number
    parent_store?: Store
}
export class Folder {
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Folder */
    parent: Object
    priv: FolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_flags(): number
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: Folder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Folder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: Folder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: Folder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: Folder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: Folder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Folder_ConstructProps)
    _init (config?: Folder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static threaded_messages_dump(c: FolderThreadNode): number
    static $gtype: GObject.Type
}
export interface FolderSearch_ConstructProps extends GObject.Object_ConstructProps {
}
export class FolderSearch {
    /* Fields of Camel-1.2.Camel.FolderSearch */
    parent: GObject.Object
    priv: FolderSearchPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSearch */
    count(expr: string, cancellable?: Gio.Cancellable | null): number
    free_result(result?: string[] | null): void
    get_current_message_info(): MessageInfo | null
    get_current_summary(): string[]
    get_folder(): Folder
    get_only_cached_messages(): boolean
    get_summary(): string[]
    get_summary_empty(): boolean
    search(expr: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    set_body_index(body_index?: Index | null): void
    set_current_message_info(info?: MessageInfo | null): void
    set_folder(folder: Folder): void
    set_only_cached_messages(only_cached_messages: boolean): void
    set_summary(summary: string[]): void
    take_current_message_info(info?: MessageInfo | null): void
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
    connect(sigName: "notify", callback: (($obj: FolderSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FolderSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FolderSearch_ConstructProps)
    _init (config?: FolderSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FolderSearch
    static util_add_months(t: number, months: number): number
    static util_compare_date(datetime1: number, datetime2: number): number
    static util_hash_message_id(message_id: string, needs_decode: boolean): number
    static util_make_time(argc: number, argv: SExpResult): number
    static $gtype: GObject.Type
}
export interface FolderSummary_ConstructProps extends GObject.Object_ConstructProps {
    folder?: Folder
}
export class FolderSummary {
    /* Properties of Camel-1.2.Camel.FolderSummary */
    readonly deleted_count: number
    readonly junk_count: number
    readonly junk_not_deleted_count: number
    readonly saved_count: number
    readonly unread_count: number
    readonly visible_count: number
    /* Fields of Camel-1.2.Camel.FolderSummary */
    parent: GObject.Object
    priv: FolderSummaryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, force_keep_uid: boolean): void
    check_uid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    get_array(): string[]
    get_changed(): string[]
    get_deleted_count(): number
    get_flags(): number
    get_folder(): object | null
    get_hash(): GLib.HashTable
    get_index(): Index
    get_info_flags(uid: string): number
    get_junk_count(): number
    get_junk_not_deleted_count(): number
    get_next_uid(): number
    get_saved_count(): number
    get_timestamp(): number
    get_unread_count(): number
    get_version(): number
    get_visible_count(): number
    header_load(store: object | null, folder_name: string): boolean
    header_save(): boolean
    info_new_from_headers(headers: NameValueArray): MessageInfo
    info_new_from_message(message: MimeMessage): MessageInfo
    info_new_from_parser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    next_uid(): number
    next_uid_string(): string
    peek_loaded(uid: string): MessageInfo | null
    prepare_fetch_all(): void
    remove(info: MessageInfo): boolean
    remove_uid(uid: string): boolean
    remove_uids(uids: string[]): boolean
    replace_flags(info: MessageInfo): boolean
    save(): boolean
    set_flags(flags: number): void
    set_index(index: Index): void
    set_next_uid(uid: number): void
    set_timestamp(timestamp: number): void
    set_version(version: number): void
    touch(): void
    unlock(): void
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
    /* Virtual methods of Camel-1.2.Camel.FolderSummary */
    vfunc_message_info_from_uid(uid: string): MessageInfo | null
    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo
    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo
    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo
    vfunc_next_uid_string(): string
    vfunc_prepare_fetch_all(): void
    vfunc_summary_header_load(fir?: object | null): boolean
    vfunc_summary_header_save(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.FolderSummary */
    connect(sigName: "changed", callback: (($obj: FolderSummary) => void)): number
    connect_after(sigName: "changed", callback: (($obj: FolderSummary) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FolderSummary_ConstructProps)
    _init (config?: FolderSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(folder: Folder): FolderSummary
    static free_array(array: string[]): void
    static $gtype: GObject.Type
}
export interface GpgContext_ConstructProps extends CipherContext_ConstructProps {
    always_trust?: boolean
    prefer_inline?: boolean
}
export class GpgContext {
    /* Properties of Camel-1.2.Camel.GpgContext */
    always_trust: boolean
    prefer_inline: boolean
    /* Fields of Camel-1.2.Camel.GpgContext */
    parent: CipherContext
    priv: GpgContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.GpgContext */
    get_always_trust(): boolean
    get_prefer_inline(): boolean
    set_always_trust(always_trust: boolean): void
    set_prefer_inline(prefer_inline: boolean): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgContext_ConstructProps)
    _init (config?: GpgContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): GpgContext
    static $gtype: GObject.Type
}
export interface HTMLParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class HTMLParser {
    /* Fields of Camel-1.2.Camel.HTMLParser */
    parent: GObject.Object
    priv: HTMLParserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.HTMLParser */
    attr(name: string): string
    attr_list(values?: string[] | null): [ /* returnType */ string[], /* values */ string[] | null ]
    left(lenp: number): string
    set_data(start: string, len: number, last: number): void
    step(datap: string, lenp: number): HTMLParserState
    tag(): string
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
    connect(sigName: "notify", callback: (($obj: HTMLParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTMLParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTMLParser_ConstructProps)
    _init (config?: HTMLParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HTMLParser
    static $gtype: GObject.Type
}
export interface Index_ConstructProps extends GObject.Object_ConstructProps {
}
export class Index {
    /* Fields of Camel-1.2.Camel.Index */
    parent: GObject.Object
    priv: IndexPrivate
    path: string
    version: number
    flags: number
    state: number
    normalize: IndexNorm
    normalize_data: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Index */
    add_name(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    delete_name(name: string): void
    find(word: string): IndexCursor | null
    find_name(name: string): IndexCursor | null
    has_name(name: string): number
    rename(path: string): number
    set_normalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    write_name(idn: IndexName): number
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
    /* Virtual methods of Camel-1.2.Camel.Index */
    vfunc_add_name(name: string): IndexName | null
    vfunc_compress(): number
    vfunc_delete_(): number
    vfunc_delete_name(name: string): void
    vfunc_find(word: string): IndexCursor | null
    vfunc_find_name(name: string): IndexCursor | null
    vfunc_has_name(name: string): number
    vfunc_rename(path: string): number
    vfunc_sync(): number
    vfunc_words(): IndexCursor | null
    vfunc_write_name(idn: IndexName): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IndexCursor_ConstructProps extends GObject.Object_ConstructProps {
}
export class IndexCursor {
    /* Fields of Camel-1.2.Camel.IndexCursor */
    parent: GObject.Object
    priv: IndexCursorPrivate
    index: Index
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexCursor_ConstructProps)
    _init (config?: IndexCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IndexName_ConstructProps extends GObject.Object_ConstructProps {
}
export class IndexName {
    /* Fields of Camel-1.2.Camel.IndexName */
    parent: GObject.Object
    priv: IndexNamePrivate
    index: Index
    name: string
    buffer: Uint8Array[]
    words: GLib.HashTable
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    add_buffer(buffer: string, len: number): number
    add_word(word: string): void
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
    /* Virtual methods of Camel-1.2.Camel.IndexName */
    vfunc_add_buffer(buffer: string, len: number): number
    vfunc_add_word(word: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexName_ConstructProps)
    _init (config?: IndexName_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InternetAddress_ConstructProps extends Address_ConstructProps {
}
export class InternetAddress {
    /* Fields of Camel-1.2.Camel.InternetAddress */
    parent: Address
    priv: InternetAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.InternetAddress */
    add(name: string, address: string): number
    ensure_ascii_domains(): void
    find_address(address: string): [ /* returnType */ number, /* namep */ string | null ]
    find_name(name: string): [ /* returnType */ number, /* addressp */ string | null ]
    get(index: number): [ /* returnType */ boolean, /* namep */ string | null, /* addressp */ string | null ]
    sanitize_ascii_domain(): boolean
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddress_ConstructProps)
    _init (config?: InternetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternetAddress
    static encode_address(len: number, name: string, addr: string): string
    static format_address(name: string, addr: string): string
    static $gtype: GObject.Type
}
export interface KeyFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class KeyFile {
    /* Fields of Camel-1.2.Camel.KeyFile */
    parent: GObject.Object
    priv: KeyFilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyFile */
    delete(): number
    read(start: _block_t, records?: _key_t[] | null): number
    rename(path: string): number
    write(parent: _block_t, records: _key_t[]): number
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
    connect(sigName: "notify", callback: (($obj: KeyFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyFile_ConstructProps)
    _init (config?: KeyFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, version: string): KeyFile
    static $gtype: GObject.Type
}
export interface KeyTable_ConstructProps extends GObject.Object_ConstructProps {
}
export class KeyTable {
    /* Fields of Camel-1.2.Camel.KeyTable */
    parent: GObject.Object
    priv: KeyTablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyTable */
    add(key: string, data: _block_t, flags: number): _key_t
    lookup(keyid: _key_t, key: string, flags: number): _block_t
    next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t
    set_data(keyid: _key_t, data: _block_t): boolean
    set_flags(keyid: _key_t, flags: number, set: number): boolean
    sync(): number
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
    connect(sigName: "notify", callback: (($obj: KeyTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyTable_ConstructProps)
    _init (config?: KeyTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bs: BlockFile, root: _block_t): KeyTable
    static $gtype: GObject.Type
}
export interface LocalSettings_ConstructProps extends StoreSettings_ConstructProps {
    filter_all?: boolean
    filter_junk?: boolean
    maildir_alt_flag_sep?: boolean
    path?: string
}
export class LocalSettings {
    /* Properties of Camel-1.2.Camel.LocalSettings */
    filter_all: boolean
    filter_junk: boolean
    maildir_alt_flag_sep: boolean
    path: string
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.LocalSettings */
    dup_path(): string
    get_filter_all(): boolean
    get_filter_junk(): boolean
    get_maildir_alt_flag_sep(): boolean
    get_path(): string
    set_filter_all(filter_all: boolean): void
    set_filter_junk(filter_junk: boolean): void
    set_maildir_alt_flag_sep(maildir_alt_flag_sep: boolean): void
    set_path(path: string): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    get_store_changes_interval(): number
    set_filter_inbox(filter_inbox: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocalSettings_ConstructProps)
    _init (config?: LocalSettings_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Medium_ConstructProps extends DataWrapper_ConstructProps {
    content?: DataWrapper
}
export class Medium {
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.Medium */
    parent: DataWrapper
    priv: MediumPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Medium_ConstructProps)
    _init (config?: Medium_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MessageInfo_ConstructProps extends GObject.Object_ConstructProps {
    abort_notifications?: boolean
    cc?: string
    date_received?: number
    date_sent?: number
    dirty?: boolean
    flags?: MessageFlags
    folder_flagged?: boolean
    from?: string
    headers?: NameValueArray
    message_id?: number
    mlist?: string
    preview?: string
    references?: object[]
    size?: number
    subject?: string
    summary?: FolderSummary
    to?: string
    uid?: string
    user_flags?: NamedFlags
    user_headers?: NameValueArray
    user_tags?: NameValueArray
}
export class MessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfo */
    parent: GObject.Object
    priv: MessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageInfo_ConstructProps)
    _init (config?: MessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary?: FolderSummary | null): MessageInfo
    static new_from_headers(summary: FolderSummary, headers: NameValueArray): MessageInfo
    static $gtype: GObject.Type
}
export interface MessageInfoBase_ConstructProps extends MessageInfo_ConstructProps {
}
export class MessageInfoBase {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfoBase */
    parent: MessageInfo
    priv: MessageInfoBasePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageInfoBase_ConstructProps)
    _init (config?: MessageInfoBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MimeFilter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MimeFilter {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    parent: GObject.Object
    priv: MimeFilterPrivate
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilter_ConstructProps)
    _init (config?: MimeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilter
    static $gtype: GObject.Type
}
export interface MimeFilterBasic_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterBasic {
    /* Fields of Camel-1.2.Camel.MimeFilterBasic */
    parent: MimeFilter
    priv: MimeFilterBasicPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterBasic_ConstructProps)
    _init (config?: MimeFilterBasic_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MimeFilterBasicType): MimeFilterBasic
    static new(): MimeFilterBasic
    static $gtype: GObject.Type
}
export interface MimeFilterBestenc_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterBestenc {
    /* Fields of Camel-1.2.Camel.MimeFilterBestenc */
    parent: MimeFilter
    priv: MimeFilterBestencPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterBestenc */
    get_best_charset(): string
    get_best_encoding(required: BestencEncoding): TransferEncoding
    set_flags(flags: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterBestenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterBestenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterBestenc_ConstructProps)
    _init (config?: MimeFilterBestenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number): MimeFilterBestenc
    static new(): MimeFilterBestenc
    static $gtype: GObject.Type
}
export interface MimeFilterCRLF_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterCRLF {
    /* Fields of Camel-1.2.Camel.MimeFilterCRLF */
    parent: MimeFilter
    priv: MimeFilterCRLFPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterCRLF */
    get_ensure_crlf_end(): boolean
    set_ensure_crlf_end(ensure_crlf_end: boolean): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCRLF, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCRLF, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCRLF_ConstructProps)
    _init (config?: MimeFilterCRLF_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF
    static new(): MimeFilterCRLF
    static $gtype: GObject.Type
}
export interface MimeFilterCanon_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterCanon {
    /* Fields of Camel-1.2.Camel.MimeFilterCanon */
    parent: MimeFilter
    priv: MimeFilterCanonPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCanon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCanon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCanon_ConstructProps)
    _init (config?: MimeFilterCanon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterCanonFlags): MimeFilterCanon
    static new(): MimeFilterCanon
    static $gtype: GObject.Type
}
export interface MimeFilterCharset_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterCharset {
    /* Fields of Camel-1.2.Camel.MimeFilterCharset */
    parent: MimeFilter
    priv: MimeFilterCharsetPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCharset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCharset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCharset_ConstructProps)
    _init (config?: MimeFilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(from_charset: string, to_charset: string): MimeFilterCharset
    static new(): MimeFilterCharset
    static $gtype: GObject.Type
}
export interface MimeFilterEnriched_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterEnriched {
    /* Fields of Camel-1.2.Camel.MimeFilterEnriched */
    parent: MimeFilter
    priv: MimeFilterEnrichedPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterEnriched, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterEnriched, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterEnriched_ConstructProps)
    _init (config?: MimeFilterEnriched_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterEnrichedFlags): MimeFilterEnriched
    static new(): MimeFilterEnriched
    static $gtype: GObject.Type
}
export interface MimeFilterFrom_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterFrom {
    /* Fields of Camel-1.2.Camel.MimeFilterFrom */
    parent: MimeFilter
    priv: MimeFilterFromPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterFrom_ConstructProps)
    _init (config?: MimeFilterFrom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterFrom
    static $gtype: GObject.Type
}
export interface MimeFilterGZip_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterGZip {
    /* Fields of Camel-1.2.Camel.MimeFilterGZip */
    parent: MimeFilter
    priv: MimeFilterGZipPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterGZip_ConstructProps)
    _init (config?: MimeFilterGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: MimeFilterGZipMode, level: number): MimeFilterGZip
    static new(): MimeFilterGZip
    static $gtype: GObject.Type
}
export interface MimeFilterHTML_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterHTML {
    /* Fields of Camel-1.2.Camel.MimeFilterHTML */
    parent: MimeFilter
    priv: MimeFilterHTMLPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterHTML_ConstructProps)
    _init (config?: MimeFilterHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterHTML
    static $gtype: GObject.Type
}
export interface MimeFilterIndex_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterIndex {
    /* Fields of Camel-1.2.Camel.MimeFilterIndex */
    parent: MimeFilter
    priv: MimeFilterIndexPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterIndex */
    set_index(index: Index): void
    set_name(name: IndexName): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterIndex_ConstructProps)
    _init (config?: MimeFilterIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: Index): MimeFilterIndex
    static new(): MimeFilterIndex
    static $gtype: GObject.Type
}
export interface MimeFilterLinewrap_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterLinewrap {
    /* Fields of Camel-1.2.Camel.MimeFilterLinewrap */
    parent: MimeFilter
    priv: MimeFilterLinewrapPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterLinewrap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterLinewrap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterLinewrap_ConstructProps)
    _init (config?: MimeFilterLinewrap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(preferred_len: number, max_len: number, indent_char: number, flags: number): MimeFilterLinewrap
    static new(): MimeFilterLinewrap
    static $gtype: GObject.Type
}
export interface MimeFilterPgp_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterPgp {
    /* Fields of Camel-1.2.Camel.MimeFilterPgp */
    parent: MimeFilter
    priv: MimeFilterPgpPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterPgp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterPgp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterPgp_ConstructProps)
    _init (config?: MimeFilterPgp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterPgp
    static $gtype: GObject.Type
}
export interface MimeFilterProgress_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterProgress {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    parent: GObject.Object
    priv: MimeFilterPrivate
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterProgress_ConstructProps)
    _init (config?: MimeFilterProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress
    static new(): MimeFilterProgress
    static $gtype: GObject.Type
}
export interface MimeFilterToHTML_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterToHTML {
    /* Fields of Camel-1.2.Camel.MimeFilterToHTML */
    parent: MimeFilter
    priv: MimeFilterToHTMLPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterToHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterToHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterToHTML_ConstructProps)
    _init (config?: MimeFilterToHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML
    static new(): MimeFilterToHTML
    static $gtype: GObject.Type
}
export interface MimeFilterWindows_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterWindows {
    /* Fields of Camel-1.2.Camel.MimeFilterWindows */
    parent: MimeFilter
    priv: MimeFilterWindowsPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterWindows */
    is_windows_charset(): boolean
    real_charset(): string
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterWindows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterWindows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterWindows_ConstructProps)
    _init (config?: MimeFilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimed_charset: string): MimeFilterWindows
    static new(): MimeFilterWindows
    static $gtype: GObject.Type
}
export interface MimeFilterYenc_ConstructProps extends MimeFilter_ConstructProps {
}
export class MimeFilterYenc {
    /* Fields of Camel-1.2.Camel.MimeFilterYenc */
    parent: MimeFilter
    priv: MimeFilterYencPrivate
    /* Fields of Camel-1.2.Camel.MimeFilter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterYenc */
    get_crc(): number
    get_pcrc(): number
    set_crc(crc: number): void
    set_state(state: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array[]): void
    complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array[], prespace: number): [ /* out */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterYenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterYenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterYenc_ConstructProps)
    _init (config?: MimeFilterYenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(direction: MimeFilterYencDirection): MimeFilterYenc
    static new(): MimeFilterYenc
    static $gtype: GObject.Type
}
export interface MimeMessage_ConstructProps extends MimePart_ConstructProps {
}
export class MimeMessage {
    /* Properties of Camel-1.2.Camel.MimePart */
    content_id: string
    content_md5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.MimeMessage */
    parent: MimePart
    priv: MimeMessagePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeMessage */
    build_mbox_from(): string
    dump(body: number): void
    encode_8bit_parts(): void
    foreach_part(): void
    get_date(): [ /* returnType */ number, /* offset */ number ]
    get_date_received(): [ /* returnType */ number, /* offset */ number ]
    get_from(): InternetAddress | null
    get_message_id(): string | null
    get_part_by_content_id(content_id: string): MimePart | null
    get_recipients(type: string): InternetAddress | null
    get_reply_to(): InternetAddress | null
    get_source(): string | null
    get_subject(): string | null
    has_8bit_parts(): boolean
    has_attachment(): boolean
    set_best_encoding(required: BestencRequired, enctype: BestencEncoding): void
    set_date(date: number, offset: number): void
    set_from(from?: InternetAddress | null): void
    set_message_id(message_id?: string | null): void
    set_recipients(type: string, recipients?: InternetAddress | null): void
    set_reply_to(reply_to?: InternetAddress | null): void
    set_source(source_uid?: string | null): void
    set_subject(subject?: string | null): void
    /* Methods of Camel-1.2.Camel.MimePart */
    construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    construct_from_parser(parser: MimeParser, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_parser_finish(result: Gio.AsyncResult): boolean
    construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    get_content_disposition(): ContentDisposition | null
    get_content_id(): string | null
    get_content_languages(): string[] | null
    get_content_location(): string | null
    get_content_md5(): string | null
    get_content_type(): ContentType | null
    get_description(): string | null
    get_disposition(): string | null
    get_encoding(): TransferEncoding
    get_filename(): string | null
    set_content(data: Uint8Array[] | null, type?: string | null): void
    set_content_id(contentid?: string | null): void
    set_content_languages(content_languages?: string[] | null): void
    set_content_location(location?: string | null): void
    set_content_md5(md5sum?: string | null): void
    set_content_type(content_type?: string | null): void
    set_description(description: string): void
    set_disposition(disposition?: string | null): void
    set_encoding(encoding: TransferEncoding): void
    set_filename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.MimePart */
    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeMessage_ConstructProps)
    _init (config?: MimeMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeMessage
    static $gtype: GObject.Type
}
export interface MimeParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class MimeParser {
    /* Fields of Camel-1.2.Camel.MimeParser */
    parent: GObject.Object
    priv: MimeParserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeParser */
    content_type(): ContentType
    drop_step(): void
    dup_headers(): NameValueArray
    errno(): number
    filter_add(mf: MimeFilter): number
    filter_remove(id: number): void
    from_line(): string
    header(name: string, offset: number): string
    init_with_bytes(bytes: GLib.Bytes): void
    init_with_fd(fd: number): number
    init_with_input_stream(input_stream: Gio.InputStream): void
    init_with_stream(stream: Stream): number
    postface(): string
    preface(): string
    push_state(newstate: MimeParserState, boundary: string): void
    read(len: number): [ /* returnType */ number, /* databuffer */ Uint8Array[] ]
    scan_from(scan_from: boolean): void
    scan_pre_from(scan_pre_from: boolean): void
    seek(offset: number, whence: number): number
    set_header_regex(matchstr: string): number
    state(): MimeParserState
    step(databuffer?: Uint8Array[] | null): [ /* returnType */ MimeParserState, /* databuffer */ Uint8Array[] | null ]
    stream(): Stream | null
    tell(): number
    tell_start_boundary(): number
    tell_start_from(): number
    tell_start_headers(): number
    unstep(): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeParser */
    vfunc_content(): void
    vfunc_message(headers?: object | null): void
    vfunc_part(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeParser_ConstructProps)
    _init (config?: MimeParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeParser
    static $gtype: GObject.Type
}
export interface MimePart_ConstructProps extends Medium_ConstructProps {
    content_id?: string
    content_md5?: string
    description?: string
    disposition?: string
}
export class MimePart {
    /* Properties of Camel-1.2.Camel.MimePart */
    content_id: string
    content_md5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.MimePart */
    parent: Medium
    priv: MimePartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimePart */
    construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    construct_from_parser(parser: MimeParser, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_parser_finish(result: Gio.AsyncResult): boolean
    construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    get_content_disposition(): ContentDisposition | null
    get_content_id(): string | null
    get_content_languages(): string[] | null
    get_content_location(): string | null
    get_content_md5(): string | null
    get_content_type(): ContentType | null
    get_description(): string | null
    get_disposition(): string | null
    get_encoding(): TransferEncoding
    get_filename(): string | null
    set_content(data: Uint8Array[] | null, type?: string | null): void
    set_content_id(contentid?: string | null): void
    set_content_languages(content_languages?: string[] | null): void
    set_content_location(location?: string | null): void
    set_content_md5(md5sum?: string | null): void
    set_content_type(content_type?: string | null): void
    set_description(description: string): void
    set_disposition(disposition?: string | null): void
    set_encoding(encoding: TransferEncoding): void
    set_filename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.MimePart */
    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimePart_ConstructProps)
    _init (config?: MimePart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimePart
    static $gtype: GObject.Type
}
export interface Multipart_ConstructProps extends DataWrapper_ConstructProps {
}
export class Multipart {
    /* Fields of Camel-1.2.Camel.Multipart */
    parent: DataWrapper
    priv: MultipartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Multipart_ConstructProps)
    _init (config?: Multipart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Multipart
    static $gtype: GObject.Type
}
export interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartEncrypted {
    /* Fields of Camel-1.2.Camel.MultipartEncrypted */
    parent: Multipart
    priv: MultipartEncryptedPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartEncrypted_ConstructProps)
    _init (config?: MultipartEncrypted_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MultipartEncrypted
    static $gtype: GObject.Type
}
export interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartSigned {
    /* Fields of Camel-1.2.Camel.MultipartSigned */
    parent: Multipart
    priv: MultipartSignedPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MultipartSigned */
    get_content_stream(): Stream
    set_content_stream(content_stream: Stream): void
    set_signature(signature: MimePart): void
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array[]
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartSigned_ConstructProps)
    _init (config?: MultipartSigned_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MultipartSigned
    static $gtype: GObject.Type
}
export interface NNTPAddress_ConstructProps extends Address_ConstructProps {
}
export class NNTPAddress {
    /* Fields of Camel-1.2.Camel.NNTPAddress */
    parent: Address
    priv: NNTPAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NNTPAddress */
    add(name: string): number
    get(index: number, namep: string): boolean
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NNTPAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NNTPAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NNTPAddress_ConstructProps)
    _init (config?: NNTPAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NNTPAddress
    static $gtype: GObject.Type
}
export interface NullOutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
}
export class NullOutputStream {
    /* Fields of Camel-1.2.Camel.NullOutputStream */
    parent: Gio.OutputStream
    priv: NullOutputStreamPrivate
    /* Fields of Gio-2.0.Gio.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NullOutputStream */
    get_bytes_written(): number
    get_ends_with_crlf(): boolean
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
    connect(sigName: "notify", callback: (($obj: NullOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullOutputStream_ConstructProps)
    _init (config?: NullOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullOutputStream
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
    state_filename?: string
}
export class Object {
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Object */
    parent: GObject.Object
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OfflineFolder_ConstructProps extends Folder_ConstructProps {
    offline_sync?: ThreeState
}
export class OfflineFolder {
    /* Properties of Camel-1.2.Camel.OfflineFolder */
    offline_sync: ThreeState
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.OfflineFolder */
    parent: Folder
    priv: OfflineFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineFolder */
    can_downsync(): boolean
    downsync(expression: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downsync_finish(result: Gio.AsyncResult): boolean
    downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean
    get_offline_sync(): ThreeState
    set_offline_sync(offline_sync: ThreeState): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_flags(): number
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.OfflineFolder */
    vfunc_downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: OfflineFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: OfflineFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: OfflineFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: OfflineFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: OfflineFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: OfflineFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineFolder_ConstructProps)
    _init (config?: OfflineFolder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OfflineSettings_ConstructProps extends StoreSettings_ConstructProps {
    limit_by_age?: boolean
    limit_unit?: TimeUnit
    limit_value?: number
    stay_synchronized?: boolean
}
export class OfflineSettings {
    /* Properties of Camel-1.2.Camel.OfflineSettings */
    limit_by_age: boolean
    limit_unit: TimeUnit
    limit_value: number
    stay_synchronized: boolean
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineSettings */
    get_limit_by_age(): boolean
    get_limit_unit(): TimeUnit
    get_limit_value(): number
    get_stay_synchronized(): boolean
    get_store_changes_interval(): number
    set_limit_by_age(limit_by_age: boolean): void
    set_limit_unit(limit_unit: TimeUnit): void
    set_limit_value(limit_value: boolean): void
    set_stay_synchronized(stay_synchronized: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    set_filter_inbox(filter_inbox: boolean): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineSettings_ConstructProps)
    _init (config?: OfflineSettings_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OfflineStore_ConstructProps extends Store_ConstructProps {
}
export class OfflineStore {
    /* Properties of Camel-1.2.Camel.OfflineStore */
    readonly online: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.OfflineStore */
    parent: Store
    priv: OfflineStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineStore */
    dup_downsync_folders(): Folder[]
    get_online(): boolean
    prepare_for_offline_sync(cancellable?: Gio.Cancellable | null): boolean
    requires_downsync(): boolean
    set_online(online: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_online_finish(result: Gio.AsyncResult): boolean
    set_online_sync(online: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.OfflineStore */
    vfunc_dup_downsync_folders(): Folder[]
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: OfflineStore) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: OfflineStore) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: OfflineStore, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: OfflineStore, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: OfflineStore, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: OfflineStore, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineStore_ConstructProps)
    _init (config?: OfflineStore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Operation_ConstructProps extends Gio.Cancellable_ConstructProps {
}
export class Operation {
    /* Fields of Camel-1.2.Camel.Operation */
    parent: Gio.Cancellable
    priv: OperationPrivate
    /* Fields of Gio-2.0.Gio.Cancellable */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handler_id: number): void
    get_fd(): number
    is_cancelled(): boolean
    make_pollfd(pollfd: GLib.PollFD): boolean
    pop_current(): void
    push_current(): void
    release_fd(): void
    reset(): void
    set_error_if_cancelled(): boolean
    source_new(): GLib.Source
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
    /* Virtual methods of Camel-1.2.Camel.Operation */
    vfunc_status(what: string, pc: number): void
    /* Virtual methods of Gio-2.0.Gio.Cancellable */
    vfunc_cancelled(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Operation */
    connect(sigName: "pop-message", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "pop-message", callback: (($obj: Operation) => void)): number
    emit(sigName: "pop-message"): void
    connect(sigName: "progress", callback: (($obj: Operation, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Operation, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    connect(sigName: "push-message", callback: (($obj: Operation, object: string) => void)): number
    connect_after(sigName: "push-message", callback: (($obj: Operation, object: string) => void)): number
    emit(sigName: "push-message", object: string): void
    connect(sigName: "status", callback: (($obj: Operation, object: string, p0: number) => void)): number
    connect_after(sigName: "status", callback: (($obj: Operation, object: string, p0: number) => void)): number
    emit(sigName: "status", object: string, p0: number): void
    /* Signals of Gio-2.0.Gio.Cancellable */
    connect(sigName: "cancelled", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Operation) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Operation
    static new_proxy(cancellable?: Gio.Cancellable | null): Operation
    static cancel_all(): void
    static pop_message(cancellable?: Gio.Cancellable | null): void
    static progress(cancellable: Gio.Cancellable | null, percent: number): void
    static $gtype: GObject.Type
}
export interface PartitionTable_ConstructProps extends GObject.Object_ConstructProps {
}
export class PartitionTable {
    /* Fields of Camel-1.2.Camel.PartitionTable */
    parent: GObject.Object
    priv: PartitionTablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.PartitionTable */
    add(key: string, keyid: _key_t): number
    lookup(key: string): _key_t
    remove(key: string): boolean
    sync(): number
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
    connect(sigName: "notify", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionTable_ConstructProps)
    _init (config?: PartitionTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bs: BlockFile, root: _block_t): PartitionTable
    static $gtype: GObject.Type
}
export interface SExp_ConstructProps extends GObject.Object_ConstructProps {
}
export class SExp {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SExp */
    add_variable(scope: number, name: string, value: SExpTerm): void
    error(): string | null
    evaluate_occur_times(start: number, end: number): boolean
    input_file(fd: number): void
    input_text(text: string, len: number): void
    parse(): number
    remove_symbol(scope: number, name: string): void
    result_free(result?: SExpResult | null): void
    resultv_free(argv: SExpResult[]): void
    set_scope(scope: number): number
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
    connect(sigName: "notify", callback: (($obj: SExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SExp_ConstructProps)
    _init (config?: SExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SExp
    static encode_bool(string: GLib.String, v_bool: boolean): void
    static encode_string(string: GLib.String, v_string: string): void
    static to_sql_sexp(sexp: string): string
    static $gtype: GObject.Type
}
export interface SMIMEContext_ConstructProps extends CipherContext_ConstructProps {
}
export class SMIMEContext {
    /* Fields of Camel-1.2.Camel.SMIMEContext */
    parent: CipherContext
    priv: SMIMEContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SMIMEContext */
    describe_part(part?: object | null): number
    set_encrypt_key(use: boolean, key: string): void
    set_sign_mode(type: SMIMESign): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SMIMEContext_ConstructProps)
    _init (config?: SMIMEContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): SMIMEContext
    static $gtype: GObject.Type
}
export interface Sasl_ConstructProps extends GObject.Object_ConstructProps {
    authenticated?: boolean
    mechanism?: string
    service?: Service
    service_name?: string
}
export class Sasl {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    parent: GObject.Object
    priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sasl_ConstructProps)
    _init (config?: Sasl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service_name: string, mechanism: string, service: Service): Sasl
    static authtype(mechanism: string): ServiceAuthType | null
    static authtype_list(include_plain: boolean): ServiceAuthType[]
    static is_xoauth2_alias(mechanism?: string | null): boolean
    static $gtype: GObject.Type
}
export interface SaslAnonymous_ConstructProps extends Sasl_ConstructProps {
}
export class SaslAnonymous {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslAnonymous */
    parent: Sasl
    priv: SaslAnonymousPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslAnonymous_ConstructProps)
    _init (config?: SaslAnonymous_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SaslAnonTraceType, trace_info: string): SaslAnonymous
    static new(service_name: string, mechanism: string, service: Service): SaslAnonymous
    static $gtype: GObject.Type
}
export interface SaslCramMd5_ConstructProps extends Sasl_ConstructProps {
}
export class SaslCramMd5 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslCramMd5 */
    parent: Sasl
    priv: SaslCramMd5Private
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslCramMd5_ConstructProps)
    _init (config?: SaslCramMd5_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslDigestMd5_ConstructProps extends Sasl_ConstructProps {
}
export class SaslDigestMd5 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslDigestMd5 */
    parent: Sasl
    priv: SaslDigestMd5Private
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslDigestMd5_ConstructProps)
    _init (config?: SaslDigestMd5_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslGssapi_ConstructProps extends Sasl_ConstructProps {
}
export class SaslGssapi {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslGssapi */
    parent: Sasl
    priv: SaslGssapiPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SaslGssapi */
    override_host_and_user(override_host?: string | null, override_user?: string | null): void
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslGssapi_ConstructProps)
    _init (config?: SaslGssapi_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static is_available(): boolean
    static $gtype: GObject.Type
}
export interface SaslLogin_ConstructProps extends Sasl_ConstructProps {
}
export class SaslLogin {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslLogin */
    parent: Sasl
    priv: SaslLoginPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslLogin_ConstructProps)
    _init (config?: SaslLogin_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslNTLM_ConstructProps extends Sasl_ConstructProps {
}
export class SaslNTLM {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslNTLM */
    parent: Sasl
    priv: SaslNTLMPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslNTLM_ConstructProps)
    _init (config?: SaslNTLM_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslPOPB4SMTP_ConstructProps extends Sasl_ConstructProps {
}
export class SaslPOPB4SMTP {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslPOPB4SMTP */
    parent: Sasl
    priv: SaslPOPB4SMTPPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslPOPB4SMTP_ConstructProps)
    _init (config?: SaslPOPB4SMTP_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslPlain_ConstructProps extends Sasl_ConstructProps {
}
export class SaslPlain {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslPlain */
    parent: Sasl
    priv: SaslPlainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslPlain_ConstructProps)
    _init (config?: SaslPlain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslXOAuth2_ConstructProps extends Sasl_ConstructProps {
}
export class SaslXOAuth2 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2 */
    parent: Sasl
    priv: SaslXOAuth2Private
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2_ConstructProps)
    _init (config?: SaslXOAuth2_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslXOAuth2Google_ConstructProps extends SaslXOAuth2_ConstructProps {
}
export class SaslXOAuth2Google {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2Google */
    parent: SaslXOAuth2
    priv: SaslXOAuth2GooglePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Google_ConstructProps)
    _init (config?: SaslXOAuth2Google_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslXOAuth2Outlook_ConstructProps extends SaslXOAuth2_ConstructProps {
}
export class SaslXOAuth2Outlook {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2Outlook */
    parent: SaslXOAuth2
    priv: SaslXOAuth2OutlookPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Outlook_ConstructProps)
    _init (config?: SaslXOAuth2Outlook_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SaslXOAuth2Yahoo_ConstructProps extends SaslXOAuth2_ConstructProps {
}
export class SaslXOAuth2Yahoo {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2Yahoo */
    parent: SaslXOAuth2
    priv: SaslXOAuth2YahooPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array[]
    challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array[], cancellable?: Gio.Cancellable | null): Uint8Array[]
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Yahoo_ConstructProps)
    _init (config?: SaslXOAuth2Yahoo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends Object_ConstructProps {
    display_name?: string
    password?: string
    provider?: Provider
    proxy_resolver?: Gio.ProxyResolver
    session?: Session
    settings?: Settings
    uid?: string
}
export class Service {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Service */
    parent: Object
    priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
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
    connect(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Session_ConstructProps extends GObject.Object_ConstructProps {
    junk_filter?: JunkFilter
    network_monitor?: Gio.NetworkMonitor
    online?: boolean
    user_cache_dir?: string
    user_data_dir?: string
}
export class Session {
    /* Properties of Camel-1.2.Camel.Session */
    junk_filter: JunkFilter
    readonly main_context: GLib.MainContext
    network_monitor: Gio.NetworkMonitor
    online: boolean
    user_cache_dir: string
    user_data_dir: string
    /* Fields of Camel-1.2.Camel.Session */
    parent: GObject.Object
    priv: SessionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Session */
    add_service(uid: string, protocol: string, type: ProviderType): Service
    addressbook_contains_sync(book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null): boolean
    authenticate(service: Service, mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): boolean
    authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean
    forget_password(service: Service, item: string): boolean
    forward_to(folder: Folder, message: MimeMessage, address: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_to_finish(result: Gio.AsyncResult): boolean
    forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null): boolean
    get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver
    get_junk_filter(): JunkFilter
    get_junk_headers(): GLib.HashTable
    get_oauth2_access_token_sync(service: Service, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_online(): boolean
    get_password(service: Service, prompt: string, item: string, flags: number): string
    get_recipient_certificates_sync(flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    get_user_cache_dir(): string
    get_user_data_dir(): string
    idle_add(priority: number, function_: GLib.SourceFunc): number
    list_services(): Service[]
    lookup_addressbook(name: string): boolean
    ref_main_context(): GLib.MainContext
    ref_network_monitor(): Gio.NetworkMonitor
    ref_service(uid: string): Service
    ref_service_by_url(url: URL, type: ProviderType): Service
    remove_service(service: Service): void
    remove_services(): void
    set_junk_filter(junk_filter: JunkFilter): void
    set_junk_headers(headers: string[], values: string[]): void
    set_network_monitor(network_monitor?: Gio.NetworkMonitor | null): void
    set_online(online: boolean): void
    submit_job(description: string, callback: SessionCallback): void
    trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    user_alert(service: Service, type: SessionAlertType, message: string): void
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
    /* Virtual methods of Camel-1.2.Camel.Session */
    vfunc_add_service(uid: string, protocol: string, type: ProviderType): Service
    vfunc_addressbook_contains_sync(book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean
    vfunc_forget_password(service: Service, item: string): boolean
    vfunc_forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver
    vfunc_get_oauth2_access_token_sync(service: Service, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_password(service: Service, prompt: string, item: string, flags: number): string
    vfunc_get_recipient_certificates_sync(flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    vfunc_job_finished(cancellable: Gio.Cancellable | null, error: GLib.Error): void
    vfunc_job_started(cancellable?: Gio.Cancellable | null): void
    vfunc_lookup_addressbook(name: string): boolean
    vfunc_remove_service(service: Service): void
    vfunc_trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    vfunc_user_alert(service: Service, type: SessionAlertType, message: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Session */
    connect(sigName: "job-finished", callback: (($obj: Session, object: Gio.Cancellable | null, p0: GLib.Error) => void)): number
    connect_after(sigName: "job-finished", callback: (($obj: Session, object: Gio.Cancellable | null, p0: GLib.Error) => void)): number
    emit(sigName: "job-finished", object: Gio.Cancellable | null, p0: GLib.Error): void
    connect(sigName: "job-started", callback: (($obj: Session, object?: Gio.Cancellable | null) => void)): number
    connect_after(sigName: "job-started", callback: (($obj: Session, object?: Gio.Cancellable | null) => void)): number
    emit(sigName: "job-started", object?: Gio.Cancellable | null): void
    connect(sigName: "user-alert", callback: (($obj: Session, service: Service, type: SessionAlertType, message: string) => void)): number
    connect_after(sigName: "user-alert", callback: (($obj: Session, service: Service, type: SessionAlertType, message: string) => void)): number
    emit(sigName: "user-alert", service: Service, type: SessionAlertType, message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
}
export class Settings {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static list_settings(settings_class: Settings | Function | GObject.Type, n_settings: number): GObject.ParamSpec
    static $gtype: GObject.Type
}
export interface Store_ConstructProps extends Service_ConstructProps {
}
export class Store {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Store */
    parent: Service
    priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: Store, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: Store, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: Store, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: Store, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: Store) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: Store) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: Store, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: Store, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: Store, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: Store, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Store_ConstructProps)
    _init (config?: Store_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StoreSettings_ConstructProps extends Settings_ConstructProps {
    filter_inbox?: boolean
    store_changes_interval?: number
}
export class StoreSettings {
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    get_store_changes_interval(): number
    set_filter_inbox(filter_inbox: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoreSettings_ConstructProps)
    _init (config?: StoreSettings_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StoreSummary_ConstructProps extends GObject.Object_ConstructProps {
}
export class StoreSummary {
    /* Fields of Camel-1.2.Camel.StoreSummary */
    parent: GObject.Object
    priv: StoreSummaryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSummary */
    add(info: StoreInfo): void
    array(): StoreInfo[]
    array_free(array: StoreInfo[]): void
    connect_folder_summary(path: string, folder_summary: FolderSummary): boolean
    count(): number
    disconnect_folder_summary(folder_summary: FolderSummary): boolean
    info_unref(info: StoreInfo): void
    load(): number
    remove(info: StoreInfo): void
    remove_path(path: string): void
    save(): number
    set_filename(filename: string): void
    sort(compare_func: GLib.CompareDataFunc): void
    touch(): void
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
    /* Virtual methods of Camel-1.2.Camel.StoreSummary */
    vfunc_store_info_free(info: StoreInfo): void
    vfunc_store_info_save(file: object | null, info: StoreInfo): number
    vfunc_store_info_set_string(info: StoreInfo, type: number, value: string): void
    vfunc_summary_header_load(file?: object | null): number
    vfunc_summary_header_save(file?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoreSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoreSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoreSummary_ConstructProps)
    _init (config?: StoreSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoreSummary
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends GObject.Object_ConstructProps {
    base_stream?: Gio.IOStream
}
export class Stream {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    parent: GObject.Object
    priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.IOStream): Stream
    static $gtype: GObject.Type
}
export interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
export class StreamBuffer {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamBuffer */
    parent: Stream
    priv: StreamBufferPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamBuffer */
    discard_cache(): void
    gets(buf: number[], cancellable?: Gio.Cancellable | null): number
    read_line(cancellable?: Gio.Cancellable | null): string | null
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.StreamBuffer */
    vfunc_init(stream: Stream, mode: StreamBufferMode): void
    vfunc_init_vbuf(stream: Stream, mode: StreamBufferMode, buf: string, size: number): void
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Stream, mode: StreamBufferMode): StreamBuffer
    static new(base_stream: Gio.IOStream): StreamBuffer
    static $gtype: GObject.Type
}
export interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
export class StreamFilter {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamFilter */
    parent: Stream
    priv: StreamFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFilter */
    add(filter: MimeFilter): number
    get_source(): Stream
    remove(id: number): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Stream): StreamFilter
    static new(base_stream: Gio.IOStream): StreamFilter
    static $gtype: GObject.Type
}
export interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
export class StreamFs {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamFs */
    parent: Stream
    priv: StreamFsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFs */
    get_fd(): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_fd(fd: number): StreamFs
    static new_with_name(name: string, flags: number, mode: number): StreamFs
    static $gtype: GObject.Type
}
export interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
export class StreamMem {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamMem */
    parent: Stream
    priv: StreamMemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamMem */
    get_byte_array(): Uint8Array[]
    set_buffer(buffer: Uint8Array[]): void
    set_byte_array(buffer: Uint8Array[]): void
    set_secure(): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    static new(base_stream: Gio.IOStream): StreamMem
    static new_with_buffer(buffer: Uint8Array[]): StreamMem
    static new_with_byte_array(buffer: Uint8Array[]): StreamMem
    static $gtype: GObject.Type
}
export interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
export class StreamNull {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamNull */
    parent: Stream
    priv: StreamNullPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamNull */
    get_bytes_written(): number
    get_ends_with_crlf(): boolean
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamNull
    static new(base_stream: Gio.IOStream): StreamNull
    static $gtype: GObject.Type
}
export interface StreamProcess_ConstructProps extends Stream_ConstructProps {
}
export class StreamProcess {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.StreamProcess */
    parent: Stream
    priv: StreamProcessPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamProcess */
    connect(command: string, env: string): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamProcess_ConstructProps)
    _init (config?: StreamProcess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamProcess
    static new(base_stream: Gio.IOStream): StreamProcess
    static $gtype: GObject.Type
}
export interface TextIndex_ConstructProps extends Index_ConstructProps {
}
export class TextIndex {
    /* Fields of Camel-1.2.Camel.TextIndex */
    parent: Index
    priv: TextIndexPrivate
    /* Fields of Camel-1.2.Camel.Index */
    path: string
    version: number
    flags: number
    state: number
    normalize: IndexNorm
    normalize_data: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.TextIndex */
    dump(): void
    info(): void
    validate(): void
    /* Methods of Camel-1.2.Camel.Index */
    add_name(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    delete_name(name: string): void
    find(word: string): IndexCursor | null
    find_name(name: string): IndexCursor | null
    has_name(name: string): number
    rename(path: string): number
    set_normalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    write_name(idn: IndexName): number
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
    /* Virtual methods of Camel-1.2.Camel.Index */
    vfunc_add_name(name: string): IndexName | null
    vfunc_compress(): number
    vfunc_delete_(): number
    vfunc_delete_name(name: string): void
    vfunc_find(word: string): IndexCursor | null
    vfunc_find_name(name: string): IndexCursor | null
    vfunc_has_name(name: string): number
    vfunc_rename(path: string): number
    vfunc_sync(): number
    vfunc_words(): IndexCursor | null
    vfunc_write_name(idn: IndexName): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndex_ConstructProps)
    _init (config?: TextIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number): TextIndex
    static check(path: string): number
    static remove(old: string): number
    static rename(old: string, new_: string): number
    static $gtype: GObject.Type
}
export interface TextIndexCursor_ConstructProps extends IndexCursor_ConstructProps {
}
export class TextIndexCursor {
    /* Fields of Camel-1.2.Camel.TextIndexCursor */
    parent: IndexCursor
    priv: TextIndexCursorPrivate
    /* Fields of Camel-1.2.Camel.IndexCursor */
    index: Index
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexCursor_ConstructProps)
    _init (config?: TextIndexCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextIndexKeyCursor_ConstructProps extends IndexCursor_ConstructProps {
}
export class TextIndexKeyCursor {
    /* Fields of Camel-1.2.Camel.TextIndexKeyCursor */
    parent: IndexCursor
    priv: TextIndexKeyCursorPrivate
    /* Fields of Camel-1.2.Camel.IndexCursor */
    index: Index
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexKeyCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexKeyCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexKeyCursor_ConstructProps)
    _init (config?: TextIndexKeyCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextIndexName_ConstructProps extends IndexName_ConstructProps {
}
export class TextIndexName {
    /* Fields of Camel-1.2.Camel.TextIndexName */
    parent: IndexName
    priv: TextIndexNamePrivate
    /* Fields of Camel-1.2.Camel.IndexName */
    index: Index
    name: string
    buffer: Uint8Array[]
    words: GLib.HashTable
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    add_buffer(buffer: string, len: number): number
    add_word(word: string): void
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
    /* Virtual methods of Camel-1.2.Camel.IndexName */
    vfunc_add_buffer(buffer: string, len: number): number
    vfunc_add_word(word: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexName_ConstructProps)
    _init (config?: TextIndexName_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Transport_ConstructProps extends Service_ConstructProps {
}
export class Transport {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Transport */
    parent: Service
    priv: TransportPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Transport */
    send_to(message: MimeMessage, from: Address, recipients: Address, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Transport */
    vfunc_send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transport_ConstructProps)
    _init (config?: Transport_ConstructProps): void
    static $gtype: GObject.Type
}
export interface VTrashFolder_ConstructProps extends VeeFolder_ConstructProps {
}
export class VTrashFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    auto_update: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.VTrashFolder */
    parent: VeeFolder
    priv: VTrashFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VTrashFolder */
    get_folder_type(): VTrashFolderType
    /* Methods of Camel-1.2.Camel.VeeFolder */
    add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    add_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    get_auto_update(): boolean
    get_expression(): string
    get_flags(): number
    get_location(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    get_vee_uid_folder(vee_message_uid: string): Folder | null
    ignore_next_changed_event(subfolder: Folder): void
    propagate_skipped_changes(): void
    rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    ref_folders(): Folder[]
    remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    remove_from_ignore_changed_event(subfolder: Folder): void
    remove_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    set_auto_update(auto_update: boolean): void
    set_expression(expression: string): void
    set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.VeeFolder */
    vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void
    vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_set_expression(expression: string): void
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: VTrashFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VTrashFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: VTrashFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: VTrashFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: VTrashFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: VTrashFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VTrashFolder_ConstructProps)
    _init (config?: VTrashFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent_store: Store, type: VTrashFolderType): VTrashFolder
    static new(parent_store: Store, full: string, flags: number): VTrashFolder
    static $gtype: GObject.Type
}
export interface VeeDataCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class VeeDataCache {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeDataCache */
    add_subfolder(subfolder: Folder): void
    contains_message_info_data(folder: Folder, orig_message_uid: string): boolean
    foreach_message_info_data(fromfolder: Folder, func: ForeachInfoData): void
    get_message_info_data(folder: Folder, orig_message_uid: string): VeeMessageInfoData
    get_message_info_data_by_vuid(vee_message_uid: string): VeeMessageInfoData | null
    get_subfolder_data(folder: Folder): VeeSubfolderData
    remove_message_info_data(mi_data: VeeMessageInfoData): void
    remove_subfolder(subfolder: Folder): void
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
    connect(sigName: "notify", callback: (($obj: VeeDataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeDataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeDataCache_ConstructProps)
    _init (config?: VeeDataCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeDataCache
    static $gtype: GObject.Type
}
export interface VeeFolder_ConstructProps extends Folder_ConstructProps {
    auto_update?: boolean
}
export class VeeFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    auto_update: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.VeeFolder */
    parent: Folder
    priv: VeeFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeFolder */
    add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    add_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    get_auto_update(): boolean
    get_expression(): string
    get_flags(): number
    get_location(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    get_vee_uid_folder(vee_message_uid: string): Folder | null
    ignore_next_changed_event(subfolder: Folder): void
    propagate_skipped_changes(): void
    rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    ref_folders(): Folder[]
    remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    remove_from_ignore_changed_event(subfolder: Folder): void
    remove_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    set_auto_update(auto_update: boolean): void
    set_expression(expression: string): void
    set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.VeeFolder */
    vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void
    vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_set_expression(expression: string): void
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: VeeFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VeeFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: VeeFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: VeeFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: VeeFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: VeeFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeFolder_ConstructProps)
    _init (config?: VeeFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent_store: Store, full: string, flags: number): VeeFolder
    static $gtype: GObject.Type
}
export interface VeeMessageInfo_ConstructProps extends MessageInfo_ConstructProps {
}
export class VeeMessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of Camel-1.2.Camel.VeeMessageInfo */
    parent: MessageInfo
    priv: VeeMessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfo */
    get_original_folder(): Folder
    get_original_summary(): FolderSummary
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeMessageInfo_ConstructProps)
    _init (config?: VeeMessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: FolderSummary, original_summary: FolderSummary, vuid: string): VeeMessageInfo
    static new(summary?: FolderSummary | null): VeeMessageInfo
    static $gtype: GObject.Type
}
export interface VeeMessageInfoData_ConstructProps extends GObject.Object_ConstructProps {
}
export class VeeMessageInfoData {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfoData */
    get_orig_message_uid(): string
    get_subfolder_data(): VeeSubfolderData
    get_vee_message_uid(): string
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
    connect(sigName: "notify", callback: (($obj: VeeMessageInfoData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeMessageInfoData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeMessageInfoData_ConstructProps)
    _init (config?: VeeMessageInfoData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subfolder_data: VeeSubfolderData, orig_message_uid: string): VeeMessageInfoData
    static $gtype: GObject.Type
}
export interface VeeStore_ConstructProps extends Store_ConstructProps {
    unmatched_enabled?: boolean
}
export class VeeStore {
    /* Properties of Camel-1.2.Camel.VeeStore */
    unmatched_enabled: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.VeeStore */
    parent: Store
    priv: VeeStorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeStore */
    get_unmatched_enabled(): boolean
    get_unmatched_folder(): object | null
    get_vee_data_cache(): VeeFolder
    note_subfolder_unused(subfolder: Folder, unused_by: VeeFolder): void
    note_subfolder_used(subfolder: Folder, used_by: VeeFolder): void
    note_vuid_unused(mi_data: VeeMessageInfoData, unused_by: VeeFolder): void
    note_vuid_used(mi_data: VeeMessageInfoData, used_by: VeeFolder): void
    rebuild_unmatched_folder(cancellable?: Gio.Cancellable | null): void
    set_unmatched_enabled(is_enabled: boolean): void
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: VeeStore) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: VeeStore) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: VeeStore, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: VeeStore, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: VeeStore, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: VeeStore, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeStore_ConstructProps)
    _init (config?: VeeStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeStore
    static $gtype: GObject.Type
}
export interface VeeSubfolderData_ConstructProps extends GObject.Object_ConstructProps {
}
export class VeeSubfolderData {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSubfolderData */
    get_folder(): Folder
    get_folder_id(): string
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
    connect(sigName: "notify", callback: (($obj: VeeSubfolderData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeSubfolderData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeSubfolderData_ConstructProps)
    _init (config?: VeeSubfolderData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(folder: Folder): VeeSubfolderData
    static $gtype: GObject.Type
}
export interface VeeSummary_ConstructProps extends FolderSummary_ConstructProps {
}
export class VeeSummary {
    /* Properties of Camel-1.2.Camel.FolderSummary */
    readonly deleted_count: number
    readonly junk_count: number
    readonly junk_not_deleted_count: number
    readonly saved_count: number
    readonly unread_count: number
    readonly visible_count: number
    /* Fields of Camel-1.2.Camel.VeeSummary */
    parent: FolderSummary
    priv: VeeSummaryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSummary */
    add(mi_data: VeeMessageInfoData): VeeMessageInfo
    get_uids_for_subfolder(subfolder: Folder): GLib.HashTable
    remove(vuid: string, subfolder: Folder): void
    replace_flags(uid: string): void
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, force_keep_uid: boolean): void
    check_uid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    get_array(): string[]
    get_changed(): string[]
    get_deleted_count(): number
    get_flags(): number
    get_folder(): object | null
    get_hash(): GLib.HashTable
    get_index(): Index
    get_info_flags(uid: string): number
    get_junk_count(): number
    get_junk_not_deleted_count(): number
    get_next_uid(): number
    get_saved_count(): number
    get_timestamp(): number
    get_unread_count(): number
    get_version(): number
    get_visible_count(): number
    header_load(store: object | null, folder_name: string): boolean
    header_save(): boolean
    info_new_from_headers(headers: NameValueArray): MessageInfo
    info_new_from_message(message: MimeMessage): MessageInfo
    info_new_from_parser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    next_uid(): number
    next_uid_string(): string
    peek_loaded(uid: string): MessageInfo | null
    prepare_fetch_all(): void
    remove(info: MessageInfo): boolean
    remove_uid(uid: string): boolean
    remove_uids(uids: string[]): boolean
    replace_flags(info: MessageInfo): boolean
    save(): boolean
    set_flags(flags: number): void
    set_index(index: Index): void
    set_next_uid(uid: number): void
    set_timestamp(timestamp: number): void
    set_version(version: number): void
    touch(): void
    unlock(): void
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
    /* Virtual methods of Camel-1.2.Camel.FolderSummary */
    vfunc_message_info_from_uid(uid: string): MessageInfo | null
    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo
    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo
    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo
    vfunc_next_uid_string(): string
    vfunc_prepare_fetch_all(): void
    vfunc_summary_header_load(fir?: object | null): boolean
    vfunc_summary_header_save(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.FolderSummary */
    connect(sigName: "changed", callback: (($obj: VeeSummary) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VeeSummary) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeSummary_ConstructProps)
    _init (config?: VeeSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Folder): VeeSummary
    static $gtype: GObject.Type
}
export abstract class AddressClass {
    /* Fields of Camel-1.2.Camel.AddressClass */
    parent_class: GObject.ObjectClass
    length: (addr: Address) => number
    decode: (addr: Address, raw: string) => number
    encode: (addr: Address) => string
    unformat: (addr: Address, raw: string) => number
    format: (addr: Address) => string
    cat: (dest: Address, source: Address) => number
    remove: (addr: Address, index: number) => void
    reserved: object[]
    static name: string
}
export class AddressPrivate {
    static name: string
}
export class AsyncClosure {
    static name: string
}
export class Block {
    /* Fields of Camel-1.2.Camel.Block */
    id: _block_t
    flags: BlockFlags
    refcount: number
    align00: number
    data: Uint8Array[]
    static name: string
}
export abstract class BlockFileClass {
    /* Fields of Camel-1.2.Camel.BlockFileClass */
    parent_class: GObject.ObjectClass
    validate_root: (bs: BlockFile) => number
    init_root: (bs: BlockFile) => number
    reserved: object[]
    static name: string
}
export class BlockFilePrivate {
    static name: string
}
export class BlockRoot {
    /* Fields of Camel-1.2.Camel.BlockRoot */
    version: number[]
    flags: number
    block_size: number
    free: _block_t
    last: _block_t
    static name: string
}
export class Cert {
    /* Fields of Camel-1.2.Camel.Cert */
    refcount: number
    issuer: string
    subject: string
    hostname: string
    fingerprint: string
    trust: CertTrust
    rawcert: GLib.Bytes
    /* Methods of Camel-1.2.Camel.Cert */
    load_cert_file(): boolean
    ref(): Cert
    save_cert_file(der_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): Cert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Cert
}
export abstract class CertDBClass {
    /* Fields of Camel-1.2.Camel.CertDBClass */
    parent_class: GObject.ObjectClass
    header_load: (certdb: CertDB, istream?: object | null) => number
    header_save: (certdb: CertDB, ostream?: object | null) => number
    cert_load: (certdb: CertDB, istream?: object | null) => Cert
    cert_save: (certdb: CertDB, cert: Cert, ostream?: object | null) => number
    reserved: object[]
    static name: string
}
export class CertDBPrivate {
    static name: string
}
export class Charset {
    /* Fields of Camel-1.2.Camel.Charset */
    mask: number
    level: number
    /* Methods of Camel-1.2.Camel.Charset */
    best_name(): string
    init(): void
    step(in_: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static best(in_: number[]): string | null
    static iso_to_windows(isocharset: string): string
}
export class CipherCertInfo {
    /* Fields of Camel-1.2.Camel.CipherCertInfo */
    name: string
    email: string
    cert_data: object
    cert_data_free: GLib.DestroyNotify
    cert_data_clone: CipherCloneFunc
    properties: object[]
    static name: string
}
export class CipherCertInfoProperty {
    /* Fields of Camel-1.2.Camel.CipherCertInfoProperty */
    name: string
    value: object
    value_free: GLib.DestroyNotify
    value_clone: CipherCloneFunc
    static name: string
}
export abstract class CipherContextClass {
    /* Fields of Camel-1.2.Camel.CipherContextClass */
    parent_class: GObject.ObjectClass
    sign_protocol: string
    encrypt_protocol: string
    key_protocol: string
    id_to_hash: (context: CipherContext, id: string) => CipherHash
    hash_to_id: (context: CipherContext, hash: CipherHash) => string
    sign_sync: (context: CipherContext, userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    verify_sync: (context: CipherContext, ipart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
    encrypt_sync: (context: CipherContext, userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    decrypt_sync: (context: CipherContext, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
    reserved: object[]
    static name: string
}
export class CipherContextPrivate {
    static name: string
}
export class CipherValidity {
    /* Fields of Camel-1.2.Camel.CipherValidity */
    children: GLib.Queue
    sign: object
    encrypt: object
    /* Methods of Camel-1.2.Camel.CipherValidity */
    add_certinfo(mode: CipherValidityMode, name: string, email: string): number
    add_certinfo_ex(mode: CipherValidityMode, name: string, email: string, cert_data?: object | null, cert_data_clone?: CipherCloneFunc | null): number
    clear(): void
    clone(): CipherValidity
    envelope(valid: CipherValidity): void
    free(): void
    get_certinfo_property(mode: CipherValidityMode, info_index: number, name: string): object | null
    get_description(): string
    get_valid(): boolean
    init(): void
    set_certinfo_property(mode: CipherValidityMode, info_index: number, name: string, value?: object | null, value_clone?: CipherCloneFunc | null): void
    set_description(description: string): void
    set_valid(valid: boolean): void
    static name: string
    static new(): CipherValidity
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): CipherValidity
}
export class ContentDisposition {
    /* Fields of Camel-1.2.Camel.ContentDisposition */
    disposition: string
    params: object
    refcount: number
    /* Methods of Camel-1.2.Camel.ContentDisposition */
    format(): string
    is_attachment(content_type: ContentType): boolean
    is_attachment_ex(content_type: ContentType, parent_content_type: ContentType): boolean
    ref(): ContentDisposition
    unref(): void
    static name: string
    static new(): ContentDisposition
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContentDisposition
    static decode(in_: string): ContentDisposition
}
export class ContentType {
    /* Fields of Camel-1.2.Camel.ContentType */
    type: string
    subtype: string
    params: object
    refcount: number
    /* Methods of Camel-1.2.Camel.ContentType */
    dump(): void
    format(): string
    is(type: string, subtype: string): boolean
    param(name: string): string
    ref(): ContentType
    set_param(name: string, value: string): void
    simple(): string
    unref(): void
    static name: string
    static new(type: string, subtype: string): ContentType
    constructor(type: string, subtype: string)
    /* Static methods and pseudo-constructors */
    static new(type: string, subtype: string): ContentType
    static decode(in_: string): ContentType
}
export abstract class DBClass {
    static name: string
}
export class DBPrivate {
    static name: string
}
export abstract class DataCacheClass {
    /* Fields of Camel-1.2.Camel.DataCacheClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class DataCachePrivate {
    static name: string
}
export abstract class DataWrapperClass {
    /* Fields of Camel-1.2.Camel.DataWrapperClass */
    parent_class: GObject.ObjectClass
    set_mime_type: (data_wrapper: DataWrapper, mime_type: string) => void
    get_mime_type: (data_wrapper: DataWrapper) => string
    get_mime_type_field: (data_wrapper: DataWrapper) => ContentType | null
    set_mime_type_field: (data_wrapper: DataWrapper, mime_type?: ContentType | null) => void
    is_offline: (data_wrapper: DataWrapper) => boolean
    write_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    decode_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    construct_from_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => boolean
    write_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    decode_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    construct_from_input_stream_sync: (data_wrapper: DataWrapper, input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null) => boolean
    reserved: object[]
    static name: string
}
export class DataWrapperPrivate {
    static name: string
}
export class FIRecord {
    /* Fields of Camel-1.2.Camel.FIRecord */
    folder_name: string
    version: number
    flags: number
    nextuid: number
    timestamp: number
    saved_count: number
    unread_count: number
    deleted_count: number
    junk_count: number
    visible_count: number
    jnd_count: number
    bdata: string
    static name: string
}
export abstract class FilterDriverClass {
    /* Fields of Camel-1.2.Camel.FilterDriverClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class FilterDriverPrivate {
    static name: string
}
export abstract class FilterInputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterInputStreamClass */
    parent_class: Gio.FilterInputStreamClass
    reserved: object[]
    static name: string
}
export class FilterInputStreamPrivate {
    static name: string
}
export abstract class FilterOutputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterOutputStreamClass */
    parent_class: Gio.FilterOutputStreamClass
    reserved: object[]
    static name: string
}
export class FilterOutputStreamPrivate {
    static name: string
}
export class FolderChangeInfo {
    /* Fields of Camel-1.2.Camel.FolderChangeInfo */
    uid_added: object[]
    uid_removed: object[]
    uid_changed: object[]
    uid_recent: object[]
    /* Methods of Camel-1.2.Camel.FolderChangeInfo */
    add_source(uid: string): void
    add_source_list(list: string[]): void
    add_uid(uid: string): void
    add_update(uid: string): void
    add_update_list(list: string[]): void
    build_diff(): void
    cat(src: FolderChangeInfo): void
    change_uid(uid: string): void
    changed(): boolean
    clear(): void
    copy(): FolderChangeInfo
    free(): void
    get_added_uids(): string[]
    get_changed_uids(): string[]
    get_recent_uids(): string[]
    get_removed_uids(): string[]
    recent_uid(uid: string): void
    remove_uid(uid: string): void
    static name: string
    static new(): FolderChangeInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FolderChangeInfo
}
export class FolderChangeInfoPrivate {
    static name: string
}
export abstract class FolderClass {
    /* Fields of Camel-1.2.Camel.FolderClass */
    parent_class: ObjectClass
    get_message_count: (folder: Folder) => number
    get_permanent_flags: (folder: Folder) => number
    get_message_flags: (folder: Folder, uid: string) => number
    set_message_flags: (folder: Folder, uid: string, mask: number, set: number) => boolean
    get_message_user_flag: (folder: Folder, uid: string, name: string) => boolean
    set_message_user_flag: (folder: Folder, uid: string, name: string, value: boolean) => void
    get_message_user_tag: (folder: Folder, uid: string, name: string) => string
    set_message_user_tag: (folder: Folder, uid: string, name: string, value: string) => void
    get_uids: (folder: Folder) => string[]
    free_uids: (folder: Folder, array: string[]) => void
    cmp_uids: (folder: Folder, uid1: string, uid2: string) => number
    sort_uids: (folder: Folder, uids: string[]) => void
    get_summary: (folder: Folder) => string[]
    free_summary: (folder: Folder, array: MessageInfo[]) => void
    has_search_capability: (folder: Folder) => boolean
    search_by_expression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => string[]
    search_by_uids: (folder: Folder, expression: string, uids: string[], cancellable?: Gio.Cancellable | null) => string[]
    search_free: (folder: Folder, result: string[]) => void
    get_message_info: (folder: Folder, uid: string) => MessageInfo
    delete_: (folder: Folder) => void
    rename: (folder: Folder, new_name: string) => void
    freeze: (folder: Folder) => void
    thaw: (folder: Folder) => void
    is_frozen: (folder: Folder) => boolean
    count_by_expression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => number
    get_uncached_uids: (folder: Folder, uids: string[]) => string[]
    get_filename: (folder: Folder, uid: string) => string
    get_message_cached: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => MimeMessage | null
    append_message_sync: (folder: Folder, message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* appended_uid */ string | null ]
    expunge_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    get_message_sync: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => MimeMessage
    get_quota_info_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => FolderQuotaInfo
    purge_message_cache_sync: (folder: Folder, start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    refresh_info_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    synchronize_sync: (folder: Folder, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    synchronize_message_sync: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    transfer_messages_to_sync: (source: Folder, message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    prepare_content_refresh: (folder: Folder) => void
    reserved_methods: object[]
    changed: (folder: Folder, changes: FolderChangeInfo) => void
    deleted: (folder: Folder) => void
    renamed: (folder: Folder, old_name: string) => void
    reserved_signals: object[]
    static name: string
}
export class FolderInfo {
    /* Fields of Camel-1.2.Camel.FolderInfo */
    next: object
    parent: object
    child: object
    full_name: string
    display_name: string
    flags: FolderInfoFlags
    unread: number
    total: number
    /* Methods of Camel-1.2.Camel.FolderInfo */
    clone(): FolderInfo
    free(): void
    static name: string
    static new(): FolderInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FolderInfo
    static build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
}
export class FolderPrivate {
    static name: string
}
export class FolderQuotaInfo {
    /* Fields of Camel-1.2.Camel.FolderQuotaInfo */
    name: string
    used: number
    total: number
    next: object
    /* Methods of Camel-1.2.Camel.FolderQuotaInfo */
    clone(): FolderQuotaInfo
    free(): void
    static name: string
    static new(name: string, used: number, total: number): FolderQuotaInfo
    constructor(name: string, used: number, total: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, used: number, total: number): FolderQuotaInfo
}
export abstract class FolderSearchClass {
    /* Fields of Camel-1.2.Camel.FolderSearchClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class FolderSearchPrivate {
    static name: string
}
export abstract class FolderSummaryClass {
    /* Fields of Camel-1.2.Camel.FolderSummaryClass */
    parent_class: GObject.ObjectClass
    message_info_type: GObject.Type
    collate: string
    sort_by: string
    summary_header_load: (summary: FolderSummary, fir?: object | null) => boolean
    summary_header_save: (summary: FolderSummary) => object | null
    message_info_new_from_headers: (summary: FolderSummary, headers: NameValueArray) => MessageInfo
    message_info_new_from_parser: (summary: FolderSummary, parser: MimeParser) => MessageInfo
    message_info_new_from_message: (summary: FolderSummary, message: MimeMessage) => MessageInfo
    message_info_from_uid: (summary: FolderSummary, uid: string) => MessageInfo | null
    next_uid_string: (summary: FolderSummary) => string
    prepare_fetch_all: (summary: FolderSummary) => void
    reserved: object[]
    static name: string
}
export class FolderSummaryPrivate {
    static name: string
}
export class FolderThread {
    /* Fields of Camel-1.2.Camel.FolderThread */
    refcount: number
    subject: number
    tree: object
    node_chunks: MemChunk
    folder: Folder
    summary: object[]
    /* Methods of Camel-1.2.Camel.FolderThread */
    apply(uids: string[]): void
    ref(): FolderThread
    unref(): void
    static name: string
    static new(folder: Folder, uids: string[], thread_subject: boolean): FolderThread
    constructor(folder: Folder, uids: string[], thread_subject: boolean)
    /* Static methods and pseudo-constructors */
    static new(folder: Folder, uids: string[], thread_subject: boolean): FolderThread
}
export class FolderThreadNode {
    /* Fields of Camel-1.2.Camel.FolderThreadNode */
    next: object
    parent: object
    child: object
    message: MessageInfo
    root_subject: string
    order: number
    re: number
    static name: string
}
export abstract class GpgContextClass {
    /* Fields of Camel-1.2.Camel.GpgContextClass */
    parent_class: CipherContextClass
    reserved: object[]
    static name: string
}
export class GpgContextPrivate {
    static name: string
}
export abstract class HTMLParserClass {
    /* Fields of Camel-1.2.Camel.HTMLParserClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class HTMLParserPrivate {
    static name: string
}
export class HeaderAddress {
    /* Fields of Camel-1.2.Camel.HeaderAddress */
    next: object
    type: HeaderAddressType
    name: string
    refcount: number
    /* Methods of Camel-1.2.Camel.HeaderAddress */
    add_member(member: HeaderAddress): void
    ref(): HeaderAddress
    set_addr(addr: string): void
    set_members(group: HeaderAddress[]): void
    set_name(name: string): void
    unref(): void
    static name: string
    static new(): HeaderAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): HeaderAddress
    static new_group(name: string): HeaderAddress
    static new_name(name: string, addr: string): HeaderAddress
    static decode(in_: string, charset: string): HeaderAddress
    static fold(in_: string, headerlen: number): string
    static list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
    static list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
    static list_clear(addrlistp: HeaderAddress[]): void
    static list_encode(addrlist: HeaderAddress[]): string
    static list_format(addrlist: HeaderAddress[]): string
}
export class HeaderParam {
    /* Fields of Camel-1.2.Camel.HeaderParam */
    next: object
    name: string
    value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static list_decode(in_?: string | null): object | null
    static list_format(params?: object | null): string
    static list_format_append(out: GLib.String, params?: object | null): void
    static list_free(params?: object | null): void
}
export abstract class IndexClass {
    /* Fields of Camel-1.2.Camel.IndexClass */
    parent_class: GObject.ObjectClass
    sync: (index: Index) => number
    compress: (index: Index) => number
    delete_: (index: Index) => number
    rename: (index: Index, path: string) => number
    has_name: (index: Index, name: string) => number
    add_name: (index: Index, name: string) => IndexName | null
    write_name: (index: Index, idn: IndexName) => number
    find_name: (index: Index, name: string) => IndexCursor | null
    delete_name: (index: Index, name: string) => void
    find: (index: Index, word: string) => IndexCursor | null
    words: (index: Index) => IndexCursor | null
    static name: string
}
export abstract class IndexCursorClass {
    /* Fields of Camel-1.2.Camel.IndexCursorClass */
    parent: GObject.ObjectClass
    next: (idc: IndexCursor) => string
    reserved: object[]
    static name: string
}
export class IndexCursorPrivate {
    static name: string
}
export abstract class IndexNameClass {
    /* Fields of Camel-1.2.Camel.IndexNameClass */
    parent: GObject.ObjectClass
    add_word: (name: IndexName, word: string) => void
    add_buffer: (name: IndexName, buffer: string, len: number) => number
    static name: string
}
export class IndexNamePrivate {
    static name: string
}
export class IndexPrivate {
    static name: string
}
export abstract class InternetAddressClass {
    /* Fields of Camel-1.2.Camel.InternetAddressClass */
    parent_class: AddressClass
    reserved: object[]
    static name: string
}
export class InternetAddressPrivate {
    static name: string
}
export abstract class JunkFilterInterface {
    /* Fields of Camel-1.2.Camel.JunkFilterInterface */
    parent_interface: GObject.TypeInterface
    classify: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => JunkStatus
    learn_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    learn_not_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    synchronize: (junk_filter: JunkFilter, cancellable?: Gio.Cancellable | null) => boolean
    reserved: object[]
    static name: string
}
export class KeyBlock {
    /* Fields of Camel-1.2.Camel.KeyBlock */
    next: _block_t
    used: number
    static name: string
}
export abstract class KeyFileClass {
    /* Fields of Camel-1.2.Camel.KeyFileClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class KeyFilePrivate {
    static name: string
}
export class KeyRootBlock {
    /* Fields of Camel-1.2.Camel.KeyRootBlock */
    first: _block_t
    last: _block_t
    free: _key_t
    static name: string
}
export abstract class KeyTableClass {
    /* Fields of Camel-1.2.Camel.KeyTableClass */
    parent: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class KeyTablePrivate {
    static name: string
}
export abstract class LocalSettingsClass {
    static name: string
}
export class LocalSettingsPrivate {
    static name: string
}
export class MIRecord {
    /* Fields of Camel-1.2.Camel.MIRecord */
    uid: string
    flags: number
    msg_type: number
    dirty: number
    read: boolean
    deleted: boolean
    replied: boolean
    important: boolean
    junk: boolean
    attachment: boolean
    size: number
    dsent: number
    dreceived: number
    subject: string
    from: string
    to: string
    cc: string
    mlist: string
    followup_flag: string
    followup_completed_on: string
    followup_due_by: string
    part: string
    labels: string
    usertags: string
    cinfo: string
    bdata: string
    userheaders: string
    preview: string
    static name: string
}
export abstract class MediumClass {
    /* Fields of Camel-1.2.Camel.MediumClass */
    parent_class: DataWrapperClass
    add_header: (medium: Medium, name: string, value: string) => void
    set_header: (medium: Medium, name: string, value?: string | null) => void
    remove_header: (medium: Medium, name: string) => void
    get_header: (medium: Medium, name: string) => string | null
    dup_headers: (medium: Medium) => NameValueArray
    get_headers: (medium: Medium) => NameValueArray
    get_content: (medium: Medium) => DataWrapper | null
    set_content: (medium: Medium, content?: DataWrapper | null) => void
    reserved: object[]
    static name: string
}
export class MediumPrivate {
    static name: string
}
export class MemChunk {
    static name: string
}
export class MemPool {
    static name: string
}
export class MessageContentInfo {
    /* Fields of Camel-1.2.Camel.MessageContentInfo */
    next: MessageContentInfo
    childs: MessageContentInfo
    parent: MessageContentInfo
    type: ContentType
    disposition: ContentDisposition
    id: string
    description: string
    encoding: string
    size: number
    /* Methods of Camel-1.2.Camel.MessageContentInfo */
    copy(): MessageContentInfo
    dump(depth: number): void
    free(): void
    traverse(func: MessageContentInfoTraverseCallback): boolean
    static name: string
    static new(): MessageContentInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageContentInfo
    static new_from_headers(headers: NameValueArray): MessageContentInfo
    static new_from_message(mime_part: MimePart): MessageContentInfo
    static new_from_parser(parser: MimeParser): MessageContentInfo
}
export abstract class MessageInfoBaseClass {
    /* Fields of Camel-1.2.Camel.MessageInfoBaseClass */
    parent_class: MessageInfoClass
    reserved: object[]
    static name: string
}
export class MessageInfoBasePrivate {
    static name: string
}
export abstract class MessageInfoClass {
    /* Fields of Camel-1.2.Camel.MessageInfoClass */
    parent_class: GObject.ObjectClass
    clone: (mi: MessageInfo, assign_summary?: FolderSummary | null) => MessageInfo
    load: (mi: MessageInfo, record: MIRecord | null, bdata_ptr: string) => boolean
    save: (mi: MessageInfo, record: MIRecord | null, bdata_str: GLib.String) => boolean
    get_flags: (mi: MessageInfo) => number
    set_flags: (mi: MessageInfo, mask: number, set: number) => boolean
    get_user_flag: (mi: MessageInfo, name: string) => boolean
    set_user_flag: (mi: MessageInfo, name: string, state: boolean) => boolean
    get_user_flags: (mi: MessageInfo) => NamedFlags | null
    dup_user_flags: (mi: MessageInfo) => NamedFlags
    take_user_flags: (mi: MessageInfo, user_flags?: NamedFlags | null) => boolean
    get_user_tag: (mi: MessageInfo, name: string) => string | null
    set_user_tag: (mi: MessageInfo, name: string, value?: string | null) => boolean
    get_user_tags: (mi: MessageInfo) => NameValueArray | null
    dup_user_tags: (mi: MessageInfo) => NameValueArray | null
    take_user_tags: (mi: MessageInfo, user_tags?: NameValueArray | null) => boolean
    get_subject: (mi: MessageInfo) => string
    set_subject: (mi: MessageInfo, subject?: string | null) => boolean
    get_from: (mi: MessageInfo) => string
    set_from: (mi: MessageInfo, from?: string | null) => boolean
    get_to: (mi: MessageInfo) => string
    set_to: (mi: MessageInfo, to?: string | null) => boolean
    get_cc: (mi: MessageInfo) => string
    set_cc: (mi: MessageInfo, cc?: string | null) => boolean
    get_mlist: (mi: MessageInfo) => string
    set_mlist: (mi: MessageInfo, mlist?: string | null) => boolean
    get_size: (mi: MessageInfo) => number
    set_size: (mi: MessageInfo, size: number) => boolean
    get_date_sent: (mi: MessageInfo) => number
    set_date_sent: (mi: MessageInfo, date_sent: number) => boolean
    get_date_received: (mi: MessageInfo) => number
    set_date_received: (mi: MessageInfo, date_received: number) => boolean
    get_message_id: (mi: MessageInfo) => number
    set_message_id: (mi: MessageInfo, message_id: number) => boolean
    get_references: (mi: MessageInfo) => number[] | null
    take_references: (mi: MessageInfo, references?: number[] | null) => boolean
    get_headers: (mi: MessageInfo) => NameValueArray | null
    take_headers: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    get_user_header: (mi: MessageInfo, name: string) => string | null
    set_user_header: (mi: MessageInfo, name: string, value?: string | null) => boolean
    get_user_headers: (mi: MessageInfo) => NameValueArray | null
    take_user_headers: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    get_preview: (mi: MessageInfo) => string | null
    set_preview: (mi: MessageInfo, preview?: string | null) => boolean
    reserved: object[]
    static name: string
}
export class MessageInfoPrivate {
    static name: string
}
export abstract class MimeFilterBasicClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBasicClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterBasicPrivate {
    static name: string
}
export abstract class MimeFilterBestencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBestencClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterBestencPrivate {
    static name: string
}
export abstract class MimeFilterCRLFClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCRLFClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterCRLFPrivate {
    static name: string
}
export abstract class MimeFilterCanonClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCanonClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterCanonPrivate {
    static name: string
}
export abstract class MimeFilterCharsetClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCharsetClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterCharsetPrivate {
    static name: string
}
export abstract class MimeFilterClass {
    /* Fields of Camel-1.2.Camel.MimeFilterClass */
    parent_class: GObject.ObjectClass
    filter: (filter: MimeFilter, in_: Uint8Array[], prespace: number) => [ /* out */ Uint8Array[], /* outprespace */ number ]
    complete: (filter: MimeFilter, in_: Uint8Array[], prespace: number) => [ /* out */ Uint8Array[], /* outprespace */ number ]
    reset: (filter: MimeFilter) => void
    reserved: object[]
    static name: string
}
export abstract class MimeFilterEnrichedClass {
    /* Fields of Camel-1.2.Camel.MimeFilterEnrichedClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterEnrichedPrivate {
    static name: string
}
export abstract class MimeFilterFromClass {
    /* Fields of Camel-1.2.Camel.MimeFilterFromClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterFromPrivate {
    static name: string
}
export abstract class MimeFilterGZipClass {
    /* Fields of Camel-1.2.Camel.MimeFilterGZipClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterGZipPrivate {
    static name: string
}
export abstract class MimeFilterHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterHTMLClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterHTMLPrivate {
    static name: string
}
export abstract class MimeFilterIndexClass {
    /* Fields of Camel-1.2.Camel.MimeFilterIndexClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterIndexPrivate {
    static name: string
}
export abstract class MimeFilterLinewrapClass {
    /* Fields of Camel-1.2.Camel.MimeFilterLinewrapClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterLinewrapPrivate {
    static name: string
}
export abstract class MimeFilterPgpClass {
    /* Fields of Camel-1.2.Camel.MimeFilterPgpClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterPgpPrivate {
    static name: string
}
export class MimeFilterPrivate {
    static name: string
}
export abstract class MimeFilterProgressClass {
    /* Fields of Camel-1.2.Camel.MimeFilterProgressClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterProgressPrivate {
    static name: string
}
export abstract class MimeFilterToHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterToHTMLClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterToHTMLPrivate {
    static name: string
}
export abstract class MimeFilterWindowsClass {
    /* Fields of Camel-1.2.Camel.MimeFilterWindowsClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterWindowsPrivate {
    static name: string
}
export abstract class MimeFilterYencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterYencClass */
    parent_class: MimeFilterClass
    reserved: object[]
    static name: string
}
export class MimeFilterYencPrivate {
    static name: string
}
export abstract class MimeMessageClass {
    /* Fields of Camel-1.2.Camel.MimeMessageClass */
    parent_class: MimePartClass
    reserved: object[]
    static name: string
}
export class MimeMessagePrivate {
    static name: string
}
export abstract class MimeParserClass {
    /* Fields of Camel-1.2.Camel.MimeParserClass */
    parent_class: GObject.ObjectClass
    message: (parser: MimeParser, headers?: object | null) => void
    part: (parser: MimeParser) => void
    content: (parser: MimeParser) => void
    reserved: object[]
    static name: string
}
export class MimeParserPrivate {
    static name: string
}
export abstract class MimePartClass {
    /* Fields of Camel-1.2.Camel.MimePartClass */
    parent_class: MediumClass
    construct_from_parser_sync: (mime_part: MimePart, parser: MimeParser, cancellable?: Gio.Cancellable | null) => boolean
    reserved: object[]
    static name: string
}
export class MimePartPrivate {
    static name: string
}
export class Msg {
    /* Fields of Camel-1.2.Camel.Msg */
    reply_port: MsgPort
    static name: string
}
export class MsgPort {
    static name: string
}
export abstract class MultipartClass {
    /* Fields of Camel-1.2.Camel.MultipartClass */
    parent_class: DataWrapperClass
    add_part: (multipart: Multipart, part: MimePart) => void
    get_part: (multipart: Multipart, index: number) => MimePart
    get_number: (multipart: Multipart) => number
    get_boundary: (multipart: Multipart) => string
    set_boundary: (multipart: Multipart, boundary?: string | null) => void
    construct_from_parser: (multipart: Multipart, parser: MimeParser) => number
    reserved: object[]
    static name: string
}
export abstract class MultipartEncryptedClass {
    /* Fields of Camel-1.2.Camel.MultipartEncryptedClass */
    parent_class: MultipartClass
    reserved: object[]
    static name: string
}
export class MultipartEncryptedPrivate {
    static name: string
}
export class MultipartPrivate {
    static name: string
}
export abstract class MultipartSignedClass {
    /* Fields of Camel-1.2.Camel.MultipartSignedClass */
    parent_class: MultipartClass
    reserved: object[]
    static name: string
}
export class MultipartSignedPrivate {
    static name: string
}
export abstract class NNTPAddressClass {
    /* Fields of Camel-1.2.Camel.NNTPAddressClass */
    parent_class: AddressClass
    reserved: object[]
    static name: string
}
export class NNTPAddressPrivate {
    static name: string
}
export class NameValueArray {
    /* Methods of Camel-1.2.Camel.NameValueArray */
    append(name: string, value: string): void
    clear(): void
    copy(): NameValueArray
    equal(array_b: NameValueArray | null, compare_type: CompareType): boolean
    free(): void
    get(index: number): [ /* returnType */ boolean, /* out_name */ string | null, /* out_value */ string | null ]
    get_length(): number
    get_name(index: number): string | null
    get_named(compare_type: CompareType, name: string): string | null
    get_value(index: number): string | null
    remove(index: number): boolean
    remove_named(compare_type: CompareType, name: string, all_occurrences: boolean): number
    set(index: number, name: string, value: string): boolean
    set_name(index: number, name: string): boolean
    set_named(compare_type: CompareType, name: string, value: string): boolean
    set_value(index: number, value: string): boolean
    static name: string
    static new(): NameValueArray
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NameValueArray
    static new_sized(reserve_size: number): NameValueArray
}
export class NamedFlags {
    /* Methods of Camel-1.2.Camel.NamedFlags */
    clear(): void
    contains(name: string): boolean
    copy(): NamedFlags
    equal(named_flags_b?: NamedFlags | null): boolean
    free(): void
    get(index: number): string | null
    get_length(): number
    insert(name: string): boolean
    remove(name: string): boolean
    static name: string
    static new(): NamedFlags
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NamedFlags
    static new_sized(reserve_size: number): NamedFlags
}
export abstract class NetworkServiceInterface {
    /* Fields of Camel-1.2.Camel.NetworkServiceInterface */
    parent_interface: GObject.TypeInterface
    get_service_name: (service: NetworkService, method: NetworkSecurityMethod) => string
    get_default_port: (service: NetworkService, method: NetworkSecurityMethod) => number
    connect_sync: (service: NetworkService, cancellable?: Gio.Cancellable | null) => Gio.IOStream
    reserved: object[]
    static name: string
}
export abstract class NetworkSettingsInterface {
    /* Fields of Camel-1.2.Camel.NetworkSettingsInterface */
    parent_interface: GObject.TypeInterface
    reserved: object[]
    static name: string
}
export abstract class NullOutputStreamClass {
    /* Fields of Camel-1.2.Camel.NullOutputStreamClass */
    parent_class: Gio.OutputStreamClass
    reserved: object[]
    static name: string
}
export class NullOutputStreamPrivate {
    static name: string
}
export class ObjectBag {
    /* Methods of Camel-1.2.Camel.ObjectBag */
    abort(key?: object | null): void
    add(key?: object | null, object?: object | null): void
    destroy(): void
    get(key?: object | null): object | null
    list(): GObject.Object[]
    peek(key?: object | null): object | null
    rekey(object?: object | null, new_key?: object | null): void
    remove(object?: object | null): void
    reserve(key?: object | null): object | null
    static name: string
}
export abstract class ObjectClass {
    /* Fields of Camel-1.2.Camel.ObjectClass */
    parent_class: GObject.ObjectClass
    state_read: (object: Object, fp?: object | null) => number
    state_write: (object: Object, fp?: object | null) => number
    reserved: object[]
    static name: string
}
export class ObjectPrivate {
    static name: string
}
export abstract class OfflineFolderClass {
    /* Fields of Camel-1.2.Camel.OfflineFolderClass */
    parent_class: FolderClass
    downsync_sync: (folder: OfflineFolder, expression: string, cancellable?: Gio.Cancellable | null) => boolean
    reserved: object[]
    static name: string
}
export class OfflineFolderPrivate {
    static name: string
}
export abstract class OfflineSettingsClass {
    /* Fields of Camel-1.2.Camel.OfflineSettingsClass */
    parent_class: StoreSettingsClass
    reserved: object[]
    static name: string
}
export class OfflineSettingsPrivate {
    static name: string
}
export abstract class OfflineStoreClass {
    /* Fields of Camel-1.2.Camel.OfflineStoreClass */
    parent_class: StoreClass
    dup_downsync_folders: (store: OfflineStore) => Folder[]
    reserved: object[]
    static name: string
}
export class OfflineStorePrivate {
    static name: string
}
export abstract class OperationClass {
    /* Fields of Camel-1.2.Camel.OperationClass */
    parent_class: Gio.CancellableClass
    status: (operation: Operation, what: string, pc: number) => void
    reserved: object[]
    static name: string
}
export class OperationPrivate {
    static name: string
}
export class PartitionKey {
    /* Fields of Camel-1.2.Camel.PartitionKey */
    hashid: _hash_t
    keyid: _key_t
    static name: string
}
export class PartitionKeyBlock {
    /* Fields of Camel-1.2.Camel.PartitionKeyBlock */
    used: number
    keys: object[]
    static name: string
}
export class PartitionMap {
    /* Fields of Camel-1.2.Camel.PartitionMap */
    hashid: _hash_t
    blockid: _block_t
    static name: string
}
export class PartitionMapBlock {
    /* Fields of Camel-1.2.Camel.PartitionMapBlock */
    next: _block_t
    used: number
    partition: object[]
    static name: string
}
export abstract class PartitionTableClass {
    /* Fields of Camel-1.2.Camel.PartitionTableClass */
    parent: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class PartitionTablePrivate {
    static name: string
}
export class Provider {
    /* Fields of Camel-1.2.Camel.Provider */
    protocol: string
    name: string
    description: string
    domain: string
    flags: ProviderFlags
    url_flags: ProviderURLFlags
    extra_conf: ProviderConfEntry
    port_entries: ProviderPortEntry
    auto_detect: ProviderAutoDetectFunc
    object_types: GObject.Type[]
    authtypes: object[]
    url_hash: GLib.HashFunc
    url_equal: GLib.EqualFunc
    translation_domain: string
    priv: object
    /* Methods of Camel-1.2.Camel.Provider */
    register(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get(protocol: string): Provider
    static init(): void
    static list(load: boolean): Provider[]
    static load(path: string): boolean
}
export class ProviderConfEntry {
    /* Fields of Camel-1.2.Camel.ProviderConfEntry */
    type: ProviderConfType
    name: string
    depname: string
    text: string
    value: string
    static name: string
}
export class ProviderModule {
    /* Fields of Camel-1.2.Camel.ProviderModule */
    path: string
    types: object[]
    loaded: number
    static name: string
    /* Static methods and pseudo-constructors */
    static init(): void
}
export class ProviderPortEntry {
    /* Fields of Camel-1.2.Camel.ProviderPortEntry */
    port: number
    desc: string
    is_ssl: boolean
    static name: string
}
export abstract class SExpClass {
    /* Fields of Camel-1.2.Camel.SExpClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class SExpPrivate {
    static name: string
}
export class SExpResult {
    /* Fields of Camel-1.2.Camel.SExpResult */
    type: SExpResultType
    time_generator: boolean
    occuring_start: number
    occuring_end: number
    static name: string
}
export class SExpSymbol {
    /* Fields of Camel-1.2.Camel.SExpSymbol */
    type: number
    name: string
    data: object
    static name: string
}
export class SExpTerm {
    /* Fields of Camel-1.2.Camel.SExpTerm */
    type: SExpTermType
    static name: string
}
export abstract class SMIMEContextClass {
    /* Fields of Camel-1.2.Camel.SMIMEContextClass */
    parent_class: CipherContextClass
    reserved: object[]
    static name: string
}
export class SMIMEContextPrivate {
    static name: string
}
export abstract class SaslAnonymousClass {
    /* Fields of Camel-1.2.Camel.SaslAnonymousClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslAnonymousPrivate {
    static name: string
}
export abstract class SaslClass {
    /* Fields of Camel-1.2.Camel.SaslClass */
    parent_class: GObject.ObjectClass
    auth_type: ServiceAuthType
    try_empty_password_sync: (sasl: Sasl, cancellable?: Gio.Cancellable | null) => boolean
    challenge_sync: (sasl: Sasl, token: Uint8Array[], cancellable?: Gio.Cancellable | null) => Uint8Array[]
    reserved: object[]
    static name: string
}
export abstract class SaslCramMd5Class {
    /* Fields of Camel-1.2.Camel.SaslCramMd5Class */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslCramMd5Private {
    static name: string
}
export abstract class SaslDigestMd5Class {
    /* Fields of Camel-1.2.Camel.SaslDigestMd5Class */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslDigestMd5Private {
    static name: string
}
export abstract class SaslGssapiClass {
    /* Fields of Camel-1.2.Camel.SaslGssapiClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslGssapiPrivate {
    static name: string
}
export abstract class SaslLoginClass {
    /* Fields of Camel-1.2.Camel.SaslLoginClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslLoginPrivate {
    static name: string
}
export abstract class SaslNTLMClass {
    /* Fields of Camel-1.2.Camel.SaslNTLMClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslNTLMPrivate {
    static name: string
}
export abstract class SaslPOPB4SMTPClass {
    /* Fields of Camel-1.2.Camel.SaslPOPB4SMTPClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslPOPB4SMTPPrivate {
    static name: string
}
export abstract class SaslPlainClass {
    /* Fields of Camel-1.2.Camel.SaslPlainClass */
    parent_class: SaslClass
    reserved: object[]
    static name: string
}
export class SaslPlainPrivate {
    static name: string
}
export class SaslPrivate {
    static name: string
}
export abstract class SaslXOAuth2Class {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2Class */
    parent_class: SaslClass
    static name: string
}
export abstract class SaslXOAuth2GoogleClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2GoogleClass */
    parent_class: SaslXOAuth2Class
    static name: string
}
export class SaslXOAuth2GooglePrivate {
    static name: string
}
export abstract class SaslXOAuth2OutlookClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2OutlookClass */
    parent_class: SaslXOAuth2Class
    static name: string
}
export class SaslXOAuth2OutlookPrivate {
    static name: string
}
export class SaslXOAuth2Private {
    static name: string
}
export abstract class SaslXOAuth2YahooClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2YahooClass */
    parent_class: SaslXOAuth2Class
    static name: string
}
export class SaslXOAuth2YahooPrivate {
    static name: string
}
export class ServiceAuthType {
    /* Fields of Camel-1.2.Camel.ServiceAuthType */
    name: string
    description: string
    authproto: string
    need_password: boolean
    /* Methods of Camel-1.2.Camel.ServiceAuthType */
    copy(): ServiceAuthType
    free(): void
    static name: string
}
export abstract class ServiceClass {
    /* Fields of Camel-1.2.Camel.ServiceClass */
    parent_class: ObjectClass
    settings_type: GObject.Type
    get_name: (service: Service, brief: boolean) => string
    connect_sync: (service: Service, cancellable?: Gio.Cancellable | null) => boolean
    disconnect_sync: (service: Service, clean: boolean, cancellable?: Gio.Cancellable | null) => boolean
    authenticate_sync: (service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => AuthenticationResult
    query_auth_types_sync: (service: Service, cancellable?: Gio.Cancellable | null) => ServiceAuthType[]
    reserved: object[]
    static name: string
}
export class ServicePrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Camel-1.2.Camel.SessionClass */
    parent_class: GObject.ObjectClass
    add_service: (session: Session, uid: string, protocol: string, type: ProviderType) => Service
    remove_service: (session: Session, service: Service) => void
    get_password: (session: Session, service: Service, prompt: string, item: string, flags: number) => string
    forget_password: (session: Session, service: Service, item: string) => boolean
    trust_prompt: (session: Session, service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => CertTrust
    get_filter_driver: (session: Session, type: string, for_folder?: Folder | null) => FilterDriver
    lookup_addressbook: (session: Session, name: string) => boolean
    authenticate_sync: (session: Session, service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => boolean
    forward_to_sync: (session: Session, folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null) => boolean
    get_oauth2_access_token_sync: (session: Session, service: Service, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_recipient_certificates_sync: (session: Session, flags: number, recipients: string[], cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_certificates */ string[] ]
    addressbook_contains_sync: (session: Session, book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null) => boolean
    reserved_methods: object[]
    job_started: (session: Session, cancellable?: Gio.Cancellable | null) => void
    job_finished: (session: Session, cancellable: Gio.Cancellable | null, error: GLib.Error) => void
    user_alert: (session: Session, service: Service, type: SessionAlertType, message: string) => void
    reserved_signals: object[]
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class SettingsClass {
    /* Fields of Camel-1.2.Camel.SettingsClass */
    parent_class: GObject.ObjectClass
    clone: (settings: Settings) => Settings
    equal: (settings_a: Settings, settings_b: Settings) => boolean
    reserved: object[]
    /* Methods of Camel-1.2.Camel.SettingsClass */
    list_settings(settings_class: Settings | Function | GObject.Type, n_settings: number): GObject.ParamSpec
    static name: string
}
export class SettingsPrivate {
    static name: string
}
export abstract class StoreClass {
    /* Fields of Camel-1.2.Camel.StoreClass */
    parent_class: ServiceClass
    hash_folder_name: GLib.HashFunc
    equal_folder_name: GLib.EqualFunc
    can_refresh_folder: (store: Store, info: FolderInfo) => boolean
    get_folder_sync: (store: Store, folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null) => Folder | null
    get_folder_info_sync: (store: Store, top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    get_inbox_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    get_junk_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    get_trash_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    create_folder_sync: (store: Store, parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    delete_folder_sync: (store: Store, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    rename_folder_sync: (store: Store, old_name: string, new_name: string, cancellable?: Gio.Cancellable | null) => boolean
    synchronize_sync: (store: Store, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    initial_setup_sync: (store: Store, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    get_can_auto_save_changes: (store: Store) => boolean
    reserved_methods: object[]
    folder_created: (store: Store, folder_info: FolderInfo) => void
    folder_deleted: (store: Store, folder_info: FolderInfo) => void
    folder_opened: (store: Store, folder: Folder) => void
    folder_renamed: (store: Store, old_name: string, folder_info: FolderInfo) => void
    folder_info_stale: (store: Store) => void
    reserved_signals: object[]
    static name: string
}
export class StoreInfo {
    /* Fields of Camel-1.2.Camel.StoreInfo */
    refcount: number
    path: string
    flags: number
    unread: number
    total: number
    /* Static methods and pseudo-constructors */
    static name(summary: StoreSummary, info: StoreInfo): string
    static path(summary: StoreSummary, info: StoreInfo): string
    static set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
}
export class StorePrivate {
    static name: string
}
export abstract class StoreSettingsClass {
    /* Fields of Camel-1.2.Camel.StoreSettingsClass */
    parent_class: SettingsClass
    reserved: object[]
    static name: string
}
export class StoreSettingsPrivate {
    static name: string
}
export abstract class StoreSummaryClass {
    /* Fields of Camel-1.2.Camel.StoreSummaryClass */
    parent_class: GObject.ObjectClass
    store_info_size: number
    summary_header_load: (summary: StoreSummary, file?: object | null) => number
    summary_header_save: (summary: StoreSummary, file?: object | null) => number
    store_info_save: (summary: StoreSummary, file: object | null, info: StoreInfo) => number
    store_info_free: (summary: StoreSummary, info: StoreInfo) => void
    store_info_set_string: (summary: StoreSummary, info: StoreInfo, type: number, value: string) => void
    reserved: object[]
    static name: string
}
export class StoreSummaryPrivate {
    static name: string
}
export abstract class StreamBufferClass {
    /* Fields of Camel-1.2.Camel.StreamBufferClass */
    parent_class: StreamClass
    init: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode) => void
    init_vbuf: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode, buf: string, size: number) => void
    reserved: object[]
    static name: string
}
export class StreamBufferPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of Camel-1.2.Camel.StreamClass */
    parent_class: GObject.ObjectClass
    read: (stream: Stream, buffer: number[], cancellable?: Gio.Cancellable | null) => number
    write: (stream: Stream, buffer: number[], cancellable?: Gio.Cancellable | null) => number
    close: (stream: Stream, cancellable?: Gio.Cancellable | null) => number
    flush: (stream: Stream, cancellable?: Gio.Cancellable | null) => number
    eos: (stream: Stream) => boolean
    reserved: object[]
    static name: string
}
export abstract class StreamFilterClass {
    /* Fields of Camel-1.2.Camel.StreamFilterClass */
    parent_class: StreamClass
    reserved: object[]
    static name: string
}
export class StreamFilterPrivate {
    static name: string
}
export abstract class StreamFsClass {
    /* Fields of Camel-1.2.Camel.StreamFsClass */
    parent_class: StreamClass
    reserved: object[]
    static name: string
}
export class StreamFsPrivate {
    static name: string
}
export abstract class StreamMemClass {
    /* Fields of Camel-1.2.Camel.StreamMemClass */
    parent_class: StreamClass
    reserved: object[]
    static name: string
}
export class StreamMemPrivate {
    static name: string
}
export abstract class StreamNullClass {
    /* Fields of Camel-1.2.Camel.StreamNullClass */
    parent_class: StreamClass
    reserved: object[]
    static name: string
}
export class StreamNullPrivate {
    static name: string
}
export class StreamPrivate {
    static name: string
}
export abstract class StreamProcessClass {
    /* Fields of Camel-1.2.Camel.StreamProcessClass */
    parent_class: StreamClass
    reserved: object[]
    static name: string
}
export class StreamProcessPrivate {
    static name: string
}
export abstract class SubscribableInterface {
    /* Fields of Camel-1.2.Camel.SubscribableInterface */
    parent_interface: GObject.TypeInterface
    folder_is_subscribed: (subscribable: Subscribable, folder_name: string) => boolean
    subscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    unsubscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    reserved_methods: object[]
    folder_subscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    folder_unsubscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    reserved_signals: object[]
    static name: string
}
export class SummaryMessageID {
    static name: string
}
export abstract class TextIndexClass {
    /* Fields of Camel-1.2.Camel.TextIndexClass */
    parent_class: IndexClass
    reserved: object[]
    static name: string
}
export abstract class TextIndexCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexCursorClass */
    parent_class: IndexCursorClass
    reserved: object[]
    static name: string
}
export class TextIndexCursorPrivate {
    static name: string
}
export abstract class TextIndexKeyCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexKeyCursorClass */
    parent_class: IndexCursorClass
    reserved: object[]
    static name: string
}
export class TextIndexKeyCursorPrivate {
    static name: string
}
export abstract class TextIndexNameClass {
    /* Fields of Camel-1.2.Camel.TextIndexNameClass */
    parent_class: IndexNameClass
    reserved: object[]
    static name: string
}
export class TextIndexNamePrivate {
    static name: string
}
export class TextIndexPrivate {
    static name: string
}
export abstract class TransportClass {
    /* Fields of Camel-1.2.Camel.TransportClass */
    parent_class: ServiceClass
    send_to_sync: (transport: Transport, message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    reserved: object[]
    static name: string
}
export class TransportPrivate {
    static name: string
}
export class Trie {
    static name: string
}
export class UIDCache {
    /* Fields of Camel-1.2.Camel.UIDCache */
    filename: string
    uids: GLib.HashTable
    level: number
    expired: number
    size: number
    fd: number
    /* Methods of Camel-1.2.Camel.UIDCache */
    destroy(): void
    get_new_uids(uids: string[]): string[]
    save(): boolean
    save_uid(uid: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static free_uids(uids: string[]): void
}
export class URL {
    /* Fields of Camel-1.2.Camel.URL */
    protocol: string
    user: string
    authmech: string
    host: string
    port: number
    path: string
    params: GLib.Data
    query: string
    fragment: string
    /* Methods of Camel-1.2.Camel.URL */
    copy(): URL
    equal(u2: URL): boolean
    free(): void
    get_param(name: string): string
    hash(): number
    new_with_base(url_string: string): URL
    set_authmech(authmech: string): void
    set_fragment(fragment: string): void
    set_host(host: string): void
    set_param(name: string, value: string): void
    set_path(path: string): void
    set_port(port: number): void
    set_protocol(protocol: string): void
    set_query(query: string): void
    set_user(user: string): void
    to_string(flags: URLFlags): string
    static name: string
    static new(url_string: string): URL
    constructor(url_string: string)
    /* Static methods and pseudo-constructors */
    static new(url_string: string): URL
    static addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static decode(part: string): void
    static decode_path(path: string): string
    static encode(part: string, escape_extra: string): string
    static file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
export class UrlMatch {
    /* Fields of Camel-1.2.Camel.UrlMatch */
    pattern: string
    prefix: string
    um_so: number
    um_eo: number
    static name: string
}
export class UrlPattern {
    /* Fields of Camel-1.2.Camel.UrlPattern */
    pattern: string
    prefix: string
    start: UrlScanFunc
    end: UrlScanFunc
    static name: string
}
export class UrlScanner {
    static name: string
}
export abstract class VTrashFolderClass {
    /* Fields of Camel-1.2.Camel.VTrashFolderClass */
    parent_class: VeeFolderClass
    reserved: object[]
    static name: string
}
export class VTrashFolderPrivate {
    static name: string
}
export abstract class VeeDataCacheClass {
    /* Fields of Camel-1.2.Camel.VeeDataCacheClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class VeeDataCachePrivate {
    static name: string
}
export abstract class VeeFolderClass {
    /* Fields of Camel-1.2.Camel.VeeFolderClass */
    parent_class: FolderClass
    add_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    remove_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    rebuild_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    set_expression: (vfolder: VeeFolder, expression: string) => void
    folder_changed: (vfolder: VeeFolder, subfolder: Folder, changes: FolderChangeInfo) => void
    reserved: object[]
    static name: string
}
export class VeeFolderPrivate {
    static name: string
}
export abstract class VeeMessageInfoClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoClass */
    parent_class: MessageInfoClass
    reserved: object[]
    static name: string
}
export abstract class VeeMessageInfoDataClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoDataClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class VeeMessageInfoDataPrivate {
    static name: string
}
export class VeeMessageInfoPrivate {
    static name: string
}
export abstract class VeeStoreClass {
    /* Fields of Camel-1.2.Camel.VeeStoreClass */
    parent_class: StoreClass
    reserved: object[]
    static name: string
}
export class VeeStorePrivate {
    static name: string
}
export abstract class VeeSubfolderDataClass {
    /* Fields of Camel-1.2.Camel.VeeSubfolderDataClass */
    parent_class: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class VeeSubfolderDataPrivate {
    static name: string
}
export abstract class VeeSummaryClass {
    /* Fields of Camel-1.2.Camel.VeeSummaryClass */
    parent_class: FolderSummaryClass
    reserved: object[]
    static name: string
}
export class VeeSummaryPrivate {
    static name: string
}
export class WeakRefGroup {
    /* Methods of Camel-1.2.Camel.WeakRefGroup */
    get(): object | null
    ref(): WeakRefGroup
    set(object?: object | null): void
    unref(): void
    static name: string
    static new(): WeakRefGroup
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): WeakRefGroup
}
export class _KeyKey {
    /* Fields of Camel-1.2.Camel._KeyKey */
    data: _block_t
    offset: number
    flags: number
    static name: string
}
export class _LockHelperMsg {
    /* Fields of Camel-1.2.Camel._LockHelperMsg */
    magic: number
    seq: number
    id: number
    data: number
    static name: string
}
export class __search_word {
    /* Fields of Camel-1.2.Camel.__search_word */
    type: _search_word_t
    word: string
    static name: string
}
export class __search_words {
    /* Fields of Camel-1.2.Camel.__search_words */
    len: number
    type: _search_word_t
    words: object
    static name: string
}
export class _encrypt {
    /* Fields of Camel-1.2.Camel._encrypt */
    status: CipherValidityEncrypt
    description: string
    encrypters: GLib.Queue
    static name: string
}
export class _sign {
    /* Fields of Camel-1.2.Camel._sign */
    status: CipherValiditySign
    description: string
    signers: GLib.Queue
    static name: string
}
export type _block_t = number
export type _hash_t = number
export type _key_t = number