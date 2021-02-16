/**
 * AppStreamBuilder-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as AppStreamGlib from './AppStreamGlib-1.0';

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
    /* Fields of AppStreamBuilder.App */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder.App */
    get_package(): Package
    save_resources(save_flags: AppSaveFlags): boolean
    set_hidpi_enabled(hidpi_enabled: boolean): void
    set_package(pkg: Package): void
    /* Methods of AppStreamGlib.App */
    add_addon(addon: AppStreamGlib.App): void
    add_agreement(agreement: AppStreamGlib.Agreement): void
    add_arch(arch: string): void
    add_bundle(bundle: AppStreamGlib.Bundle): void
    add_category(category: string): void
    add_compulsory_for_desktop(compulsory_for_desktop: string): void
    add_content_rating(content_rating: AppStreamGlib.ContentRating): void
    add_extends(extends_: string): void
    add_format(format: AppStreamGlib.Format): void
    add_icon(icon: AppStreamGlib.Icon): void
    add_keyword(locale: string | null, keyword: string): void
    add_kudo(kudo: string): void
    add_kudo_kind(kudo_kind: AppStreamGlib.KudoKind): void
    add_language(percentage: number, locale?: string | null): void
    add_launchable(launchable: AppStreamGlib.Launchable): void
    add_metadata(key: string, value?: string | null): void
    add_mimetype(mimetype: string): void
    add_permission(permission: string): void
    add_pkgname(pkgname: string): void
    add_provide(provide: AppStreamGlib.Provide): void
    add_quirk(quirk: AppStreamGlib.AppQuirk): void
    add_release(release: AppStreamGlib.Release): void
    add_require(require: AppStreamGlib.Require): void
    add_review(review: AppStreamGlib.Review): void
    add_screenshot(screenshot: AppStreamGlib.Screenshot): void
    add_suggest(suggest: AppStreamGlib.Suggest): void
    add_translation(translation: AppStreamGlib.Translation): void
    add_url(url_kind: AppStreamGlib.UrlKind, url: string): void
    convert_icons(kind: AppStreamGlib.IconKind): boolean
    equal(app2: AppStreamGlib.App): boolean
    get_addons(): AppStreamGlib.App[]
    get_agreement_by_kind(kind: AppStreamGlib.AgreementKind): AppStreamGlib.Agreement
    get_agreement_default(): AppStreamGlib.Agreement
    get_architectures(): string[]
    get_branch(): string
    get_bundle_default(): AppStreamGlib.Bundle
    get_bundles(): AppStreamGlib.Bundle[]
    get_categories(): string[]
    get_comment(locale?: string | null): string
    get_comments(): GLib.HashTable
    get_compulsory_for_desktops(): string[]
    get_content_rating(kind: string): AppStreamGlib.ContentRating
    get_content_ratings(): AppStreamGlib.ContentRating[]
    get_description(locale?: string | null): string
    get_descriptions(): GLib.HashTable
    get_developer_name(locale?: string | null): string
    get_developer_names(): GLib.HashTable
    get_extends(): string[]
    get_format_by_filename(filename: string): AppStreamGlib.Format
    get_format_by_kind(kind: AppStreamGlib.FormatKind): AppStreamGlib.Format
    get_format_default(): AppStreamGlib.Format
    get_formats(): string[]
    get_icon_default(): AppStreamGlib.Icon
    get_icon_for_size(width: number, height: number): AppStreamGlib.Icon
    get_icon_path(): string
    get_icons(): AppStreamGlib.Icon[]
    get_id(): string
    get_id_filename(): string
    get_id_kind(): AppStreamGlib.IdKind
    get_id_no_prefix(): string
    get_keywords(locale?: string | null): string[]
    get_kind(): AppStreamGlib.AppKind
    get_kudos(): string[]
    get_language(locale?: string | null): number
    get_languages(): string[]
    get_launchable_by_kind(kind: AppStreamGlib.LaunchableKind): AppStreamGlib.Launchable
    get_launchable_default(): AppStreamGlib.Launchable
    get_launchables(): AppStreamGlib.Launchable[]
    get_merge_kind(): AppStreamGlib.AppMergeKind
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
    get_provides(): AppStreamGlib.Provide[]
    get_release(version: string): AppStreamGlib.Release
    get_release_by_version(version: string): AppStreamGlib.Release
    get_release_default(): AppStreamGlib.Release
    get_releases(): AppStreamGlib.Release[]
    get_require_by_value(kind: AppStreamGlib.RequireKind, value: string): AppStreamGlib.Require
    get_requires(): AppStreamGlib.Require[]
    get_reviews(): AppStreamGlib.Screenshot[]
    get_scope(): AppStreamGlib.AppScope
    get_screenshot_default(): AppStreamGlib.Screenshot
    get_screenshots(): AppStreamGlib.Screenshot[]
    get_search_match(): number
    get_source_file(): string
    get_source_kind(): AppStreamGlib.FormatKind
    get_source_pkgname(): string
    get_state(): AppStreamGlib.AppState
    get_suggests(): AppStreamGlib.Suggest[]
    get_translations(): AppStreamGlib.Translation[]
    get_trust_flags(): number
    get_unique_id(): string
    get_update_contact(): string
    get_url_item(url_kind: AppStreamGlib.UrlKind): string
    get_urls(): GLib.HashTable
    get_vetos(): string[]
    has_category(category: string): boolean
    has_compulsory_for_desktop(desktop: string): boolean
    has_kudo(kudo: string): boolean
    has_kudo_kind(kudo: AppStreamGlib.KudoKind): boolean
    has_permission(permission: string): boolean
    has_quirk(quirk: AppStreamGlib.AppQuirk): boolean
    parse_data(data: GLib.Bytes, flags: number): boolean
    parse_file(filename: string, flags: number): boolean
    remove_category(category: string): void
    remove_format(format: AppStreamGlib.Format): void
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
    set_id_kind(id_kind: AppStreamGlib.IdKind): void
    set_kind(kind: AppStreamGlib.AppKind): void
    set_merge_kind(merge_kind: AppStreamGlib.AppMergeKind): void
    set_metadata_license(metadata_license: string): void
    set_name(locale: string | null, name: string): void
    set_origin(origin: string): void
    set_priority(priority: number): void
    set_project_group(project_group: string): void
    set_project_license(project_license: string): void
    set_scope(scope: AppStreamGlib.AppScope): void
    set_search_match(search_match: number): void
    set_source_file(source_file: string): void
    set_source_kind(source_kind: AppStreamGlib.FormatKind): void
    set_source_pkgname(source_pkgname: string): void
    set_state(state: AppStreamGlib.AppState): void
    set_trust_flags(trust_flags: number): void
    set_update_contact(update_contact: string): void
    subsume(donor: AppStreamGlib.App): void
    subsume_full(donor: AppStreamGlib.App, flags: number): void
    to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    to_xml(): GLib.String
    validate(flags: number): AppStreamGlib.Problem[]
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
    static new(pkg: Package, id: string): App
    static new(): App
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of AppStreamBuilder.Context */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder.Context */
    add_app(app: App): void
    add_app_ignore(pkg: Package): void
    add_filename(filename: string): boolean
    add_package(pkg: Package): void
    find_by_pkgname(pkgname: string): Package
    find_in_cache(filename: string): boolean
    get_api_version(): number
    get_cache_dir(): string
    get_flag(flag: ContextFlags): boolean
    get_flags(): ContextFlags
    get_min_icon_size(): number
    get_packages(): Package[]
    get_temp_dir(): string
    process(): boolean
    set_api_version(api_version: number): void
    set_basename(basename: string): void
    set_cache_dir(cache_dir: string): void
    set_flags(flags: ContextFlags): void
    set_icons_dir(icons_dir: string): void
    set_log_dir(log_dir: string): void
    set_max_threads(max_threads: number): void
    set_min_icon_size(min_icon_size: number): void
    set_old_metadata(old_metadata: string): void
    set_origin(origin: string): void
    set_output_dir(output_dir: string): void
    set_screenshot_dir(screenshot_dir: string): void
    set_temp_dir(temp_dir: string): void
    setup(): boolean
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of AppStreamBuilder.Package */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder.Package */
    add_dep(dep: string): void
    add_release(version: string, release: AppStreamGlib.Release): void
    clear(flags: PackageEnsureFlags): void
    close(): boolean
    compare(pkg2: Package): number
    ensure(flags: PackageEnsureFlags): boolean
    explode(dir: string, glob: string[]): boolean
    get_arch(): string
    get_basename(): string
    get_config(key: string): string
    get_deps(): string[]
    get_enabled(): boolean
    get_epoch(): number
    get_evr(): string
    get_filelist(): string[]
    get_filename(): string
    get_kind(): PackageKind
    get_license(): string
    get_name(): string
    get_nevr(): string
    get_nevra(): string
    get_release(version: string): AppStreamGlib.Release
    get_release_str(): string
    get_releases(): AppStreamGlib.Release[]
    get_source(): string
    get_source_pkgname(): string
    get_url(): string
    get_vcs(): string
    get_version(): string
    log_flush(): boolean
    log_start(): void
    open(filename: string): boolean
    set_arch(arch: string): void
    set_config(key: string, value: string): void
    set_enabled(enabled: boolean): void
    set_epoch(epoch: number): void
    set_filelist(filelist: string): void
    set_filename(filename: string): void
    set_kind(kind: PackageKind): void
    set_license(license: string): void
    set_name(name: string): void
    set_release(release: string): void
    set_source(source: string): void
    set_source_pkgname(source_pkgname: string): void
    set_url(url: string): void
    set_vcs(vcs: string): void
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
    /* Virtual methods of AppStreamBuilder.Package */
    vfunc_close(): boolean
    vfunc_compare(pkg2: Package): number
    vfunc_ensure(flags: PackageEnsureFlags): boolean
    vfunc_explode(dir: string, glob: string[]): boolean
    vfunc_open(filename: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of AppStreamBuilder.Task */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder.Task */
    process(): boolean
    set_package(pkg: Package): void
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
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): Task
    static $gtype: GObject.Type
}
export abstract class AppClass {
    /* Fields of AppStreamBuilder.AppClass */
    parent_class: AppStreamGlib.AppClass
    static name: string
}
export abstract class ContextClass {
    /* Fields of AppStreamBuilder.ContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PackageClass {
    /* Fields of AppStreamBuilder.PackageClass */
    parent_class: GObject.ObjectClass
    open: (pkg: Package, filename: string) => boolean
    ensure: (pkg: Package, flags: PackageEnsureFlags) => boolean
    explode: (pkg: Package, dir: string, glob: string[]) => boolean
    compare: (pkg1: Package, pkg2: Package) => number
    close: (pkg: Package) => boolean
    static name: string
}
export abstract class TaskClass {
    /* Fields of AppStreamBuilder.TaskClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export type PackageEnsureFlags = number