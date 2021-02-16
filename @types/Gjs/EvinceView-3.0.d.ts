/**
 * EvinceView-3.0
 */

import * as Gjs from './Gjs';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
import * as EvinceDocument from './EvinceDocument-3.0';

export enum JobPriority {
    PRIORITY_URGENT,
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_NONE,
    N_PRIORITIES,
}
export enum JobRunMode {
    THREAD,
    MAIN_LOOP,
}
export enum JobThumbnailFormat {
    PIXBUF,
    SURFACE,
}
export enum PageLayout {
    SINGLE,
    DUAL,
    AUTOMATIC,
}
export enum SizingMode {
    FIT_PAGE,
    BEST_FIT,
    FIT_WIDTH,
    FREE,
    AUTOMATIC,
}
export enum JobPageDataFlags {
    NONE,
    LINKS,
    TEXT,
    TEXT_MAPPING,
    TEXT_LAYOUT,
    TEXT_ATTRS,
    TEXT_LOG_ATTRS,
    IMAGES,
    FORMS,
    ANNOTS,
    MEDIA,
    ALL,
}
export const STOCK_ANNOT_SQUIGGLY: string
export const STOCK_ANNOT_TEXT: string
export const STOCK_ATTACHMENT: string
export const STOCK_CLOSE: string
export const STOCK_FIND_UNSUPPORTED: string
export const STOCK_INVERTED_COLORS: string
export const STOCK_OUTLINE: string
export const STOCK_RESIZE_SE: string
export const STOCK_RESIZE_SW: string
export const STOCK_ROTATE_LEFT: string
export const STOCK_ROTATE_RIGHT: string
export const STOCK_RUN_PRESENTATION: string
export const STOCK_SEND_TO: string
export const STOCK_VIEW_CONTINUOUS: string
export const STOCK_VIEW_DUAL: string
export const STOCK_VIEW_SIDEBAR: string
export const STOCK_VISIBLE: string
export const STOCK_ZOOM: string
export const STOCK_ZOOM_PAGE: string
export const STOCK_ZOOM_WIDTH: string
export function stock_icons_init(): void
export function stock_icons_set_screen(screen: Gdk.Screen): void
export function stock_icons_shutdown(): void
export interface DocumentModel_ConstructProps extends GObject.Object_ConstructProps {
    continuous?: boolean
    document?: EvinceDocument.Document
    dual_odd_left?: boolean
    dual_page?: boolean
    fullscreen?: boolean
    inverted_colors?: boolean
    max_scale?: number
    min_scale?: number
    page?: number
    page_layout?: PageLayout
    rotation?: number
    rtl?: boolean
    scale?: number
    sizing_mode?: SizingMode
}
export class DocumentModel {
    /* Properties of EvinceView.DocumentModel */
    continuous: boolean
    document: EvinceDocument.Document
    dual_odd_left: boolean
    dual_page: boolean
    fullscreen: boolean
    inverted_colors: boolean
    max_scale: number
    min_scale: number
    page: number
    page_layout: PageLayout
    rotation: number
    rtl: boolean
    scale: number
    sizing_mode: SizingMode
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.DocumentModel */
    get_continuous(): boolean
    get_document(): EvinceDocument.Document
    get_dual_page(): boolean
    get_dual_page_odd_pages_left(): boolean
    get_fullscreen(): boolean
    get_inverted_colors(): boolean
    get_max_scale(): number
    get_min_scale(): number
    get_page(): number
    get_page_layout(): PageLayout
    get_rotation(): number
    get_rtl(): boolean
    get_scale(): number
    get_sizing_mode(): SizingMode
    set_continuous(continuous: boolean): void
    set_document(document: EvinceDocument.Document): void
    set_dual_page(dual_page: boolean): void
    set_dual_page_odd_pages_left(odd_left: boolean): void
    set_fullscreen(fullscreen: boolean): void
    set_inverted_colors(inverted_colors: boolean): void
    set_max_scale(max_scale: number): void
    set_min_scale(min_scale: number): void
    set_page(page: number): void
    set_page_by_label(page_label: string): void
    set_page_layout(layout: PageLayout): void
    set_rotation(rotation: number): void
    set_rtl(rtl: boolean): void
    set_scale(scale: number): void
    set_sizing_mode(mode: SizingMode): void
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
    /* Signals of EvinceView.DocumentModel */
    connect(sigName: "page-changed", callback: (($obj: DocumentModel, object: number, p0: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: DocumentModel, object: number, p0: number) => void)): number
    emit(sigName: "page-changed", object: number, p0: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-layout", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentModel_ConstructProps)
    _init (config?: DocumentModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentModel
    static new_with_document(document: EvinceDocument.Document): DocumentModel
    static $gtype: GObject.Type
}
export interface Job_ConstructProps extends GObject.Object_ConstructProps {
}
export class Job {
    /* Fields of EvinceView.Job */
    parent: GObject.Object
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: Job) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Job) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: Job) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Job) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Job_ConstructProps)
    _init (config?: Job_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static scheduler_get_running_thread_job(): Job
    static $gtype: GObject.Type
}
export interface JobAnnots_ConstructProps extends Job_ConstructProps {
}
export class JobAnnots {
    /* Fields of EvinceView.JobAnnots */
    parent: Job
    annots: object[]
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobAnnots) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobAnnots) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobAnnots) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobAnnots) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobAnnots, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobAnnots, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobAnnots_ConstructProps)
    _init (config?: JobAnnots_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobAnnots
    static $gtype: GObject.Type
}
export interface JobAttachments_ConstructProps extends Job_ConstructProps {
}
export class JobAttachments {
    /* Fields of EvinceView.JobAttachments */
    parent: Job
    attachments: object[]
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobAttachments) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobAttachments) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobAttachments) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobAttachments) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobAttachments, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobAttachments, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobAttachments_ConstructProps)
    _init (config?: JobAttachments_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobAttachments
    static $gtype: GObject.Type
}
export interface JobExport_ConstructProps extends Job_ConstructProps {
}
export class JobExport {
    /* Fields of EvinceView.JobExport */
    parent: Job
    page: number
    rc: EvinceDocument.RenderContext
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobExport */
    set_page(page: number): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobExport) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobExport) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobExport) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobExport) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobExport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobExport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobExport_ConstructProps)
    _init (config?: JobExport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobExport
    static $gtype: GObject.Type
}
export interface JobFind_ConstructProps extends Job_ConstructProps {
}
export class JobFind {
    /* Fields of EvinceView.JobFind */
    parent: Job
    start_page: number
    current_page: number
    n_pages: number
    pages: object[]
    text: string
    case_sensitive: boolean
    has_results: boolean
    options: EvinceDocument.FindOptions
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobFind */
    get_n_results(pages: number): number
    get_options(): EvinceDocument.FindOptions
    get_progress(): number
    set_options(options: EvinceDocument.FindOptions): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.JobFind */
    vfunc_updated(page: number): void
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.JobFind */
    connect(sigName: "updated", callback: (($obj: JobFind, object: number) => void)): number
    connect_after(sigName: "updated", callback: (($obj: JobFind, object: number) => void)): number
    emit(sigName: "updated", object: number): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobFind) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobFind) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobFind) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobFind) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobFind, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobFind, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobFind_ConstructProps)
    _init (config?: JobFind_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean): JobFind
    static $gtype: GObject.Type
}
export interface JobFonts_ConstructProps extends Job_ConstructProps {
}
export class JobFonts {
    /* Fields of EvinceView.JobFonts */
    parent: Job
    scan_completed: boolean
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.JobFonts */
    vfunc_updated(progress: number): void
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.JobFonts */
    connect(sigName: "updated", callback: (($obj: JobFonts, object: number) => void)): number
    connect_after(sigName: "updated", callback: (($obj: JobFonts, object: number) => void)): number
    emit(sigName: "updated", object: number): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobFonts) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobFonts) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobFonts) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobFonts) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobFonts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobFonts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobFonts_ConstructProps)
    _init (config?: JobFonts_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobFonts
    static $gtype: GObject.Type
}
export interface JobLayers_ConstructProps extends Job_ConstructProps {
}
export class JobLayers {
    /* Fields of EvinceView.JobLayers */
    parent: Job
    model: Gtk.TreeModel
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLayers) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLayers) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLayers) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLayers) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobLayers, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobLayers, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobLayers_ConstructProps)
    _init (config?: JobLayers_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobLayers
    static $gtype: GObject.Type
}
export interface JobLinks_ConstructProps extends Job_ConstructProps {
}
export class JobLinks {
    /* Fields of EvinceView.JobLinks */
    parent: Job
    model: Gtk.TreeModel
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobLinks */
    get_model(): Gtk.TreeModel
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLinks) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLinks) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLinks) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLinks) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobLinks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobLinks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobLinks_ConstructProps)
    _init (config?: JobLinks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobLinks
    static $gtype: GObject.Type
}
export interface JobLoad_ConstructProps extends Job_ConstructProps {
}
export class JobLoad {
    /* Fields of EvinceView.JobLoad */
    parent: Job
    uri: string
    password: string
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobLoad */
    set_password(password: string): void
    set_uri(uri: string): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLoad) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLoad) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLoad) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLoad) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobLoad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobLoad_ConstructProps)
    _init (config?: JobLoad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): JobLoad
    static $gtype: GObject.Type
}
export interface JobLoadGFile_ConstructProps extends Job_ConstructProps {
}
export class JobLoadGFile {
    /* Fields of EvinceView.JobLoadGFile */
    parent: Job
    password: string
    gfile: Gio.File
    flags: EvinceDocument.DocumentLoadFlags
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobLoadGFile */
    set_gfile(gfile: Gio.File): void
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_password(password: string): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLoadGFile) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLoadGFile) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLoadGFile) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLoadGFile) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobLoadGFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobLoadGFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobLoadGFile_ConstructProps)
    _init (config?: JobLoadGFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile
    static $gtype: GObject.Type
}
export interface JobLoadStream_ConstructProps extends Job_ConstructProps {
}
export class JobLoadStream {
    /* Fields of EvinceView.JobLoadStream */
    parent: Job
    password: string
    stream: Gio.InputStream
    flags: EvinceDocument.DocumentLoadFlags
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobLoadStream */
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_password(password: string): void
    set_stream(stream: Gio.InputStream): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLoadStream) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLoadStream) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLoadStream) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLoadStream) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobLoadStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobLoadStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobLoadStream_ConstructProps)
    _init (config?: JobLoadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream
    static $gtype: GObject.Type
}
export interface JobPageData_ConstructProps extends Job_ConstructProps {
}
export class JobPageData {
    /* Fields of EvinceView.JobPageData */
    parent: Job
    page: number
    flags: JobPageDataFlags
    link_mapping: EvinceDocument.MappingList
    image_mapping: EvinceDocument.MappingList
    form_field_mapping: EvinceDocument.MappingList
    annot_mapping: EvinceDocument.MappingList
    media_mapping: EvinceDocument.MappingList
    text_mapping: cairo.Region
    text: string
    text_layout: EvinceDocument.Rectangle
    text_layout_length: number
    text_attrs: Pango.AttrList
    text_log_attrs: Pango.LogAttr
    text_log_attrs_length: number
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobPageData) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobPageData) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobPageData) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobPageData) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobPageData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobPageData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobPageData_ConstructProps)
    _init (config?: JobPageData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData
    static $gtype: GObject.Type
}
export interface JobPrint_ConstructProps extends Job_ConstructProps {
}
export class JobPrint {
    /* Fields of EvinceView.JobPrint */
    parent: Job
    page: number
    cr: cairo.Context
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobPrint */
    set_cairo(cr: cairo.Context): void
    set_page(page: number): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobPrint) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobPrint) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobPrint) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobPrint) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobPrint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobPrint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobPrint_ConstructProps)
    _init (config?: JobPrint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): JobPrint
    static $gtype: GObject.Type
}
export interface JobRender_ConstructProps extends Job_ConstructProps {
}
export class JobRender {
    /* Fields of EvinceView.JobRender */
    parent: Job
    page: number
    rotation: number
    scale: number
    page_ready: boolean
    target_width: number
    target_height: number
    surface: cairo.Surface
    include_selection: boolean
    selection: cairo.Surface
    selection_region: cairo.Region
    selection_points: EvinceDocument.Rectangle
    selection_style: EvinceDocument.SelectionStyle
    base: Gdk.Color
    text: Gdk.Color
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobRender */
    set_selection_info(selection_points: EvinceDocument.Rectangle, selection_style: EvinceDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobRender) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobRender) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobRender) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobRender) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobRender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobRender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobRender_ConstructProps)
    _init (config?: JobRender_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number, width: number, height: number): JobRender
    static $gtype: GObject.Type
}
export interface JobSave_ConstructProps extends Job_ConstructProps {
}
export class JobSave {
    /* Fields of EvinceView.JobSave */
    parent: Job
    uri: string
    document_uri: string
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobSave) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobSave) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobSave) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobSave) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobSave, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobSave_ConstructProps)
    _init (config?: JobSave_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, uri: string, document_uri: string): JobSave
    static $gtype: GObject.Type
}
export interface JobThumbnail_ConstructProps extends Job_ConstructProps {
}
export class JobThumbnail {
    /* Fields of EvinceView.JobThumbnail */
    parent: Job
    page: number
    rotation: number
    scale: number
    target_width: number
    target_height: number
    thumbnail: GdkPixbuf.Pixbuf
    has_frame: boolean
    format: JobThumbnailFormat
    thumbnail_surface: cairo.Surface
    /* Fields of EvinceView.Job */
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.JobThumbnail */
    set_has_frame(has_frame: boolean): void
    set_output_format(format: JobThumbnailFormat): void
    /* Methods of EvinceView.Job */
    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void
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
    /* Virtual methods of EvinceView.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.Job */
    connect(sigName: "cancelled", callback: (($obj: JobThumbnail) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobThumbnail) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobThumbnail) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobThumbnail) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobThumbnail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobThumbnail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobThumbnail_ConstructProps)
    _init (config?: JobThumbnail_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    static new_with_target_size(document: EvinceDocument.Document, page: number, rotation: number, target_width: number, target_height: number): JobThumbnail
    static $gtype: GObject.Type
}
export interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {
    document?: EvinceDocument.Document
}
export class PrintOperation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.PrintOperation */
    cancel(): void
    get_default_page_setup(): Gtk.PageSetup
    get_embed_page_setup(): boolean
    get_error(): void
    get_job_name(): string
    get_print_settings(): Gtk.PrintSettings
    get_progress(): number
    get_status(): string
    run(parent: Gtk.Window): void
    set_current_page(current_page: number): void
    set_default_page_setup(page_setup: Gtk.PageSetup): void
    set_embed_page_setup(embed: boolean): void
    set_job_name(job_name: string): void
    set_print_settings(print_settings: Gtk.PrintSettings): void
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
    /* Signals of EvinceView.PrintOperation */
    connect(sigName: "begin-print", callback: (($obj: PrintOperation) => void)): number
    connect_after(sigName: "begin-print", callback: (($obj: PrintOperation) => void)): number
    emit(sigName: "begin-print"): void
    connect(sigName: "done", callback: (($obj: PrintOperation, object: Gtk.PrintOperationResult) => void)): number
    connect_after(sigName: "done", callback: (($obj: PrintOperation, object: Gtk.PrintOperationResult) => void)): number
    emit(sigName: "done", object: Gtk.PrintOperationResult): void
    connect(sigName: "status-changed", callback: (($obj: PrintOperation) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: PrintOperation) => void)): number
    emit(sigName: "status-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintOperation_ConstructProps)
    _init (config?: PrintOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document): PrintOperation
    static exists_for_document(document: EvinceDocument.Document): boolean
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends Gtk.Container_ConstructProps {
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class View {
    /* Properties of EvinceView.View */
    readonly can_zoom_in: boolean
    readonly can_zoom_out: boolean
    readonly is_loading: boolean
    /* Properties of Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.View */
    add_text_markup_annotation_for_selected_text(): boolean
    autoscroll_start(): void
    autoscroll_stop(): void
    begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void
    cancel_add_annotation(): void
    copy(): void
    copy_link_address(action: EvinceDocument.LinkAction): void
    find_cancel(): void
    find_next(): void
    find_previous(): void
    find_restart(page: number): void
    find_search_changed(): void
    find_set_highlight_search(value: boolean): void
    find_set_result(page: number, result: number): void
    find_started(job: JobFind): void
    focus_annotation(annot_mapping: EvinceDocument.Mapping): void
    get_allow_links_change_zoom(): boolean
    get_enable_spellchecking(): boolean
    get_has_selection(): boolean
    get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean
    get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean
    get_selected_text(): string
    handle_link(link: EvinceDocument.Link): void
    hide_cursor(): void
    highlight_forward_search(link: EvinceDocument.SourceLink): void
    is_caret_navigation_enabled(): boolean
    next_page(): boolean
    previous_page(): boolean
    reload(): void
    remove_annotation(annot: EvinceDocument.Annotation): void
    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void
    select_all(): void
    set_allow_links_change_zoom(allowed: boolean): void
    set_caret_cursor_position(page: number, offset: number): void
    set_caret_navigation_enabled(enabled: boolean): void
    set_enable_spellchecking(spellcheck: boolean): void
    set_loading(loading: boolean): void
    set_model(model: DocumentModel): void
    set_page_cache_size(cache_size: number): void
    show_cursor(): void
    supports_caret_navigation(): boolean
    zoom_in(): void
    zoom_out(): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    get_border_width(): number
    get_children(): Gtk.Widget[]
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of EvinceView.View */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.View */
    connect(sigName: "activate", callback: (($obj: View) => void)): number
    connect_after(sigName: "activate", callback: (($obj: View) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "annot-added", callback: (($obj: View, object: EvinceDocument.Annotation) => void)): number
    connect_after(sigName: "annot-added", callback: (($obj: View, object: EvinceDocument.Annotation) => void)): number
    emit(sigName: "annot-added", object: EvinceDocument.Annotation): void
    connect(sigName: "annot-removed", callback: (($obj: View, object: EvinceDocument.Annotation) => void)): number
    connect_after(sigName: "annot-removed", callback: (($obj: View, object: EvinceDocument.Annotation) => void)): number
    emit(sigName: "annot-removed", object: EvinceDocument.Annotation): void
    connect(sigName: "cursor-moved", callback: (($obj: View, object: number, p0: number) => void)): number
    connect_after(sigName: "cursor-moved", callback: (($obj: View, object: number, p0: number) => void)): number
    emit(sigName: "cursor-moved", object: number, p0: number): void
    connect(sigName: "external-link", callback: (($obj: View, object: GObject.Object) => void)): number
    connect_after(sigName: "external-link", callback: (($obj: View, object: GObject.Object) => void)): number
    emit(sigName: "external-link", object: GObject.Object): void
    connect(sigName: "handle-link", callback: (($obj: View, object: number, p0: GObject.Object) => void)): number
    connect_after(sigName: "handle-link", callback: (($obj: View, object: number, p0: GObject.Object) => void)): number
    emit(sigName: "handle-link", object: number, p0: GObject.Object): void
    connect(sigName: "layers-changed", callback: (($obj: View) => void)): number
    connect_after(sigName: "layers-changed", callback: (($obj: View) => void)): number
    emit(sigName: "layers-changed"): void
    connect(sigName: "move-cursor", callback: (($obj: View, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: View, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean)): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number, p1: boolean): void
    connect(sigName: "popup", callback: (($obj: View, object?: object | null) => void)): number
    connect_after(sigName: "popup", callback: (($obj: View, object?: object | null) => void)): number
    emit(sigName: "popup", object?: object | null): void
    connect(sigName: "scroll", callback: (($obj: View, object: Gtk.ScrollType, p0: Gtk.Orientation) => void)): number
    connect_after(sigName: "scroll", callback: (($obj: View, object: Gtk.ScrollType, p0: Gtk.Orientation) => void)): number
    emit(sigName: "scroll", object: Gtk.ScrollType, p0: Gtk.Orientation): void
    connect(sigName: "selection-changed", callback: (($obj: View) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: View) => void)): number
    emit(sigName: "selection-changed"): void
    connect(sigName: "sync-source", callback: (($obj: View, object: EvinceDocument.SourceLink) => void)): number
    connect_after(sigName: "sync-source", callback: (($obj: View, object: EvinceDocument.SourceLink) => void)): number
    emit(sigName: "sync-source", object: EvinceDocument.SourceLink): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: View) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: View) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: View, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: View, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: View) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: View) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: View, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: View, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: View) => void)): number
    connect_after(sigName: "hide", callback: (($obj: View) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: View, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: View) => void)): number
    connect_after(sigName: "map", callback: (($obj: View) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: View, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: View, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: View, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: View, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: View) => void)): number
    connect_after(sigName: "realize", callback: (($obj: View) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: View) => void)): number
    connect_after(sigName: "show", callback: (($obj: View) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: View, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: View) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: View) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: View) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: View) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-zoom-in", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-zoom-in", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-zoom-out", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-zoom-out", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loading", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): View
    static $gtype: GObject.Type
}
export interface ViewPresentation_ConstructProps extends Gtk.Widget_ConstructProps {
    current_page?: number
    document?: EvinceDocument.Document
    inverted_colors?: boolean
    rotation?: number
}
export class ViewPresentation {
    /* Properties of EvinceView.ViewPresentation */
    current_page: number
    rotation: number
    /* Properties of Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceView.ViewPresentation */
    get_current_page(): number
    get_rotation(): number
    next_page(): void
    previous_page(): void
    set_rotation(rotation: number): void
    /* Methods of Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of EvinceView.ViewPresentation */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EvinceView.ViewPresentation */
    connect(sigName: "change-page", callback: (($obj: ViewPresentation, object: Gtk.ScrollType) => void)): number
    connect_after(sigName: "change-page", callback: (($obj: ViewPresentation, object: Gtk.ScrollType) => void)): number
    emit(sigName: "change-page", object: Gtk.ScrollType): void
    connect(sigName: "external-link", callback: (($obj: ViewPresentation, object: GObject.Object) => void)): number
    connect_after(sigName: "external-link", callback: (($obj: ViewPresentation, object: GObject.Object) => void)): number
    emit(sigName: "external-link", object: GObject.Object): void
    connect(sigName: "finished", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "finished", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "finished"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ViewPresentation, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ViewPresentation, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ViewPresentation, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ViewPresentation, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "map", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ViewPresentation, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ViewPresentation, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ViewPresentation, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ViewPresentation, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ViewPresentation, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ViewPresentation, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "show", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ViewPresentation, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ViewPresentation, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ViewPresentation) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ViewPresentation) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ViewPresentation_ConstructProps)
    _init (config?: ViewPresentation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: EvinceDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation
    static $gtype: GObject.Type
}
export abstract class DocumentModelClass {
    /* Fields of EvinceView.DocumentModelClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class JobAnnotsClass {
    /* Fields of EvinceView.JobAnnotsClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobAttachmentsClass {
    /* Fields of EvinceView.JobAttachmentsClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobClass {
    /* Fields of EvinceView.JobClass */
    parent_class: GObject.ObjectClass
    run: (job: Job) => boolean
    cancelled: (job: Job) => void
    finished: (job: Job) => void
    static name: string
}
export abstract class JobExportClass {
    /* Fields of EvinceView.JobExportClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobFindClass {
    /* Fields of EvinceView.JobFindClass */
    parent_class: JobClass
    updated: (job: JobFind, page: number) => void
    static name: string
}
export abstract class JobFontsClass {
    /* Fields of EvinceView.JobFontsClass */
    parent_class: JobClass
    updated: (job: JobFonts, progress: number) => void
    static name: string
}
export abstract class JobLayersClass {
    /* Fields of EvinceView.JobLayersClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobLinksClass {
    /* Fields of EvinceView.JobLinksClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobLoadClass {
    /* Fields of EvinceView.JobLoadClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobLoadGFileClass {
    /* Fields of EvinceView.JobLoadGFileClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobLoadStreamClass {
    /* Fields of EvinceView.JobLoadStreamClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobPageDataClass {
    /* Fields of EvinceView.JobPageDataClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobPrintClass {
    /* Fields of EvinceView.JobPrintClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobRenderClass {
    /* Fields of EvinceView.JobRenderClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobSaveClass {
    /* Fields of EvinceView.JobSaveClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobThumbnailClass {
    /* Fields of EvinceView.JobThumbnailClass */
    parent_class: JobClass
    static name: string
}
export abstract class PrintOperationClass {
    static name: string
}
export abstract class ViewClass {
    static name: string
}
export abstract class ViewPresentationClass {
    static name: string
}