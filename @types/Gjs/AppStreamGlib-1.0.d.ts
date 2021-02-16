/**
 * AppStreamGlib-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

export enum AgreementKind {
    UNKNOWN,
    GENERIC,
    EULA,
    PRIVACY,
}
export enum AppError {
    FAILED,
    INVALID_TYPE,
}
export enum AppKind {
    UNKNOWN,
    DESKTOP,
    FONT,
    CODEC,
    INPUT_METHOD,
    WEB_APP,
    SOURCE,
    ADDON,
    FIRMWARE,
    RUNTIME,
    GENERIC,
    OS_UPDATE,
    OS_UPGRADE,
    SHELL_EXTENSION,
    LOCALIZATION,
    CONSOLE,
    DRIVER,
    ICON_THEME,
}
export enum AppMergeKind {
    UNKNOWN,
    NONE,
    REPLACE,
    APPEND,
}
export enum AppScope {
    UNKNOWN,
    USER,
    SYSTEM,
}
export enum AppState {
    UNKNOWN,
    INSTALLED,
    AVAILABLE,
    AVAILABLE_LOCAL,
    UPDATABLE,
    UNAVAILABLE,
    QUEUED_FOR_INSTALL,
    INSTALLING,
    REMOVING,
    UPDATABLE_LIVE,
    PURCHASABLE,
    PURCHASING,
}
export enum AppTrustFlags {
    COMPLETE,
    CHECK_DUPLICATES,
    CHECK_VALID_UTF8,
}
export enum AppValidateFlags {
    NONE,
    RELAX,
    STRICT,
    NO_NETWORK,
    ALL_APPS,
}
export enum BundleKind {
    UNKNOWN,
    LIMBA,
    FLATPAK,
    SNAP,
    PACKAGE,
    CABINET,
    APPIMAGE,
}
export enum ChecksumTarget {
    UNKNOWN,
    CONTAINER,
    CONTENT,
    SIGNATURE,
    DEVICE,
}
export enum ContentRatingSystem {
    UNKNOWN,
    INCAA,
    ACB,
    DJCTQ,
    GSRR,
    PEGI,
    KAVI,
    USK,
    ESRA,
    CERO,
    OFLCNZ,
    RUSSIA,
    MDA,
    GRAC,
    ESRB,
    IARC,
}
export enum ContentRatingValue {
    UNKNOWN,
    NONE,
    MILD,
    MODERATE,
    INTENSE,
}
export enum FormatKind {
    UNKNOWN,
    APPSTREAM,
    DESKTOP,
    APPDATA,
    METAINFO,
}
export enum IconError {
    FAILED,
}
export enum IconKind {
    UNKNOWN,
    STOCK,
    CACHED,
    REMOTE,
    EMBEDDED,
    LOCAL,
}
export enum IconLoadFlags {
    NONE,
    SEARCH_SIZE,
}
export enum IdKind {
    UNKNOWN,
    DESKTOP,
    FONT,
    CODEC,
    INPUT_METHOD,
    WEB_APP,
    SOURCE,
    ADDON,
    FIRMWARE,
    RUNTIME,
    GENERIC,
}
export enum ImageKind {
    UNKNOWN,
    SOURCE,
    THUMBNAIL,
}
export enum ImageLoadFlags {
    NONE,
    SHARPEN,
    SET_BASENAME,
    SET_CHECKSUM,
    ONLY_SUPPORTED,
    ALWAYS_RESIZE,
}
export enum ImageSaveFlags {
    NONE,
    PAD_16_9,
    SHARPEN,
    BLUR,
}
export enum InfError {
    FAILED,
    INVALID_TYPE,
    NOT_FOUND,
}
export enum KudoKind {
    UNKNOWN,
    SEARCH_PROVIDER,
    USER_DOCS,
    APP_MENU,
    MODERN_TOOLKIT,
    NOTIFICATIONS,
    HIGH_CONTRAST,
    HI_DPI_ICON,
}
export enum LaunchableKind {
    UNKNOWN,
    DESKTOP_ID,
    SERVICE,
    COCKPIT_MANIFEST,
    URL,
}
export enum MarkupConvertFormat {
    SIMPLE,
    MARKDOWN,
    NULL,
    APPSTREAM,
    HTML,
}
export enum NodeError {
    FAILED,
    INVALID_MARKUP,
    NO_SUPPORT,
}
export enum NodeInsertFlags {
    NONE,
    PRE_ESCAPED,
    SWAPPED,
    NO_MARKUP,
    DEDUPE_LANG,
    MARK_TRANSLATABLE,
    BASE64_ENCODED,
}
export enum NodeToXmlFlags {
    NONE,
    ADD_HEADER,
    FORMAT_MULTILINE,
    FORMAT_INDENT,
    INCLUDE_SIBLINGS,
    SORT_CHILDREN,
}
export enum ProblemKind {
    UNKNOWN,
    TAG_DUPLICATED,
    TAG_MISSING,
    TAG_INVALID,
    ATTRIBUTE_MISSING,
    ATTRIBUTE_INVALID,
    MARKUP_INVALID,
    STYLE_INCORRECT,
    TRANSLATIONS_REQUIRED,
    DUPLICATE_DATA,
    VALUE_MISSING,
    URL_NOT_FOUND,
    FILE_INVALID,
    ASPECT_RATIO_INCORRECT,
    RESOLUTION_INCORRECT,
}
export enum ProvideKind {
    UNKNOWN,
    LIBRARY,
    BINARY,
    FONT,
    MODALIAS,
    FIRMWARE_RUNTIME,
    PYTHON2,
    PYTHON3,
    DBUS_SESSION,
    DBUS_SYSTEM,
    FIRMWARE_FLASHED,
    ID,
}
export enum ReleaseKind {
    UNKNOWN,
    STABLE,
    DEVELOPMENT,
}
export enum ReleaseState {
    UNKNOWN,
    INSTALLED,
    AVAILABLE,
}
export enum RequireCompare {
    UNKNOWN,
    EQ,
    NE,
    LT,
    GT,
    LE,
    GE,
    GLOB,
    REGEX,
}
export enum RequireKind {
    UNKNOWN,
    ID,
    FIRMWARE,
    HARDWARE,
    MODALIAS,
    KERNEL,
    MEMORY,
}
export enum ScreenshotKind {
    UNKNOWN,
    NORMAL,
    DEFAULT,
}
export enum SizeKind {
    UNKNOWN,
    INSTALLED,
    DOWNLOAD,
}
export enum StoreError {
    FAILED,
}
export enum StoreSearchFlags {
    NONE,
    USE_WILDCARDS,
}
export enum StoreWatchFlags {
    NONE,
    ADDED,
    REMOVED,
}
export enum SuggestKind {
    UNKNOWN,
    UPSTREAM,
    HEURISTIC,
}
export enum Tag {
    UNKNOWN,
    COMPONENTS,
    COMPONENT,
    ID,
    PKGNAME,
    NAME,
    SUMMARY,
    DESCRIPTION,
    URL,
    ICON,
    CATEGORIES,
    CATEGORY,
    KEYWORDS,
    KEYWORD,
    MIMETYPES,
    MIMETYPE,
    PROJECT_GROUP,
    PROJECT_LICENSE,
    SCREENSHOT,
    SCREENSHOTS,
    UPDATE_CONTACT,
    IMAGE,
    COMPULSORY_FOR_DESKTOP,
    PRIORITY,
    CAPTION,
    LANGUAGES,
    LANG,
    METADATA,
    VALUE,
    RELEASES,
    RELEASE,
    ARCHITECTURES,
    ARCH,
    METADATA_LICENSE,
    PROVIDES,
    EXTENDS,
    DEVELOPER_NAME,
    KUDOS,
    KUDO,
    SOURCE_PKGNAME,
    VETOS,
    VETO,
    BUNDLE,
    PERMISSIONS,
    PERMISSION,
    LOCATION,
    CHECKSUM,
    SIZE,
    TRANSLATION,
    CONTENT_RATING,
    CONTENT_ATTRIBUTE,
    VERSION,
    REVIEWS,
    REVIEW,
    REVIEWER_NAME,
    REVIEWER_ID,
    SUGGESTS,
    REQUIRES,
    CUSTOM,
    LAUNCHABLE,
    AGREEMENT,
    AGREEMENT_SECTION,
    P,
    LI,
    UL,
    OL,
    BINARY,
    FONT,
    DBUS,
    MODALIAS,
    LIBRARY,
}
export enum TagFlags {
    NONE,
    USE_FALLBACKS,
    USE_TRANSLATED,
}
export enum TranslationKind {
    UNKNOWN,
    GETTEXT,
    QT,
}
export enum UrgencyKind {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
export enum UrlKind {
    UNKNOWN,
    HOMEPAGE,
    BUGTRACKER,
    FAQ,
    DONATION,
    HELP,
    MISSING,
    TRANSLATE,
    DETAILS,
    SOURCE,
    CONTACT,
}
export enum UtilsError {
    FAILED,
    INVALID_TYPE,
}
export enum UtilsLocation {
    SHARED,
    CACHE,
    USER,
}
export enum AppParseFlags {
    NONE,
    USE_HEURISTICS,
    KEEP_COMMENTS,
    CONVERT_TRANSLATABLE,
    APPEND_DATA,
    ALLOW_VETO,
    USE_FALLBACKS,
    ADD_ALL_METADATA,
    ONLY_NATIVE_LANGS,
}
export enum AppQuirk {
    NONE,
    PROVENANCE,
    COMPULSORY,
    HAS_SOURCE,
    MATCH_ANY_PREFIX,
    NEEDS_REBOOT,
    NOT_REVIEWABLE,
    HAS_SHORTCUT,
    NOT_LAUNCHABLE,
    NEEDS_USER_ACTION,
    IS_PROXY,
    REMOVABLE_HARDWARE,
    DEVELOPER_VERIFIED,
}
export enum AppSearchMatch {
    NONE,
    MIMETYPE,
    PKGNAME,
    DESCRIPTION,
    COMMENT,
    NAME,
    KEYWORD,
    ID,
    ORIGIN,
}
export enum AppSubsumeFlags {
    NONE,
    NO_OVERWRITE,
    BOTH_WAYS,
    REPLACE,
    KIND,
    STATE,
    BUNDLES,
    TRANSLATIONS,
    RELEASES,
    KUDOS,
    CATEGORIES,
    PERMISSIONS,
    EXTENDS,
    COMPULSORY,
    SCREENSHOTS,
    REVIEWS,
    CONTENT_RATINGS,
    PROVIDES,
    ICONS,
    MIMETYPES,
    VETOS,
    LANGUAGES,
    NAME,
    COMMENT,
    DEVELOPER_NAME,
    DESCRIPTION,
    METADATA,
    URL,
    KEYWORDS,
    FORMATS,
    BRANCH,
    ORIGIN,
    METADATA_LICENSE,
    PROJECT_LICENSE,
    PROJECT_GROUP,
    SOURCE_KIND,
    SUGGESTS,
    LAUNCHABLES,
    AGREEMENTS,
}
export enum InfLoadFlags {
    NONE,
    STRICT,
    CASE_INSENSITIVE,
}
export enum MarkupConvertFlag {
    NONE,
    IGNORE_ERRORS,
}
export enum NodeFromXmlFlags {
    NONE,
    LITERAL_TEXT,
    KEEP_COMMENTS,
    ONLY_NATIVE_LANGS,
}
export enum ReviewFlags {
    NONE,
    SELF,
    VOTED,
}
export enum StoreAddFlags {
    NONE,
    PREFER_LOCAL,
    USE_UNIQUE_ID,
    USE_MERGE_HEURISTIC,
    ONLY_NATIVE_LANGS,
}
export enum StoreLoadFlags {
    NONE,
    APP_INFO_SYSTEM,
    APP_INFO_USER,
    APP_INSTALL,
    APPDATA,
    DESKTOP,
    ALLOW_VETO,
    FLATPAK_USER,
    FLATPAK_SYSTEM,
    IGNORE_INVALID,
    ONLY_UNCOMPRESSED,
    ONLY_MERGE_APPS,
}
export enum UniqueIdMatchFlags {
    NONE,
    SCOPE,
    BUNDLE_KIND,
    ORIGIN,
    KIND,
    ID,
    BRANCH,
}
export enum UtilsFindIconFlag {
    NONE,
    HI_DPI,
}
export enum VersionCompareFlag {
    NONE,
    USE_HEURISTICS,
}
export enum VersionParseFlag {
    NONE,
    USE_TRIPLET,
    USE_BCD,
}
export const APP_SUBSUME_FLAG_DEDUPE: number
export const APP_SUBSUME_FLAG_MERGE: number
export const IMAGE_ALPHA_FLAG_BOTTOM: number
export const IMAGE_ALPHA_FLAG_INTERNAL: number
export const IMAGE_ALPHA_FLAG_LEFT: number
export const IMAGE_ALPHA_FLAG_NONE: number
export const IMAGE_ALPHA_FLAG_RIGHT: number
export const IMAGE_ALPHA_FLAG_TOP: number
export const IMAGE_LARGE_HEIGHT: number
export const IMAGE_LARGE_WIDTH: number
export const IMAGE_NORMAL_HEIGHT: number
export const IMAGE_NORMAL_WIDTH: number
export const IMAGE_THUMBNAIL_HEIGHT: number
export const IMAGE_THUMBNAIL_WIDTH: number
export function id_kind_from_string(id_kind: string): IdKind
export function id_kind_to_string(id_kind: IdKind): string
export function inf_error_quark(): GLib.Quark
export function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: number): string
export function inf_load_data(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean
export function inf_load_file(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean
export function kudo_kind_from_string(kudo_kind: string): KudoKind
export function kudo_kind_to_string(kudo_kind: KudoKind): string
export function markup_convert(markup: string, format: MarkupConvertFormat): string
export function markup_convert_full(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string
export function markup_convert_simple(markup: string): string
export function markup_import(text: string, format: MarkupConvertFormat): string
export function markup_strsplit_words(text: string, line_len: number): string[]
export function markup_validate(markup: string): boolean
export function node_error_quark(): GLib.Quark
export function node_get_attribute(node: GLib.Node, key: string): string
export function node_get_attribute_as_int(node: GLib.Node, key: string): number
export function node_get_attribute_as_uint(node: GLib.Node, key: string): number
export function node_get_comment(node: GLib.Node): string
export function node_get_data(node: GLib.Node): string
export function node_get_localized(node: GLib.Node, key: string): GLib.HashTable
export function node_get_localized_best(node: GLib.Node, key: string): string
export function node_get_localized_unwrap(node: GLib.Node): GLib.HashTable
export function node_get_name(node: GLib.Node): string
export function node_get_tag(node: GLib.Node): Tag
export function node_insert_hash(parent: GLib.Node, name: string, attr_key: string, hash: GLib.HashTable, insert_flags: NodeInsertFlags): void
export function node_insert_localized(parent: GLib.Node, name: string, localized: GLib.HashTable, insert_flags: NodeInsertFlags): void
export function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String
export function node_unref(node: GLib.Node): void
export function size_kind_from_string(size_kind: string): SizeKind
export function size_kind_to_string(size_kind: SizeKind): string
export function tag_from_string(tag: string): Tag
export function tag_from_string_full(tag: string, flags: TagFlags): Tag
export function tag_to_string(tag: Tag): string
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string
export function url_kind_from_string(url_kind: string): UrlKind
export function url_kind_to_string(url_kind: UrlKind): string
export function utils_appstream_id_build(str: string): string
export function utils_appstream_id_valid(str: string): boolean
export function utils_error_quark(): GLib.Quark
export function utils_find_icon_filename(destdir: string, search: string): string
export function utils_find_icon_filename_full(destdir: string, search: string, flags: UtilsFindIconFlag): string
export function utils_guid_from_data(namespace_id: string, data: number, data_len: number): string
export function utils_guid_from_string(str: string): string
export function utils_guid_is_valid(guid: string): boolean
export function utils_install_filename(location: UtilsLocation, filename: string, origin: string, destdir: string): boolean
export function utils_is_blacklisted_id(desktop_id: string): boolean
export function utils_is_category_id(category_id: string): boolean
export function utils_is_environment_id(environment_id: string): boolean
export function utils_is_spdx_license(license: string): boolean
export function utils_is_spdx_license_id(license_id: string): boolean
export function utils_is_stock_icon_name(name: string): boolean
export function utils_license_to_spdx(license: string): string
export function utils_search_token_valid(token: string): boolean
export function utils_search_tokenize(search: string): string[]
export function utils_spdx_license_detokenize(license_tokens: string): string
export function utils_spdx_license_tokenize(license: string): string[]
export function utils_string_replace(string: GLib.String, search: string, replace: string): number
export function utils_unique_id_build(scope: AppScope, bundle_kind: BundleKind, origin: string, kind: AppKind, id: string, branch: string): string
export function utils_unique_id_equal(unique_id1: string, unique_id2: string): boolean
export function utils_unique_id_hash(unique_id: string): number
export function utils_unique_id_match(unique_id1: string, unique_id2: string, match_flags: UniqueIdMatchFlags): boolean
export function utils_unique_id_valid(unique_id: string): boolean
export function utils_vercmp(version_a: string, version_b: string): number
export function utils_vercmp_full(version_a: string, version_b: string, flags: VersionCompareFlag): number
export function utils_version_from_uint16(val: number, flags: VersionParseFlag): string
export function utils_version_from_uint32(val: number, flags: VersionParseFlag): string
export function utils_version_parse(version: string): string
export interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
export class Agreement {
    /* Fields of AppStreamGlib.Agreement */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Agreement */
    add_section(agreement_section: AgreementSection): void
    get_kind(): AgreementKind
    get_section_default(): AgreementSection
    get_sections(): AgreementSection[]
    get_version_id(): string
    set_kind(kind: AgreementKind): void
    set_version_id(version_id: string): void
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
    connect(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Agreement_ConstructProps)
    _init (config?: Agreement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Agreement
    static kind_from_string(value: string): AgreementKind
    static kind_to_string(value: AgreementKind): string
    static $gtype: GObject.Type
}
export interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
export class AgreementSection {
    /* Fields of AppStreamGlib.AgreementSection */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.AgreementSection */
    get_description(locale?: string | null): string
    get_kind(): string
    get_name(locale?: string | null): string
    set_description(locale: string | null, desc: string): void
    set_kind(kind: string): void
    set_name(locale: string | null, name: string): void
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
    connect(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AgreementSection_ConstructProps)
    _init (config?: AgreementSection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AgreementSection
    static $gtype: GObject.Type
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
}
export class App {
    /* Fields of AppStreamGlib.App */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.App */
    add_addon(addon: App): void
    add_agreement(agreement: Agreement): void
    add_arch(arch: string): void
    add_bundle(bundle: Bundle): void
    add_category(category: string): void
    add_compulsory_for_desktop(compulsory_for_desktop: string): void
    add_content_rating(content_rating: ContentRating): void
    add_extends(extends_: string): void
    add_format(format: Format): void
    add_icon(icon: Icon): void
    add_keyword(locale: string | null, keyword: string): void
    add_kudo(kudo: string): void
    add_kudo_kind(kudo_kind: KudoKind): void
    add_language(percentage: number, locale?: string | null): void
    add_launchable(launchable: Launchable): void
    add_metadata(key: string, value?: string | null): void
    add_mimetype(mimetype: string): void
    add_permission(permission: string): void
    add_pkgname(pkgname: string): void
    add_provide(provide: Provide): void
    add_quirk(quirk: AppQuirk): void
    add_release(release: Release): void
    add_require(require: Require): void
    add_review(review: Review): void
    add_screenshot(screenshot: Screenshot): void
    add_suggest(suggest: Suggest): void
    add_translation(translation: Translation): void
    add_url(url_kind: UrlKind, url: string): void
    convert_icons(kind: IconKind): boolean
    equal(app2: App): boolean
    get_addons(): App[]
    get_agreement_by_kind(kind: AgreementKind): Agreement
    get_agreement_default(): Agreement
    get_architectures(): string[]
    get_branch(): string
    get_bundle_default(): Bundle
    get_bundles(): Bundle[]
    get_categories(): string[]
    get_comment(locale?: string | null): string
    get_comments(): GLib.HashTable
    get_compulsory_for_desktops(): string[]
    get_content_rating(kind: string): ContentRating
    get_content_ratings(): ContentRating[]
    get_description(locale?: string | null): string
    get_descriptions(): GLib.HashTable
    get_developer_name(locale?: string | null): string
    get_developer_names(): GLib.HashTable
    get_extends(): string[]
    get_format_by_filename(filename: string): Format
    get_format_by_kind(kind: FormatKind): Format
    get_format_default(): Format
    get_formats(): string[]
    get_icon_default(): Icon
    get_icon_for_size(width: number, height: number): Icon
    get_icon_path(): string
    get_icons(): Icon[]
    get_id(): string
    get_id_filename(): string
    get_id_kind(): IdKind
    get_id_no_prefix(): string
    get_keywords(locale?: string | null): string[]
    get_kind(): AppKind
    get_kudos(): string[]
    get_language(locale?: string | null): number
    get_languages(): string[]
    get_launchable_by_kind(kind: LaunchableKind): Launchable
    get_launchable_default(): Launchable
    get_launchables(): Launchable[]
    get_merge_kind(): AppMergeKind
    get_metadata(): GLib.HashTable
    get_metadata_item(key: string): string
    get_metadata_license(): string
    get_mimetypes(): string[]
    get_name(locale?: string | null): string
    get_names(): GLib.HashTable
    get_origin(): string
    get_permissions(): string[]
    get_pkgname_default(): string
    get_pkgnames(): string[]
    get_priority(): number
    get_project_group(): string
    get_project_license(): string
    get_provides(): Provide[]
    get_release(version: string): Release
    get_release_by_version(version: string): Release
    get_release_default(): Release
    get_releases(): Release[]
    get_require_by_value(kind: RequireKind, value: string): Require
    get_requires(): Require[]
    get_reviews(): Screenshot[]
    get_scope(): AppScope
    get_screenshot_default(): Screenshot
    get_screenshots(): Screenshot[]
    get_search_match(): number
    get_source_file(): string
    get_source_kind(): FormatKind
    get_source_pkgname(): string
    get_state(): AppState
    get_suggests(): Suggest[]
    get_translations(): Translation[]
    get_trust_flags(): number
    get_unique_id(): string
    get_update_contact(): string
    get_url_item(url_kind: UrlKind): string
    get_urls(): GLib.HashTable
    get_vetos(): string[]
    has_category(category: string): boolean
    has_compulsory_for_desktop(desktop: string): boolean
    has_kudo(kudo: string): boolean
    has_kudo_kind(kudo: KudoKind): boolean
    has_permission(permission: string): boolean
    has_quirk(quirk: AppQuirk): boolean
    parse_data(data: GLib.Bytes, flags: number): boolean
    parse_file(filename: string, flags: number): boolean
    remove_category(category: string): void
    remove_format(format: Format): void
    remove_kudo(kudo: string): void
    remove_metadata(key: string): void
    remove_veto(description: string): void
    search_matches(search: string): number
    search_matches_all(search: string): number
    set_branch(branch: string): void
    set_comment(locale: string | null, comment: string): void
    set_description(locale: string | null, description: string): void
    set_developer_name(locale: string | null, developer_name: string): void
    set_icon_path(icon_path: string): void
    set_id(id: string): void
    set_id_kind(id_kind: IdKind): void
    set_kind(kind: AppKind): void
    set_merge_kind(merge_kind: AppMergeKind): void
    set_metadata_license(metadata_license: string): void
    set_name(locale: string | null, name: string): void
    set_origin(origin: string): void
    set_priority(priority: number): void
    set_project_group(project_group: string): void
    set_project_license(project_license: string): void
    set_scope(scope: AppScope): void
    set_search_match(search_match: number): void
    set_source_file(source_file: string): void
    set_source_kind(source_kind: FormatKind): void
    set_source_pkgname(source_pkgname: string): void
    set_state(state: AppState): void
    set_trust_flags(trust_flags: number): void
    set_update_contact(update_contact: string): void
    subsume(donor: App): void
    subsume_full(donor: App, flags: number): void
    to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    to_xml(): GLib.String
    validate(flags: number): Problem[]
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
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): App
    static error_quark(): GLib.Quark
    static guess_source_kind(filename: string): FormatKind
    static kind_from_string(kind: string): AppKind
    static kind_to_string(kind: AppKind): string
    static merge_kind_from_string(merge_kind: string): AppMergeKind
    static merge_kind_to_string(merge_kind: AppMergeKind): string
    static scope_from_string(scope: string): AppScope
    static scope_to_string(scope: AppScope): string
    static source_kind_from_string(source_kind: string): FormatKind
    static source_kind_to_string(source_kind: FormatKind): string
    static state_to_string(state: AppState): string
    static $gtype: GObject.Type
}
export interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
export class Bundle {
    /* Fields of AppStreamGlib.Bundle */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Bundle */
    get_id(): string
    get_kind(): BundleKind
    get_runtime(): string
    get_sdk(): string
    set_id(id: string): void
    set_kind(kind: BundleKind): void
    set_runtime(runtime: string): void
    set_sdk(sdk: string): void
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
    connect(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bundle_ConstructProps)
    _init (config?: Bundle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bundle
    static kind_from_string(kind: string): BundleKind
    static kind_to_string(kind: BundleKind): string
    static $gtype: GObject.Type
}
export interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
export class Checksum {
    /* Fields of AppStreamGlib.Checksum */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Checksum */
    get_filename(): string
    get_kind(): GLib.ChecksumType
    get_target(): ChecksumTarget
    get_value(): string
    set_filename(filename: string): void
    set_kind(kind: GLib.ChecksumType): void
    set_target(target: ChecksumTarget): void
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
    connect(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Checksum_ConstructProps)
    _init (config?: Checksum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Checksum
    static target_from_string(target: string): ChecksumTarget
    static target_to_string(target: ChecksumTarget): string
    static $gtype: GObject.Type
}
export interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentRating {
    /* Fields of AppStreamGlib.ContentRating */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.ContentRating */
    add_attribute(id: string, value: ContentRatingValue): void
    get_kind(): string
    get_minimum_age(): number
    get_rating_ids(): string[]
    get_value(id: string): ContentRatingValue
    set_kind(kind: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentRating_ConstructProps)
    _init (config?: ContentRating_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentRating
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue
    static attribute_get_description(id: string, value: ContentRatingValue): string
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number
    static get_all_rating_ids(): string[]
    static system_format_age(system: ContentRatingSystem, age: number): string | null
    static system_from_locale(locale: string): ContentRatingSystem
    static system_get_csm_ages(system: ContentRatingSystem): number[]
    static system_get_formatted_ages(system: ContentRatingSystem): string[]
    static system_to_string(system: ContentRatingSystem): string | null
    static value_from_string(value: string): ContentRatingValue
    static value_to_string(value: ContentRatingValue): string
    static $gtype: GObject.Type
}
export interface Format_ConstructProps extends GObject.Object_ConstructProps {
}
export class Format {
    /* Fields of AppStreamGlib.Format */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Format */
    equal(format2: Format): boolean
    get_filename(): string
    get_kind(): FormatKind
    set_filename(filename: string): void
    set_kind(kind: FormatKind): void
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
    connect(sigName: "notify", callback: (($obj: Format, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Format, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Format_ConstructProps)
    _init (config?: Format_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Format
    static guess_kind(filename: string): FormatKind
    static kind_from_string(kind: string): FormatKind
    static kind_to_string(kind: FormatKind): string
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
export class Icon {
    /* Fields of AppStreamGlib.Icon */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Icon */
    convert_to_kind(kind: IconKind): boolean
    get_filename(): string
    get_height(): number
    get_kind(): IconKind
    get_name(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_prefix(): string
    get_scale(): number
    get_url(): string
    get_width(): number
    load(flags: IconLoadFlags): boolean
    set_filename(filename: string): void
    set_height(height: number): void
    set_kind(kind: IconKind): void
    set_name(name: string): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_prefix(prefix: string): void
    set_scale(scale: number): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Icon
    static error_quark(): GLib.Quark
    static kind_from_string(icon_kind: string): IconKind
    static kind_to_string(icon_kind: IconKind): string
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of AppStreamGlib.Image */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Image */
    equal(image2: Image): boolean
    get_basename(): string
    get_height(): number
    get_kind(): ImageKind
    get_locale(): string
    get_md5(): string
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_url(): string
    get_width(): number
    load_filename(filename: string): boolean
    load_filename_full(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean
    save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    set_basename(basename: string): void
    set_height(height: number): void
    set_kind(kind: ImageKind): void
    set_locale(locale: string): void
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Image
    static kind_from_string(kind: string): ImageKind
    static kind_to_string(kind: ImageKind): string
    static $gtype: GObject.Type
}
export interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Launchable {
    /* Fields of AppStreamGlib.Launchable */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Launchable */
    get_kind(): LaunchableKind
    get_value(): string
    set_kind(kind: LaunchableKind): void
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
    connect(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Launchable_ConstructProps)
    _init (config?: Launchable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Launchable
    static kind_from_string(kind: string): LaunchableKind
    static kind_to_string(kind: LaunchableKind): string
    static $gtype: GObject.Type
}
export interface Problem_ConstructProps extends GObject.Object_ConstructProps {
}
export class Problem {
    /* Fields of AppStreamGlib.Problem */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Problem */
    get_kind(): ProblemKind
    get_line_number(): number
    get_message(): string
    set_kind(kind: ProblemKind): void
    set_line_number(line_number: number): void
    set_message(message: string): void
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
    connect(sigName: "notify", callback: (($obj: Problem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Problem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Problem_ConstructProps)
    _init (config?: Problem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Problem
    static kind_to_string(kind: ProblemKind): string
    static $gtype: GObject.Type
}
export interface Provide_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provide {
    /* Fields of AppStreamGlib.Provide */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Provide */
    get_kind(): ProvideKind
    get_value(): string
    set_kind(kind: ProvideKind): void
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
    connect(sigName: "notify", callback: (($obj: Provide, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Provide, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Provide_ConstructProps)
    _init (config?: Provide_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Provide
    static kind_from_string(kind: string): ProvideKind
    static kind_to_string(kind: ProvideKind): string
    static $gtype: GObject.Type
}
export interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
export class Release {
    /* Fields of AppStreamGlib.Release */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Release */
    add_checksum(checksum: Checksum): void
    add_location(location: string): void
    get_blob(filename: string): GLib.Bytes
    get_checksum_by_fn(fn: string): Checksum
    get_checksum_by_target(target: ChecksumTarget): Checksum
    get_checksums(): Checksum[]
    get_description(locale?: string | null): string
    get_install_duration(): number
    get_kind(): ReleaseKind
    get_location_default(): string
    get_locations(): string[]
    get_size(kind: SizeKind): number
    get_state(): ReleaseState
    get_timestamp(): number
    get_urgency(): UrgencyKind
    get_url(url_kind: UrlKind): string
    get_version(): string
    set_blob(filename: string, blob: GLib.Bytes): void
    set_description(locale: string | null, description: string): void
    set_install_duration(install_duration: number): void
    set_kind(kind: ReleaseKind): void
    set_size(kind: SizeKind, size: number): void
    set_state(state: ReleaseState): void
    set_timestamp(timestamp: number): void
    set_urgency(urgency: UrgencyKind): void
    set_url(url_kind: UrlKind, url: string): void
    set_version(version: string): void
    vercmp(rel2: Release): number
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
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    static kind_from_string(kind_str: string): ReleaseKind
    static kind_to_string(kind: ReleaseKind): string
    static state_from_string(state: string): ReleaseState
    static state_to_string(state: ReleaseState): string
    static $gtype: GObject.Type
}
export interface Require_ConstructProps extends GObject.Object_ConstructProps {
}
export class Require {
    /* Fields of AppStreamGlib.Require */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Require */
    equal(require2: Require): boolean
    get_compare(): RequireCompare
    get_kind(): RequireKind
    get_value(): string
    get_version(): string
    set_compare(compare: RequireCompare): void
    set_kind(kind: RequireKind): void
    set_value(value: string): void
    set_version(version: string): void
    version_compare(version: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Require, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Require, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Require_ConstructProps)
    _init (config?: Require_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Require
    static compare_from_string(compare: string): RequireCompare
    static compare_to_string(compare: RequireCompare): string
    static kind_from_string(kind: string): RequireKind
    static kind_to_string(kind: RequireKind): string
    static $gtype: GObject.Type
}
export interface Review_ConstructProps extends GObject.Object_ConstructProps {
    date?: Review
    description?: string
    flags?: number
    id?: string
    locale?: string
    rating?: number
    reviewer_id?: string
    reviewer_name?: string
    summary?: string
    version?: string
}
export class Review {
    /* Properties of AppStreamGlib.Review */
    date: Review
    description: string
    flags: number
    id: string
    locale: string
    rating: number
    reviewer_id: string
    reviewer_name: string
    summary: string
    version: string
    /* Fields of AppStreamGlib.Review */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Review */
    add_flags(flags: ReviewFlags): void
    add_metadata(key: string, value: string): void
    equal(review2: Review): boolean
    get_date(): GLib.DateTime
    get_description(): string
    get_flags(): ReviewFlags
    get_id(): string
    get_locale(): string
    get_metadata_item(key: string): string
    get_priority(): number
    get_rating(): number
    get_reviewer_id(): string
    get_reviewer_name(): string
    get_summary(): string
    get_version(): string
    set_date(date: GLib.DateTime): void
    set_description(description: string): void
    set_flags(flags: ReviewFlags): void
    set_id(id: string): void
    set_locale(locale: string): void
    set_priority(priority: number): void
    set_rating(rating: number): void
    set_reviewer_id(reviewer_id: string): void
    set_reviewer_name(reviewer_name: string): void
    set_summary(summary: string): void
    set_version(version: string): void
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
    connect(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Review_ConstructProps)
    _init (config?: Review_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Review
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screenshot {
    /* Fields of AppStreamGlib.Screenshot */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Screenshot */
    add_image(image: Image): void
    equal(screenshot2: Screenshot): boolean
    get_caption(locale?: string | null): string
    get_image(width: number, height: number): Image
    get_image_for_locale(locale: string | null, width: number, height: number): Image
    get_images(): Image[]
    get_images_for_locale(locale: string): Image[]
    get_kind(): ScreenshotKind
    get_priority(): number
    get_source(): Image
    set_caption(locale: string | null, caption: string): void
    set_kind(kind: ScreenshotKind): void
    set_priority(priority: number): void
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
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Screenshot
    static kind_from_string(kind: string): ScreenshotKind
    static kind_to_string(kind: ScreenshotKind): string
    static $gtype: GObject.Type
}
export interface Store_ConstructProps extends GObject.Object_ConstructProps {
}
export class Store {
    /* Fields of AppStreamGlib.Store */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Store */
    add_app(app: App): void
    add_apps(apps: App[]): void
    add_filter(kind: AppKind): void
    add_metadata_index(key: string): void
    convert_icons(kind: IconKind): boolean
    dup_apps(): App[]
    dup_apps_by_id_merge(id: string): App[]
    from_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
    from_file(file: Gio.File, icon_root?: string | null, cancellable?: Gio.Cancellable | null): boolean
    from_xml(data: string, icon_root?: string | null): boolean
    get_add_flags(): number
    get_api_version(): number
    get_app_by_id(id: string): App
    get_app_by_id_ignore_prefix(id: string): App
    get_app_by_id_with_fallbacks(id: string): App
    get_app_by_launchable(kind: LaunchableKind, value: string): App
    get_app_by_pkgname(pkgname: string): App
    get_app_by_pkgnames(pkgnames: string): App
    get_app_by_provide(kind: ProvideKind, value: string): App
    get_app_by_unique_id(unique_id: string, search_flags: number): App
    get_apps(): App[]
    get_apps_by_id(id: string): App[]
    get_apps_by_id_merge(id: string): App[]
    get_apps_by_metadata(key: string, value: string): App[]
    get_apps_by_provide(kind: ProvideKind, value: string): App[]
    get_builder_id(): string
    get_destdir(): string
    get_origin(): string
    get_search_match(): number
    get_size(): number
    get_watch_flags(): number
    load(flags: number, cancellable?: Gio.Cancellable | null): boolean
    load_async(flags: StoreLoadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): boolean
    load_path(path: string, cancellable?: Gio.Cancellable | null): boolean
    load_path_async(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_path_finish(result: Gio.AsyncResult): boolean
    load_search_cache(): void
    remove_all(): void
    remove_app(app: App): void
    remove_app_by_id(id: string): void
    remove_apps_with_veto(): void
    remove_filter(kind: AppKind): void
    set_add_flags(add_flags: number): void
    set_api_version(api_version: number): void
    set_builder_id(builder_id: string): void
    set_destdir(destdir: string): void
    set_origin(origin: string): void
    set_search_match(search_match: number): void
    set_watch_flags(watch_flags: number): void
    to_file(file: Gio.File, flags: number, cancellable?: Gio.Cancellable | null): boolean
    to_xml(flags: number): GLib.String
    validate(flags: number): Problem[]
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
    /* Virtual methods of AppStreamGlib.Store */
    vfunc_app_added(app: App): void
    vfunc_app_changed(app: App): void
    vfunc_app_removed(app: App): void
    vfunc_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppStreamGlib.Store */
    connect(sigName: "app-added", callback: (($obj: Store, app: App) => void)): number
    connect_after(sigName: "app-added", callback: (($obj: Store, app: App) => void)): number
    emit(sigName: "app-added", app: App): void
    connect(sigName: "app-changed", callback: (($obj: Store, app: App) => void)): number
    connect_after(sigName: "app-changed", callback: (($obj: Store, app: App) => void)): number
    emit(sigName: "app-changed", app: App): void
    connect(sigName: "app-removed", callback: (($obj: Store, app: App) => void)): number
    connect_after(sigName: "app-removed", callback: (($obj: Store, app: App) => void)): number
    emit(sigName: "app-removed", app: App): void
    connect(sigName: "changed", callback: (($obj: Store) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Store) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Store_ConstructProps)
    _init (config?: Store_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Store
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Suggest_ConstructProps extends GObject.Object_ConstructProps {
}
export class Suggest {
    /* Fields of AppStreamGlib.Suggest */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Suggest */
    add_id(id: string): void
    get_ids(): string[]
    get_kind(): SuggestKind
    set_kind(kind: SuggestKind): void
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
    connect(sigName: "notify", callback: (($obj: Suggest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Suggest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Suggest_ConstructProps)
    _init (config?: Suggest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Suggest
    static kind_from_string(kind: string): SuggestKind
    static kind_to_string(kind: SuggestKind): string
    static $gtype: GObject.Type
}
export interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Translation {
    /* Fields of AppStreamGlib.Translation */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamGlib.Translation */
    get_id(): string
    get_kind(): TranslationKind
    set_id(id: string): void
    set_kind(kind: TranslationKind): void
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
    connect(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Translation_ConstructProps)
    _init (config?: Translation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Translation
    static kind_from_string(kind: string): TranslationKind
    static kind_to_string(kind: TranslationKind): string
    static $gtype: GObject.Type
}
export abstract class AgreementClass {
    /* Fields of AppStreamGlib.AgreementClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AgreementSectionClass {
    /* Fields of AppStreamGlib.AgreementSectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AppClass {
    /* Fields of AppStreamGlib.AppClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BundleClass {
    /* Fields of AppStreamGlib.BundleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChecksumClass {
    /* Fields of AppStreamGlib.ChecksumClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContentRatingClass {
    /* Fields of AppStreamGlib.ContentRatingClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FormatClass {
    /* Fields of AppStreamGlib.FormatClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IconClass {
    /* Fields of AppStreamGlib.IconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of AppStreamGlib.ImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LaunchableClass {
    /* Fields of AppStreamGlib.LaunchableClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProblemClass {
    /* Fields of AppStreamGlib.ProblemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProvideClass {
    /* Fields of AppStreamGlib.ProvideClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReleaseClass {
    /* Fields of AppStreamGlib.ReleaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RequireClass {
    /* Fields of AppStreamGlib.RequireClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReviewClass {
    /* Fields of AppStreamGlib.ReviewClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of AppStreamGlib.ScreenshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StoreClass {
    /* Fields of AppStreamGlib.StoreClass */
    parent_class: GObject.ObjectClass
    changed: (store: Store) => void
    app_added: (store: Store, app: App) => void
    app_removed: (store: Store, app: App) => void
    app_changed: (store: Store, app: App) => void
    static name: string
}
export abstract class SuggestClass {
    /* Fields of AppStreamGlib.SuggestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TranslationClass {
    /* Fields of AppStreamGlib.TranslationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export type AppSourceKind = FormatKind
export type ImageAlphaFlags = number
export type Node = GLib.Node