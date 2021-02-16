/**
 * Eog-3.0
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

export enum ImageError {
    SAVE_NOT_LOCAL,
    NOT_LOADED,
    NOT_SAVED,
    VFS,
    FILE_EXISTS,
    TMP_FILE_FAILED,
    GENERIC,
    UNKNOWN,
}
export enum ImageMetadataStatus {
    NOT_READ,
    NOT_AVAILABLE,
    READY,
}
export enum ImageStatus {
    UNKNOWN,
    LOADING,
    LOADED,
    SAVING,
    FAILED,
}
export enum JobPriority {
    PRIORITY_HIGH,
    PRIORITY_MEDIUM,
    PRIORITY_LOW,
    N_PRIORITIES,
}
export enum ListStoreColumn {
    THUMBNAIL,
    THUMB_SET,
    EOG_IMAGE,
    EOG_JOB,
    NUM_COLUMNS,
}
export enum PropertiesDialogPage {
    PAGE_GENERAL,
    PAGE_EXIF,
    PAGE_DETAILS,
    N_PAGES,
}
export enum ThumbNavMode {
    ONE_ROW,
    ONE_COLUMN,
    MULTIPLE_ROWS,
    MULTIPLE_COLUMNS,
}
export enum ThumbViewSelectionChange {
    CURRENT,
    LEFT,
    RIGHT,
    FIRST,
    LAST,
    RANDOM,
}
export enum TransformType {
    NONE,
    ROT_90,
    ROT_180,
    ROT_270,
    FLIP_HORIZONTAL,
    FLIP_VERTICAL,
    TRANSPOSE,
    TRANSVERSE,
}
export enum TransparencyStyle {
    BACKGROUND,
    CHECKED,
    COLOR,
}
export enum UCError {
    INVALID_UNICODE,
    INVALID_CHARACTER,
    EQUAL_FILENAMES,
    UNKNOWN,
}
export enum UCType {
    STRING,
    FILENAME,
    COUNTER,
    COMMENT,
    DATE,
    TIME,
    DAY,
    MONTH,
    YEAR,
    HOUR,
    MINUTE,
    SECOND,
    END,
}
export enum WindowError {
    CONTROL_NOT_FOUND,
    UI_NOT_FOUND,
    NO_PERSIST_FILE_INTERFACE,
    IO,
    TRASH_NOT_FOUND,
    GENERIC,
    UNKNOWN,
}
export enum WindowGalleryPos {
    BOTTOM,
    LEFT,
    TOP,
    RIGHT,
}
export enum WindowMode {
    UNKNOWN,
    NORMAL,
    FULLSCREEN,
    SLIDESHOW,
}
export enum ZoomMode {
    FREE,
    SHRINK_TO_FIT,
}
export enum Debug {
    NO_DEBUG,
    WINDOW,
    VIEW,
    JOBS,
    THUMBNAIL,
    IMAGE_DATA,
    IMAGE_LOAD,
    IMAGE_SAVE,
    LIST_STORE,
    PREFERENCES,
    PRINTING,
    LCMS,
    PLUGINS,
}
export enum ImageData {
    IMAGE,
    DIMENSION,
    EXIF,
    XMP,
}
export enum StartupFlags {
    FULLSCREEN,
    SLIDE_SHOW,
    DISABLE_GALLERY,
    SINGLE_WINDOW,
}
export const FILE_FORMAT_JPEG: string
export const IMAGE_DATA_ALL: number
export const LIST_STORE_THUMB_SIZE: number
export const SCROLL_VIEW_MAX_ZOOM_FACTOR: number
export const SCROLL_VIEW_MIN_ZOOM_FACTOR: number
export const THUMBNAIL_ORIGINAL_HEIGHT: string
export const THUMBNAIL_ORIGINAL_WIDTH: string
export function debug(section: Debug, file: string, line: number, function_: string): void
export function debug_init(): void
export function exif_util_format_date(date: string): string
export function image_error_quark(): GLib.Quark
export function marshal_VOID__INT_INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
export function thumbnail_add_frame(thumbnail: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
export function thumbnail_fit_to_size(thumbnail: GdkPixbuf.Pixbuf, dimension: number): GdkPixbuf.Pixbuf
export function thumbnail_init(): void
export function thumbnail_load(image: Image): GdkPixbuf.Pixbuf
export function uc_error_quark(): GLib.Quark
export class ApplicationActivatable {
    /* Methods of Eog.ApplicationActivatable */
    activate(): void
    deactivate(): void
    /* Virtual methods of Eog.ApplicationActivatable */
    vfunc_activate(): void
    vfunc_deactivate(): void
    static name: string
}
export class WindowActivatable {
    /* Methods of Eog.WindowActivatable */
    activate(): void
    deactivate(): void
    /* Virtual methods of Eog.WindowActivatable */
    vfunc_activate(): void
    vfunc_deactivate(): void
    static name: string
}
export interface Application_ConstructProps extends Gtk.Application_ConstructProps {
}
export class Application {
    /* Properties of Gtk.Application */
    readonly active_window: Gtk.Window
    menubar: Gio.MenuModel
    register_session: boolean
    readonly screensaver_active: boolean
    /* Properties of Gio.Application */
    action_group: Gio.ActionGroup
    application_id: string
    flags: Gio.ApplicationFlags
    inactivity_timeout: number
    readonly is_busy: boolean
    readonly is_registered: boolean
    readonly is_remote: boolean
    resource_base_path: string
    /* Fields of Eog.Application */
    base_instance: Gtk.Application
    priv: ApplicationPrivate
    /* Fields of Gtk.Application */
    parent_instance: Gio.Application
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Application */
    close_all_windows(): boolean
    open_file_list(file_list: Gio.File[], timestamp: number, flags: StartupFlags): boolean
    open_uri_list(uri_list: string[], timestamp: number, flags: StartupFlags): boolean
    open_uris(uris: string, timestamp: number, flags: StartupFlags): boolean
    open_window(timestamp: number, flags: StartupFlags): boolean
    /* Methods of Gtk.Application */
    add_window(window: Gtk.Window): void
    get_accels_for_action(detailed_action_name: string): string[]
    get_actions_for_accel(accel: string): string[]
    get_active_window(): Gtk.Window | null
    get_menu_by_id(id: string): Gio.Menu | null
    get_menubar(): Gio.MenuModel | null
    get_window_by_id(id: number): Gtk.Window | null
    get_windows(): Gtk.Window[]
    inhibit(window: Gtk.Window | null, flags: Gtk.ApplicationInhibitFlags, reason?: string | null): number
    list_action_descriptions(): string[]
    remove_window(window: Gtk.Window): void
    set_accels_for_action(detailed_action_name: string, accels: string[]): void
    set_menubar(menubar?: Gio.MenuModel | null): void
    uninhibit(cookie: number): void
    /* Methods of Gio.Application */
    activate(): void
    add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description?: string | null): void
    add_main_option_entries(entries: GLib.OptionEntry[]): void
    add_option_group(group: GLib.OptionGroup): void
    bind_busy_property(object: GObject.Object, property: string): void
    get_application_id(): string | null
    get_dbus_connection(): Gio.DBusConnection | null
    get_dbus_object_path(): string | null
    get_flags(): Gio.ApplicationFlags
    get_inactivity_timeout(): number
    get_is_busy(): boolean
    get_is_registered(): boolean
    get_is_remote(): boolean
    get_resource_base_path(): string | null
    hold(): void
    mark_busy(): void
    open(files: Gio.File[], hint: string): void
    quit(): void
    register(cancellable?: Gio.Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    send_notification(id: string | null, notification: Gio.Notification): void
    set_action_group(action_group?: Gio.ActionGroup | null): void
    set_application_id(application_id?: string | null): void
    set_default(): void
    set_flags(flags: Gio.ApplicationFlags): void
    set_inactivity_timeout(inactivity_timeout: number): void
    set_option_context_description(description?: string | null): void
    set_option_context_parameter_string(parameter_string?: string | null): void
    set_option_context_summary(summary?: string | null): void
    set_resource_base_path(resource_path?: string | null): void
    unbind_busy_property(object: GObject.Object, property: string): void
    unmark_busy(): void
    withdraw_notification(id: string): void
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
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    add_action(action: Gio.Action): void
    add_action_entries(entries: Gio.ActionEntry[], user_data?: object | null): void
    lookup_action(action_name: string): Gio.Action | null
    remove_action(action_name: string): void
    /* Virtual methods of Gtk.Application */
    vfunc_window_added(window: Gtk.Window): void
    vfunc_window_removed(window: Gtk.Window): void
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfunc_add_action(action: Gio.Action): void
    vfunc_lookup_action(action_name: string): Gio.Action | null
    vfunc_remove_action(action_name: string): void
    /* Virtual methods of Gio.Application */
    vfunc_activate(): void
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void
    vfunc_after_emit(platform_data: GLib.Variant): void
    vfunc_before_emit(platform_data: GLib.Variant): void
    vfunc_command_line(command_line: Gio.ApplicationCommandLine): number
    vfunc_dbus_register(connection: Gio.DBusConnection, object_path: string): boolean
    vfunc_dbus_unregister(connection: Gio.DBusConnection, object_path: string): void
    vfunc_handle_local_options(options: GLib.VariantDict): number
    vfunc_local_command_line(arguments_: string[]): [ /* returnType */ boolean, /* arguments_ */ string[], /* exit_status */ number ]
    vfunc_name_lost(): boolean
    vfunc_open(files: Gio.File[], hint: string): void
    vfunc_quit_mainloop(): void
    vfunc_run_mainloop(): void
    vfunc_shutdown(): void
    vfunc_startup(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Application */
    connect(sigName: "query-end", callback: (($obj: Application) => void)): number
    connect_after(sigName: "query-end", callback: (($obj: Application) => void)): number
    emit(sigName: "query-end"): void
    connect(sigName: "window-added", callback: (($obj: Application, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Application, window: Gtk.Window) => void)): number
    emit(sigName: "window-added", window: Gtk.Window): void
    connect(sigName: "window-removed", callback: (($obj: Application, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Application, window: Gtk.Window) => void)): number
    emit(sigName: "window-removed", window: Gtk.Window): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: (($obj: Application) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Application) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: (($obj: Application, command_line: Gio.ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: (($obj: Application, command_line: Gio.ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", command_line: Gio.ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    connect_after(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: (($obj: Application, files: Gio.File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: (($obj: Application, files: Gio.File[], hint: string) => void)): number
    emit(sigName: "open", files: Gio.File[], hint: string): void
    connect(sigName: "shutdown", callback: (($obj: Application) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Application) => void)): number
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: (($obj: Application) => void)): number
    connect_after(sigName: "startup", callback: (($obj: Application) => void)): number
    emit(sigName: "startup"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Application, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: Application, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Application, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Application, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: Application, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Application, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(): Application
    static $gtype: GObject.Type
}
export interface ClipboardHandler_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    pixbuf?: GdkPixbuf.Pixbuf
    uri?: string
}
export class ClipboardHandler {
    /* Fields of Eog.ClipboardHandler */
    parent: GObject.Object
    priv: ClipboardHandlerPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.ClipboardHandler */
    copy_to_clipboard(clipboard: Gtk.Clipboard): void
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
    connect(sigName: "notify", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClipboardHandler_ConstructProps)
    _init (config?: ClipboardHandler_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(img: Image): ClipboardHandler
    static $gtype: GObject.Type
}
export interface FileChooser_ConstructProps extends Gtk.FileChooserDialog_ConstructProps {
    action?: Gtk.FileChooserAction
    create_folders?: boolean
    filter?: Gtk.FileFilter
    select_multiple?: boolean
}
export class FileChooser {
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    default_height: number
    default_widget: Gtk.Widget
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    display: Gdk.Display
    focus_visible: boolean
    focus_widget: Gtk.Widget
    fullscreened: boolean
    hide_on_close: boolean
    icon_name: string
    readonly is_active: boolean
    maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    startup_id: string
    title: string
    transient_for: Gtk.Window
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
    /* Properties of Gtk.FileChooser */
    action: Gtk.FileChooserAction
    create_folders: boolean
    filter: Gtk.FileFilter
    readonly filters: Gio.ListModel
    select_multiple: boolean
    readonly shortcut_folders: Gio.ListModel
    /* Fields of Eog.FileChooser */
    priv: FileChooserPrivate
    /* Fields of Gtk.Dialog */
    parent_instance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.FileChooser */
    get_format(): GdkPixbuf.PixbufFormat
    /* Methods of Gtk.Dialog */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    add_button(button_text: string, response_id: number): Gtk.Widget
    get_content_area(): Gtk.Box
    get_header_bar(): Gtk.HeaderBar
    get_response_for_widget(widget: Gtk.Widget): number
    get_widget_for_response(response_id: number): Gtk.Widget | null
    response(response_id: number): void
    set_default_response(response_id: number): void
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: Gdk.Monitor): void
    get_application(): Gtk.Application | null
    get_child(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_visible(): boolean
    get_group(): Gtk.WindowGroup
    get_hide_on_close(): boolean
    get_icon_name(): string | null
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_resizable(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    has_group(): boolean
    is_fullscreen(): boolean
    is_maximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    present_with_time(timestamp: number): void
    set_application(application?: Gtk.Application | null): void
    set_child(child?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default_size(width: number, height: number): void
    set_default_widget(default_widget?: Gtk.Widget | null): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_display(display: Gdk.Display): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_visible(setting: boolean): void
    set_hide_on_close(setting: boolean): void
    set_icon_name(name?: string | null): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_resizable(resizable: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title?: string | null): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
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
    /* Methods of Gtk.FileChooser */
    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void
    add_filter(filter: Gtk.FileFilter): void
    add_shortcut_folder(folder: Gio.File): boolean
    get_action(): Gtk.FileChooserAction
    get_choice(id: string): string
    get_create_folders(): boolean
    get_current_folder(): Gio.File
    get_current_name(): string
    get_file(): Gio.File
    get_files(): Gio.ListModel
    get_filter(): Gtk.FileFilter | null
    get_filters(): Gio.ListModel
    get_select_multiple(): boolean
    get_shortcut_folders(): Gio.ListModel
    remove_choice(id: string): void
    remove_filter(filter: Gtk.FileFilter): void
    remove_shortcut_folder(folder: Gio.File): boolean
    set_action(action: Gtk.FileChooserAction): void
    set_choice(id: string, option: string): void
    set_create_folders(create_folders: boolean): void
    set_current_folder(file: Gio.File): boolean
    set_current_name(name: string): void
    set_file(file: Gio.File): boolean
    set_filter(filter: Gtk.FileFilter): void
    set_select_multiple(select_multiple: boolean): void
    /* Virtual methods of Gtk.FileChooserDialog */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Dialog */
    vfunc_close(): void
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_close_request(): boolean
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
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
    /* Signals of Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "close", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: FileChooser, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: FileChooser, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: FileChooser) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: FileChooser) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: FileChooser, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: FileChooser, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: FileChooser, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: FileChooser, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "hide", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: FileChooser, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: FileChooser, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "map", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: FileChooser, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: FileChooser, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: FileChooser, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: FileChooser, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: FileChooser, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: FileChooser, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "realize", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "show", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: FileChooser, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: FileChooser, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: FileChooser) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: FileChooser) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::create-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-multiple", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shortcut-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcut-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileChooser_ConstructProps)
    _init (config?: FileChooser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(action: Gtk.FileChooserAction): FileChooser
    static new(): FileChooser
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of Eog.Image */
    parent: GObject.Object
    priv: ImagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Image */
    autorotate(): void
    cancel_load(): void
    data_ref(): void
    data_unref(): void
    file_changed(): void
    get_autorotate_transform(): Transform
    get_bytes(): number
    get_caption(): string
    get_collate_key(): string
    get_file(): Gio.File
    get_metadata_status(): ImageMetadataStatus
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_size(width: number, height: number): void
    get_status(): ImageStatus
    get_thumbnail(): GdkPixbuf.Pixbuf
    get_transform(): Transform
    get_uri_for_display(): string
    get_xmp_info(): object | null
    has_data(data: ImageData): boolean
    is_animation(): boolean
    is_file_changed(): boolean
    is_file_writable(): boolean
    is_jpeg(): boolean
    is_modified(): boolean
    is_multipaged(): boolean
    load(data2read: ImageData, job: Job): boolean
    modified(): void
    save_as_by_info(source: ImageSaveInfo, target: ImageSaveInfo): boolean
    save_by_info(source: ImageSaveInfo): boolean
    set_thumbnail(pixbuf: GdkPixbuf.Pixbuf): void
    start_animation(): boolean
    transform(trans: Transform, job: Job): void
    undo(): void
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
    /* Virtual methods of Eog.Image */
    vfunc_changed(): void
    vfunc_file_changed(): void
    vfunc_next_frame(delay: number): void
    vfunc_save_progress(progress: number): void
    vfunc_size_prepared(width: number, height: number): void
    vfunc_thumbnail_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Image */
    connect(sigName: "changed", callback: (($obj: Image) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Image) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "file-changed", callback: (($obj: Image) => void)): number
    connect_after(sigName: "file-changed", callback: (($obj: Image) => void)): number
    emit(sigName: "file-changed"): void
    connect(sigName: "next-frame", callback: (($obj: Image, delay: number) => void)): number
    connect_after(sigName: "next-frame", callback: (($obj: Image, delay: number) => void)): number
    emit(sigName: "next-frame", delay: number): void
    connect(sigName: "save-progress", callback: (($obj: Image, object: number) => void)): number
    connect_after(sigName: "save-progress", callback: (($obj: Image, object: number) => void)): number
    emit(sigName: "save-progress", object: number): void
    connect(sigName: "size-prepared", callback: (($obj: Image, object: number, p0: number) => void)): number
    connect_after(sigName: "size-prepared", callback: (($obj: Image, object: number, p0: number) => void)): number
    emit(sigName: "size-prepared", object: number, p0: number): void
    connect(sigName: "thumbnail-changed", callback: (($obj: Image) => void)): number
    connect_after(sigName: "thumbnail-changed", callback: (($obj: Image) => void)): number
    emit(sigName: "thumbnail-changed"): void
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
    static new_file(file: Gio.File, caption: string): Image
    static get_supported_mime_types(): string[]
    static is_supported_mime_type(mime_type: string): boolean
    static $gtype: GObject.Type
}
export interface ImageSaveInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class ImageSaveInfo {
    /* Fields of Eog.ImageSaveInfo */
    parent: GObject.Object
    file: Gio.File
    format: string
    exists: boolean
    local: boolean
    has_metadata: boolean
    modified: boolean
    overwrite: boolean
    jpeg_quality: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ImageSaveInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageSaveInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageSaveInfo_ConstructProps)
    _init (config?: ImageSaveInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_file(file: Gio.File, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    static new_from_image(image: Image): ImageSaveInfo
    static new_from_uri(uri: string, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    static $gtype: GObject.Type
}
export interface Job_ConstructProps extends GObject.Object_ConstructProps {
}
export class Job {
    /* Fields of Eog.Job */
    parent: GObject.Object
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: Job) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Job) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: Job) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Job) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: Job, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Job, object: number) => void)): number
    emit(sigName: "progress", object: number): void
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
    static scheduler_init(): void
    static $gtype: GObject.Type
}
export interface JobCopy_ConstructProps extends Job_ConstructProps {
}
export class JobCopy {
    /* Fields of Eog.JobCopy */
    parent: Job
    images: object[]
    destination: string
    current_position: number
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobCopy) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobCopy) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobCopy) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobCopy) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobCopy, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobCopy, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobCopy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobCopy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobCopy_ConstructProps)
    _init (config?: JobCopy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(images: Image[], destination: string): JobCopy
    static $gtype: GObject.Type
}
export interface JobLoad_ConstructProps extends Job_ConstructProps {
}
export class JobLoad {
    /* Fields of Eog.JobLoad */
    parent: Job
    image: Image
    data: ImageData
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobLoad) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobLoad) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobLoad) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobLoad) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobLoad, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobLoad, object: number) => void)): number
    emit(sigName: "progress", object: number): void
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
    static new(image: Image, data: ImageData): JobLoad
    static $gtype: GObject.Type
}
export interface JobModel_ConstructProps extends Job_ConstructProps {
}
export class JobModel {
    /* Fields of Eog.JobModel */
    parent: Job
    store: ListStore
    file_list: object[]
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobModel) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobModel) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobModel) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobModel) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobModel, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobModel, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobModel_ConstructProps)
    _init (config?: JobModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file_list: Gio.File[]): JobModel
    static $gtype: GObject.Type
}
export interface JobSave_ConstructProps extends Job_ConstructProps {
}
export class JobSave {
    /* Fields of Eog.JobSave */
    parent: Job
    images: object[]
    current_image: Image
    current_position: number
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobSave) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobSave) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobSave) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobSave) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobSave, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobSave, object: number) => void)): number
    emit(sigName: "progress", object: number): void
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
    static new(images: Image[]): JobSave
    static $gtype: GObject.Type
}
export interface JobSaveAs_ConstructProps extends JobSave_ConstructProps {
}
export class JobSaveAs {
    /* Fields of Eog.JobSaveAs */
    parent: JobSave
    converter: URIConverter
    file: Gio.File
    /* Fields of Eog.JobSave */
    images: object[]
    current_image: Image
    current_position: number
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobSaveAs) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobSaveAs) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobSaveAs) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobSaveAs) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobSaveAs, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobSaveAs, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobSaveAs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobSaveAs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobSaveAs_ConstructProps)
    _init (config?: JobSaveAs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(images: Image[], converter: URIConverter, file: Gio.File): JobSaveAs
    static new(images: Image[]): JobSaveAs
    static $gtype: GObject.Type
}
export interface JobThumbnail_ConstructProps extends Job_ConstructProps {
}
export class JobThumbnail {
    /* Fields of Eog.JobThumbnail */
    parent: Job
    image: Image
    thumbnail: GdkPixbuf.Pixbuf
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobThumbnail) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobThumbnail) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobThumbnail) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobThumbnail) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobThumbnail, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobThumbnail, object: number) => void)): number
    emit(sigName: "progress", object: number): void
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
    static new(image: Image): JobThumbnail
    static $gtype: GObject.Type
}
export interface JobTransform_ConstructProps extends Job_ConstructProps {
}
export class JobTransform {
    /* Fields of Eog.JobTransform */
    parent: Job
    images: object[]
    transform: Transform
    /* Fields of Eog.Job */
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Job */
    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void
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
    /* Virtual methods of Eog.Job */
    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Eog.Job */
    connect(sigName: "cancelled", callback: (($obj: JobTransform) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: JobTransform) => void)): number
    emit(sigName: "cancelled"): void
    connect(sigName: "finished", callback: (($obj: JobTransform) => void)): number
    connect_after(sigName: "finished", callback: (($obj: JobTransform) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "progress", callback: (($obj: JobTransform, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: JobTransform, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: JobTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: JobTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: JobTransform_ConstructProps)
    _init (config?: JobTransform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(images: Image[], transform: Transform): JobTransform
    static $gtype: GObject.Type
}
export interface ListStore_ConstructProps extends Gtk.ListStore_ConstructProps {
}
export class ListStore {
    /* Fields of Eog.ListStore */
    parent: Gtk.ListStore
    priv: ListStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.ListStore */
    add_files(file_list: Gio.File[]): void
    append_image(image: Image): void
    get_image_by_pos(pos: number): Image
    get_initial_pos(): number
    get_pos_by_image(image: Image): number
    get_pos_by_iter(iter: Gtk.TreeIter): number
    length(): number
    remove_image(image: Image): void
    thumbnail_refresh(iter: Gtk.TreeIter): void
    thumbnail_set(iter: Gtk.TreeIter): void
    thumbnail_unset(iter: Gtk.TreeIter): void
    /* Methods of Gtk.ListStore */
    append(): /* iter */ Gtk.TreeIter
    clear(): void
    insert(position: number): /* iter */ Gtk.TreeIter
    insert_after(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_before(sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_with_values(position: number, columns: number[], values: any): /* iter */ Gtk.TreeIter | null
    iter_is_valid(iter: Gtk.TreeIter): boolean
    move_after(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    move_before(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(): /* iter */ Gtk.TreeIter
    remove(iter: Gtk.TreeIter): boolean
    reorder(new_order: number[]): void
    set_column_types(types: GObject.Type[]): void
    set_value(iter: Gtk.TreeIter, column: number, value: any): void
    set(iter: Gtk.TreeIter, columns: number[], values: any): void
    swap(a: Gtk.TreeIter, b: Gtk.TreeIter): void
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
    /* Methods of Gtk.TreeDragDest */
    drag_data_received(dest: Gtk.TreePath, value: any): boolean
    row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    /* Methods of Gtk.TreeDragSource */
    drag_data_delete(path: Gtk.TreePath): boolean
    drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    row_draggable(path: Gtk.TreePath): boolean
    /* Methods of Gtk.TreeModel */
    filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel
    foreach(func: Gtk.TreeModelForeachFunc): void
    get_column_type(index_: number): GObject.Type
    get_flags(): Gtk.TreeModelFlags
    get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_first(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_iter_from_string(path_string: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_n_columns(): number
    get_path(iter: Gtk.TreeIter): Gtk.TreePath
    get_string_from_iter(iter: Gtk.TreeIter): string | null
    get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_has_child(iter: Gtk.TreeIter): boolean
    iter_n_children(iter?: Gtk.TreeIter | null): number
    iter_next(iter: Gtk.TreeIter): boolean
    iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    iter_previous(iter: Gtk.TreeIter): boolean
    ref_node(iter: Gtk.TreeIter): void
    row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_deleted(path: Gtk.TreePath): void
    row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void
    unref_node(iter: Gtk.TreeIter): void
    /* Methods of Gtk.TreeSortable */
    get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    has_default_sort_func(): boolean
    set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    sort_column_changed(): void
    /* Virtual methods of Eog.ListStore */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_drag_data_received(dest: Gtk.TreePath, value: any): boolean
    vfunc_row_drop_possible(dest_path: Gtk.TreePath, value: any): boolean
    vfunc_drag_data_delete(path: Gtk.TreePath): boolean
    vfunc_drag_data_get(path: Gtk.TreePath): Gdk.ContentProvider | null
    vfunc_row_draggable(path: Gtk.TreePath): boolean
    vfunc_get_column_type(index_: number): GObject.Type
    vfunc_get_flags(): Gtk.TreeModelFlags
    vfunc_get_iter(path: Gtk.TreePath): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_get_n_columns(): number
    vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath
    vfunc_get_value(iter: Gtk.TreeIter, column: number): /* value */ any
    vfunc_iter_children(parent?: Gtk.TreeIter | null): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_has_child(iter: Gtk.TreeIter): boolean
    vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number
    vfunc_iter_next(iter: Gtk.TreeIter): boolean
    vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_parent(child: Gtk.TreeIter): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    vfunc_iter_previous(iter: Gtk.TreeIter): boolean
    vfunc_ref_node(iter: Gtk.TreeIter): void
    vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_deleted(path: Gtk.TreePath): void
    vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void
    vfunc_unref_node(iter: Gtk.TreeIter): void
    vfunc_get_sort_column_id(): [ /* returnType */ boolean, /* sort_column_id */ number, /* order */ Gtk.SortType ]
    vfunc_has_default_sort_func(): boolean
    vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void
    vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void
    vfunc_sort_column_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: ListStore, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: ListStore, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-has-child-toggled", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    connect_after(sigName: "rows-reordered", callback: (($obj: ListStore, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null): void
    /* Signals of Gtk.TreeSortable */
    connect(sigName: "sort-column-changed", callback: (($obj: ListStore) => void)): number
    connect_after(sigName: "sort-column-changed", callback: (($obj: ListStore) => void)): number
    emit(sigName: "sort-column-changed"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListStore_ConstructProps)
    _init (config?: ListStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ListStore
    static new(types: GObject.Type[]): ListStore
    static new_from_glist(list: Image[]): ListStore
    static $gtype: GObject.Type
}
export interface PropertiesDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
    netbook_mode?: boolean
    next_action?: string
    prev_action?: string
    thumbview?: ThumbView
}
export class PropertiesDialog {
    /* Properties of Eog.PropertiesDialog */
    netbook_mode: boolean
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    default_height: number
    default_widget: Gtk.Widget
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    display: Gdk.Display
    focus_visible: boolean
    focus_widget: Gtk.Widget
    fullscreened: boolean
    hide_on_close: boolean
    icon_name: string
    readonly is_active: boolean
    maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    startup_id: string
    title: string
    transient_for: Gtk.Window
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
    /* Fields of Eog.PropertiesDialog */
    dialog: Gtk.Dialog
    priv: PropertiesDialogPrivate
    /* Fields of Gtk.Dialog */
    parent_instance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.PropertiesDialog */
    set_netbook_mode(enable: boolean): void
    set_page(page: PropertiesDialogPage): void
    update(image: Image): void
    /* Methods of Gtk.Dialog */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    add_button(button_text: string, response_id: number): Gtk.Widget
    get_content_area(): Gtk.Box
    get_header_bar(): Gtk.HeaderBar
    get_response_for_widget(widget: Gtk.Widget): number
    get_widget_for_response(response_id: number): Gtk.Widget | null
    response(response_id: number): void
    set_default_response(response_id: number): void
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: Gdk.Monitor): void
    get_application(): Gtk.Application | null
    get_child(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_visible(): boolean
    get_group(): Gtk.WindowGroup
    get_hide_on_close(): boolean
    get_icon_name(): string | null
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_resizable(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    has_group(): boolean
    is_fullscreen(): boolean
    is_maximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    present_with_time(timestamp: number): void
    set_application(application?: Gtk.Application | null): void
    set_child(child?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default_size(width: number, height: number): void
    set_default_widget(default_widget?: Gtk.Widget | null): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_display(display: Gdk.Display): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_visible(setting: boolean): void
    set_hide_on_close(setting: boolean): void
    set_icon_name(name?: string | null): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_resizable(resizable: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title?: string | null): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
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
    /* Virtual methods of Eog.PropertiesDialog */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Dialog */
    vfunc_close(): void
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_close_request(): boolean
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
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
    /* Signals of Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: PropertiesDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: PropertiesDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: PropertiesDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: PropertiesDialog) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: PropertiesDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: PropertiesDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: PropertiesDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PropertiesDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: PropertiesDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PropertiesDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: PropertiesDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PropertiesDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: PropertiesDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PropertiesDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: PropertiesDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PropertiesDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: PropertiesDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PropertiesDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: PropertiesDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PropertiesDialog) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::netbook-mode", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::netbook-mode", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PropertiesDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertiesDialog_ConstructProps)
    _init (config?: PropertiesDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Gtk.Window, thumbview: ThumbView, next_image_action: string, previous_image_action: string): PropertiesDialog
    static new(): PropertiesDialog
    static $gtype: GObject.Type
}
export interface ScrollView_ConstructProps extends Gtk.Grid_ConstructProps {
    antialiasing_in?: boolean
    antialiasing_out?: boolean
    background_color?: Gdk.RGBA
    image?: Image
    scrollwheel_zoom?: boolean
    transparency_color?: Gdk.RGBA
    transparency_style?: TransparencyStyle
    use_background_color?: boolean
    zoom_mode?: ZoomMode
    zoom_multiplier?: number
    orientation?: Gtk.Orientation
}
export class ScrollView {
    /* Properties of Eog.ScrollView */
    antialiasing_in: boolean
    antialiasing_out: boolean
    background_color: Gdk.RGBA
    image: Image
    scrollwheel_zoom: boolean
    transparency_color: Gdk.RGBA
    transparency_style: TransparencyStyle
    use_background_color: boolean
    zoom_mode: ZoomMode
    zoom_multiplier: number
    /* Properties of Gtk.Grid */
    baseline_row: number
    column_homogeneous: boolean
    column_spacing: number
    row_homogeneous: boolean
    row_spacing: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Eog.ScrollView */
    base_instance: Gtk.Grid
    priv: ScrollViewPrivate
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.ScrollView */
    event_is_over_image(ev: Gdk.Event): boolean
    get_image(): Image
    get_zoom(): number
    get_zoom_is_max(): boolean
    get_zoom_is_min(): boolean
    get_zoom_mode(): ZoomMode
    hide_cursor(): void
    override_bg_color(color: Gdk.RGBA): void
    scrollbars_visible(): boolean
    set_antialiasing_in(state: boolean): void
    set_antialiasing_out(state: boolean): void
    set_background_color(color: Gdk.RGBA): void
    set_image(image: Image): void
    set_popup(menu: Gtk.Menu): void
    set_scroll_wheel_zoom(scroll_wheel_zoom: boolean): void
    set_transparency(style: TransparencyStyle): void
    set_transparency_color(color: Gdk.RGBA): void
    set_use_bg_color(use: boolean): void
    set_zoom(zoom: number): void
    set_zoom_mode(mode: ZoomMode): void
    set_zoom_multiplier(multiplier: number): void
    set_zoom_upscale(upscale: boolean): void
    show_cursor(): void
    zoom_in(smooth: boolean): void
    zoom_out(smooth: boolean): void
    /* Methods of Gtk.Grid */
    attach(child: Gtk.Widget, column: number, row: number, width: number, height: number): void
    attach_next_to(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    get_baseline_row(): number
    get_child_at(column: number, row: number): Gtk.Widget | null
    get_column_homogeneous(): boolean
    get_column_spacing(): number
    get_row_baseline_position(row: number): Gtk.BaselinePosition
    get_row_homogeneous(): boolean
    get_row_spacing(): number
    insert_column(position: number): void
    insert_next_to(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insert_row(position: number): void
    query_child(child: Gtk.Widget): [ /* column */ number | null, /* row */ number | null, /* width */ number | null, /* height */ number | null ]
    remove(child: Gtk.Widget): void
    remove_column(position: number): void
    remove_row(position: number): void
    set_baseline_row(row: number): void
    set_column_homogeneous(homogeneous: boolean): void
    set_column_spacing(spacing: number): void
    set_row_baseline_position(row: number, pos: Gtk.BaselinePosition): void
    set_row_homogeneous(homogeneous: boolean): void
    set_row_spacing(spacing: number): void
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
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Eog.ScrollView */
    vfunc_next_image(): void
    vfunc_previous_image(): void
    vfunc_rotation_changed(degrees: number): void
    vfunc_zoom_changed(zoom: number): void
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
    /* Signals of Eog.ScrollView */
    connect(sigName: "next-image", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "next-image", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "next-image"): void
    connect(sigName: "previous-image", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "previous-image", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "previous-image"): void
    connect(sigName: "rotation-changed", callback: (($obj: ScrollView, object: number) => void)): number
    connect_after(sigName: "rotation-changed", callback: (($obj: ScrollView, object: number) => void)): number
    emit(sigName: "rotation-changed", object: number): void
    connect(sigName: "zoom-changed", callback: (($obj: ScrollView, object: number) => void)): number
    connect_after(sigName: "zoom-changed", callback: (($obj: ScrollView, object: number) => void)): number
    emit(sigName: "zoom-changed", object: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ScrollView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ScrollView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ScrollView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ScrollView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "map", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ScrollView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ScrollView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ScrollView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ScrollView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ScrollView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ScrollView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "show", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ScrollView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ScrollView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::antialiasing-in", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialiasing-in", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialiasing-out", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialiasing-out", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scrollwheel-zoom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollwheel-zoom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transparency-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transparency-style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency-style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-multiplier", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-multiplier", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-row", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-homogeneous", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-homogeneous", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ScrollView_ConstructProps)
    _init (config?: ScrollView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ScrollView
    static $gtype: GObject.Type
}
export interface Sidebar_ConstructProps extends Gtk.Box_ConstructProps {
    current_page?: Gtk.Widget
    orientation?: Gtk.Orientation
}
export class Sidebar {
    /* Properties of Eog.Sidebar */
    current_page: Gtk.Widget
    /* Properties of Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Eog.Sidebar */
    base_instance: Gtk.Box
    priv: SidebarPrivate
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Sidebar */
    add_page(title: string, main_widget: Gtk.Widget): void
    get_n_pages(): number
    is_empty(): boolean
    remove_page(main_widget: Gtk.Widget): void
    set_page(main_widget: Gtk.Widget): void
    /* Methods of Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
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
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Eog.Sidebar */
    vfunc_page_added(main_widget: Gtk.Widget): void
    vfunc_page_removed(main_widget: Gtk.Widget): void
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
    /* Signals of Eog.Sidebar */
    connect(sigName: "page-added", callback: (($obj: Sidebar, object: Gtk.Widget) => void)): number
    connect_after(sigName: "page-added", callback: (($obj: Sidebar, object: Gtk.Widget) => void)): number
    emit(sigName: "page-added", object: Gtk.Widget): void
    connect(sigName: "page-removed", callback: (($obj: Sidebar, object: Gtk.Widget) => void)): number
    connect_after(sigName: "page-removed", callback: (($obj: Sidebar, object: Gtk.Widget) => void)): number
    emit(sigName: "page-removed", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Sidebar, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Sidebar, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Sidebar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Sidebar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "map", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Sidebar, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Sidebar, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Sidebar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Sidebar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Sidebar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Sidebar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "show", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Sidebar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Sidebar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-page", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-page", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sidebar_ConstructProps)
    _init (config?: Sidebar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Sidebar
    static new(orientation: Gtk.Orientation, spacing: number): Sidebar
    static $gtype: GObject.Type
}
export interface Statusbar_ConstructProps extends Gtk.Statusbar_ConstructProps {
    orientation?: Gtk.Orientation
}
export class Statusbar {
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Eog.Statusbar */
    priv: StatusbarPrivate
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Statusbar */
    set_image_number(num: number, tot: number): void
    set_progress(progress: number): void
    /* Methods of Gtk.Statusbar */
    get_context_id(context_description: string): number
    pop(context_id: number): void
    push(context_id: number, text: string): number
    remove(context_id: number, message_id: number): void
    remove_all(context_id: number): void
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
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Eog.Statusbar */
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
    /* Signals of Gtk.Statusbar */
    connect(sigName: "text-popped", callback: (($obj: Statusbar, context_id: number, text: string) => void)): number
    connect_after(sigName: "text-popped", callback: (($obj: Statusbar, context_id: number, text: string) => void)): number
    emit(sigName: "text-popped", context_id: number, text: string): void
    connect(sigName: "text-pushed", callback: (($obj: Statusbar, context_id: number, text: string) => void)): number
    connect_after(sigName: "text-pushed", callback: (($obj: Statusbar, context_id: number, text: string) => void)): number
    emit(sigName: "text-pushed", context_id: number, text: string): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Statusbar, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Statusbar, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Statusbar, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Statusbar, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "map", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Statusbar, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Statusbar, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Statusbar, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Statusbar, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Statusbar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Statusbar, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "show", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Statusbar, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Statusbar, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Statusbar) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Statusbar) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Statusbar_ConstructProps)
    _init (config?: Statusbar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Statusbar
    static $gtype: GObject.Type
}
export interface ThumbNav_ConstructProps extends Gtk.Box_ConstructProps {
    mode?: number
    show_buttons?: boolean
    thumbview?: ThumbView
    orientation?: Gtk.Orientation
}
export class ThumbNav {
    /* Properties of Eog.ThumbNav */
    mode: number
    show_buttons: boolean
    /* Properties of Gtk.Box */
    baseline_position: Gtk.BaselinePosition
    homogeneous: boolean
    spacing: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Eog.ThumbNav */
    base_instance: Gtk.Box
    priv: ThumbNavPrivate
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.ThumbNav */
    get_mode(): ThumbNavMode
    get_show_buttons(): boolean
    set_mode(mode: ThumbNavMode): void
    set_show_buttons(show_buttons: boolean): void
    /* Methods of Gtk.Box */
    append(child: Gtk.Widget): void
    get_baseline_position(): Gtk.BaselinePosition
    get_homogeneous(): boolean
    get_spacing(): number
    insert_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    reorder_child_after(child: Gtk.Widget, sibling?: Gtk.Widget | null): void
    set_baseline_position(position: Gtk.BaselinePosition): void
    set_homogeneous(homogeneous: boolean): void
    set_spacing(spacing: number): void
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
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of Eog.ThumbNav */
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
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ThumbNav, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ThumbNav, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ThumbNav, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ThumbNav, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "map", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ThumbNav, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ThumbNav, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ThumbNav, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ThumbNav, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ThumbNav, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ThumbNav, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "show", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ThumbNav, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ThumbNav, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ThumbNav) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ThumbNav) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-buttons", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-buttons", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThumbNav_ConstructProps)
    _init (config?: ThumbNav_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean): ThumbNav
    static new(orientation: Gtk.Orientation, spacing: number): ThumbNav
    static $gtype: GObject.Type
}
export interface ThumbView_ConstructProps extends Gtk.IconView_ConstructProps {
    orientation?: Gtk.Orientation
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class ThumbView {
    /* Properties of Gtk.IconView */
    activate_on_single_click: boolean
    column_spacing: number
    columns: number
    item_orientation: Gtk.Orientation
    item_padding: number
    item_width: number
    margin: number
    markup_column: number
    model: Gtk.TreeModel
    pixbuf_column: number
    reorderable: boolean
    row_spacing: number
    selection_mode: Gtk.SelectionMode
    spacing: number
    text_column: number
    tooltip_column: number
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
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Eog.ThumbView */
    icon_view: Gtk.IconView
    priv: ThumbViewPrivate
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.ThumbView */
    get_first_selected_image(): Image
    get_n_selected(): number
    get_selected_images(): Image[]
    select_single(change: ThumbViewSelectionChange): void
    set_current_image(image: Image, deselect_other: boolean): void
    set_item_height(height: number): void
    set_model(store: ListStore): void
    set_thumbnail_popup(menu: Gtk.Menu): void
    /* Methods of Gtk.IconView */
    create_drag_icon(path: Gtk.TreePath): Gdk.Paintable
    enable_model_drag_dest(formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    get_activate_on_single_click(): boolean
    get_cell_rect(path: Gtk.TreePath, cell?: Gtk.CellRenderer | null): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    get_column_spacing(): number
    get_columns(): number
    get_cursor(): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* cell */ Gtk.CellRenderer | null ]
    get_dest_item_at_pos(drag_x: number, drag_y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* pos */ Gtk.IconViewDropPosition | null ]
    get_drag_dest_item(): [ /* path */ Gtk.TreePath | null, /* pos */ Gtk.IconViewDropPosition | null ]
    get_item_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* cell */ Gtk.CellRenderer | null ]
    get_item_column(path: Gtk.TreePath): number
    get_item_orientation(): Gtk.Orientation
    get_item_padding(): number
    get_item_row(path: Gtk.TreePath): number
    get_item_width(): number
    get_margin(): number
    get_markup_column(): number
    get_model(): Gtk.TreeModel | null
    get_path_at_pos(x: number, y: number): Gtk.TreePath | null
    get_pixbuf_column(): number
    get_reorderable(): boolean
    get_row_spacing(): number
    get_selected_items(): Gtk.TreePath[]
    get_selection_mode(): Gtk.SelectionMode
    get_spacing(): number
    get_text_column(): number
    get_tooltip_column(): number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [ /* returnType */ boolean, /* model */ Gtk.TreeModel | null, /* path */ Gtk.TreePath | null, /* iter */ Gtk.TreeIter | null ]
    get_visible_range(): [ /* returnType */ boolean, /* start_path */ Gtk.TreePath | null, /* end_path */ Gtk.TreePath | null ]
    item_activated(path: Gtk.TreePath): void
    path_is_selected(path: Gtk.TreePath): boolean
    scroll_to_path(path: Gtk.TreePath, use_align: boolean, row_align: number, col_align: number): void
    select_all(): void
    select_path(path: Gtk.TreePath): void
    selected_foreach(func: Gtk.IconViewForeachFunc): void
    set_activate_on_single_click(single: boolean): void
    set_column_spacing(column_spacing: number): void
    set_columns(columns: number): void
    set_cursor(path: Gtk.TreePath, cell: Gtk.CellRenderer | null, start_editing: boolean): void
    set_drag_dest_item(path: Gtk.TreePath | null, pos: Gtk.IconViewDropPosition): void
    set_item_orientation(orientation: Gtk.Orientation): void
    set_item_padding(item_padding: number): void
    set_item_width(item_width: number): void
    set_margin(margin: number): void
    set_markup_column(column: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_pixbuf_column(column: number): void
    set_reorderable(reorderable: boolean): void
    set_row_spacing(row_spacing: number): void
    set_selection_mode(mode: Gtk.SelectionMode): void
    set_spacing(spacing: number): void
    set_text_column(column: number): void
    set_tooltip_cell(tooltip: Gtk.Tooltip, path: Gtk.TreePath, cell?: Gtk.CellRenderer | null): void
    set_tooltip_column(column: number): void
    set_tooltip_item(tooltip: Gtk.Tooltip, path: Gtk.TreePath): void
    unselect_all(): void
    unselect_path(path: Gtk.TreePath): void
    unset_model_drag_dest(): void
    unset_model_drag_source(): void
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
    /* Methods of Gtk.CellLayout */
    add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    clear(): void
    clear_attributes(cell: Gtk.CellRenderer): void
    get_area(): Gtk.CellArea | null
    get_cells(): Gtk.CellRenderer[]
    pack_end(cell: Gtk.CellRenderer, expand: boolean): void
    pack_start(cell: Gtk.CellRenderer, expand: boolean): void
    reorder(cell: Gtk.CellRenderer, position: number): void
    set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
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
    /* Virtual methods of Eog.ThumbView */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    vfunc_clear(): void
    vfunc_clear_attributes(cell: Gtk.CellRenderer): void
    vfunc_get_area(): Gtk.CellArea | null
    vfunc_get_cells(): Gtk.CellRenderer[]
    vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_reorder(cell: Gtk.CellRenderer, position: number): void
    vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
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
    /* Signals of Gtk.IconView */
    connect(sigName: "activate-cursor-item", callback: (($obj: ThumbView) => boolean)): number
    connect_after(sigName: "activate-cursor-item", callback: (($obj: ThumbView) => boolean)): number
    emit(sigName: "activate-cursor-item"): void
    connect(sigName: "item-activated", callback: (($obj: ThumbView, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: ThumbView, path: Gtk.TreePath) => void)): number
    emit(sigName: "item-activated", path: Gtk.TreePath): void
    connect(sigName: "move-cursor", callback: (($obj: ThumbView, step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: ThumbView, step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean) => boolean)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean): void
    connect(sigName: "select-all", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-item", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "select-cursor-item", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "select-cursor-item"): void
    connect(sigName: "selection-changed", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "selection-changed"): void
    connect(sigName: "toggle-cursor-item", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "toggle-cursor-item", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "toggle-cursor-item"): void
    connect(sigName: "unselect-all", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "unselect-all", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ThumbView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ThumbView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ThumbView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ThumbView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "map", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ThumbView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ThumbView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ThumbView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ThumbView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ThumbView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ThumbView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "show", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ThumbView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ThumbView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ThumbView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ThumbView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::columns", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::columns", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::item-orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::item-padding", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-padding", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::item-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::markup-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reorderable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThumbView_ConstructProps)
    _init (config?: ThumbView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ThumbView
    static $gtype: GObject.Type
}
export interface Transform_ConstructProps extends GObject.Object_ConstructProps {
}
export class Transform {
    /* Fields of Eog.Transform */
    parent: GObject.Object
    priv: TransformPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Transform */
    apply(pixbuf: GdkPixbuf.Pixbuf, job: Job): GdkPixbuf.Pixbuf
    compose(compose: Transform): Transform
    get_affine(affine: cairo.Matrix): boolean
    get_transform_type(): TransformType
    is_identity(): boolean
    reverse(): Transform
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
    connect(sigName: "notify", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transform_ConstructProps)
    _init (config?: Transform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static flip_new(type: TransformType): Transform
    static identity_new(): Transform
    static new(trans: TransformType): Transform
    static rotate_new(degree: number): Transform
    static $gtype: GObject.Type
}
export interface URIConverter_ConstructProps extends GObject.Object_ConstructProps {
    convert_spaces?: boolean
    counter_n_digits?: number
    counter_start?: number
    n_images?: number
    space_character?: number
}
export class URIConverter {
    /* Properties of Eog.URIConverter */
    convert_spaces: boolean
    counter_n_digits: number
    counter_start: number
    n_images: number
    space_character: number
    /* Fields of Eog.URIConverter */
    parent: GObject.Object
    priv: URIConverterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.URIConverter */
    check(img_list: Gio.File[]): boolean
    do(image: Image, file: Gio.File, format: GdkPixbuf.PixbufFormat): boolean
    print_list(): void
    requires_exif(): boolean
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
    connect(sigName: "notify", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::convert-spaces", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert-spaces", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::counter-n-digits", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::counter-n-digits", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::counter-start", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::counter-start", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-images", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-images", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::space-character", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-character", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URIConverter_ConstructProps)
    _init (config?: URIConverter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string): URIConverter
    static preview(format_str: string, img: Image, format: GdkPixbuf.PixbufFormat, counter: number, n_images: number, convert_spaces: boolean, space_char: number): string
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends Gtk.ApplicationWindow_ConstructProps {
    gallery_position?: WindowGalleryPos
    gallery_resizable?: boolean
    startup_flags?: StartupFlags
}
export class Window {
    /* Properties of Eog.Window */
    gallery_position: WindowGalleryPos
    gallery_resizable: boolean
    /* Properties of Gtk.ApplicationWindow */
    show_menubar: boolean
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    default_height: number
    default_widget: Gtk.Widget
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    display: Gdk.Display
    focus_visible: boolean
    focus_widget: Gtk.Widget
    fullscreened: boolean
    hide_on_close: boolean
    icon_name: string
    readonly is_active: boolean
    maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    startup_id: string
    title: string
    transient_for: Gtk.Window
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
    /* Fields of Eog.Window */
    win: Gtk.ApplicationWindow
    priv: WindowPrivate
    /* Fields of Gtk.ApplicationWindow */
    parent_instance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Eog.Window */
    close(): void
    get_gear_menu_section(id: string): Gio.Menu
    get_image(): Image
    get_mode(): WindowMode
    get_properties_dialog(): Gtk.Widget
    get_sidebar(): Gtk.Widget
    get_statusbar(): Gtk.Widget
    get_store(): ListStore
    get_thumb_nav(): Gtk.Widget
    get_thumb_view(): Gtk.Widget
    get_view(): Gtk.Widget
    is_empty(): boolean
    is_not_initializing(): boolean
    open_file_list(file_list: Gio.File[]): void
    reload_image(): void
    set_mode(mode: WindowMode): void
    show_about_dialog(): void
    show_preferences_dialog(): void
    /* Methods of Gtk.ApplicationWindow */
    get_help_overlay(): Gtk.ShortcutsWindow | null
    get_id(): number
    get_show_menubar(): boolean
    set_help_overlay(help_overlay?: Gtk.ShortcutsWindow | null): void
    set_show_menubar(show_menubar: boolean): void
    /* Methods of Gtk.Window */
    destroy(): void
    fullscreen(): void
    fullscreen_on_monitor(monitor: Gdk.Monitor): void
    get_application(): Gtk.Application | null
    get_child(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_visible(): boolean
    get_group(): Gtk.WindowGroup
    get_hide_on_close(): boolean
    get_icon_name(): string | null
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_resizable(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    has_group(): boolean
    is_fullscreen(): boolean
    is_maximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    present_with_time(timestamp: number): void
    set_application(application?: Gtk.Application | null): void
    set_child(child?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default_size(width: number, height: number): void
    set_default_widget(default_widget?: Gtk.Widget | null): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_display(display: Gdk.Display): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_visible(setting: boolean): void
    set_hide_on_close(setting: boolean): void
    set_icon_name(name?: string | null): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_resizable(resizable: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title?: string | null): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
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
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    add_action(action: Gio.Action): void
    add_action_entries(entries: Gio.ActionEntry[], user_data?: object | null): void
    lookup_action(action_name: string): Gio.Action | null
    remove_action(action_name: string): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of Eog.Window */
    vfunc_prepared(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.ApplicationWindow */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfunc_add_action(action: Gio.Action): void
    vfunc_lookup_action(action_name: string): Gio.Action | null
    vfunc_remove_action(action_name: string): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_close_request(): boolean
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
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
    /* Signals of Eog.Window */
    connect(sigName: "prepared", callback: (($obj: Window) => void)): number
    connect_after(sigName: "prepared", callback: (($obj: Window) => void)): number
    emit(sigName: "prepared"): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: Window) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: Window) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Window) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Window, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Window, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Window) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Window) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Window) => void)): number
    connect_after(sigName: "map", callback: (($obj: Window) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Window, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Window, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Window) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Window) => void)): number
    connect_after(sigName: "show", callback: (($obj: Window) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Window) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Window) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Window, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Window, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: Window, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Window, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: Window, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Window, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: Window, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Window, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: "notify::gallery-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gallery-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gallery-resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gallery-resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-menubar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-menubar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: StartupFlags): Window
    static new(application: Gtk.Application): Window
    static new(): Window
    static $gtype: GObject.Type
}
export abstract class ApplicationActivatableInterface {
    /* Fields of Eog.ApplicationActivatableInterface */
    g_iface: GObject.TypeInterface
    activate: (activatable: ApplicationActivatable) => void
    deactivate: (activatable: ApplicationActivatable) => void
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Eog.ApplicationClass */
    parent_class: Gtk.ApplicationClass
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ClipboardHandlerClass {
    /* Fields of Eog.ClipboardHandlerClass */
    parent_klass: GObject.ObjectClass
    static name: string
}
export class ClipboardHandlerPrivate {
    static name: string
}
export abstract class FileChooserClass {
    /* Fields of Eog.FileChooserClass */
    parent_class: Gtk.FileChooserDialogClass
    static name: string
}
export class FileChooserPrivate {
    static name: string
}
export abstract class ImageClass {
    /* Fields of Eog.ImageClass */
    parent_class: GObject.ObjectClass
    changed: (img: Image) => void
    size_prepared: (img: Image, width: number, height: number) => void
    thumbnail_changed: (img: Image) => void
    save_progress: (img: Image, progress: number) => void
    next_frame: (img: Image, delay: number) => void
    file_changed: (img: Image) => void
    static name: string
}
export class ImagePrivate {
    static name: string
}
export abstract class ImageSaveInfoClass {
    /* Fields of Eog.ImageSaveInfoClass */
    parent_klass: GObject.ObjectClass
    static name: string
}
export abstract class JobClass {
    /* Fields of Eog.JobClass */
    parent_class: GObject.ObjectClass
    run: (job: Job) => void
    progress: (job: Job, progress: number) => void
    cancelled: (job: Job) => void
    finished: (job: Job) => void
    static name: string
}
export abstract class JobCopyClass {
    /* Fields of Eog.JobCopyClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobLoadClass {
    /* Fields of Eog.JobLoadClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobModelClass {
    /* Fields of Eog.JobModelClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobSaveAsClass {
    /* Fields of Eog.JobSaveAsClass */
    parent: JobSaveClass
    static name: string
}
export abstract class JobSaveClass {
    /* Fields of Eog.JobSaveClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobThumbnailClass {
    /* Fields of Eog.JobThumbnailClass */
    parent_class: JobClass
    static name: string
}
export abstract class JobTransformClass {
    /* Fields of Eog.JobTransformClass */
    parent_class: JobClass
    static name: string
}
export abstract class ListStoreClass {
    /* Fields of Eog.ListStoreClass */
    parent_class: Gtk.ListStoreClass
    static name: string
}
export class ListStorePrivate {
    static name: string
}
export abstract class PropertiesDialogClass {
    /* Fields of Eog.PropertiesDialogClass */
    parent_class: Gtk.DialogClass
    static name: string
}
export class PropertiesDialogPrivate {
    static name: string
}
export abstract class ScrollViewClass {
    /* Fields of Eog.ScrollViewClass */
    parent_class: Gtk.GridClass
    zoom_changed: (view: ScrollView, zoom: number) => void
    rotation_changed: (view: ScrollView, degrees: number) => void
    next_image: (view: ScrollView) => void
    previous_image: (view: ScrollView) => void
    static name: string
}
export class ScrollViewPrivate {
    static name: string
}
export abstract class SidebarClass {
    /* Fields of Eog.SidebarClass */
    base_class: Gtk.BoxClass
    page_added: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
    page_removed: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
    static name: string
}
export class SidebarPrivate {
    static name: string
}
export abstract class StatusbarClass {
    /* Fields of Eog.StatusbarClass */
    parent_class: Gtk.StatusbarClass
    static name: string
}
export class StatusbarPrivate {
    static name: string
}
export abstract class ThumbNavClass {
    /* Fields of Eog.ThumbNavClass */
    parent_class: Gtk.BoxClass
    static name: string
}
export class ThumbNavPrivate {
    static name: string
}
export abstract class ThumbViewClass {
    /* Fields of Eog.ThumbViewClass */
    icon_view_class: Gtk.IconViewClass
    static name: string
}
export class ThumbViewPrivate {
    static name: string
}
export abstract class TransformClass {
    /* Fields of Eog.TransformClass */
    parent_klass: GObject.ObjectClass
    static name: string
}
export class TransformPrivate {
    static name: string
}
export class UCInfo {
    /* Fields of Eog.UCInfo */
    description: string
    rep: string
    req_exif: boolean
    static name: string
}
export abstract class URIConverterClass {
    /* Fields of Eog.URIConverterClass */
    parent_klass: GObject.ObjectClass
    static name: string
}
export class URIConverterPrivate {
    static name: string
}
export abstract class WindowActivatableInterface {
    /* Fields of Eog.WindowActivatableInterface */
    g_iface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
    static name: string
}
export abstract class WindowClass {
    /* Fields of Eog.WindowClass */
    parent_class: Gtk.ApplicationWindowClass
    prepared: (window: Window) => void
    static name: string
}
export class WindowPrivate {
    static name: string
}