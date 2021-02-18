/**
 * GMime-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AddressType {
    SENDER,
    FROM,
    REPLY_TO,
    TO,
    CC,
    BCC,
}
export enum AutocryptPreferEncrypt {
    NONE,
    MUTUAL,
}
export enum CipherAlgo {
    DEFAULT,
    IDEA,
    /* 3DES (invalid, starts with a number) */
    CAST5,
    BLOWFISH,
    AES,
    AES192,
    AES256,
    TWOFISH,
    CAMELLIA128,
    CAMELLIA192,
    CAMELLIA256,
}
export enum ContentEncoding {
    DEFAULT,
    /* 7BIT (invalid, starts with a number) */
    /* 8BIT (invalid, starts with a number) */
    BINARY,
    BASE64,
    QUOTEDPRINTABLE,
    UUENCODE,
}
export enum DigestAlgo {
    DEFAULT,
    MD5,
    SHA1,
    RIPEMD160,
    MD2,
    TIGER192,
    HAVAL5160,
    SHA256,
    SHA384,
    SHA512,
    SHA224,
    MD4,
    CRC32,
    CRC32_RFC1510,
    CRC32_RFC2440,
}
export enum EncodingConstraint {
    /* 7BIT (invalid, starts with a number) */
    /* 8BIT (invalid, starts with a number) */
    BINARY,
}
export enum EncryptFlags {
    NONE,
    ALWAYS_TRUST,
    NO_COMPRESS,
    SYMMETRIC,
    THROW_KEYIDS,
}
export enum FilterFromMode {
    DEFAULT,
    ESCAPE,
    ARMOR,
}
export enum FilterGZipMode {
    ZIP,
    UNZIP,
}
export enum Format {
    MESSAGE,
    MBOX,
    MMDF,
}
export enum NewLineFormat {
    UNIX,
    DOS,
}
export enum OpenPGPData {
    NONE,
    ENCRYPTED,
    SIGNED,
    PUBLIC_KEY,
    PRIVATE_KEY,
}
export enum ParamEncodingMethod {
    DEFAULT,
    RFC2231,
    RFC2047,
}
export enum ParserWarning {
    WARN_DUPLICATED_HEADER,
    WARN_DUPLICATED_PARAMETER,
    WARN_UNENCODED_8BIT_HEADER,
    WARN_INVALID_CONTENT_TYPE,
    WARN_INVALID_RFC2047_HEADER_VALUE,
    WARN_MALFORMED_MULTIPART,
    WARN_TRUNCATED_MESSAGE,
    WARN_MALFORMED_MESSAGE,
    CRIT_INVALID_HEADER_NAME,
    CRIT_CONFLICTING_HEADER,
    CRIT_CONFLICTING_PARAMETER,
    CRIT_MULTIPART_WITHOUT_BOUNDARY,
    WARN_INVALID_PARAMETER,
    WARN_INVALID_ADDRESS_LIST,
    CRIT_NESTING_OVERFLOW,
    WARN_PART_WITHOUT_CONTENT,
    CRIT_PART_WITHOUT_HEADERS_OR_CONTENT,
}
export enum PubKeyAlgo {
    DEFAULT,
    RSA,
    RSA_E,
    RSA_S,
    ELG_E,
    DSA,
    ECC,
    ELG,
    ECDSA,
    ECDH,
    EDDSA,
}
export enum RfcComplianceMode {
    LOOSE,
    STRICT,
}
export enum SecureMimeType {
    COMPRESSED_DATA,
    ENVELOPED_DATA,
    SIGNED_DATA,
    CERTS_ONLY,
    UNKNOWN,
}
export enum SeekWhence {
    SET,
    CUR,
    END,
}
export enum SignatureStatus {
    VALID,
    GREEN,
    RED,
    KEY_REVOKED,
    KEY_EXPIRED,
    SIG_EXPIRED,
    KEY_MISSING,
    CRL_MISSING,
    CRL_TOO_OLD,
    BAD_POLICY,
    SYS_ERROR,
    TOFU_CONFLICT,
}
export enum StreamBufferMode {
    READ,
    WRITE,
}
export enum Trust {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
export enum Validity {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
export enum DecryptFlags {
    NONE,
    EXPORT_SESSION_KEY,
    NO_VERIFY,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
export enum FilterBestFlags {
    CHARSET,
    ENCODING,
}
export enum OpenPGPState {
    NONE,
    BEGIN_PGP_MESSAGE,
    END_PGP_MESSAGE,
    BEGIN_PGP_SIGNED_MESSAGE,
    BEGIN_PGP_SIGNATURE,
    END_PGP_SIGNATURE,
    BEGIN_PGP_PUBLIC_KEY_BLOCK,
    END_PGP_PUBLIC_KEY_BLOCK,
    BEGIN_PGP_PRIVATE_KEY_BLOCK,
    END_PGP_PRIVATE_KEY_BLOCK,
}
export enum VerifyFlags {
    NONE,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
export const BINARY_AGE: number
export const DISPOSITION_ATTACHMENT: string
export const DISPOSITION_INLINE: string
export const FILTER_ENRICHED_IS_RICHTEXT: number
export const FILTER_HTML_BLOCKQUOTE_CITATION: number
export const FILTER_HTML_CITE: number
export const FILTER_HTML_CONVERT_ADDRESSES: number
export const FILTER_HTML_CONVERT_NL: number
export const FILTER_HTML_CONVERT_SPACES: number
export const FILTER_HTML_CONVERT_URLS: number
export const FILTER_HTML_ESCAPE_8BIT: number
export const FILTER_HTML_MARK_CITATION: number
export const FILTER_HTML_PRE: number
export const INTERFACE_AGE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const SIGNATURE_STATUS_ERROR_MASK: number
export const UUDECODE_STATE_BEGIN: number
export const UUDECODE_STATE_END: number
export const UUDECODE_STATE_INIT: number
export const UUDECODE_STATE_MASK: number
export const YDECODE_STATE_BEGIN: number
export const YDECODE_STATE_DECODE: number
export const YDECODE_STATE_END: number
export const YDECODE_STATE_EOLN: number
export const YDECODE_STATE_ESCAPE: number
export const YDECODE_STATE_INIT: number
export const YDECODE_STATE_PART: number
export const YENCODE_CRC_INIT: number
export const YENCODE_STATE_INIT: number
export function charset_best(inbuf: string, inlen: number): string | null
export function charset_canon_name(charset: string): string
export function charset_iconv_name(charset: string): string
export function charset_iso_to_windows(isocharset: string): string
export function charset_language(charset: string): string | null
export function charset_locale_name(): string
export function charset_map_init(): void
export function charset_map_shutdown(): void
export function charset_name(charset: string): string
export function check_version(major: number, minor: number, micro: number): boolean
export function content_encoding_from_string(str: string): ContentEncoding
export function content_encoding_to_string(encoding: ContentEncoding): string
export function encoding_base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
export function encoding_uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
export function encoding_uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
export function format_options_get_default(): FormatOptions
export function iconv_locale_to_utf8(str: string): string
export function iconv_locale_to_utf8_length(str: string, n: number): string
export function iconv_utf8_to_locale(str: string): string
export function iconv_utf8_to_locale_length(str: string, n: number): string
export function init(): void
export function locale_charset(): string
export function locale_language(): string | null
export function parser_options_get_default(): ParserOptions
export function references_parse(options: ParserOptions | null, text: string): References
export function shutdown(): void
export function utils_best_encoding(text: Uint8Array[]): ContentEncoding
export function utils_decode_8bit(options: ParserOptions | null, text: Uint8Array[]): string
export function utils_decode_message_id(message_id: string): string
export function utils_generate_message_id(fqdn: string): string
export function utils_header_decode_date(str: string): GLib.DateTime | null
export function utils_header_decode_phrase(options: ParserOptions | null, phrase: string): string
export function utils_header_decode_text(options: ParserOptions | null, text: string): string
export function utils_header_encode_phrase(options: FormatOptions | null, phrase: string, charset?: string | null): string
export function utils_header_encode_text(options: FormatOptions | null, text: string, charset?: string | null): string
export function utils_header_format_date(date: GLib.DateTime): string
export function utils_header_unfold(value: string): string
export function utils_quote_string(str: string): string
export function utils_structured_header_fold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
export function utils_text_is_8bit(text: Uint8Array[]): boolean
export function utils_unquote_string(str: string): void
export function utils_unstructured_header_fold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
export function ydecode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export function yencode_close(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export function yencode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
export interface HeaderRawValueFormatter {
    (header: Header, options: FormatOptions, value: string, charset: string): string
}
export interface ObjectForeachFunc {
    (parent: Object, part: Object): void
}
export interface ParserHeaderRegexFunc {
    (parser: Parser, header: string, value: string, offset: number): void
}
export interface ParserWarningFunc {
    (offset: number, errcode: ParserWarning, item: string): void
}
export interface PasswordRequestFunc {
    (ctx: CryptoContext, user_id: string, prompt: string, reprompt: boolean, response: Stream): boolean
}
export interface ApplicationPkcs7Mime_ConstructProps extends Part_ConstructProps {
}
export class ApplicationPkcs7Mime {
    /* Fields of GMime.ApplicationPkcs7Mime */
    parent_object: Part
    smime_type: SecureMimeType
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    content_description: string
    content_location: string
    content_md5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.ApplicationPkcs7Mime */
    decrypt(flags: DecryptFlags, session_key: string, result: DecryptResult): Object | null
    get_smime_type(): SecureMimeType
    verify(flags: VerifyFlags): [ /* returnType */ SignatureList | null, /* entity */ Object ]
    /* Methods of GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationPkcs7Mime_ConstructProps)
    _init (config?: ApplicationPkcs7Mime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SecureMimeType): ApplicationPkcs7Mime
    static new(): ApplicationPkcs7Mime
    static new(options: ParserOptions | null, content_type: ContentType): ApplicationPkcs7Mime
    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null
    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null
    static $gtype: GObject.Type
}
export interface AutocryptHeader_ConstructProps extends GObject.Object_ConstructProps {
}
export class AutocryptHeader {
    /* Fields of GMime.AutocryptHeader */
    parent_object: GObject.Object
    address: InternetAddressMailbox
    prefer_encrypt: AutocryptPreferEncrypt
    keydata: GLib.Bytes
    effective_date: GLib.DateTime
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.AutocryptHeader */
    clone(src: AutocryptHeader): void
    compare(ah2: AutocryptHeader): number
    get_address(): InternetAddressMailbox
    get_address_as_string(): string
    get_effective_date(): GLib.DateTime
    get_keydata(): GLib.Bytes
    get_prefer_encrypt(): AutocryptPreferEncrypt
    is_complete(): boolean
    set_address(address: InternetAddressMailbox): void
    set_address_from_string(address: string): void
    set_effective_date(effective_date: GLib.DateTime): void
    set_keydata(data: GLib.Bytes): void
    set_prefer_encrypt(pref: AutocryptPreferEncrypt): void
    to_string(gossip: boolean): string
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutocryptHeader_ConstructProps)
    _init (config?: AutocryptHeader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AutocryptHeader
    static new_from_string(string: string): AutocryptHeader
    static $gtype: GObject.Type
}
export interface AutocryptHeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
export class AutocryptHeaderList {
    /* Fields of GMime.AutocryptHeaderList */
    parent_object: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.AutocryptHeaderList */
    add(header: AutocryptHeader): void
    add_missing_addresses(addresses: InternetAddressList): number
    get_count(): number
    get_header_at(index: number): AutocryptHeader
    get_header_for_address(mailbox: InternetAddressMailbox): AutocryptHeader
    remove_incomplete(): void
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutocryptHeaderList_ConstructProps)
    _init (config?: AutocryptHeaderList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AutocryptHeaderList
    static $gtype: GObject.Type
}
export interface Certificate_ConstructProps extends GObject.Object_ConstructProps {
}
export class Certificate {
    /* Fields of GMime.Certificate */
    parent_object: GObject.Object
    pubkey_algo: PubKeyAlgo
    digest_algo: DigestAlgo
    trust: Trust
    issuer_serial: string
    issuer_name: string
    fingerprint: string
    created: number
    expires: number
    keyid: string
    email: string
    name: string
    user_id: string
    id_validity: Validity
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Certificate */
    get_created(): number
    get_created64(): number
    get_digest_algo(): DigestAlgo
    get_email(): string
    get_expires(): number
    get_expires64(): number
    get_fingerprint(): string
    get_id_validity(): Validity
    get_issuer_name(): string
    get_issuer_serial(): string
    get_key_id(): string
    get_name(): string
    get_pubkey_algo(): PubKeyAlgo
    get_trust(): Trust
    get_user_id(): string
    set_created(created: number): void
    set_digest_algo(algo: DigestAlgo): void
    set_email(email: string): void
    set_expires(expires: number): void
    set_fingerprint(fingerprint: string): void
    set_id_validity(validity: Validity): void
    set_issuer_name(issuer_name: string): void
    set_issuer_serial(issuer_serial: string): void
    set_key_id(key_id: string): void
    set_name(name: string): void
    set_pubkey_algo(algo: PubKeyAlgo): void
    set_trust(trust: Trust): void
    set_user_id(user_id: string): void
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
    connect(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Certificate_ConstructProps)
    _init (config?: Certificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Certificate
    static $gtype: GObject.Type
}
export interface CertificateList_ConstructProps extends GObject.Object_ConstructProps {
}
export class CertificateList {
    /* Fields of GMime.CertificateList */
    parent_object: GObject.Object
    array: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.CertificateList */
    add(cert: Certificate): number
    clear(): void
    contains(cert: Certificate): boolean
    get_certificate(index: number): Certificate
    index_of(cert: Certificate): number
    insert(index: number, cert: Certificate): void
    length(): number
    remove(cert: Certificate): boolean
    remove_at(index: number): boolean
    set_certificate(index: number, cert: Certificate): void
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
    connect(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertificateList_ConstructProps)
    _init (config?: CertificateList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertificateList
    static $gtype: GObject.Type
}
export interface ContentDisposition_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentDisposition {
    /* Fields of GMime.ContentDisposition */
    parent_object: GObject.Object
    disposition: string
    params: ParamList
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.ContentDisposition */
    encode(options?: FormatOptions | null): string
    get_disposition(): string
    get_parameter(name: string): string
    get_parameters(): ParamList
    is_attachment(): boolean
    set_disposition(value: string): void
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentDisposition_ConstructProps)
    _init (config?: ContentDisposition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentDisposition
    static parse(options: ParserOptions | null, str: string): ContentDisposition
    static $gtype: GObject.Type
}
export interface ContentType_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentType {
    /* Fields of GMime.ContentType */
    parent_object: GObject.Object
    type: string
    subtype: string
    params: ParamList
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.ContentType */
    encode(options?: FormatOptions | null): string
    get_media_subtype(): string
    get_media_type(): string
    get_mime_type(): string
    get_parameter(name: string): string
    get_parameters(): ParamList
    is_type(type: string, subtype: string): boolean
    set_media_subtype(subtype: string): void
    set_media_type(type: string): void
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentType_ConstructProps)
    _init (config?: ContentType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: string, subtype: string): ContentType
    static parse(options: ParserOptions | null, str: string): ContentType
    static $gtype: GObject.Type
}
export interface CryptoContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class CryptoContext {
    /* Fields of GMime.CryptoContext */
    parent_object: GObject.Object
    request_passwd: PasswordRequestFunc
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CryptoContext_ConstructProps)
    _init (config?: CryptoContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(protocol: string): CryptoContext
    static $gtype: GObject.Type
}
export interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataWrapper {
    /* Fields of GMime.DataWrapper */
    parent_object: GObject.Object
    encoding: ContentEncoding
    stream: Stream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.DataWrapper */
    get_encoding(): ContentEncoding
    get_stream(): Stream
    set_encoding(encoding: ContentEncoding): void
    set_stream(stream: Stream): void
    write_to_stream(stream: Stream): number
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
    /* Virtual methods of GMime.DataWrapper */
    vfunc_write_to_stream(stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper
    static $gtype: GObject.Type
}
export interface DecryptResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class DecryptResult {
    /* Fields of GMime.DecryptResult */
    parent_object: GObject.Object
    recipients: CertificateList
    signatures: SignatureList
    cipher: CipherAlgo
    mdc: DigestAlgo
    session_key: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.DecryptResult */
    get_cipher(): CipherAlgo
    get_mdc(): DigestAlgo
    get_recipients(): CertificateList
    get_session_key(): string | null
    get_signatures(): SignatureList | null
    set_cipher(cipher: CipherAlgo): void
    set_mdc(mdc: DigestAlgo): void
    set_recipients(recipients: CertificateList): void
    set_session_key(session_key?: string | null): void
    set_signatures(signatures: SignatureList): void
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
    connect(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecryptResult_ConstructProps)
    _init (config?: DecryptResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DecryptResult
    static $gtype: GObject.Type
}
export interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
export class Filter {
    /* Fields of GMime.Filter */
    parent_object: GObject.Object
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterBasic_ConstructProps extends Filter_ConstructProps {
}
export class FilterBasic {
    /* Fields of GMime.FilterBasic */
    parent_object: Filter
    encoder: Encoding
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterBasic_ConstructProps)
    _init (config?: FilterBasic_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(encoding: ContentEncoding, encode: boolean): FilterBasic
    static $gtype: GObject.Type
}
export interface FilterBest_ConstructProps extends Filter_ConstructProps {
}
export class FilterBest {
    /* Fields of GMime.FilterBest */
    parent_object: Filter
    flags: FilterBestFlags
    charset: Charset
    count0: number
    count8: number
    total: number
    maxline: number
    linelen: number
    frombuf: Uint8Array[]
    fromlen: number
    hadfrom: number
    startline: number
    midline: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterBest */
    encoding(constraint: EncodingConstraint): ContentEncoding
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterBest_ConstructProps)
    _init (config?: FilterBest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: FilterBestFlags): FilterBest
    static $gtype: GObject.Type
}
export interface FilterCharset_ConstructProps extends Filter_ConstructProps {
}
export class FilterCharset {
    /* Fields of GMime.FilterCharset */
    parent_object: Filter
    from_charset: string
    to_charset: string
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterCharset_ConstructProps)
    _init (config?: FilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(from_charset: string, to_charset: string): FilterCharset
    static $gtype: GObject.Type
}
export interface FilterChecksum_ConstructProps extends Filter_ConstructProps {
}
export class FilterChecksum {
    /* Fields of GMime.FilterChecksum */
    parent_object: Filter
    checksum: GLib.Checksum
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterChecksum */
    get_digest(digest: number, len: number): number
    get_string(): string
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterChecksum_ConstructProps)
    _init (config?: FilterChecksum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GLib.ChecksumType): FilterChecksum
    static $gtype: GObject.Type
}
export interface FilterDos2Unix_ConstructProps extends Filter_ConstructProps {
}
export class FilterDos2Unix {
    /* Fields of GMime.FilterDos2Unix */
    parent_object: Filter
    ensure_newline: boolean
    pc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterDos2Unix_ConstructProps)
    _init (config?: FilterDos2Unix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensure_newline: boolean): FilterDos2Unix
    static $gtype: GObject.Type
}
export interface FilterEnriched_ConstructProps extends Filter_ConstructProps {
}
export class FilterEnriched {
    /* Fields of GMime.FilterEnriched */
    parent_object: Filter
    flags: number
    nofill: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterEnriched_ConstructProps)
    _init (config?: FilterEnriched_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number): FilterEnriched
    static $gtype: GObject.Type
}
export interface FilterFrom_ConstructProps extends Filter_ConstructProps {
}
export class FilterFrom {
    /* Fields of GMime.FilterFrom */
    parent_object: Filter
    mode: FilterFromMode
    midline: boolean
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterFrom_ConstructProps)
    _init (config?: FilterFrom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: FilterFromMode): FilterFrom
    static $gtype: GObject.Type
}
export interface FilterGZip_ConstructProps extends Filter_ConstructProps {
}
export class FilterGZip {
    /* Fields of GMime.FilterGZip */
    parent_object: Filter
    priv: object
    mode: FilterGZipMode
    level: number
    /* Fields of GMime.Filter */
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterGZip */
    get_comment(): string
    get_filename(): string
    set_comment(comment: string): void
    set_filename(filename: string): void
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterGZip_ConstructProps)
    _init (config?: FilterGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: FilterGZipMode, level: number): FilterGZip
    static $gtype: GObject.Type
}
export interface FilterHTML_ConstructProps extends Filter_ConstructProps {
}
export class FilterHTML {
    /* Fields of GMime.FilterHTML */
    parent_object: Filter
    scanner: object
    flags: number
    colour: number
    column: number
    pre_open: number
    citation_depth: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterHTML_ConstructProps)
    _init (config?: FilterHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number, colour: number): FilterHTML
    static $gtype: GObject.Type
}
export interface FilterOpenPGP_ConstructProps extends Filter_ConstructProps {
}
export class FilterOpenPGP {
    /* Fields of GMime.FilterOpenPGP */
    parent_object: Filter
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterOpenPGP */
    get_begin_offset(): number
    get_data_type(): OpenPGPData
    get_end_offset(): number
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOpenPGP_ConstructProps)
    _init (config?: FilterOpenPGP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterOpenPGP
    static $gtype: GObject.Type
}
export interface FilterSmtpData_ConstructProps extends Filter_ConstructProps {
}
export class FilterSmtpData {
    /* Fields of GMime.FilterSmtpData */
    parent_object: Filter
    bol: boolean
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterSmtpData_ConstructProps)
    _init (config?: FilterSmtpData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterSmtpData
    static $gtype: GObject.Type
}
export interface FilterStrip_ConstructProps extends Filter_ConstructProps {
}
export class FilterStrip {
    /* Fields of GMime.FilterStrip */
    parent_object: Filter
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterStrip_ConstructProps)
    _init (config?: FilterStrip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterStrip
    static $gtype: GObject.Type
}
export interface FilterUnix2Dos_ConstructProps extends Filter_ConstructProps {
}
export class FilterUnix2Dos {
    /* Fields of GMime.FilterUnix2Dos */
    parent_object: Filter
    ensure_newline: boolean
    pc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterUnix2Dos_ConstructProps)
    _init (config?: FilterUnix2Dos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensure_newline: boolean): FilterUnix2Dos
    static $gtype: GObject.Type
}
export interface FilterWindows_ConstructProps extends Filter_ConstructProps {
}
export class FilterWindows {
    /* Fields of GMime.FilterWindows */
    parent_object: Filter
    is_windows: boolean
    claimed_charset: string
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterWindows */
    is_windows_charset(): boolean
    real_charset(): string
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterWindows_ConstructProps)
    _init (config?: FilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimed_charset: string): FilterWindows
    static $gtype: GObject.Type
}
export interface FilterYenc_ConstructProps extends Filter_ConstructProps {
}
export class FilterYenc {
    /* Fields of GMime.FilterYenc */
    parent_object: Filter
    encode: boolean
    part: number
    state: number
    pcrc: number
    crc: number
    /* Fields of GMime.Filter */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.FilterYenc */
    get_crc(): number
    get_pcrc(): number
    set_crc(crc: number): void
    set_state(state: number): void
    /* Methods of GMime.Filter */
    backup(data: Uint8Array[]): void
    complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime.Filter */
    vfunc_complete(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array[], prespace: number): [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterYenc_ConstructProps)
    _init (config?: FilterYenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(encode: boolean): FilterYenc
    static $gtype: GObject.Type
}
export interface GpgContext_ConstructProps extends CryptoContext_ConstructProps {
}
export class GpgContext {
    /* Fields of GMime.CryptoContext */
    parent_object: GObject.Object
    request_passwd: PasswordRequestFunc
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgContext_ConstructProps)
    _init (config?: GpgContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GpgContext
    static new(protocol: string): GpgContext
    static $gtype: GObject.Type
}
export interface Header_ConstructProps extends GObject.Object_ConstructProps {
}
export class Header {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Header */
    format_addrlist(options: FormatOptions | null, value: string, charset: string): string
    format_content_disposition(options: FormatOptions | null, value: string, charset: string): string
    format_content_type(options: FormatOptions | null, value: string, charset: string): string
    format_default(options: FormatOptions | null, value: string, charset: string): string
    format_message_id(options: FormatOptions | null, value: string, charset: string): string
    format_received(options: FormatOptions | null, value: string, charset: string): string
    format_references(options: FormatOptions | null, value: string, charset: string): string
    get_name(): string
    get_offset(): number
    get_raw_name(): string
    get_raw_value(): string
    get_value(): string
    set_raw_value(raw_value: string): void
    set_value(options: FormatOptions | null, value: string, charset: string): void
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Header_ConstructProps)
    _init (config?: Header_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
export class HeaderList {
    /* Fields of GMime.HeaderList */
    parent_object: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.HeaderList */
    append(name: string, value: string, charset: string): void
    clear(): void
    contains(name: string): boolean
    get_count(): number
    get_header(name: string): Header
    get_header_at(index: number): Header
    prepend(name: string, value: string, charset: string): void
    remove(name: string): boolean
    remove_at(index: number): void
    set(name: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HeaderList_ConstructProps)
    _init (config?: HeaderList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options?: ParserOptions | null): HeaderList
    static $gtype: GObject.Type
}
export interface InternetAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export class InternetAddress {
    /* Fields of GMime.InternetAddress */
    parent_object: GObject.Object
    charset: string
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static $gtype: GObject.Type
}
export interface InternetAddressGroup_ConstructProps extends InternetAddress_ConstructProps {
}
export class InternetAddressGroup {
    /* Fields of GMime.InternetAddressGroup */
    parent_object: InternetAddress
    members: InternetAddressList
    /* Fields of GMime.InternetAddress */
    charset: string
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressGroup */
    add_member(member: InternetAddress): number
    get_members(): InternetAddressList
    set_members(members: InternetAddressList): void
    /* Methods of GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressGroup_ConstructProps)
    _init (config?: InternetAddressGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): InternetAddressGroup
    static $gtype: GObject.Type
}
export interface InternetAddressList_ConstructProps extends GObject.Object_ConstructProps {
}
export class InternetAddressList {
    /* Fields of GMime.InternetAddressList */
    parent_object: GObject.Object
    array: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressList */
    add(ia: InternetAddress): number
    append(append: InternetAddressList): void
    clear(): void
    contains(ia: InternetAddress): boolean
    encode(options: FormatOptions | null, str: GLib.String): void
    get_address(index: number): InternetAddress
    index_of(ia: InternetAddress): number
    insert(index: number, ia: InternetAddress): void
    length(): number
    prepend(prepend: InternetAddressList): void
    remove(ia: InternetAddress): boolean
    remove_at(index: number): boolean
    set_address(index: number, ia: InternetAddress): void
    to_string(options: FormatOptions | null, encode: boolean): string | null
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
    connect(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressList_ConstructProps)
    _init (config?: InternetAddressList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternetAddressList
    static parse(options: ParserOptions | null, str: string): InternetAddressList | null
    static $gtype: GObject.Type
}
export interface InternetAddressMailbox_ConstructProps extends InternetAddress_ConstructProps {
}
export class InternetAddressMailbox {
    /* Fields of GMime.InternetAddressMailbox */
    parent_object: InternetAddress
    idn_addr: string
    addr: string
    at: number
    /* Fields of GMime.InternetAddress */
    charset: string
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.InternetAddressMailbox */
    get_addr(): string
    get_idn_addr(): string
    set_addr(addr: string): void
    /* Methods of GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressMailbox_ConstructProps)
    _init (config?: InternetAddressMailbox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, addr: string): InternetAddressMailbox
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends Object_ConstructProps {
}
export class Message {
    /* Fields of GMime.Message */
    parent_object: Object
    addrlists: InternetAddressList
    mime_part: Object
    message_id: string
    date: GLib.DateTime
    subject: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Message */
    add_mailbox(type: AddressType, name: string, addr: string): void
    foreach(callback: ObjectForeachFunc): void
    get_addresses(type: AddressType): InternetAddressList
    get_all_recipients(): InternetAddressList
    get_autocrypt_gossip_headers(now: GLib.DateTime, flags: DecryptFlags, session_key: string): AutocryptHeaderList | null
    get_autocrypt_gossip_headers_from_inner_part(now: GLib.DateTime, inner_part: Object): AutocryptHeaderList | null
    get_autocrypt_header(now: GLib.DateTime): AutocryptHeader | null
    get_bcc(): InternetAddressList
    get_body(): Object | null
    get_cc(): InternetAddressList
    get_date(): GLib.DateTime | null
    get_from(): InternetAddressList
    get_message_id(): string | null
    get_mime_part(): Object | null
    get_reply_to(): InternetAddressList
    get_sender(): InternetAddressList
    get_subject(): string | null
    get_to(): InternetAddressList
    partial_split_message(max_size: number): [ /* returnType */ Message | null, /* nparts */ number ]
    set_date(date: GLib.DateTime): void
    set_message_id(message_id: string): void
    set_mime_part(mime_part: Object): void
    set_subject(subject: string, charset: string): void
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pretty_headers: boolean): Message
    static new(options: ParserOptions | null, content_type: ContentType): Message
    static $gtype: GObject.Type
}
export interface MessagePart_ConstructProps extends Object_ConstructProps {
}
export class MessagePart {
    /* Fields of GMime.MessagePart */
    parent_object: Object
    message: Message
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.MessagePart */
    get_message(): Message
    set_message(message: Message): void
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessagePart_ConstructProps)
    _init (config?: MessagePart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subtype: string): MessagePart
    static new(options: ParserOptions | null, content_type: ContentType): MessagePart
    static new_with_message(subtype: string, message: Message): MessagePart
    static $gtype: GObject.Type
}
export interface MessagePartial_ConstructProps extends Part_ConstructProps {
}
export class MessagePartial {
    /* Fields of GMime.MessagePartial */
    parent_object: Part
    number: number
    total: number
    id: string
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    content_description: string
    content_location: string
    content_md5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.MessagePartial */
    get_id(): string
    get_number(): number
    get_total(): number
    /* Methods of GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessagePartial_ConstructProps)
    _init (config?: MessagePartial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, number: number, total: number): MessagePartial
    static new(): MessagePartial
    static new(options: ParserOptions | null, content_type: ContentType): MessagePartial
    static reconstruct_message(partials: MessagePartial, num: number): Message
    static $gtype: GObject.Type
}
export interface Multipart_ConstructProps extends Object_ConstructProps {
}
export class Multipart {
    /* Fields of GMime.Multipart */
    parent_object: Object
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static new(options: ParserOptions | null, content_type: ContentType): Multipart
    static new_with_subtype(subtype: string): Multipart
    static $gtype: GObject.Type
}
export interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartEncrypted {
    /* Fields of GMime.MultipartEncrypted */
    parent_object: Multipart
    /* Fields of GMime.Multipart */
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.MultipartEncrypted */
    decrypt(flags: DecryptFlags, session_key: string): [ /* returnType */ Object | null, /* result */ DecryptResult ]
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static new(options: ParserOptions | null, content_type: ContentType): MultipartEncrypted
    static encrypt(ctx: CryptoContext, entity: Object, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): MultipartEncrypted | null
    static $gtype: GObject.Type
}
export interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
export class MultipartSigned {
    /* Fields of GMime.MultipartSigned */
    parent_object: Multipart
    /* Fields of GMime.Multipart */
    children: object[]
    boundary: string
    prologue: string
    epilogue: string
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.MultipartSigned */
    verify(flags: VerifyFlags): SignatureList | null
    /* Methods of GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    static new(options: ParserOptions | null, content_type: ContentType): MultipartSigned
    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
export class Object {
    /* Fields of GMime.Object */
    parent_object: GObject.Object
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options: ParserOptions | null, content_type: ContentType): Object
    static new_type(options: ParserOptions | null, type: string, subtype: string): Object
    static register_type(type: string, subtype: string, object_type: GObject.Type): void
    static type_registry_init(): void
    static type_registry_shutdown(): void
    static $gtype: GObject.Type
}
export interface Param_ConstructProps extends GObject.Object_ConstructProps {
}
export class Param {
    /* Fields of GMime.Param */
    parent_object: GObject.Object
    method: ParamEncodingMethod
    charset: string
    lang: string
    name: string
    value: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Param */
    get_charset(): string
    get_encoding_method(): ParamEncodingMethod
    get_lang(): string
    get_name(): string
    get_value(): string
    set_charset(charset: string): void
    set_encoding_method(method: ParamEncodingMethod): void
    set_lang(lang: string): void
    set_value(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Param_ConstructProps)
    _init (config?: Param_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ParamList_ConstructProps extends GObject.Object_ConstructProps {
}
export class ParamList {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.ParamList */
    clear(): void
    encode(options: FormatOptions, fold: boolean, str: GLib.String): void
    get_parameter(name: string): Param
    get_parameter_at(index: number): Param
    length(): number
    remove(name: string): boolean
    remove_at(index: number): boolean
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ParamList_ConstructProps)
    _init (config?: ParamList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ParamList
    static parse(options: ParserOptions, str: string): ParamList
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
export class Parser {
    /* Fields of GMime.Parser */
    parent_object: GObject.Object
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Parser */
    construct_message(options?: ParserOptions | null): Message | null
    construct_part(options?: ParserOptions | null): Object | null
    eos(): boolean
    get_format(): Format
    get_headers_begin(): number
    get_headers_end(): number
    get_mbox_marker(): string | null
    get_mbox_marker_offset(): number
    get_persist_stream(): boolean
    get_respect_content_length(): boolean
    init_with_stream(stream: Stream): void
    set_format(format: Format): void
    set_persist_stream(persist: boolean): void
    set_respect_content_length(respect_content_length: boolean): void
    tell(): number
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static new_with_stream(stream: Stream): Parser
    static $gtype: GObject.Type
}
export interface Part_ConstructProps extends Object_ConstructProps {
}
export class Part {
    /* Fields of GMime.Part */
    parent_object: Object
    encoding: ContentEncoding
    openpgp: OpenPGPData
    content_description: string
    content_location: string
    content_md5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Part_ConstructProps)
    _init (config?: Part_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Part
    static new(options: ParserOptions | null, content_type: ContentType): Part
    static new_with_type(type: string, subtype: string): Part
    static $gtype: GObject.Type
}
export interface Pkcs7Context_ConstructProps extends CryptoContext_ConstructProps {
}
export class Pkcs7Context {
    /* Fields of GMime.CryptoContext */
    parent_object: GObject.Object
    request_passwd: PasswordRequestFunc
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pkcs7Context_ConstructProps)
    _init (config?: Pkcs7Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pkcs7Context
    static new(protocol: string): Pkcs7Context
    static $gtype: GObject.Type
}
export interface Signature_ConstructProps extends GObject.Object_ConstructProps {
}
export class Signature {
    /* Fields of GMime.Signature */
    parent_object: GObject.Object
    status: SignatureStatus
    cert: Certificate
    created: number
    expires: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Signature */
    get_certificate(): Certificate
    get_created(): number
    get_created64(): number
    get_expires(): number
    get_expires64(): number
    get_status(): SignatureStatus
    set_certificate(cert: Certificate): void
    set_created(created: number): void
    set_expires(expires: number): void
    set_status(status: SignatureStatus): void
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
    connect(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Signature_ConstructProps)
    _init (config?: Signature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Signature
    static $gtype: GObject.Type
}
export interface SignatureList_ConstructProps extends GObject.Object_ConstructProps {
}
export class SignatureList {
    /* Fields of GMime.SignatureList */
    parent_object: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.SignatureList */
    add(sig: Signature): number
    clear(): void
    contains(sig: Signature): boolean
    get_signature(index: number): Signature
    index_of(sig: Signature): number
    insert(index: number, sig: Signature): void
    length(): number
    remove(sig: Signature): boolean
    remove_at(index: number): boolean
    set_signature(index: number, sig: Signature): void
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
    connect(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SignatureList_ConstructProps)
    _init (config?: SignatureList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignatureList
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends GObject.Object_ConstructProps {
}
export class Stream {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
export class StreamBuffer {
    /* Fields of GMime.StreamBuffer */
    parent_object: Stream
    mode: StreamBufferMode
    source: Stream
    buffer: string
    bufptr: string
    bufend: string
    buflen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Stream, mode: StreamBufferMode): StreamBuffer
    static $gtype: GObject.Type
}
export interface StreamCat_ConstructProps extends Stream_ConstructProps {
}
export class StreamCat {
    /* Fields of GMime.StreamCat */
    parent_object: Stream
    sources: object
    current: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamCat */
    add_source(source: Stream): number
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamCat_ConstructProps)
    _init (config?: StreamCat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamCat
    static $gtype: GObject.Type
}
export interface StreamFile_ConstructProps extends Stream_ConstructProps {
}
export class StreamFile {
    /* Fields of GMime.StreamFile */
    parent_object: Stream
    owner: boolean
    fp: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamFile */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFile_ConstructProps)
    _init (config?: StreamFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fp?: object | null): StreamFile
    static new_with_bounds(fp: object | null, start: number, end: number): StreamFile
    static open(path: string, mode: string): Stream
    static $gtype: GObject.Type
}
export interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
export class StreamFilter {
    /* Fields of GMime.StreamFilter */
    parent_object: Stream
    priv: object
    source: Stream
    owner: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamFilter */
    add(filter: Filter): number
    get_owner(): boolean
    remove(id: number): void
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Stream): StreamFilter
    static $gtype: GObject.Type
}
export interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
export class StreamFs {
    /* Fields of GMime.StreamFs */
    parent_object: Stream
    owner: boolean
    eos: boolean
    fd: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamFs */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number): StreamFs
    static new_with_bounds(fd: number, start: number, end: number): StreamFs
    static open(path: string, flags: number, mode: number): Stream
    static $gtype: GObject.Type
}
export interface StreamGIO_ConstructProps extends Stream_ConstructProps {
}
export class StreamGIO {
    /* Fields of GMime.StreamGIO */
    parent_object: Stream
    ostream: Gio.OutputStream
    istream: Gio.InputStream
    file: Gio.File
    owner: boolean
    eos: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamGIO */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamGIO_ConstructProps)
    _init (config?: StreamGIO_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): StreamGIO
    static new_with_bounds(file: Gio.File, start: number, end: number): StreamGIO
    static $gtype: GObject.Type
}
export interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
export class StreamMem {
    /* Fields of GMime.StreamMem */
    parent_object: Stream
    buffer: Uint8Array[]
    owner: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamMem */
    get_byte_array(): Uint8Array[]
    get_owner(): boolean
    set_byte_array(array: Uint8Array[]): void
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    static new_with_buffer(buffer: Uint8Array[]): StreamMem
    static new_with_byte_array(array: Uint8Array[]): StreamMem
    static $gtype: GObject.Type
}
export interface StreamMmap_ConstructProps extends Stream_ConstructProps {
}
export class StreamMmap {
    /* Fields of GMime.StreamMmap */
    parent_object: Stream
    owner: boolean
    eos: boolean
    fd: number
    map: string
    maplen: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamMmap */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMmap_ConstructProps)
    _init (config?: StreamMmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, prot: number, flags: number): StreamMmap
    static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap
    static $gtype: GObject.Type
}
export interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
export class StreamNull {
    /* Fields of GMime.StreamNull */
    parent_object: Stream
    written: number
    newlines: number
    count_newlines: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamNull */
    get_count_newlines(): boolean
    set_count_newlines(count: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamNull
    static $gtype: GObject.Type
}
export interface StreamPipe_ConstructProps extends Stream_ConstructProps {
}
export class StreamPipe {
    /* Fields of GMime.StreamPipe */
    parent_object: Stream
    owner: boolean
    eos: boolean
    fd: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.StreamPipe */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime.Stream */
    buffer_gets(buf: string, max: number): number
    buffer_readln(buffer: Uint8Array[]): void
    close(): number
    construct(start: number, end: number): void
    flush(): number
    length(): number
    read(buf: Uint8Array[]): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: string, len: number): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector, count: number): number
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
    /* Virtual methods of GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array[]): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: string, len: number): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamPipe_ConstructProps)
    _init (config?: StreamPipe_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number): StreamPipe
    static $gtype: GObject.Type
}
export interface TextPart_ConstructProps extends Part_ConstructProps {
}
export class TextPart {
    /* Fields of GMime.TextPart */
    parent_object: Part
    /* Fields of GMime.Part */
    encoding: ContentEncoding
    openpgp: OpenPGPData
    content_description: string
    content_location: string
    content_md5: string
    content: DataWrapper
    /* Fields of GMime.Object */
    disposition: ContentDisposition
    content_type: ContentType
    headers: HeaderList
    content_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GMime.TextPart */
    get_charset(): string
    get_text(): string
    set_charset(charset: string): void
    set_text(text: string): void
    /* Methods of GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextPart_ConstructProps)
    _init (config?: TextPart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextPart
    static new(options: ParserOptions | null, content_type: ContentType): TextPart
    static new_with_subtype(subtype: string): TextPart
    static $gtype: GObject.Type
}
export abstract class ApplicationPkcs7MimeClass {
    /* Fields of GMime.ApplicationPkcs7MimeClass */
    parent_class: PartClass
    static name: string
}
export abstract class AutocryptHeaderClass {
    /* Fields of GMime.AutocryptHeaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AutocryptHeaderListClass {
    /* Fields of GMime.AutocryptHeaderListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CertificateClass {
    /* Fields of GMime.CertificateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CertificateListClass {
    /* Fields of GMime.CertificateListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Charset {
    /* Fields of GMime.Charset */
    mask: number
    level: number
    /* Methods of GMime.Charset */
    best_name(): string | null
    can_encode(charset: string, text: string, len: number): boolean
    init(): void
    step(inbuf: string, inlen: number): void
    /* Static methods and pseudo-constructors */
    static best(inbuf: string, inlen: number): string | null
    static canon_name(charset: string): string
    static iconv_name(charset: string): string
    static iso_to_windows(isocharset: string): string
    static language(charset: string): string | null
    static locale_name(): string
    static map_init(): void
    static map_shutdown(): void
    static name(charset: string): string
}
export abstract class ContentDispositionClass {
    /* Fields of GMime.ContentDispositionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContentTypeClass {
    /* Fields of GMime.ContentTypeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CryptoContextClass {
    /* Fields of GMime.CryptoContextClass */
    parent_class: GObject.ObjectClass
    digest_id: (ctx: CryptoContext, name: string) => DigestAlgo
    digest_name: (ctx: CryptoContext, digest: DigestAlgo) => string | null
    get_signature_protocol: (ctx: CryptoContext) => string | null
    get_encryption_protocol: (ctx: CryptoContext) => string | null
    get_key_exchange_protocol: (ctx: CryptoContext) => string | null
    sign: (ctx: CryptoContext, detach: boolean, userid: string, istream: Stream, ostream: Stream) => number
    verify: (ctx: CryptoContext, flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null) => SignatureList | null
    encrypt: (ctx: CryptoContext, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream) => number
    decrypt: (ctx: CryptoContext, flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream) => DecryptResult
    import_keys: (ctx: CryptoContext, istream: Stream) => number
    export_keys: (ctx: CryptoContext, keys: string, ostream: Stream) => number
    static name: string
}
export abstract class DataWrapperClass {
    /* Fields of GMime.DataWrapperClass */
    parent_class: GObject.ObjectClass
    write_to_stream: (wrapper: DataWrapper, stream: Stream) => number
    static name: string
}
export abstract class DecryptResultClass {
    /* Fields of GMime.DecryptResultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Encoding {
    /* Fields of GMime.Encoding */
    encoding: ContentEncoding
    uubuf: Uint8Array[]
    encode: boolean
    save: number
    state: number
    /* Methods of GMime.Encoding */
    flush(inbuf: string, inlen: number, outbuf: string): number
    init_decode(encoding: ContentEncoding): void
    init_encode(encoding: ContentEncoding): void
    outlen(inlen: number): number
    reset(): void
    step(inbuf: string, inlen: number, outbuf: string): number
    static name: string
    /* Static methods and pseudo-constructors */
    static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
    static uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
}
export abstract class FilterBasicClass {
    /* Fields of GMime.FilterBasicClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterBestClass {
    /* Fields of GMime.FilterBestClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterCharsetClass {
    /* Fields of GMime.FilterCharsetClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterChecksumClass {
    /* Fields of GMime.FilterChecksumClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterClass {
    /* Fields of GMime.FilterClass */
    parent_class: GObject.ObjectClass
    copy: (filter: Filter) => Filter
    filter: (filter: Filter, inbuf: Uint8Array[], prespace: number) => [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    complete: (filter: Filter, inbuf: Uint8Array[], prespace: number) => [ /* outbuf */ Uint8Array[], /* outprespace */ number ]
    reset: (filter: Filter) => void
    static name: string
}
export abstract class FilterDos2UnixClass {
    /* Fields of GMime.FilterDos2UnixClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterEnrichedClass {
    /* Fields of GMime.FilterEnrichedClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterFromClass {
    /* Fields of GMime.FilterFromClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterGZipClass {
    /* Fields of GMime.FilterGZipClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterHTMLClass {
    /* Fields of GMime.FilterHTMLClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterOpenPGPClass {
    /* Fields of GMime.FilterOpenPGPClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterSmtpDataClass {
    /* Fields of GMime.FilterSmtpDataClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterStripClass {
    /* Fields of GMime.FilterStripClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterUnix2DosClass {
    /* Fields of GMime.FilterUnix2DosClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterWindowsClass {
    /* Fields of GMime.FilterWindowsClass */
    parent_class: FilterClass
    static name: string
}
export abstract class FilterYencClass {
    /* Fields of GMime.FilterYencClass */
    parent_class: FilterClass
    static name: string
}
export class FormatOptions {
    /* Methods of GMime.FormatOptions */
    add_hidden_header(header: string): void
    clear_hidden_headers(): void
    clone(): FormatOptions
    create_newline_filter(ensure_newline: boolean): Filter
    free(): void
    get_newline(): string
    get_newline_format(): NewLineFormat
    get_param_encoding_method(): ParamEncodingMethod
    is_hidden_header(header: string): boolean
    remove_hidden_header(header: string): void
    set_newline_format(newline: NewLineFormat): void
    set_param_encoding_method(method: ParamEncodingMethod): void
    static name: string
    static new(): FormatOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormatOptions
    static get_default(): FormatOptions
}
export abstract class GpgContextClass {
    static name: string
}
export abstract class HeaderClass {
    /* Fields of GMime.HeaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class HeaderListClass {
    /* Fields of GMime.HeaderListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InternetAddressClass {
    /* Fields of GMime.InternetAddressClass */
    parent_class: GObject.ObjectClass
    to_string: (ia: InternetAddress, options: FormatOptions, flags: number, linelen: number, str: GLib.String) => void
    static name: string
}
export abstract class InternetAddressGroupClass {
    /* Fields of GMime.InternetAddressGroupClass */
    parent_class: InternetAddressClass
    static name: string
}
export abstract class InternetAddressListClass {
    /* Fields of GMime.InternetAddressListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class InternetAddressMailboxClass {
    /* Fields of GMime.InternetAddressMailboxClass */
    parent_class: InternetAddressClass
    static name: string
}
export abstract class MessageClass {
    /* Fields of GMime.MessageClass */
    parent_class: ObjectClass
    static name: string
}
export abstract class MessagePartClass {
    /* Fields of GMime.MessagePartClass */
    parent_class: ObjectClass
    static name: string
}
export abstract class MessagePartialClass {
    /* Fields of GMime.MessagePartialClass */
    parent_class: PartClass
    static name: string
}
export abstract class MultipartClass {
    /* Fields of GMime.MultipartClass */
    parent_class: ObjectClass
    clear: (multipart: Multipart) => void
    add: (multipart: Multipart, part: Object) => void
    insert: (multipart: Multipart, index: number, part: Object) => void
    remove: (multipart: Multipart, part: Object) => boolean
    remove_at: (multipart: Multipart, index: number) => Object
    get_part: (multipart: Multipart, index: number) => Object
    contains: (multipart: Multipart, part: Object) => boolean
    index_of: (multipart: Multipart, part: Object) => number
    get_count: (multipart: Multipart) => number
    set_boundary: (multipart: Multipart, boundary: string) => void
    get_boundary: (multipart: Multipart) => string
    static name: string
}
export abstract class MultipartEncryptedClass {
    /* Fields of GMime.MultipartEncryptedClass */
    parent_class: MultipartClass
    static name: string
}
export abstract class MultipartSignedClass {
    /* Fields of GMime.MultipartSignedClass */
    parent_class: MultipartClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of GMime.ObjectClass */
    parent_class: GObject.ObjectClass
    header_added: (object: Object, header: Header) => void
    header_changed: (object: Object, header: Header) => void
    header_removed: (object: Object, header: Header) => void
    headers_cleared: (object: Object) => void
    set_content_type: (object: Object, content_type: ContentType) => void
    get_headers: (object: Object, options?: FormatOptions | null) => string
    write_to_stream: (object: Object, options: FormatOptions, content_only: boolean, stream: Stream) => number
    encode: (object: Object, constraint: EncodingConstraint) => void
    static name: string
}
export class OpenPGPMarker {
    /* Fields of GMime.OpenPGPMarker */
    marker: string
    len: number
    before: OpenPGPState
    after: OpenPGPState
    is_end_marker: boolean
    static name: string
}
export abstract class ParamClass {
    /* Fields of GMime.ParamClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ParamListClass {
    /* Fields of GMime.ParamListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ParserClass {
    /* Fields of GMime.ParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ParserOptions {
    /* Methods of GMime.ParserOptions */
    clone(): ParserOptions
    free(): void
    get_address_compliance_mode(): RfcComplianceMode
    get_allow_addresses_without_domain(): boolean
    get_fallback_charsets(): string[]
    get_parameter_compliance_mode(): RfcComplianceMode
    get_rfc2047_compliance_mode(): RfcComplianceMode
    set_address_compliance_mode(mode: RfcComplianceMode): void
    set_allow_addresses_without_domain(allow: boolean): void
    set_fallback_charsets(charsets: string): void
    set_parameter_compliance_mode(mode: RfcComplianceMode): void
    set_rfc2047_compliance_mode(mode: RfcComplianceMode): void
    static name: string
    static new(): ParserOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParserOptions
    static get_default(): ParserOptions
}
export abstract class PartClass {
    /* Fields of GMime.PartClass */
    parent_class: ObjectClass
    set_content: (mime_part: Part, content: DataWrapper) => void
    static name: string
}
export class PartIter {
    /* Methods of GMime.PartIter */
    clone(): PartIter
    free(): void
    get_current(): Object
    get_parent(): Object
    get_path(): string
    get_toplevel(): Object
    is_valid(): boolean
    jump_to(path: string): boolean
    next(): boolean
    prev(): boolean
    remove(): boolean
    replace(replacement: Object): boolean
    reset(): void
    static name: string
    static new(toplevel: Object): PartIter
    constructor(toplevel: Object)
    /* Static methods and pseudo-constructors */
    static new(toplevel: Object): PartIter
}
export abstract class Pkcs7ContextClass {
    static name: string
}
export class References {
    /* Fields of GMime.References */
    array: object[]
    /* Methods of GMime.References */
    append(msgid: string): void
    clear(): void
    copy(): References
    free(): void
    get_message_id(index: number): string
    length(): number
    set_message_id(index: number, msgid: string): void
    static name: string
    static new(): References
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): References
    static parse(options: ParserOptions | null, text: string): References
}
export abstract class SignatureClass {
    /* Fields of GMime.SignatureClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SignatureListClass {
    /* Fields of GMime.SignatureListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StreamBufferClass {
    /* Fields of GMime.StreamBufferClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamCatClass {
    /* Fields of GMime.StreamCatClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamClass {
    /* Fields of GMime.StreamClass */
    parent_class: GObject.ObjectClass
    read: (stream: Stream, buf: Uint8Array[]) => number
    write: (stream: Stream, buf: string, len: number) => number
    flush: (stream: Stream) => number
    close: (stream: Stream) => number
    eos: (stream: Stream) => boolean
    reset: (stream: Stream) => number
    seek: (stream: Stream, offset: number, whence: SeekWhence) => number
    tell: (stream: Stream) => number
    length: (stream: Stream) => number
    substream: (stream: Stream, start: number, end: number) => Stream
    static name: string
}
export abstract class StreamFileClass {
    /* Fields of GMime.StreamFileClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamFilterClass {
    /* Fields of GMime.StreamFilterClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamFsClass {
    /* Fields of GMime.StreamFsClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamGIOClass {
    /* Fields of GMime.StreamGIOClass */
    parent_class: StreamClass
    static name: string
}
export class StreamIOVector {
    /* Fields of GMime.StreamIOVector */
    data: object
    len: number
    static name: string
}
export abstract class StreamMemClass {
    /* Fields of GMime.StreamMemClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamMmapClass {
    /* Fields of GMime.StreamMmapClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamNullClass {
    /* Fields of GMime.StreamNullClass */
    parent_class: StreamClass
    static name: string
}
export abstract class StreamPipeClass {
    /* Fields of GMime.StreamPipeClass */
    parent_class: StreamClass
    static name: string
}
export abstract class TextPartClass {
    /* Fields of GMime.TextPartClass */
    parent_class: PartClass
    static name: string
}