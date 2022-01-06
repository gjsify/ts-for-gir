/**
 * AppStream-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace AppStream {

enum AgreementKind {
    UNKNOWN,
    GENERIC,
    EULA,
    PRIVACY,
}
enum ArtifactKind {
    UNKNOWN,
    SOURCE,
    BINARY,
}
enum BundleKind {
    UNKNOWN,
    PACKAGE,
    LIMBA,
    FLATPAK,
    APPIMAGE,
    SNAP,
    TARBALL,
    CABINET,
}
enum ChecksumKind {
    NONE,
    SHA1,
    SHA256,
    BLAKE2B,
    BLAKE2S,
}
enum ComponentKind {
    UNKNOWN,
    GENERIC,
    DESKTOP_APP,
    CONSOLE_APP,
    WEB_APP,
    ADDON,
    FONT,
    CODEC,
    INPUT_METHOD,
    FIRMWARE,
    DRIVER,
    LOCALIZATION,
    SERVICE,
    REPOSITORY,
    OPERATING_SYSTEM,
    ICON_THEME,
    RUNTIME,
}
enum ComponentScope {
    UNKNOWN,
    SYSTEM,
    USER,
}
enum ContentRatingSystem {
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
enum ContentRatingValue {
    UNKNOWN,
    NONE,
    MILD,
    MODERATE,
    INTENSE,
}
enum ControlKind {
    UNKNOWN,
    POINTING,
    KEYBOARD,
    CONSOLE,
    TOUCH,
    GAMEPAD,
    VOICE,
    VISION,
    TV_REMOTE,
    TABLET,
}
enum DisplayLengthKind {
    UNKNOWN,
    XSMALL,
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
}
enum DisplaySideKind {
    UNKNOWN,
    SHORTEST,
    LONGEST,
}
enum FormatKind {
    UNKNOWN,
    XML,
    YAML,
    DESKTOP_ENTRY,
}
enum FormatStyle {
    UNKNOWN,
    METAINFO,
    COLLECTION,
}
enum FormatVersion {
    V0_6,
    V0_7,
    V0_8,
    V0_9,
    V0_10,
    V0_11,
    V0_12,
    V0_13,
    V0_14,
    UNKNOWN,
}
enum IconKind {
    UNKNOWN,
    CACHED,
    STOCK,
    LOCAL,
    REMOTE,
}
enum ImageKind {
    UNKNOWN,
    SOURCE,
    THUMBNAIL,
}
enum IssueKind {
    UNKNOWN,
    GENERIC,
    CVE,
}
enum IssueSeverity {
    UNKNOWN,
    ERROR,
    WARNING,
    INFO,
    PEDANTIC,
}
enum LaunchableKind {
    UNKNOWN,
    DESKTOP_ID,
    SERVICE,
    COCKPIT_MANIFEST,
    URL,
}
enum MergeKind {
    NONE,
    REPLACE,
    APPEND,
    REMOVE_COMPONENT,
}
enum MetadataError {
    FAILED,
    PARSE,
    FORMAT_UNEXPECTED,
    NO_COMPONENT,
    VALUE_MISSING,
}
enum MetadataLocation {
    SHARED,
    STATE,
    CACHE,
    USER,
}
enum PoolError {
    FAILED,
    TARGET_NOT_WRITABLE,
    INCOMPLETE,
    COLLISION,
    OLD_CACHE,
}
enum ProvidedKind {
    UNKNOWN,
    LIBRARY,
    BINARY,
    MEDIATYPE,
    FONT,
    MODALIAS,
    PYTHON_2,
    PYTHON,
    DBUS_SYSTEM,
    DBUS_USER,
    FIRMWARE_RUNTIME,
    FIRMWARE_FLASHED,
    ID,
}
enum RelationCompare {
    UNKNOWN,
    EQ,
    NE,
    LT,
    GT,
    LE,
    GE,
}
enum RelationItemKind {
    UNKNOWN,
    ID,
    MODALIAS,
    KERNEL,
    MEMORY,
    FIRMWARE,
    CONTROL,
    DISPLAY_LENGTH,
    HARDWARE,
}
enum RelationKind {
    UNKNOWN,
    REQUIRES,
    RECOMMENDS,
    SUPPORTS,
}
enum ReleaseKind {
    UNKNOWN,
    STABLE,
    DEVELOPMENT,
}
enum ReleaseUrlKind {
    UNKNOWN,
    DETAILS,
}
enum ScreenshotKind {
    UNKNOWN,
    DEFAULT,
    EXTRA,
}
enum ScreenshotMediaKind {
    UNKNOWN,
    IMAGE,
    VIDEO,
}
enum SizeKind {
    UNKNOWN,
    DOWNLOAD,
    INSTALLED,
}
enum SuggestedKind {
    UNKNOWN,
    UPSTREAM,
    HEURISTIC,
}
enum TranslationKind {
    UNKNOWN,
    GETTEXT,
    QT,
}
enum UrgencyKind {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
enum UrlKind {
    UNKNOWN,
    HOMEPAGE,
    BUGTRACKER,
    FAQ,
    HELP,
    DONATION,
    TRANSLATE,
    CONTACT,
}
enum UtilsError {
    FAILED,
}
enum VideoCodecKind {
    UNKNOWN,
    VP9,
    AV1,
}
enum VideoContainerKind {
    UNKNOWN,
    MKV,
    WEBM,
}
enum CacheFlags {
    NONE,
    USE_USER,
    USE_SYSTEM,
    NO_CLEAR,
    REFRESH_SYSTEM,
}
enum DataIdMatchFlags {
    NONE,
    SCOPE,
    BUNDLE_KIND,
    ORIGIN,
    ID,
    BRANCH,
}
enum ParseFlags {
    NONE,
    IGNORE_MEDIABASEURL,
}
enum PoolFlags {
    NONE,
    LOAD_OS_COLLECTION,
    LOAD_OS_METAINFO,
    LOAD_OS_DESKTOP_FILES,
    LOAD_FLATPAK,
    IGNORE_CACHE_AGE,
    RESOLVE_ADDONS,
    PREFER_OS_METAINFO,
    MONITOR,
}
enum ReviewFlags {
    NONE,
    SELF,
    VOTED,
}
enum SearchTokenMatch {
    NONE,
    MEDIATYPE,
    PKGNAME,
    ORIGIN,
    DESCRIPTION,
    SUMMARY,
    KEYWORD,
    NAME,
    ID,
}
enum ValueFlags {
    NONE,
    DUPLICATE_CHECK,
    NO_TRANSLATION_FALLBACK,
}
enum VercmpFlags {
    NONE,
    IGNORE_EPOCH,
}
export const IMAGE_LARGE_HEIGHT: number
export const IMAGE_LARGE_WIDTH: number
export const IMAGE_NORMAL_HEIGHT: number
export const IMAGE_NORMAL_WIDTH: number
export const IMAGE_THUMBNAIL_HEIGHT: number
export const IMAGE_THUMBNAIL_WIDTH: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
function agreementKindFromString(value: string): AgreementKind
function agreementKindToString(value: AgreementKind): string
function artifactKindFromString(kind: string): ArtifactKind
function artifactKindToString(kind: ArtifactKind): string
function bundleKindFromString(bundleStr: string): BundleKind
function bundleKindToString(kind: BundleKind): string
function checksumKindFromString(kindStr: string): ChecksumKind
function checksumKindToString(kind: ChecksumKind): string
function componentKindFromString(kindStr: string): ComponentKind
function componentKindToString(kind: ComponentKind): string
function componentScopeFromString(scopeStr: string): ComponentScope
function componentScopeToString(scope: ComponentScope): string
function contentRatingSystemFormatAge(system: ContentRatingSystem, age: number): string | null
function contentRatingSystemFromLocale(locale: string): ContentRatingSystem
function contentRatingSystemGetCsmAges(system: ContentRatingSystem): number[]
function contentRatingSystemGetFormattedAges(system: ContentRatingSystem): string[]
function contentRatingSystemToString(system: ContentRatingSystem): string | null
function contentRatingValueFromString(value: string): ContentRatingValue
function contentRatingValueToString(value: ContentRatingValue): string
function controlKindFromString(kindStr: string): ControlKind
function controlKindToString(kind: ControlKind): string
function displayLengthKindFromString(kindStr: string): DisplayLengthKind
function displayLengthKindToString(kind: DisplayLengthKind): string
function displaySideKindFromString(kindStr: string): DisplaySideKind
function displaySideKindToString(kind: DisplaySideKind): string
function formatKindFromString(kindStr: string): FormatKind
function formatKindToString(kind: FormatKind): string
function formatVersionFromString(versionStr: string): FormatVersion
function formatVersionToString(version: FormatVersion): string
function getAppstreamVersion(): string
function getCurrentDistroComponentId(): string
function getDefaultCategories(withSpecial: boolean): Category[]
function getLicenseUrl(license: string): string
function gstringReplace(string: GLib.String, find: string, replace: string): number
function gstringReplace2(string: GLib.String, find: string, replace: string, limit: number): number
function iconKindFromString(kindStr: string): IconKind
function iconKindToString(kind: IconKind): string
function imageKindFromString(kind: string): ImageKind
function imageKindToString(kind: ImageKind): string
function isSpdxLicenseExceptionId(exceptionId: string): boolean
function isSpdxLicenseExpression(license: string): boolean
function isSpdxLicenseId(licenseId: string): boolean
function issueKindFromString(kindStr: string): IssueKind
function issueKindToString(kind: IssueKind): string
function issueSeverityFromString(str: string): IssueSeverity
function issueSeverityToString(severity: IssueSeverity): string
function launchableKindFromString(kindStr: string): LaunchableKind
function launchableKindToString(kind: LaunchableKind): string
function licenseIsFreeLicense(license: string): boolean
function licenseIsMetadataLicense(license: string): boolean
function licenseIsMetadataLicenseId(licenseId: string): boolean
function licenseToSpdxId(license: string): string
function markupConvertSimple(markup: string): string
function markupStrsplitWords(text: string, lineLen: number): string[]
function mergeKindFromString(kindStr: string): MergeKind
function mergeKindToString(kind: MergeKind): string
function metadataErrorQuark(): GLib.Quark
function poolErrorQuark(): GLib.Quark
function providedKindFromString(kindStr: string): ProvidedKind
function providedKindToL10nString(kind: ProvidedKind): string
function providedKindToString(kind: ProvidedKind): string
function relationCompareFromString(compareStr: string): RelationCompare
function relationCompareToString(compare: RelationCompare): string
function relationCompareToSymbolsString(compare: RelationCompare): string
function relationItemKindFromString(kindStr: string): RelationItemKind
function relationItemKindToString(kind: RelationItemKind): string
function relationKindFromString(kindStr: string): RelationKind
function relationKindToString(kind: RelationKind): string
function releaseKindFromString(kindStr: string): ReleaseKind
function releaseKindToString(kind: ReleaseKind): string
function releaseUrlKindFromString(kindStr: string): ReleaseUrlKind
function releaseUrlKindToString(kind: ReleaseUrlKind): string
function screenshotKindFromString(kind: string): ScreenshotKind
function screenshotKindToString(kind: ScreenshotKind): string
function sizeKindFromString(sizeKind: string): SizeKind
function sizeKindToString(sizeKind: SizeKind): string
function spdxLicenseDetokenize(licenseTokens: string): string | null
function spdxLicenseTokenize(license: string): string[] | null
function suggestedKindFromString(kindStr: string): SuggestedKind
function suggestedKindToString(kind: SuggestedKind): string
function translationKindFromString(kindStr: string): TranslationKind
function translationKindToString(kind: TranslationKind): string
function urgencyKindFromString(urgencyKind: string): UrgencyKind
function urgencyKindToString(urgencyKind: UrgencyKind): string
function urlKindFromString(urlKind: string): UrlKind
function urlKindToString(urlKind: UrlKind): string
function utilsBuildDataId(scope: ComponentScope, bundleKind: BundleKind, origin: string, cid: string, branch: string): string
function utilsCompareVersions(a: string, b: string): number
function utilsDataIdEqual(dataId1: string, dataId2: string): boolean
function utilsDataIdGetCid(dataId: string): string
function utilsDataIdHash(dataId: string): number
function utilsDataIdMatch(dataId1: string, dataId2: string, matchFlags: DataIdMatchFlags): boolean
function utilsDataIdValid(dataId: string): boolean
function utilsErrorQuark(): GLib.Quark
function utilsGuessScopeFromPath(path: string): ComponentScope
function utilsInstallMetadataFile(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
function utilsIsCategoryName(categoryName: string): boolean
function utilsIsDesktopEnvironment(desktop: string): boolean
function utilsIsPlatformTriplet(triplet: string): boolean
function utilsIsTld(tld: string): boolean
function utilsLocaleIsCompatible(locale1: string, locale2: string): boolean
function utilsSortComponentsIntoCategories(cpts: Component[], categories: Category[], checkDuplicates: boolean): void
function vercmp(a: string, b: string, flags: VercmpFlags): number
function vercmpSimple(a: string, b: string): number
function versionString(): string
function videoCodecKindFromString(str: string): VideoCodecKind
function videoCodecKindToString(kind: VideoCodecKind): string
function videoContainerKindFromString(str: string): VideoContainerKind
function videoContainerKindToString(kind: VideoContainerKind): string
export interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
class Agreement {
    /* Fields of AppStream-1.0.AppStream.Agreement */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Agreement */
    addSection(agreementSection: AgreementSection): void
    getKind(): AgreementKind
    getSectionDefault(): AgreementSection | null
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
    static $gtype: GObject.Type
}
export interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
class AgreementSection {
    /* Fields of AppStream-1.0.AppStream.AgreementSection */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.AgreementSection */
    getActiveLocale(): string
    getDescription(): string
    getKind(): string
    getName(): string
    setActiveLocale(locale: string): void
    setDescription(desc: string, locale?: string | null): void
    setKind(kind: string): void
    setName(name: string, locale?: string | null): void
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
export interface Artifact_ConstructProps extends GObject.Object_ConstructProps {
}
class Artifact {
    /* Fields of AppStream-1.0.AppStream.Artifact */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Artifact */
    addChecksum(cs: Checksum): void
    addLocation(location: string): void
    getBundleKind(): BundleKind
    getChecksum(kind: ChecksumKind): Checksum | null
    getChecksums(): Checksum[]
    getFilename(): string
    getKind(): ArtifactKind
    getLocations(): string[]
    getPlatform(): string
    getSize(kind: SizeKind): number
    setBundleKind(kind: BundleKind): void
    setFilename(filename: string): void
    setKind(kind: ArtifactKind): void
    setPlatform(platform: string): void
    setSize(size: number, kind: SizeKind): void
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
    connect(sigName: "notify", callback: (($obj: Artifact, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Artifact_ConstructProps)
    _init (config?: Artifact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Artifact
    static $gtype: GObject.Type
}
export interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
class Bundle {
    /* Fields of AppStream-1.0.AppStream.Bundle */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Bundle */
    getId(): string
    getKind(): BundleKind
    setId(id: string): void
    setKind(kind: BundleKind): void
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
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    id?: string
    name?: string
}
class Category {
    /* Properties of AppStream-1.0.AppStream.Category */
    readonly children: object
    icon: string
    id: string
    name: string
    readonly summary: string
    /* Fields of AppStream-1.0.AppStream.Category */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Category */
    addChild(subcat: Category): void
    addComponent(cpt: Component): void
    addDesktopGroup(groupName: string): void
    getChildren(): Category[]
    getComponents(): Component[]
    getDesktopGroups(): string[]
    getIcon(): string
    getId(): string
    getName(): string
    getSummary(): string
    hasChildren(): boolean
    hasComponent(cpt: Component): boolean
    removeChild(subcat: Category): void
    setIcon(value: string): void
    setId(id: string): void
    setName(value: string): void
    setSummary(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Category
    static $gtype: GObject.Type
}
export interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
class Checksum {
    /* Fields of AppStream-1.0.AppStream.Checksum */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Checksum */
    getKind(): ChecksumKind
    getValue(): string
    setKind(kind: ChecksumKind): void
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
    static newForKindValue(kind: ChecksumKind, value: string): Checksum
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    developerName?: string
    id?: string
    keywords?: string[]
    kind?: ComponentKind
    name?: string
    pkgnames?: string[]
    projectGroup?: string
    projectLicense?: string
    summary?: string
}
class Component {
    /* Properties of AppStream-1.0.AppStream.Component */
    readonly categories: object[]
    description: string
    developerName: string
    readonly icons: Icon[]
    id: string
    keywords: string[]
    kind: ComponentKind
    name: string
    pkgnames: string[]
    projectGroup: string
    projectLicense: string
    readonly screenshots: Screenshot[]
    summary: string
    readonly urls: GLib.HashTable
    /* Fields of AppStream-1.0.AppStream.Component */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Component */
    addAddon(addon: Component): void
    addAgreement(agreement: Agreement): void
    addBundle(bundle: Bundle): void
    addCategory(category: string): void
    addContentRating(contentRating: ContentRating): void
    addExtends(cptId: string): void
    addIcon(icon: Icon): void
    addLanguage(locale: string | null, percentage: number): void
    addLaunchable(launchable: Launchable): void
    addProvided(prov: Provided): void
    addProvidedItem(kind: ProvidedKind, item: string): void
    addRelation(relation: Relation): void
    addRelease(release: Release): void
    addReview(review: Review): void
    addScreenshot(sshot: Screenshot): void
    addSuggested(suggested: Suggested): void
    addTag(ns: string, tag: string): boolean
    addTranslation(tr: Translation): void
    addUrl(urlKind: UrlKind, url: string): void
    clearLanguages(): void
    clearTags(): void
    getActiveLocale(): string
    getAddons(): Component[]
    getAgreementByKind(kind: AgreementKind): Agreement | null
    getAgreements(): Agreement[]
    getBranch(): string
    getBundle(bundleKind: BundleKind): Bundle | null
    getBundles(): Bundle[]
    getCategories(): string[]
    getCompulsoryForDesktops(): string[]
    getContentRating(kind: string): ContentRating | null
    getContentRatings(): ContentRating[]
    getContext(): Context | null
    getCustom(): GLib.HashTable
    getCustomValue(key: string): string
    getDataId(): string
    getDescription(): string
    getDesktopId(): string
    getDeveloperName(): string
    getExtends(): string[] | null
    getIconBySize(width: number, height: number): Icon | null
    getIcons(): Icon[]
    getId(): string
    getKeywords(): string[]
    getKeywordsTable(): GLib.HashTable
    getKind(): ComponentKind
    getLanguage(locale?: string | null): number
    getLanguages(): string[]
    getLaunchable(kind: LaunchableKind): Launchable | null
    getLaunchables(): Launchable[]
    getMergeKind(): MergeKind
    getMetadataLicense(): string
    getName(): string
    getNameTable(): GLib.HashTable
    getNameVariantSuffix(): string
    getOrigin(): string
    getPkgname(): string
    getPkgnames(): string[]
    getPriority(): number
    getProjectGroup(): string
    getProjectLicense(): string
    getProvided(): Provided[]
    getProvidedForKind(kind: ProvidedKind): Provided | null
    getRecommends(): Relation[]
    getReleases(): Release[]
    getRequires(): Relation[]
    getReviews(): Review[]
    getScope(): ComponentScope
    getScreenshots(): Screenshot[]
    getSearchTokens(): string[]
    getSortScore(): number
    getSourcePkgname(): string
    getSuggested(): Suggested[]
    getSummary(): string
    getSummaryTable(): GLib.HashTable
    getSupports(): Relation[]
    getTranslations(): Translation[]
    getUrl(urlKind: UrlKind): string | null
    getValueFlags(): ValueFlags
    hasBundle(): boolean
    hasCategory(category: string): boolean
    hasTag(ns: string, tag: string): boolean
    insertCustomValue(key: string, value: string): boolean
    isCompulsoryForDesktop(desktop: string): boolean
    isIgnored(): boolean
    isMemberOfCategory(category: Category): boolean
    isValid(): boolean
    loadFromBytes(context: Context, format: FormatKind, bytes: any): boolean
    loadFromXmlData(context: Context, data: string): boolean
    removeTag(ns: string, tag: string): boolean
    searchMatches(term: string): number
    searchMatchesAll(terms: string): number
    setActiveLocale(locale?: string | null): void
    setBranch(branch: string): void
    setCompulsoryForDesktop(desktop: string): void
    setDataId(value: string): void
    setDescription(value: string, locale?: string | null): void
    setDeveloperName(value: string, locale?: string | null): void
    setId(value: string): void
    setKeywords(value: string[], locale?: string | null): void
    setKind(value: ComponentKind): void
    setMergeKind(kind: MergeKind): void
    setMetadataLicense(value: string): void
    setName(value: string, locale?: string | null): void
    setNameVariantSuffix(value: string, locale?: string | null): void
    setOrigin(origin: string): void
    setPkgname(pkgname: string): void
    setPkgnames(packages: string[]): void
    setPriority(priority: number): void
    setProjectGroup(value: string): void
    setProjectLicense(value: string): void
    setScope(scope: ComponentScope): void
    setSortScore(score: number): void
    setSourcePkgname(spkgname: string): void
    setSummary(value: string, locale?: string | null): void
    setValueFlags(flags: ValueFlags): void
    toString(): string
    toXmlData(context: Context): string
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::developer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::developer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::developer-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pkgnames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pkgnames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pkgnames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::project-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::project-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::project-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::project-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::project-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::project-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static $gtype: GObject.Type
}
export interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentRating {
    /* Fields of AppStream-1.0.AppStream.ContentRating */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.ContentRating */
    addAttribute(id: string, value: ContentRatingValue): void
    getKind(): string
    getMinimumAge(): number
    getRatingIds(): string[]
    getValue(id: string): ContentRatingValue
    setKind(kind: string): void
    setValue(id: string, value: ContentRatingValue): void
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
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of AppStream-1.0.AppStream.Context */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Context */
    getFilename(): string
    getFormatVersion(): FormatVersion
    getLocale(): string
    getLocaleAllEnabled(): boolean
    getMediaBaseurl(): string
    getOrigin(): string
    getPriority(): number
    getStyle(): FormatStyle
    hasMediaBaseurl(): boolean
    setFilename(fname: string): void
    setFormatVersion(ver: FormatVersion): void
    setLocale(value: string): void
    setMediaBaseurl(value: string): void
    setOrigin(value: string): void
    setPriority(priority: number): void
    setStyle(style: FormatStyle): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
export interface DistroDetails_ConstructProps extends GObject.Object_ConstructProps {
}
class DistroDetails {
    /* Properties of AppStream-1.0.AppStream.DistroDetails */
    readonly homepage: string
    readonly id: string
    readonly name: string
    readonly version: string
    /* Fields of AppStream-1.0.AppStream.DistroDetails */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.DistroDetails */
    getBool(key: string, defaultVal: boolean): boolean
    getCid(): string
    getHomepage(): string
    getId(): string
    getName(): string
    getStr(key: string): string
    getVersion(): string
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
    connect(sigName: "notify", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DistroDetails_ConstructProps)
    _init (config?: DistroDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DistroDetails
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
class Icon {
    /* Fields of AppStream-1.0.AppStream.Icon */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Icon */
    getFilename(): string
    getHeight(): number
    getKind(): IconKind
    getName(): string
    getScale(): number
    getUrl(): string
    getWidth(): number
    setFilename(filename: string): void
    setHeight(height: number): void
    setKind(kind: IconKind): void
    setName(name: string): void
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
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
class Image {
    /* Fields of AppStream-1.0.AppStream.Image */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Image */
    getHeight(): number
    getKind(): ImageKind
    getLocale(): string
    getUrl(): string
    getWidth(): number
    setHeight(height: number): void
    setKind(kind: ImageKind): void
    setLocale(locale: string): void
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
    static $gtype: GObject.Type
}
export interface Issue_ConstructProps extends GObject.Object_ConstructProps {
}
class Issue {
    /* Fields of AppStream-1.0.AppStream.Issue */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Issue */
    getId(): string
    getKind(): IssueKind
    getUrl(): string
    setId(id: string): void
    setKind(kind: IssueKind): void
    setUrl(url: string): void
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
    connect(sigName: "notify", callback: (($obj: Issue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Issue_ConstructProps)
    _init (config?: Issue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Issue
    static $gtype: GObject.Type
}
export interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
class Launchable {
    /* Fields of AppStream-1.0.AppStream.Launchable */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Launchable */
    addEntry(entry: string): void
    getEntries(): string[]
    getKind(): LaunchableKind
    setKind(kind: LaunchableKind): void
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
    static $gtype: GObject.Type
}
export interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
class Metadata {
    /* Fields of AppStream-1.0.AppStream.Metadata */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Metadata */
    addComponent(cpt: Component): void
    clearComponents(): void
    componentToMetainfo(format: FormatKind): string
    componentsToCollection(format: FormatKind): string
    getArchitecture(): string
    getComponent(): Component | null
    getComponents(): Component[]
    getFormatStyle(): FormatStyle
    getFormatVersion(): FormatVersion
    getLocale(): string
    getMediaBaseurl(): string
    getOrigin(): string
    getParseFlags(): ParseFlags
    getUpdateExisting(): boolean
    getWriteHeader(): boolean
    parse(data: string, format: FormatKind): boolean
    parseBytes(bytes: any, format: FormatKind): boolean
    parseDesktopData(data: string, cid: string): boolean
    parseFile(file: Gio.File, format: FormatKind): boolean
    saveCollection(fname: string, format: FormatKind): boolean
    saveMetainfo(fname: string, format: FormatKind): boolean
    setArchitecture(arch: string): void
    setFormatStyle(mode: FormatStyle): void
    setFormatVersion(version: FormatVersion): void
    setLocale(locale: string): void
    setMediaBaseurl(url: string): void
    setOrigin(origin: string): void
    setParseFlags(flags: ParseFlags): void
    setUpdateExisting(update: boolean): void
    setWriteHeader(wheader: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    static fileGuessStyle(filename: string): FormatStyle
    static $gtype: GObject.Type
}
export interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}
class Pool {
    /* Fields of AppStream-1.0.AppStream.Pool */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Pool */
    addComponent(cpt: Component): boolean
    addComponents(cpts: Component[]): boolean
    addExtraDataLocation(directory: string, formatStyle: FormatStyle): void
    addFlags(flags: PoolFlags): void
    addMetadataLocation(directory: string): void
    buildSearchTokens(search: string): string[]
    clear(): void
    clear2(): boolean
    clearMetadataLocations(): void
    getCacheFlags(): CacheFlags
    getCacheLocation(): string
    getComponents(): Component[]
    getComponentsByCategories(categories: string): Component[]
    getComponentsByExtends(extendedId: string): Component[]
    getComponentsById(cid: string): Component[]
    getComponentsByKind(kind: ComponentKind): Component[]
    getComponentsByLaunchable(kind: LaunchableKind, id: string): Component[]
    getComponentsByProvidedItem(kind: ProvidedKind, item: string): Component[]
    getFlags(): PoolFlags
    getLocale(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    loadAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadCacheFile(fname: string): boolean
    loadFinish(result: Gio.AsyncResult): boolean
    refreshCache(force: boolean): boolean
    removeFlags(flags: PoolFlags): void
    resetExtraDataLocations(): void
    saveCacheFile(fname: string): boolean
    search(search: string): Component[]
    setCacheFlags(flags: CacheFlags): void
    setCacheLocation(fname: string): void
    setFlags(flags: PoolFlags): void
    setLoadStdDataLocations(enabled: boolean): void
    setLocale(locale: string): void
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
    /* Signals of AppStream-1.0.AppStream.Pool */
    connect(sigName: "changed", callback: (($obj: Pool) => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Pool_ConstructProps)
    _init (config?: Pool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pool
    static $gtype: GObject.Type
}
export interface Provided_ConstructProps extends GObject.Object_ConstructProps {
}
class Provided {
    /* Fields of AppStream-1.0.AppStream.Provided */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Provided */
    addItem(item: string): void
    getItems(): string[]
    getKind(): ProvidedKind
    hasItem(item: string): boolean
    setKind(kind: ProvidedKind): void
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
    connect(sigName: "notify", callback: (($obj: Provided, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Provided_ConstructProps)
    _init (config?: Provided_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Provided
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
class Relation {
    /* Fields of AppStream-1.0.AppStream.Relation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Relation */
    getCompare(): RelationCompare
    getDisplaySideKind(): DisplaySideKind
    getItemKind(): RelationItemKind
    getKind(): RelationKind
    getValue(): string
    getValueControlKind(): ControlKind
    getValueDisplayLengthKind(): DisplayLengthKind
    getValueInt(): number
    getValuePx(): number
    getValueStr(): string
    getVersion(): string
    setCompare(compare: RelationCompare): void
    setDisplaySideKind(kind: DisplaySideKind): void
    setItemKind(kind: RelationItemKind): void
    setKind(kind: RelationKind): void
    setValue(value: string): void
    setValueControlKind(kind: ControlKind): void
    setValueDisplayLengthKind(kind: DisplayLengthKind): void
    setValueInt(value: number): void
    setValuePx(logicalPx: number): void
    setValueStr(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Relation
    static $gtype: GObject.Type
}
export interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
class Release {
    /* Fields of AppStream-1.0.AppStream.Release */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Release */
    addArtifact(artifact: Artifact): void
    addChecksum(cs: Checksum): void
    addIssue(issue: Issue): void
    addLocation(location: string): void
    getActiveLocale(): string
    getArtifacts(): Artifact[]
    getChecksum(kind: ChecksumKind): Checksum | null
    getChecksums(): Checksum[]
    getDate(): string
    getDateEol(): string
    getDescription(): string | null
    getIssues(): Issue[]
    getKind(): ReleaseKind
    getLocations(): string[]
    getSize(kind: SizeKind): number
    getTimestamp(): number
    getTimestampEol(): number
    getUrgency(): UrgencyKind
    getUrl(urlKind: ReleaseUrlKind): string | null
    getVersion(): string | null
    setActiveLocale(locale: string): void
    setDate(date: string): void
    setDateEol(date: string): void
    setDescription(description: string, locale: string): void
    setKind(kind: ReleaseKind): void
    setSize(size: number, kind: SizeKind): void
    setTimestamp(timestamp: number): void
    setTimestampEol(timestamp: number): void
    setUrgency(urgency: UrgencyKind): void
    setUrl(urlKind: ReleaseUrlKind, url: string): void
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
class Review {
    /* Properties of AppStream-1.0.AppStream.Review */
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
    /* Fields of AppStream-1.0.AppStream.Review */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Review */
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
class Screenshot {
    /* Fields of AppStream-1.0.AppStream.Screenshot */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Screenshot */
    addImage(image: Image): void
    addVideo(video: Video): void
    getActiveLocale(): string
    getCaption(): string
    getImage(width: number, height: number): Image
    getImages(): Image[]
    getImagesAll(): Image[]
    getKind(): ScreenshotKind
    getMediaKind(): ScreenshotMediaKind
    getVideos(): Video[]
    isValid(): boolean
    setActiveLocale(locale: string): void
    setCaption(caption: string, locale: string): void
    setKind(kind: ScreenshotKind): void
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
    static $gtype: GObject.Type
}
export interface Suggested_ConstructProps extends GObject.Object_ConstructProps {
}
class Suggested {
    /* Fields of AppStream-1.0.AppStream.Suggested */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Suggested */
    addId(cid: string): void
    getIds(): string[]
    getKind(): SuggestedKind
    isValid(): boolean
    setKind(kind: SuggestedKind): void
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
    connect(sigName: "notify", callback: (($obj: Suggested, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Suggested_ConstructProps)
    _init (config?: Suggested_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Suggested
    static $gtype: GObject.Type
}
export interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
class Translation {
    /* Fields of AppStream-1.0.AppStream.Translation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Translation */
    getId(): string
    getKind(): TranslationKind
    getSourceLocale(): string
    setId(id: string): void
    setKind(kind: TranslationKind): void
    setSourceLocale(locale?: string | null): void
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
    static $gtype: GObject.Type
}
export interface Validator_ConstructProps extends GObject.Object_ConstructProps {
}
class Validator {
    /* Fields of AppStream-1.0.AppStream.Validator */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Validator */
    clearIssues(): void
    getCheckUrls(): boolean
    getIssues(): ValidatorIssue[]
    getIssuesPerFile(): GLib.HashTable
    getReportYaml(yamlReport: string): boolean
    getTagExplanation(tag: string): string
    getTagSeverity(tag: string): IssueSeverity
    getTags(): string[]
    setCheckUrls(value: boolean): void
    validateBytes(metadata: any): boolean
    validateData(metadata: string): boolean
    validateFile(metadataFile: Gio.File): boolean
    validateTree(rootDir: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Validator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Validator_ConstructProps)
    _init (config?: Validator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Validator
    static $gtype: GObject.Type
}
export interface ValidatorIssue_ConstructProps extends GObject.Object_ConstructProps {
}
class ValidatorIssue {
    /* Fields of AppStream-1.0.AppStream.ValidatorIssue */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.ValidatorIssue */
    getCid(): string
    getExplanation(): string
    getFilename(): string
    getHint(): string
    getImportance(): IssueSeverity
    getLine(): number
    getLocation(): string
    getMessage(): string
    getSeverity(): IssueSeverity
    getTag(): string
    setCid(cid: string): void
    setExplanation(explanation: string): void
    setFilename(fname: string): void
    setHint(hint: string): void
    setImportance(importance: IssueSeverity): void
    setLine(line: number): void
    setMessage(message: string): void
    setSeverity(severity: IssueSeverity): void
    setTag(tag: string): void
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
    connect(sigName: "notify", callback: (($obj: ValidatorIssue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ValidatorIssue_ConstructProps)
    _init (config?: ValidatorIssue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ValidatorIssue
    static $gtype: GObject.Type
}
export interface Video_ConstructProps extends GObject.Object_ConstructProps {
}
class Video {
    /* Fields of AppStream-1.0.AppStream.Video */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Video */
    getCodecKind(): VideoCodecKind
    getContainerKind(): VideoContainerKind
    getHeight(): number
    getLocale(): string
    getUrl(): string
    getWidth(): number
    setCodecKind(kind: VideoCodecKind): void
    setContainerKind(kind: VideoContainerKind): void
    setHeight(height: number): void
    setLocale(locale: string): void
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
    connect(sigName: "notify", callback: (($obj: Video, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Video_ConstructProps)
    _init (config?: Video_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Video
    static $gtype: GObject.Type
}
abstract class AgreementClass {
    /* Fields of AppStream-1.0.AppStream.AgreementClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class AgreementSectionClass {
    /* Fields of AppStream-1.0.AppStream.AgreementSectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ArtifactClass {
    /* Fields of AppStream-1.0.AppStream.ArtifactClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class BundleClass {
    /* Fields of AppStream-1.0.AppStream.BundleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class CategoryClass {
    /* Fields of AppStream-1.0.AppStream.CategoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChecksumClass {
    /* Fields of AppStream-1.0.AppStream.ChecksumClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ComponentClass {
    /* Fields of AppStream-1.0.AppStream.ComponentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContentRatingClass {
    /* Fields of AppStream-1.0.AppStream.ContentRatingClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContextClass {
    /* Fields of AppStream-1.0.AppStream.ContextClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DistroDetailsClass {
    /* Fields of AppStream-1.0.AppStream.DistroDetailsClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class IconClass {
    /* Fields of AppStream-1.0.AppStream.IconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ImageClass {
    /* Fields of AppStream-1.0.AppStream.ImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class IssueClass {
    /* Fields of AppStream-1.0.AppStream.IssueClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class LaunchableClass {
    /* Fields of AppStream-1.0.AppStream.LaunchableClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MetadataClass {
    /* Fields of AppStream-1.0.AppStream.MetadataClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class PoolClass {
    /* Fields of AppStream-1.0.AppStream.PoolClass */
    parentClass: GObject.ObjectClass
    changed: (pool: Pool) => void
    static name: string
}
abstract class ProvidedClass {
    /* Fields of AppStream-1.0.AppStream.ProvidedClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RelationClass {
    /* Fields of AppStream-1.0.AppStream.RelationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ReleaseClass {
    /* Fields of AppStream-1.0.AppStream.ReleaseClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ReviewClass {
    /* Fields of AppStream-1.0.AppStream.ReviewClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ScreenshotClass {
    /* Fields of AppStream-1.0.AppStream.ScreenshotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SuggestedClass {
    /* Fields of AppStream-1.0.AppStream.SuggestedClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TranslationClass {
    /* Fields of AppStream-1.0.AppStream.TranslationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ValidatorClass {
    /* Fields of AppStream-1.0.AppStream.ValidatorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ValidatorIssueClass {
    /* Fields of AppStream-1.0.AppStream.ValidatorIssueClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class VideoClass {
    /* Fields of AppStream-1.0.AppStream.VideoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default AppStream