/**
 * Totem-1.0
 */

import type * as Gjs from './Gjs';
import type * as TotemPlParser from './TotemPlParser-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

export enum RemoteCommand {
    UNKNOWN,
    PLAY,
    PAUSE,
    STOP,
    PLAY_PAUSE,
    NEXT,
    PREVIOUS,
    SEEK_FORWARD,
    SEEK_BACKWARD,
    VOLUME_UP,
    VOLUME_DOWN,
    FULLSCREEN,
    QUIT,
    ENQUEUE,
    REPLACE,
    SHOW,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SELECT,
    DVD_MENU,
    ZOOM_UP,
    ZOOM_DOWN,
    EJECT,
    PLAY_DVD,
    MUTE,
    TOGGLE_ASPECT_RATIO,
}
export enum RemoteSetting {
    REPEAT,
}
export const GSETTINGS_SCHEMA: string
export function get_plugin_paths(): string[]
export function interface_create_header_button(header: Gtk.Widget, button: Gtk.Widget, icon_name: string, pack_type: Gtk.PackType): Gtk.Widget
export function interface_error(title: string, reason: string, parent: Gtk.Window): void
export function interface_error_blocking(title: string, reason: string, parent: Gtk.Window): void
export function interface_error_with_link(title: string, reason: string, uri: string, label: string, parent: Gtk.Window): void
export function interface_get_full_path(name: string): string
export function interface_load(name: string, fatal: boolean, parent?: Gtk.Window | null, user_data?: object | null): Gtk.Builder
export function interface_load_pixbuf(name: string): GdkPixbuf.Pixbuf
export function interface_load_with_full_path(filename: string, fatal: boolean, parent?: Gtk.Window | null, user_data?: object | null): Gtk.Builder
export function plugin_find_file(plugin_name: string, file: string): string
export function plugin_load_interface(plugin_name: string, name: string, fatal: boolean, parent?: Gtk.Window | null, user_data?: object | null): Gtk.Builder
export function remote_command_quark(): GLib.Quark
export function remote_setting_quark(): GLib.Quark
export interface Object_ConstructProps extends Gtk.Application_ConstructProps {
}
export class Object {
    /* Properties of Totem.Object */
    readonly current_content_type: string
    readonly current_display_name: string
    readonly current_mrl: string
    readonly current_time: number
    readonly fullscreen: boolean
    readonly main_page: string
    readonly playing: boolean
    readonly seekable: boolean
    readonly stream_length: number
    /* Properties of Gtk.Application */
    readonly active_window: Gtk.Window
    app_menu: Gio.MenuModel
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
    /* Fields of Gtk.Application */
    parent: Gio.Application
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Totem.Object */
    add_to_playlist(uri: string, display_name: string, play: boolean): void
    add_to_view(file: Gio.File, title: string): void
    can_seek_next(): boolean
    can_seek_previous(): boolean
    clear_playlist(): void
    empty_menu_section(id: string): void
    exit(): void
    get_current_mrl(): string
    get_current_time(): number
    get_main_window(): Gtk.Window
    get_menu_section(id: string): Gio.Menu | null
    get_playlist_length(): number
    get_playlist_pos(): number
    get_rate(): number
    get_short_title(): string
    get_title_at_playlist_pos(playlist_index: number): string
    get_video_widget(): Gtk.Widget
    get_volume(): number
    is_fullscreen(): boolean
    is_paused(): boolean
    is_playing(): boolean
    is_seekable(): boolean
    next_angle(): void
    pause(): void
    play(): void
    play_pause(): void
    remote_command(cmd: RemoteCommand, url: string): void
    remote_get_setting(setting: RemoteSetting): boolean
    remote_set_setting(setting: RemoteSetting, value: boolean): void
    seek_next(): void
    seek_previous(): void
    seek_relative(offset: number, accurate: boolean): void
    seek_time(msec: number, accurate: boolean): void
    set_current_subtitle(subtitle_uri: string): void
    set_rate(rate: number): boolean
    set_volume(volume: number): void
    show_error(title: string, reason: string): void
    stop(): void
    /* Methods of Gtk.Application */
    add_accelerator(accelerator: string, action_name: string, parameter?: GLib.Variant | null): void
    add_window(window: Gtk.Window): void
    get_accels_for_action(detailed_action_name: string): string[]
    get_actions_for_accel(accel: string): string[]
    get_active_window(): Gtk.Window | null
    get_app_menu(): Gio.MenuModel | null
    get_menu_by_id(id: string): Gio.Menu
    get_menubar(): Gio.MenuModel
    get_window_by_id(id: number): Gtk.Window | null
    get_windows(): Gtk.Window[]
    inhibit(window: Gtk.Window | null, flags: Gtk.ApplicationInhibitFlags, reason?: string | null): number
    is_inhibited(flags: Gtk.ApplicationInhibitFlags): boolean
    list_action_descriptions(): string[]
    prefers_app_menu(): boolean
    remove_accelerator(action_name: string, parameter?: GLib.Variant | null): void
    remove_window(window: Gtk.Window): void
    set_accels_for_action(detailed_action_name: string, accels: string[]): void
    set_app_menu(app_menu?: Gio.MenuModel | null): void
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
    /* Virtual methods of Totem.Object */
    vfunc_file_closed(): void
    vfunc_file_has_played(mrl: string): void
    vfunc_file_opened(mrl: string): void
    vfunc_get_text_subtitle(mrl: string): string
    vfunc_get_user_agent(mrl: string): string
    vfunc_metadata_updated(artist: string, title: string, album: string, track_num: number): void
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
    /* Signals of Totem.Object */
    connect(sigName: "file-closed", callback: (($obj: Object) => void)): number
    connect_after(sigName: "file-closed", callback: (($obj: Object) => void)): number
    emit(sigName: "file-closed"): void
    connect(sigName: "file-has-played", callback: (($obj: Object, mrl: string) => void)): number
    connect_after(sigName: "file-has-played", callback: (($obj: Object, mrl: string) => void)): number
    emit(sigName: "file-has-played", mrl: string): void
    connect(sigName: "file-opened", callback: (($obj: Object, mrl: string) => void)): number
    connect_after(sigName: "file-opened", callback: (($obj: Object, mrl: string) => void)): number
    emit(sigName: "file-opened", mrl: string): void
    connect(sigName: "get-text-subtitle", callback: (($obj: Object, mrl: string) => string)): number
    connect_after(sigName: "get-text-subtitle", callback: (($obj: Object, mrl: string) => string)): number
    emit(sigName: "get-text-subtitle", mrl: string): void
    connect(sigName: "get-user-agent", callback: (($obj: Object, mrl: string) => string)): number
    connect_after(sigName: "get-user-agent", callback: (($obj: Object, mrl: string) => string)): number
    emit(sigName: "get-user-agent", mrl: string): void
    connect(sigName: "metadata-updated", callback: (($obj: Object, artist: string, title: string, album: string, track_number: number) => void)): number
    connect_after(sigName: "metadata-updated", callback: (($obj: Object, artist: string, title: string, album: string, track_number: number) => void)): number
    emit(sigName: "metadata-updated", artist: string, title: string, album: string, track_number: number): void
    /* Signals of Gtk.Application */
    connect(sigName: "query-end", callback: (($obj: Object) => void)): number
    connect_after(sigName: "query-end", callback: (($obj: Object) => void)): number
    emit(sigName: "query-end"): void
    connect(sigName: "window-added", callback: (($obj: Object, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Object, window: Gtk.Window) => void)): number
    emit(sigName: "window-added", window: Gtk.Window): void
    connect(sigName: "window-removed", callback: (($obj: Object, window: Gtk.Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Object, window: Gtk.Window) => void)): number
    emit(sigName: "window-removed", window: Gtk.Window): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: (($obj: Object) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Object) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: (($obj: Object, command_line: Gio.ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: (($obj: Object, command_line: Gio.ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", command_line: Gio.ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: (($obj: Object, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: (($obj: Object, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: (($obj: Object) => boolean)): number
    connect_after(sigName: "name-lost", callback: (($obj: Object) => boolean)): number
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: (($obj: Object, files: Gio.File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: (($obj: Object, files: Gio.File[], hint: string) => void)): number
    emit(sigName: "open", files: Gio.File[], hint: string): void
    connect(sigName: "shutdown", callback: (($obj: Object) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Object) => void)): number
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: (($obj: Object) => void)): number
    connect_after(sigName: "startup", callback: (($obj: Object) => void)): number
    emit(sigName: "startup"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Object, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Object, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: Object, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Object, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: Object, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Object, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: Object, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Object, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-content-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-display-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-mrl", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-time", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-page", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seekable", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_supported_content_types(): string[]
    static get_supported_uri_schemes(): string[]
    static $gtype: GObject.Type
}
export abstract class ObjectClass {
    /* Fields of Totem.ObjectClass */
    parent_class: Gtk.ApplicationClass
    file_opened: (totem: Object, mrl: string) => void
    file_closed: (totem: Object) => void
    file_has_played: (totem: Object, mrl: string) => void
    metadata_updated: (totem: Object, artist: string, title: string, album: string, track_num: number) => void
    get_user_agent: (totem: Object, mrl: string) => string
    get_text_subtitle: (totem: Object, mrl: string) => string
    static name: string
}