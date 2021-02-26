/**
 * AppStreamBuilder-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { AppStreamGlib } from './AppStreamGlib-1.0';

export declare namespace AppStreamBuilder {

export enum AppSaveFlags {
    NONE,
    ICONS,
    SCREENSHOTS,
}
export enum PackageKind {
    DEFAULT,
    BUNDLE,
    FIRMWARE,
    LAST,
}
export enum PackageLogLevel {
    NONE,
    DEBUG,
    INFO,
    WARNING,
    LAST,
}
export enum ContextFlags {
    NONE,
    IGNORE_MISSING_INFO,
    IGNORE_MISSING_PARENTS,
    ADD_CACHE_ID,
    HIDPI_ICONS,
    EMBEDDED_ICONS,
    NO_NETWORK,
    INCLUDE_FAILED,
    UNCOMPRESSED_ICONS,
    IGNORE_DEAD_UPSTREAM,
    IGNORE_OBSOLETE_DEPS,
    IGNORE_LEGACY_ICONS,
    IGNORE_SETTINGS,
    USE_FALLBACKS,
    ADD_DEFAULT_ICONS,
}
export const PACKAGE_ENSURE_DEPS: number
export const PACKAGE_ENSURE_FILES: number
export const PACKAGE_ENSURE_LICENSE: number
export const PACKAGE_ENSURE_NEVRA: number
export const PACKAGE_ENSURE_NONE: number
export const PACKAGE_ENSURE_RELEASES: number
export const PACKAGE_ENSURE_SOURCE: number
export const PACKAGE_ENSURE_URL: number
export const PACKAGE_ENSURE_VCS: number
export interface App_ConstructProps extends AppStreamGlib.App_ConstructProps {
}
export class App {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.App */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.App */
    getPackage(): Package
    saveResources(saveFlags: AppSaveFlags): boolean
    setHidpiEnabled(hidpiEnabled: boolean): void
    setPackage(pkg: Package): void
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.App */
    addAddon(addon: AppStreamGlib.App): void
    addAgreement(agreement: AppStreamGlib.Agreement): void
    addArch(arch: string): void
    addBundle(bundle: AppStreamGlib.Bundle): void
    addCategory(category: string): void
    addCompulsoryForDesktop(compulsoryForDesktop: string): void
    addContentRating(contentRating: AppStreamGlib.ContentRating): void
    addExtends(extends_: string): void
    addFormat(format: AppStreamGlib.Format): void
    addIcon(icon: AppStreamGlib.Icon): void
    addKeyword(locale: string | null, keyword: string): void
    addKudo(kudo: string): void
    addKudoKind(kudoKind: AppStreamGlib.KudoKind): void
    addLanguage(percentage: number, locale?: string | null): void
    addLaunchable(launchable: AppStreamGlib.Launchable): void
    addMetadata(key: string, value?: string | null): void
    addMimetype(mimetype: string): void
    addPermission(permission: string): void
    addPkgname(pkgname: string): void
    addProvide(provide: AppStreamGlib.Provide): void
    addQuirk(quirk: AppStreamGlib.AppQuirk): void
    addRelease(release: AppStreamGlib.Release): void
    addRequire(require: AppStreamGlib.Require): void
    addReview(review: AppStreamGlib.Review): void
    addScreenshot(screenshot: AppStreamGlib.Screenshot): void
    addSuggest(suggest: AppStreamGlib.Suggest): void
    addTranslation(translation: AppStreamGlib.Translation): void
    addUrl(urlKind: AppStreamGlib.UrlKind, url: string): void
    convertIcons(kind: AppStreamGlib.IconKind): boolean
    equal(app2: AppStreamGlib.App): boolean
    getAddons(): AppStreamGlib.App[]
    getAgreementByKind(kind: AppStreamGlib.AgreementKind): AppStreamGlib.Agreement
    getAgreementDefault(): AppStreamGlib.Agreement
    getArchitectures(): string[]
    getBranch(): string
    getBundleDefault(): AppStreamGlib.Bundle
    getBundles(): AppStreamGlib.Bundle[]
    getCategories(): string[]
    getComment(locale?: string | null): string
    getComments(): GLib.HashTable
    getCompulsoryForDesktops(): string[]
    getContentRating(kind: string): AppStreamGlib.ContentRating
    getContentRatings(): AppStreamGlib.ContentRating[]
    getDescription(locale?: string | null): string
    getDescriptions(): GLib.HashTable
    getDeveloperName(locale?: string | null): string
    getDeveloperNames(): GLib.HashTable
    getExtends(): string[]
    getFormatByFilename(filename: string): AppStreamGlib.Format
    getFormatByKind(kind: AppStreamGlib.FormatKind): AppStreamGlib.Format
    getFormatDefault(): AppStreamGlib.Format
    getFormats(): string[]
    getIconDefault(): AppStreamGlib.Icon
    getIconForSize(width: number, height: number): AppStreamGlib.Icon
    getIconPath(): string
    getIcons(): AppStreamGlib.Icon[]
    getId(): string
    getIdFilename(): string
    getIdKind(): AppStreamGlib.IdKind
    getIdNoPrefix(): string
    getKeywords(locale?: string | null): string[]
    getKind(): AppStreamGlib.AppKind
    getKudos(): string[]
    getLanguage(locale?: string | null): number
    getLanguages(): string[]
    getLaunchableByKind(kind: AppStreamGlib.LaunchableKind): AppStreamGlib.Launchable
    getLaunchableDefault(): AppStreamGlib.Launchable
    getLaunchables(): AppStreamGlib.Launchable[]
    getMergeKind(): AppStreamGlib.AppMergeKind
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
    getProvides(): AppStreamGlib.Provide[]
    getRelease(version: string): AppStreamGlib.Release
    getReleaseByVersion(version: string): AppStreamGlib.Release
    getReleaseDefault(): AppStreamGlib.Release
    getReleases(): AppStreamGlib.Release[]
    getRequireByValue(kind: AppStreamGlib.RequireKind, value: string): AppStreamGlib.Require
    getRequires(): AppStreamGlib.Require[]
    getReviews(): AppStreamGlib.Screenshot[]
    getScope(): AppStreamGlib.AppScope
    getScreenshotDefault(): AppStreamGlib.Screenshot
    getScreenshots(): AppStreamGlib.Screenshot[]
    getSearchMatch(): number
    getSourceFile(): string
    getSourceKind(): AppStreamGlib.FormatKind
    getSourcePkgname(): string
    getState(): AppStreamGlib.AppState
    getSuggests(): AppStreamGlib.Suggest[]
    getTranslations(): AppStreamGlib.Translation[]
    getTrustFlags(): number
    getUniqueId(): string
    getUpdateContact(): string
    getUrlItem(urlKind: AppStreamGlib.UrlKind): string
    getUrls(): GLib.HashTable
    getVetos(): string[]
    hasCategory(category: string): boolean
    hasCompulsoryForDesktop(desktop: string): boolean
    hasKudo(kudo: string): boolean
    hasKudoKind(kudo: AppStreamGlib.KudoKind): boolean
    hasPermission(permission: string): boolean
    hasQuirk(quirk: AppStreamGlib.AppQuirk): boolean
    parseData(data: any, flags: number): boolean
    parseFile(filename: string, flags: number): boolean
    removeCategory(category: string): void
    removeFormat(format: AppStreamGlib.Format): void
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
    setIdKind(idKind: AppStreamGlib.IdKind): void
    setKind(kind: AppStreamGlib.AppKind): void
    setMergeKind(mergeKind: AppStreamGlib.AppMergeKind): void
    setMetadataLicense(metadataLicense: string): void
    setName(locale: string | null, name: string): void
    setOrigin(origin: string): void
    setPriority(priority: number): void
    setProjectGroup(projectGroup: string): void
    setProjectLicense(projectLicense: string): void
    setScope(scope: AppStreamGlib.AppScope): void
    setSearchMatch(searchMatch: number): void
    setSourceFile(sourceFile: string): void
    setSourceKind(sourceKind: AppStreamGlib.FormatKind): void
    setSourcePkgname(sourcePkgname: string): void
    setState(state: AppStreamGlib.AppState): void
    setTrustFlags(trustFlags: number): void
    setUpdateContact(updateContact: string): void
    subsume(donor: AppStreamGlib.App): void
    subsumeFull(donor: AppStreamGlib.App, flags: number): void
    toFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    toXml(): GLib.String
    validate(flags: number): AppStreamGlib.Problem[]
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
    static new(pkg: Package, id: string): App
    static new(): App
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.Context */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Context */
    addApp(app: App): void
    addAppIgnore(pkg: Package): void
    addFilename(filename: string): boolean
    addPackage(pkg: Package): void
    findByPkgname(pkgname: string): Package
    findInCache(filename: string): boolean
    getApiVersion(): number
    getCacheDir(): string
    getFlag(flag: ContextFlags): boolean
    getFlags(): ContextFlags
    getMinIconSize(): number
    getPackages(): Package[]
    getTempDir(): string
    process(): boolean
    setApiVersion(apiVersion: number): void
    setBasename(basename: string): void
    setCacheDir(cacheDir: string): void
    setFlags(flags: ContextFlags): void
    setIconsDir(iconsDir: string): void
    setLogDir(logDir: string): void
    setMaxThreads(maxThreads: number): void
    setMinIconSize(minIconSize: number): void
    setOldMetadata(oldMetadata: string): void
    setOrigin(origin: string): void
    setOutputDir(outputDir: string): void
    setScreenshotDir(screenshotDir: string): void
    setTempDir(tempDir: string): void
    setup(): boolean
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
export interface Package_ConstructProps extends GObject.Object_ConstructProps {
}
export class Package {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.Package */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Package */
    addDep(dep: string): void
    addRelease(version: string, release: AppStreamGlib.Release): void
    clear(flags: PackageEnsureFlags): void
    close(): boolean
    compare(pkg2: Package): number
    ensure(flags: PackageEnsureFlags): boolean
    explode(dir: string, glob: string[]): boolean
    getArch(): string
    getBasename(): string
    getConfig(key: string): string
    getDeps(): string[]
    getEnabled(): boolean
    getEpoch(): number
    getEvr(): string
    getFilelist(): string[]
    getFilename(): string
    getKind(): PackageKind
    getLicense(): string
    getName(): string
    getNevr(): string
    getNevra(): string
    getRelease(version: string): AppStreamGlib.Release
    getReleaseStr(): string
    getReleases(): AppStreamGlib.Release[]
    getSource(): string
    getSourcePkgname(): string
    getUrl(): string
    getVcs(): string
    getVersion(): string
    logFlush(): boolean
    logStart(): void
    open(filename: string): boolean
    setArch(arch: string): void
    setConfig(key: string, value: string): void
    setEnabled(enabled: boolean): void
    setEpoch(epoch: number): void
    setFilelist(filelist: string): void
    setFilename(filename: string): void
    setKind(kind: PackageKind): void
    setLicense(license: string): void
    setName(name: string): void
    setRelease(release: string): void
    setSource(source: string): void
    setSourcePkgname(sourcePkgname: string): void
    setUrl(url: string): void
    setVcs(vcs: string): void
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
    connect(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Package_ConstructProps)
    _init (config?: Package_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Package
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
export class Task {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.Task */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Task */
    process(): boolean
    setPackage(pkg: Package): void
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
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): Task
    static $gtype: GObject.Type
}
export abstract class AppClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.AppClass */
    parentClass: AppStreamGlib.AppClass
    static name: string
}
export abstract class ContextClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class PackageClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.PackageClass */
    parentClass: GObject.ObjectClass
    open: (pkg: Package, filename: string) => boolean
    ensure: (pkg: Package, flags: PackageEnsureFlags) => boolean
    explode: (pkg: Package, dir: string, glob: string[]) => boolean
    compare: (pkg1: Package, pkg2: Package) => number
    close: (pkg: Package) => boolean
    static name: string
}
export abstract class TaskClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export type PackageEnsureFlags = number
}