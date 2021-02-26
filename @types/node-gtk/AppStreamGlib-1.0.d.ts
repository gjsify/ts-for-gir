/**
 * AppStreamGlib-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace AppStreamGlib {

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
export function idKindFromString(idKind: string): IdKind
export function idKindToString(idKind: IdKind): string
export function infErrorQuark(): GLib.Quark
export function infGetDriverVersion(keyfile: GLib.KeyFile, timestamp: number): string
export function infLoadData(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean
export function infLoadFile(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean
export function kudoKindFromString(kudoKind: string): KudoKind
export function kudoKindToString(kudoKind: KudoKind): string
export function markupConvert(markup: string, format: MarkupConvertFormat): string
export function markupConvertFull(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string
export function markupConvertSimple(markup: string): string
export function markupImport(text: string, format: MarkupConvertFormat): string
export function markupStrsplitWords(text: string, lineLen: number): string[]
export function markupValidate(markup: string): boolean
export function nodeErrorQuark(): GLib.Quark
export function nodeGetAttribute(node: GLib.Node, key: string): string
export function nodeGetAttributeAsInt(node: GLib.Node, key: string): number
export function nodeGetAttributeAsUint(node: GLib.Node, key: string): number
export function nodeGetComment(node: GLib.Node): string
export function nodeGetData(node: GLib.Node): string
export function nodeGetLocalized(node: GLib.Node, key: string): GLib.HashTable
export function nodeGetLocalizedBest(node: GLib.Node, key: string): string
export function nodeGetLocalizedUnwrap(node: GLib.Node): GLib.HashTable
export function nodeGetName(node: GLib.Node): string
export function nodeGetTag(node: GLib.Node): Tag
export function nodeInsertHash(parent: GLib.Node, name: string, attrKey: string, hash: GLib.HashTable, insertFlags: NodeInsertFlags): void
export function nodeInsertLocalized(parent: GLib.Node, name: string, localized: GLib.HashTable, insertFlags: NodeInsertFlags): void
export function nodeToXml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String
export function nodeUnref(node: GLib.Node): void
export function sizeKindFromString(sizeKind: string): SizeKind
export function sizeKindToString(sizeKind: SizeKind): string
export function tagFromString(tag: string): Tag
export function tagFromStringFull(tag: string, flags: TagFlags): Tag
export function tagToString(tag: Tag): string
export function urgencyKindFromString(urgencyKind: string): UrgencyKind
export function urgencyKindToString(urgencyKind: UrgencyKind): string
export function urlKindFromString(urlKind: string): UrlKind
export function urlKindToString(urlKind: UrlKind): string
export function utilsAppstreamIdBuild(str: string): string
export function utilsAppstreamIdValid(str: string): boolean
export function utilsErrorQuark(): GLib.Quark
export function utilsFindIconFilename(destdir: string, search: string): string
export function utilsFindIconFilenameFull(destdir: string, search: string, flags: UtilsFindIconFlag): string
export function utilsGuidFromData(namespaceId: string, data: number, dataLen: number): string
export function utilsGuidFromString(str: string): string
export function utilsGuidIsValid(guid: string): boolean
export function utilsInstallFilename(location: UtilsLocation, filename: string, origin: string, destdir: string): boolean
export function utilsIsBlacklistedId(desktopId: string): boolean
export function utilsIsCategoryId(categoryId: string): boolean
export function utilsIsEnvironmentId(environmentId: string): boolean
export function utilsIsSpdxLicense(license: string): boolean
export function utilsIsSpdxLicenseId(licenseId: string): boolean
export function utilsIsStockIconName(name: string): boolean
export function utilsLicenseToSpdx(license: string): string
export function utilsSearchTokenValid(token: string): boolean
export function utilsSearchTokenize(search: string): string[]
export function utilsSpdxLicenseDetokenize(licenseTokens: string): string
export function utilsSpdxLicenseTokenize(license: string): string[]
export function utilsStringReplace(string: GLib.String, search: string, replace: string): number
export function utilsUniqueIdBuild(scope: AppScope, bundleKind: BundleKind, origin: string, kind: AppKind, id: string, branch: string): string
export function utilsUniqueIdEqual(uniqueId1: string, uniqueId2: string): boolean
export function utilsUniqueIdHash(uniqueId: string): number
export function utilsUniqueIdMatch(uniqueId1: string, uniqueId2: string, matchFlags: UniqueIdMatchFlags): boolean
export function utilsUniqueIdValid(uniqueId: string): boolean
export function utilsVercmp(versionA: string, versionB: string): number
export function utilsVercmpFull(versionA: string, versionB: string, flags: VersionCompareFlag): number
export function utilsVersionFromUint16(val: number, flags: VersionParseFlag): string
export function utilsVersionFromUint32(val: number, flags: VersionParseFlag): string
export function utilsVersionParse(version: string): string
export interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
export class Agreement {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Agreement */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Agreement */
    addSection(agreementSection: AgreementSection): void
    getKind(): AgreementKind
    getSectionDefault(): AgreementSection
    getSections(): AgreementSection[]
    getVersionId(): string
    setKind(kind: AgreementKind): void
    setVersionId(versionId: string): void
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
    connect(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Agreement_ConstructProps)
    _init (config?: Agreement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Agreement
    static kindFromString(value: string): AgreementKind
    static kindToString(value: AgreementKind): string
    static $gtype: GObject.Type
}
export interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
export class AgreementSection {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSection */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.AgreementSection */
    getDescription(locale?: string | null): string
    getKind(): string
    getName(locale?: string | null): string
    setDescription(locale: string | null, desc: string): void
    setKind(kind: string): void
    setName(locale: string | null, name: string): void
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
    connect(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AgreementSection_ConstructProps)
    _init (config?: AgreementSection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AgreementSection
    static $gtype: GObject.Type
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
}
export class App {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.App */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.App */
    addAddon(addon: App): void
    addAgreement(agreement: Agreement): void
    addArch(arch: string): void
    addBundle(bundle: Bundle): void
    addCategory(category: string): void
    addCompulsoryForDesktop(compulsoryForDesktop: string): void
    addContentRating(contentRating: ContentRating): void
    addExtends(extends_: string): void
    addFormat(format: Format): void
    addIcon(icon: Icon): void
    addKeyword(locale: string | null, keyword: string): void
    addKudo(kudo: string): void
    addKudoKind(kudoKind: KudoKind): void
    addLanguage(percentage: number, locale?: string | null): void
    addLaunchable(launchable: Launchable): void
    addMetadata(key: string, value?: string | null): void
    addMimetype(mimetype: string): void
    addPermission(permission: string): void
    addPkgname(pkgname: string): void
    addProvide(provide: Provide): void
    addQuirk(quirk: AppQuirk): void
    addRelease(release: Release): void
    addRequire(require: Require): void
    addReview(review: Review): void
    addScreenshot(screenshot: Screenshot): void
    addSuggest(suggest: Suggest): void
    addTranslation(translation: Translation): void
    addUrl(urlKind: UrlKind, url: string): void
    convertIcons(kind: IconKind): boolean
    equal(app2: App): boolean
    getAddons(): App[]
    getAgreementByKind(kind: AgreementKind): Agreement
    getAgreementDefault(): Agreement
    getArchitectures(): string[]
    getBranch(): string
    getBundleDefault(): Bundle
    getBundles(): Bundle[]
    getCategories(): string[]
    getComment(locale?: string | null): string
    getComments(): GLib.HashTable
    getCompulsoryForDesktops(): string[]
    getContentRating(kind: string): ContentRating
    getContentRatings(): ContentRating[]
    getDescription(locale?: string | null): string
    getDescriptions(): GLib.HashTable
    getDeveloperName(locale?: string | null): string
    getDeveloperNames(): GLib.HashTable
    getExtends(): string[]
    getFormatByFilename(filename: string): Format
    getFormatByKind(kind: FormatKind): Format
    getFormatDefault(): Format
    getFormats(): string[]
    getIconDefault(): Icon
    getIconForSize(width: number, height: number): Icon
    getIconPath(): string
    getIcons(): Icon[]
    getId(): string
    getIdFilename(): string
    getIdKind(): IdKind
    getIdNoPrefix(): string
    getKeywords(locale?: string | null): string[]
    getKind(): AppKind
    getKudos(): string[]
    getLanguage(locale?: string | null): number
    getLanguages(): string[]
    getLaunchableByKind(kind: LaunchableKind): Launchable
    getLaunchableDefault(): Launchable
    getLaunchables(): Launchable[]
    getMergeKind(): AppMergeKind
    getMetadata(): GLib.HashTable
    getMetadataItem(key: string): string
    getMetadataLicense(): string
    getMimetypes(): string[]
    getName(locale?: string | null): string
    getNames(): GLib.HashTable
    getOrigin(): string
    getPermissions(): string[]
    getPkgnameDefault(): string
    getPkgnames(): string[]
    getPriority(): number
    getProjectGroup(): string
    getProjectLicense(): string
    getProvides(): Provide[]
    getRelease(version: string): Release
    getReleaseByVersion(version: string): Release
    getReleaseDefault(): Release
    getReleases(): Release[]
    getRequireByValue(kind: RequireKind, value: string): Require
    getRequires(): Require[]
    getReviews(): Screenshot[]
    getScope(): AppScope
    getScreenshotDefault(): Screenshot
    getScreenshots(): Screenshot[]
    getSearchMatch(): number
    getSourceFile(): string
    getSourceKind(): FormatKind
    getSourcePkgname(): string
    getState(): AppState
    getSuggests(): Suggest[]
    getTranslations(): Translation[]
    getTrustFlags(): number
    getUniqueId(): string
    getUpdateContact(): string
    getUrlItem(urlKind: UrlKind): string
    getUrls(): GLib.HashTable
    getVetos(): string[]
    hasCategory(category: string): boolean
    hasCompulsoryForDesktop(desktop: string): boolean
    hasKudo(kudo: string): boolean
    hasKudoKind(kudo: KudoKind): boolean
    hasPermission(permission: string): boolean
    hasQuirk(quirk: AppQuirk): boolean
    parseData(data: any, flags: number): boolean
    parseFile(filename: string, flags: number): boolean
    removeCategory(category: string): void
    removeFormat(format: Format): void
    removeKudo(kudo: string): void
    removeMetadata(key: string): void
    removeVeto(description: string): void
    searchMatches(search: string): number
    searchMatchesAll(search: string): number
    setBranch(branch: string): void
    setComment(locale: string | null, comment: string): void
    setDescription(locale: string | null, description: string): void
    setDeveloperName(locale: string | null, developerName: string): void
    setIconPath(iconPath: string): void
    setId(id: string): void
    setIdKind(idKind: IdKind): void
    setKind(kind: AppKind): void
    setMergeKind(mergeKind: AppMergeKind): void
    setMetadataLicense(metadataLicense: string): void
    setName(locale: string | null, name: string): void
    setOrigin(origin: string): void
    setPriority(priority: number): void
    setProjectGroup(projectGroup: string): void
    setProjectLicense(projectLicense: string): void
    setScope(scope: AppScope): void
    setSearchMatch(searchMatch: number): void
    setSourceFile(sourceFile: string): void
    setSourceKind(sourceKind: FormatKind): void
    setSourcePkgname(sourcePkgname: string): void
    setState(state: AppState): void
    setTrustFlags(trustFlags: number): void
    setUpdateContact(updateContact: string): void
    subsume(donor: App): void
    subsumeFull(donor: App, flags: number): void
    toFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    toXml(): GLib.String
    validate(flags: number): Problem[]
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
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): App
    static errorQuark(): GLib.Quark
    static guessSourceKind(filename: string): FormatKind
    static kindFromString(kind: string): AppKind
    static kindToString(kind: AppKind): string
    static mergeKindFromString(mergeKind: string): AppMergeKind
    static mergeKindToString(mergeKind: AppMergeKind): string
    static scopeFromString(scope: string): AppScope
    static scopeToString(scope: AppScope): string
    static sourceKindFromString(sourceKind: string): FormatKind
    static sourceKindToString(sourceKind: FormatKind): string
    static stateToString(state: AppState): string
    static $gtype: GObject.Type
}
export interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
export class Bundle {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Bundle */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Bundle */
    getId(): string
    getKind(): BundleKind
    getRuntime(): string
    getSdk(): string
    setId(id: string): void
    setKind(kind: BundleKind): void
    setRuntime(runtime: string): void
    setSdk(sdk: string): void
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
    connect(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Bundle_ConstructProps)
    _init (config?: Bundle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bundle
    static kindFromString(kind: string): BundleKind
    static kindToString(kind: BundleKind): string
    static $gtype: GObject.Type
}
export interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
export class Checksum {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Checksum */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Checksum */
    getFilename(): string
    getKind(): GLib.ChecksumType
    getTarget(): ChecksumTarget
    getValue(): string
    setFilename(filename: string): void
    setKind(kind: GLib.ChecksumType): void
    setTarget(target: ChecksumTarget): void
    setValue(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Checksum_ConstructProps)
    _init (config?: Checksum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Checksum
    static targetFromString(target: string): ChecksumTarget
    static targetToString(target: ChecksumTarget): string
    static $gtype: GObject.Type
}
export interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentRating {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ContentRating */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.ContentRating */
    addAttribute(id: string, value: ContentRatingValue): void
    getKind(): string
    getMinimumAge(): number
    getRatingIds(): string[]
    getValue(id: string): ContentRatingValue
    setKind(kind: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ContentRating_ConstructProps)
    _init (config?: ContentRating_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentRating
    static attributeFromCsmAge(id: string, age: number): ContentRatingValue
    static attributeGetDescription(id: string, value: ContentRatingValue): string
    static attributeToCsmAge(id: string, value: ContentRatingValue): number
    static getAllRatingIds(): string[]
    static systemFormatAge(system: ContentRatingSystem, age: number): string | null
    static systemFromLocale(locale: string): ContentRatingSystem
    static systemGetCsmAges(system: ContentRatingSystem): number[]
    static systemGetFormattedAges(system: ContentRatingSystem): string[]
    static systemToString(system: ContentRatingSystem): string | null
    static valueFromString(value: string): ContentRatingValue
    static valueToString(value: ContentRatingValue): string
    static $gtype: GObject.Type
}
export interface Format_ConstructProps extends GObject.Object_ConstructProps {
}
export class Format {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Format */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Format */
    equal(format2: Format): boolean
    getFilename(): string
    getKind(): FormatKind
    setFilename(filename: string): void
    setKind(kind: FormatKind): void
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
    connect(sigName: "notify", callback: (($obj: Format, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Format_ConstructProps)
    _init (config?: Format_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Format
    static guessKind(filename: string): FormatKind
    static kindFromString(kind: string): FormatKind
    static kindToString(kind: FormatKind): string
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
export class Icon {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Icon */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Icon */
    convertToKind(kind: IconKind): boolean
    getFilename(): string
    getHeight(): number
    getKind(): IconKind
    getName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getPrefix(): string
    getScale(): number
    getUrl(): string
    getWidth(): number
    load(flags: IconLoadFlags): boolean
    setFilename(filename: string): void
    setHeight(height: number): void
    setKind(kind: IconKind): void
    setName(name: string): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setPrefix(prefix: string): void
    setScale(scale: number): void
    setUrl(url: string): void
    setWidth(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Icon
    static errorQuark(): GLib.Quark
    static kindFromString(iconKind: string): IconKind
    static kindToString(iconKind: IconKind): string
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Image */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Image */
    equal(image2: Image): boolean
    getBasename(): string
    getHeight(): number
    getKind(): ImageKind
    getLocale(): string
    getMd5(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getUrl(): string
    getWidth(): number
    loadFilename(filename: string): boolean
    loadFilenameFull(filename: string, destSize: number, srcSizeMin: number, flags: ImageLoadFlags): boolean
    saveFilename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean
    savePixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf
    setBasename(basename: string): void
    setHeight(height: number): void
    setKind(kind: ImageKind): void
    setLocale(locale: string): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setUrl(url: string): void
    setWidth(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Image
    static kindFromString(kind: string): ImageKind
    static kindToString(kind: ImageKind): string
    static $gtype: GObject.Type
}
export interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Launchable {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Launchable */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Launchable */
    getKind(): LaunchableKind
    getValue(): string
    setKind(kind: LaunchableKind): void
    setValue(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Launchable_ConstructProps)
    _init (config?: Launchable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Launchable
    static kindFromString(kind: string): LaunchableKind
    static kindToString(kind: LaunchableKind): string
    static $gtype: GObject.Type
}
export interface Problem_ConstructProps extends GObject.Object_ConstructProps {
}
export class Problem {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Problem */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Problem */
    getKind(): ProblemKind
    getLineNumber(): number
    getMessage(): string
    setKind(kind: ProblemKind): void
    setLineNumber(lineNumber: number): void
    setMessage(message: string): void
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
    connect(sigName: "notify", callback: (($obj: Problem, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Problem_ConstructProps)
    _init (config?: Problem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Problem
    static kindToString(kind: ProblemKind): string
    static $gtype: GObject.Type
}
export interface Provide_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provide {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Provide */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Provide */
    getKind(): ProvideKind
    getValue(): string
    setKind(kind: ProvideKind): void
    setValue(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Provide, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Provide_ConstructProps)
    _init (config?: Provide_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Provide
    static kindFromString(kind: string): ProvideKind
    static kindToString(kind: ProvideKind): string
    static $gtype: GObject.Type
}
export interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
export class Release {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Release */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Release */
    addChecksum(checksum: Checksum): void
    addLocation(location: string): void
    getBlob(filename: string): any
    getChecksumByFn(fn: string): Checksum
    getChecksumByTarget(target: ChecksumTarget): Checksum
    getChecksums(): Checksum[]
    getDescription(locale?: string | null): string
    getInstallDuration(): number
    getKind(): ReleaseKind
    getLocationDefault(): string
    getLocations(): string[]
    getSize(kind: SizeKind): number
    getState(): ReleaseState
    getTimestamp(): number
    getUrgency(): UrgencyKind
    getUrl(urlKind: UrlKind): string
    getVersion(): string
    setBlob(filename: string, blob: any): void
    setDescription(locale: string | null, description: string): void
    setInstallDuration(installDuration: number): void
    setKind(kind: ReleaseKind): void
    setSize(kind: SizeKind, size: number): void
    setState(state: ReleaseState): void
    setTimestamp(timestamp: number): void
    setUrgency(urgency: UrgencyKind): void
    setUrl(urlKind: UrlKind, url: string): void
    setVersion(version: string): void
    vercmp(rel2: Release): number
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
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    static kindFromString(kindStr: string): ReleaseKind
    static kindToString(kind: ReleaseKind): string
    static stateFromString(state: string): ReleaseState
    static stateToString(state: ReleaseState): string
    static $gtype: GObject.Type
}
export interface Require_ConstructProps extends GObject.Object_ConstructProps {
}
export class Require {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Require */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Require */
    equal(require2: Require): boolean
    getCompare(): RequireCompare
    getKind(): RequireKind
    getValue(): string
    getVersion(): string
    setCompare(compare: RequireCompare): void
    setKind(kind: RequireKind): void
    setValue(value: string): void
    setVersion(version: string): void
    versionCompare(version: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Require, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Require_ConstructProps)
    _init (config?: Require_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Require
    static compareFromString(compare: string): RequireCompare
    static compareToString(compare: RequireCompare): string
    static kindFromString(kind: string): RequireKind
    static kindToString(kind: RequireKind): string
    static $gtype: GObject.Type
}
export interface Review_ConstructProps extends GObject.Object_ConstructProps {
    date?: Review
    description?: string
    flags?: number
    id?: string
    locale?: string
    rating?: number
    reviewerId?: string
    reviewerName?: string
    summary?: string
    version?: string
}
export class Review {
    /* Properties of AppStreamGlib-1.0.AppStreamGlib.Review */
    date: Review
    description: string
    flags: number
    id: string
    locale: string
    rating: number
    reviewerId: string
    reviewerName: string
    summary: string
    version: string
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Review */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Review */
    addFlags(flags: ReviewFlags): void
    addMetadata(key: string, value: string): void
    equal(review2: Review): boolean
    getDate(): GLib.DateTime
    getDescription(): string
    getFlags(): ReviewFlags
    getId(): string
    getLocale(): string
    getMetadataItem(key: string): string
    getPriority(): number
    getRating(): number
    getReviewerId(): string
    getReviewerName(): string
    getSummary(): string
    getVersion(): string
    setDate(date: GLib.DateTime): void
    setDescription(description: string): void
    setFlags(flags: ReviewFlags): void
    setId(id: string): void
    setLocale(locale: string): void
    setPriority(priority: number): void
    setRating(rating: number): void
    setReviewerId(reviewerId: string): void
    setReviewerName(reviewerName: string): void
    setSummary(summary: string): void
    setVersion(version: string): void
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
    connect(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reviewer-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reviewer-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reviewer-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reviewer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reviewer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reviewer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Review_ConstructProps)
    _init (config?: Review_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Review
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screenshot {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Screenshot */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Screenshot */
    addImage(image: Image): void
    equal(screenshot2: Screenshot): boolean
    getCaption(locale?: string | null): string
    getImage(width: number, height: number): Image
    getImageForLocale(locale: string | null, width: number, height: number): Image
    getImages(): Image[]
    getImagesForLocale(locale: string): Image[]
    getKind(): ScreenshotKind
    getPriority(): number
    getSource(): Image
    setCaption(locale: string | null, caption: string): void
    setKind(kind: ScreenshotKind): void
    setPriority(priority: number): void
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
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Screenshot
    static kindFromString(kind: string): ScreenshotKind
    static kindToString(kind: ScreenshotKind): string
    static $gtype: GObject.Type
}
export interface Store_ConstructProps extends GObject.Object_ConstructProps {
}
export class Store {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Store */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Store */
    addApp(app: App): void
    addApps(apps: App[]): void
    addFilter(kind: AppKind): void
    addMetadataIndex(key: string): void
    convertIcons(kind: IconKind): boolean
    dupApps(): App[]
    dupAppsByIdMerge(id: string): App[]
    fromBytes(bytes: any, cancellable?: Gio.Cancellable | null): boolean
    fromFile(file: Gio.File, iconRoot?: string | null, cancellable?: Gio.Cancellable | null): boolean
    fromXml(data: string, iconRoot?: string | null): boolean
    getAddFlags(): number
    getApiVersion(): number
    getAppById(id: string): App
    getAppByIdIgnorePrefix(id: string): App
    getAppByIdWithFallbacks(id: string): App
    getAppByLaunchable(kind: LaunchableKind, value: string): App
    getAppByPkgname(pkgname: string): App
    getAppByPkgnames(pkgnames: string): App
    getAppByProvide(kind: ProvideKind, value: string): App
    getAppByUniqueId(uniqueId: string, searchFlags: number): App
    getApps(): App[]
    getAppsById(id: string): App[]
    getAppsByIdMerge(id: string): App[]
    getAppsByMetadata(key: string, value: string): App[]
    getAppsByProvide(kind: ProvideKind, value: string): App[]
    getBuilderId(): string
    getDestdir(): string
    getOrigin(): string
    getSearchMatch(): number
    getSize(): number
    getWatchFlags(): number
    load(flags: number, cancellable?: Gio.Cancellable | null): boolean
    loadAsync(flags: StoreLoadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    loadPath(path: string, cancellable?: Gio.Cancellable | null): boolean
    loadPathAsync(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadPathFinish(result: Gio.AsyncResult): boolean
    loadSearchCache(): void
    removeAll(): void
    removeApp(app: App): void
    removeAppById(id: string): void
    removeAppsWithVeto(): void
    removeFilter(kind: AppKind): void
    setAddFlags(addFlags: number): void
    setApiVersion(apiVersion: number): void
    setBuilderId(builderId: string): void
    setDestdir(destdir: string): void
    setOrigin(origin: string): void
    setSearchMatch(searchMatch: number): void
    setWatchFlags(watchFlags: number): void
    toFile(file: Gio.File, flags: number, cancellable?: Gio.Cancellable | null): boolean
    toXml(flags: number): GLib.String
    validate(flags: number): Problem[]
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
    /* Signals of AppStreamGlib-1.0.AppStreamGlib.Store */
    connect(sigName: "app-added", callback: (($obj: Store, app: App) => void)): number
    on(sigName: "app-added", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-added", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-added", callback: (app: App) => void): NodeJS.EventEmitter
    emit(sigName: "app-added", app: App): void
    connect(sigName: "app-changed", callback: (($obj: Store, app: App) => void)): number
    on(sigName: "app-changed", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-changed", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-changed", callback: (app: App) => void): NodeJS.EventEmitter
    emit(sigName: "app-changed", app: App): void
    connect(sigName: "app-removed", callback: (($obj: Store, app: App) => void)): number
    on(sigName: "app-removed", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-removed", callback: (app: App) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-removed", callback: (app: App) => void): NodeJS.EventEmitter
    emit(sigName: "app-removed", app: App): void
    connect(sigName: "changed", callback: (($obj: Store) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Store_ConstructProps)
    _init (config?: Store_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Store
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Suggest_ConstructProps extends GObject.Object_ConstructProps {
}
export class Suggest {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Suggest */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Suggest */
    addId(id: string): void
    getIds(): string[]
    getKind(): SuggestKind
    setKind(kind: SuggestKind): void
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
    connect(sigName: "notify", callback: (($obj: Suggest, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Suggest_ConstructProps)
    _init (config?: Suggest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Suggest
    static kindFromString(kind: string): SuggestKind
    static kindToString(kind: SuggestKind): string
    static $gtype: GObject.Type
}
export interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Translation {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.Translation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.Translation */
    getId(): string
    getKind(): TranslationKind
    setId(id: string): void
    setKind(kind: TranslationKind): void
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
    connect(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Translation_ConstructProps)
    _init (config?: Translation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Translation
    static kindFromString(kind: string): TranslationKind
    static kindToString(kind: TranslationKind): string
    static $gtype: GObject.Type
}
export abstract class AgreementClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.AgreementClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class AgreementSectionClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.AgreementSectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class AppClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.AppClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class BundleClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.BundleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ChecksumClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ChecksumClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ContentRatingClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ContentRatingClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FormatClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.FormatClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class IconClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.IconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class LaunchableClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.LaunchableClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProblemClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ProblemClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProvideClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ProvideClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ReleaseClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ReleaseClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class RequireClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.RequireClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ReviewClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ReviewClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.ScreenshotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class StoreClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.StoreClass */
    parentClass: GObject.ObjectClass
    changed: (store: Store) => void
    appAdded: (store: Store, app: App) => void
    appRemoved: (store: Store, app: App) => void
    appChanged: (store: Store, app: App) => void
    static name: string
}
export abstract class SuggestClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.SuggestClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class TranslationClass {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.TranslationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export type AppSourceKind = FormatKind
export type ImageAlphaFlags = number
export type Node = GLib.Node
}