/**
 * Gitg-1.0
 */

import * as Gjs from './Gjs';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gee from './Gee-0.8';
import * as Gio from './Gio-2.0';
import * as Gdk from './Gdk-3.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Ggit from './Ggit-1.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Atk from './Atk-1.0';

export enum AuthenticationLifeTime {
    FORGET,
    SESSION,
    FOREVER,
}
export enum CommitModelColumns {
    SHA1,
    SUBJECT,
    MESSAGE,
    AUTHOR,
    AUTHOR_NAME,
    AUTHOR_EMAIL,
    AUTHOR_DATE,
    COMMITTER,
    COMMITTER_NAME,
    COMMITTER_EMAIL,
    COMMITTER_DATE,
    COMMIT,
    NUM,
}
export enum RefType {
    NONE,
    BRANCH,
    REMOTE,
    TAG,
    STASH,
}
export enum RefState {
    NONE,
    SELECTED,
    PRELIGHT,
}
export enum RemoteState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    TRANSFERRING,
}
export enum SelectionMode {
    NORMAL,
    SELECTION,
}
export enum SidebarHint {
    NONE,
    HEADER,
    SEPARATOR,
    DUMMY,
}
export enum SidebarColumn {
    HINT,
    SECTION,
    ITEM,
}
export enum CredentialsError {
    CANCELLED,
}
export enum DateError {
    INVALID_FORMAT,
}
export enum InitError {
    THREADS_UNSAFE,
}
export enum RemoteError {
    ALREADY_CONNECTED,
    ALREADY_CONNECTING,
    ALREADY_DISCONNECTED,
    STILL_CONNECTING,
}
export enum StageError {
    PRE_COMMIT_HOOK_FAILED,
    COMMIT_MSG_HOOK_FAILED,
    NOTHING_TO_COMMIT,
    INDEX_ENTRY_NOT_FOUND,
}
export enum PatchSetType {
    ADD,
    REMOVE,
}
export enum LaneTag {
    NONE,
    START,
    END,
    SIGN_STASH,
    SIGN_STAGED,
    SIGN_UNSTAGED,
    HIDDEN,
}
export enum StageCommitOptions {
    NONE,
    SIGN_OFF,
    AMEND,
    SKIP_HOOKS,
}
export function commit_model_columns_type(): GObject.Type
export function init(): void
export interface Branch_ConstructProps extends Ggit.Branch_ConstructProps {
}
export class Branch {
    /* Fields of Ggit.Branch */
    parent_instance: Ggit.Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Branch */
    get_upstream(): Ref
    /* Methods of Ggit.Branch */
    delete(): void
    get_name(): string | null
    get_upstream(): Ggit.Ref | null
    is_head(): boolean
    move(new_branch_name: string, flags: Ggit.CreateFlags): Ggit.Branch | null
    set_upstream(upstream_branch_name: string): void
    /* Methods of Ggit.Ref */
    delete_log(): void
    get_log(): Ggit.Reflog | null
    get_owner(): Ggit.Repository | null
    get_reference_type(): Ggit.RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): Ggit.OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Ggit.Object | null
    rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null
    resolve(): Ggit.Ref | null
    set_symbolic_target(target: string, log_message: string): Ggit.Ref | null
    set_target(oid: Ggit.OId, log_message: string): Ggit.Ref | null
    to_string(): string | null
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
    /* Virtual methods of Gitg.Branch */
    vfunc_get_upstream(): Ref
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Branch_ConstructProps)
    _init (config?: Branch_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Ref_ConstructProps extends Ggit.Ref_ConstructProps {
    d_parsed_name?: ParsedRefName
    d_pushes?: Ref[]
    state?: RefState
    working?: boolean
}
export class Ref {
    /* Properties of Gitg.Ref */
    d_parsed_name: ParsedRefName
    d_pushes: Ref[]
    state: RefState
    working: boolean
    /* Fields of Ggit.Ref */
    parent_instance: Ggit.Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Ref */
    get_owner(): Repository
    get_d_parsed_name(): ParsedRefName
    set_d_parsed_name(value: ParsedRefName): void
    get_d_pushes(): Ref[] | null
    set_d_pushes(value?: Ref[] | null): void
    get_state(): RefState
    set_state(value: RefState): void
    get_working(): boolean
    set_working(value: boolean): void
    get_parsed_name(): ParsedRefName
    get_pushes(): Ref[]
    /* Methods of Ggit.Ref */
    delete(): void
    delete_log(): void
    get_log(): Ggit.Reflog | null
    get_name(): string | null
    get_owner(): Ggit.Repository | null
    get_reference_type(): Ggit.RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): Ggit.OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Ggit.Object | null
    rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null
    resolve(): Ggit.Ref | null
    set_symbolic_target(target: string, log_message: string): Ggit.Ref | null
    set_target(oid: Ggit.OId, log_message: string): Ggit.Ref | null
    to_string(): string | null
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
    /* Virtual methods of Gitg.Ref */
    vfunc_get_owner(): Repository
    vfunc_get_d_parsed_name(): ParsedRefName
    vfunc_set_d_parsed_name(value: ParsedRefName): void
    vfunc_get_d_pushes(): Ref[] | null
    vfunc_set_d_pushes(value?: Ref[] | null): void
    vfunc_get_state(): RefState
    vfunc_set_state(value: RefState): void
    vfunc_get_working(): boolean
    vfunc_set_working(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::d-parsed-name", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::d-pushes", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::working", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CredentialsProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class CredentialsProvider {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.CredentialsProvider */
    credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null
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
    /* Virtual methods of Gitg.CredentialsProvider */
    vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredentialsProvider_ConstructProps)
    _init (config?: CredentialsProvider_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SidebarItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class SidebarItem {
    /* Properties of Gitg.SidebarItem */
    readonly text: string
    readonly icon_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.SidebarItem */
    activate(numclick: number): void
    get_text(): string
    get_icon_name(): string | null
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
    /* Virtual methods of Gitg.SidebarItem */
    vfunc_activate(numclick: number): void
    vfunc_get_text(): string
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gitg.SidebarItem */
    connect(sigName: "activated", callback: (($obj: SidebarItem, numclick: number) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SidebarItem, numclick: number) => void)): number
    emit(sigName: "activated", numclick: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::text", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SidebarItem_ConstructProps)
    _init (config?: SidebarItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StageStatusItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class StageStatusItem {
    /* Properties of Gitg.StageStatusItem */
    readonly path: string
    readonly is_staged: boolean
    readonly is_unstaged: boolean
    readonly is_untracked: boolean
    readonly icon_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.StageStatusItem */
    get_path(): string
    get_is_staged(): boolean
    get_is_unstaged(): boolean
    get_is_untracked(): boolean
    get_icon_name(): string | null
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
    /* Virtual methods of Gitg.StageStatusItem */
    vfunc_get_path(): string
    vfunc_get_is_staged(): boolean
    vfunc_get_is_unstaged(): boolean
    vfunc_get_is_untracked(): boolean
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageStatusItem_ConstructProps)
    _init (config?: StageStatusItem_ConstructProps): void
    static $gtype: GObject.Type
}
export class Async {
    /* Fields of Gitg.Async */
    ref_count: number
    static name: string
    static new(): Async
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Async
    static thread(func: any, _callback_?: Gio.AsyncReadyCallback | null): void
    static thread_finish(_res_: Gio.AsyncResult): void
    static thread_try(func: any, _callback_?: Gio.AsyncReadyCallback | null): void
    static thread_try_finish(_res_: Gio.AsyncResult): void
}
export interface AuthenticationDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}
export class AuthenticationDialog {
    /* Properties of Gitg.AuthenticationDialog */
    readonly username: string
    readonly password: string
    readonly life_time: AuthenticationLifeTime
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
    /* Fields of Gtk.Dialog */
    parent_instance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.AuthenticationDialog */
    get_username(): string
    get_password(): string
    get_life_time(): AuthenticationLifeTime
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
    connect(sigName: "close", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: AuthenticationDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: AuthenticationDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: AuthenticationDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: AuthenticationDialog) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: AuthenticationDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: AuthenticationDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: AuthenticationDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: AuthenticationDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: AuthenticationDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: AuthenticationDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: AuthenticationDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: AuthenticationDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: AuthenticationDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: AuthenticationDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: AuthenticationDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: AuthenticationDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: AuthenticationDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: AuthenticationDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: AuthenticationDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: AuthenticationDialog) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::username", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::life-time", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::life-time", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthenticationDialog_ConstructProps)
    _init (config?: AuthenticationDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string, username: string | null, failed: boolean): AuthenticationDialog
    static new(): AuthenticationDialog
    static $gtype: GObject.Type
}
export interface AvatarCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class AvatarCache {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.AvatarCache */
    load(email: string, size: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null
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
    connect(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AvatarCache_ConstructProps)
    _init (config?: AvatarCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default(): AvatarCache
    static $gtype: GObject.Type
}
export interface BranchBase_ConstructProps extends Ggit.Branch_ConstructProps {
    d_parsed_name?: ParsedRefName
    d_pushes?: Ref[]
    state?: RefState
    working?: boolean
}
export class BranchBase {
    /* Properties of Gitg.Ref */
    d_parsed_name: ParsedRefName
    d_pushes: Ref[]
    state: RefState
    working: boolean
    /* Fields of Ggit.Branch */
    parent_instance: Ggit.Ref
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Branch */
    delete(): void
    get_name(): string | null
    get_upstream(): Ggit.Ref | null
    is_head(): boolean
    move(new_branch_name: string, flags: Ggit.CreateFlags): Ggit.Branch | null
    set_upstream(upstream_branch_name: string): void
    /* Methods of Ggit.Ref */
    delete_log(): void
    get_log(): Ggit.Reflog | null
    get_owner(): Ggit.Repository | null
    get_reference_type(): Ggit.RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): Ggit.OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Ggit.Object | null
    rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null
    resolve(): Ggit.Ref | null
    set_symbolic_target(target: string, log_message: string): Ggit.Ref | null
    set_target(oid: Ggit.OId, log_message: string): Ggit.Ref | null
    to_string(): string | null
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
    /* Methods of Gitg.Ref */
    get_owner(): Repository
    get_d_parsed_name(): ParsedRefName
    set_d_parsed_name(value: ParsedRefName): void
    get_d_pushes(): Ref[] | null
    set_d_pushes(value?: Ref[] | null): void
    get_state(): RefState
    set_state(value: RefState): void
    get_working(): boolean
    set_working(value: boolean): void
    get_parsed_name(): ParsedRefName
    get_pushes(): Ref[]
    /* Methods of Gitg.Branch */
    get_upstream(): Ref
    /* Virtual methods of Gitg.BranchBase */
    vfunc_get_owner(): Repository
    vfunc_get_d_parsed_name(): ParsedRefName
    vfunc_set_d_parsed_name(value: ParsedRefName): void
    vfunc_get_d_pushes(): Ref[] | null
    vfunc_set_d_pushes(value?: Ref[] | null): void
    vfunc_get_state(): RefState
    vfunc_set_state(value: RefState): void
    vfunc_get_working(): boolean
    vfunc_set_working(value: boolean): void
    vfunc_get_upstream(): Ref
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::d-parsed-name", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::d-pushes", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::working", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BranchBase_ConstructProps)
    _init (config?: BranchBase_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BranchBase
    static $gtype: GObject.Type
}
export interface CellRendererLanes_ConstructProps extends Gtk.CellRendererText_ConstructProps {
    commit?: Commit
    next_commit?: Commit
    lane_width?: number
    dot_width?: number
    labels?: Ref[]
}
export class CellRendererLanes {
    /* Properties of Gitg.CellRendererLanes */
    commit: Commit
    next_commit: Commit
    lane_width: number
    dot_width: number
    labels: Ref[]
    /* Properties of Gtk.CellRendererText */
    align_set: boolean
    alignment: Pango.Alignment
    attributes: Pango.AttrList
    background: string
    background_rgba: Gdk.RGBA
    background_set: boolean
    editable: boolean
    editable_set: boolean
    ellipsize: Pango.EllipsizeMode
    ellipsize_set: boolean
    family: string
    family_set: boolean
    font: string
    font_desc: Pango.FontDescription
    foreground: string
    foreground_rgba: Gdk.RGBA
    foreground_set: boolean
    language: string
    language_set: boolean
    markup: string
    max_width_chars: number
    placeholder_text: string
    rise: number
    rise_set: boolean
    scale: number
    scale_set: boolean
    single_paragraph_mode: boolean
    size: number
    size_points: number
    size_set: boolean
    stretch: Pango.Stretch
    stretch_set: boolean
    strikethrough: boolean
    strikethrough_set: boolean
    style: Pango.Style
    style_set: boolean
    text: string
    underline: Pango.Underline
    underline_set: boolean
    variant: Pango.Variant
    variant_set: boolean
    weight: number
    weight_set: boolean
    width_chars: number
    wrap_mode: Pango.WrapMode
    wrap_width: number
    /* Properties of Gtk.CellRenderer */
    cell_background: string
    cell_background_rgba: Gdk.RGBA
    cell_background_set: boolean
    readonly editing: boolean
    height: number
    is_expanded: boolean
    is_expander: boolean
    mode: Gtk.CellRendererMode
    sensitive: boolean
    visible: boolean
    width: number
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of Gtk.CellRendererText */
    parent: Gtk.CellRenderer
    /* Fields of Gtk.CellRenderer */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.CellRendererLanes */
    get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): [ /* returnType */ Ref | null, /* hot_x */ number ]
    get_commit(): Commit | null
    set_commit(value?: Commit | null): void
    get_next_commit(): Commit | null
    set_next_commit(value?: Commit | null): void
    get_lane_width(): number
    set_lane_width(value: number): void
    get_dot_width(): number
    set_dot_width(value: number): void
    get_labels(): Ref[]
    set_labels(value: Ref[]): void
    /* Methods of Gtk.CellRendererText */
    set_fixed_height_from_font(number_of_rows: number): void
    /* Methods of Gtk.CellRenderer */
    activate(event: Gdk.Event, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    get_aligned_area(widget: Gtk.Widget, flags: Gtk.CellRendererState, cell_area: Gdk.Rectangle): /* aligned_area */ Gdk.Rectangle
    get_alignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    get_fixed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_is_expanded(): boolean
    get_is_expander(): boolean
    get_padding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    get_preferred_height(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    get_preferred_height_for_width(widget: Gtk.Widget, width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(widget: Gtk.Widget): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    get_preferred_width_for_height(widget: Gtk.Widget, height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_request_mode(): Gtk.SizeRequestMode
    get_sensitive(): boolean
    get_state(widget: Gtk.Widget | null, cell_state: Gtk.CellRendererState): Gtk.StateFlags
    get_visible(): boolean
    is_activatable(): boolean
    set_alignment(xalign: number, yalign: number): void
    set_fixed_size(width: number, height: number): void
    set_is_expanded(is_expanded: boolean): void
    set_is_expander(is_expander: boolean): void
    set_padding(xpad: number, ypad: number): void
    set_sensitive(sensitive: boolean): void
    set_visible(visible: boolean): void
    snapshot(snapshot: Gtk.Snapshot, widget: Gtk.Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    start_editing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    stop_editing(canceled: boolean): void
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
    /* Virtual methods of Gtk.CellRendererText */
    vfunc_edited(path: string, new_text: string): void
    /* Virtual methods of Gtk.CellRenderer */
    vfunc_activate(event: Gdk.Event, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    vfunc_editing_canceled(): void
    vfunc_editing_started(editable: Gtk.CellEditable, path: string): void
    vfunc_get_aligned_area(widget: Gtk.Widget, flags: Gtk.CellRendererState, cell_area: Gdk.Rectangle): /* aligned_area */ Gdk.Rectangle
    vfunc_get_preferred_height(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    vfunc_get_preferred_height_for_width(widget: Gtk.Widget, width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    vfunc_get_preferred_width_for_height(widget: Gtk.Widget, height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_snapshot(snapshot: Gtk.Snapshot, widget: Gtk.Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    vfunc_start_editing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.CellRendererText */
    connect(sigName: "edited", callback: (($obj: CellRendererLanes, path: string, new_text: string) => void)): number
    connect_after(sigName: "edited", callback: (($obj: CellRendererLanes, path: string, new_text: string) => void)): number
    emit(sigName: "edited", path: string, new_text: string): void
    /* Signals of Gtk.CellRenderer */
    connect(sigName: "editing-canceled", callback: (($obj: CellRendererLanes) => void)): number
    connect_after(sigName: "editing-canceled", callback: (($obj: CellRendererLanes) => void)): number
    emit(sigName: "editing-canceled"): void
    connect(sigName: "editing-started", callback: (($obj: CellRendererLanes, editable: Gtk.CellEditable, path: string) => void)): number
    connect_after(sigName: "editing-started", callback: (($obj: CellRendererLanes, editable: Gtk.CellEditable, path: string) => void)): number
    emit(sigName: "editing-started", editable: Gtk.CellEditable, path: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lane-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lane-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dot-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dot-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::labels", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::labels", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::align-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alignment", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreground-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::markup", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::placeholder-text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rise", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rise-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-points", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stretch", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stretch-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strikethrough-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::underline-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::variant", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::variant-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::weight", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::weight-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editing", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CellRendererLanes_ConstructProps)
    _init (config?: CellRendererLanes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CellRendererLanes
    static $gtype: GObject.Type
}
export interface Color_ConstructProps extends GObject.Object_ConstructProps {
}
export class Color {
    /* Properties of Gitg.Color */
    readonly r: number
    readonly g: number
    readonly b: number
    /* Fields of Gitg.Color */
    idx: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Color */
    components(): [ /* r */ number, /* g */ number, /* b */ number ]
    next_index(): Color
    copy(): Color
    get_r(): number
    get_g(): number
    get_b(): number
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
    connect(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::r", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::r", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::b", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::b", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Color_ConstructProps)
    _init (config?: Color_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Color
    static reset(): void
    static next(): Color
    static $gtype: GObject.Type
}
export interface CommitListView_ConstructProps extends Gtk.TreeView_ConstructProps {
}
export class CommitListView {
    /* Properties of Gtk.TreeView */
    activate_on_single_click: boolean
    enable_grid_lines: Gtk.TreeViewGridLines
    enable_search: boolean
    enable_tree_lines: boolean
    expander_column: Gtk.TreeViewColumn
    fixed_height_mode: boolean
    headers_clickable: boolean
    headers_visible: boolean
    hover_expand: boolean
    hover_selection: boolean
    level_indentation: number
    model: Gtk.TreeModel
    reorderable: boolean
    rubber_banding: boolean
    search_column: number
    show_expanders: boolean
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
    /* Fields of Gtk.TreeView */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.CommitListView */
    find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [ /* returnType */ Gtk.CellRenderer | null, /* width */ number ]
    /* Methods of Gtk.TreeView */
    append_column(column: Gtk.TreeViewColumn): number
    collapse_all(): void
    collapse_row(path: Gtk.TreePath): boolean
    columns_autosize(): void
    convert_bin_window_to_tree_coords(bx: number, by: number): [ /* tx */ number, /* ty */ number ]
    convert_bin_window_to_widget_coords(bx: number, by: number): [ /* wx */ number, /* wy */ number ]
    convert_tree_to_bin_window_coords(tx: number, ty: number): [ /* bx */ number, /* by */ number ]
    convert_tree_to_widget_coords(tx: number, ty: number): [ /* wx */ number, /* wy */ number ]
    convert_widget_to_bin_window_coords(wx: number, wy: number): [ /* bx */ number, /* by */ number ]
    convert_widget_to_tree_coords(wx: number, wy: number): [ /* tx */ number, /* ty */ number ]
    create_row_drag_icon(path: Gtk.TreePath): Gdk.Paintable | null
    enable_model_drag_dest(formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    expand_all(): void
    expand_row(path: Gtk.TreePath, open_all: boolean): boolean
    expand_to_path(path: Gtk.TreePath): void
    get_activate_on_single_click(): boolean
    get_background_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_cell_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_column(n: number): Gtk.TreeViewColumn | null
    get_columns(): Gtk.TreeViewColumn[]
    get_cursor(): [ /* path */ Gtk.TreePath | null, /* focus_column */ Gtk.TreeViewColumn | null ]
    get_dest_row_at_pos(drag_x: number, drag_y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_drag_dest_row(): [ /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_enable_search(): boolean
    get_enable_tree_lines(): boolean
    get_expander_column(): Gtk.TreeViewColumn | null
    get_fixed_height_mode(): boolean
    get_grid_lines(): Gtk.TreeViewGridLines
    get_headers_clickable(): boolean
    get_headers_visible(): boolean
    get_hover_expand(): boolean
    get_hover_selection(): boolean
    get_level_indentation(): number
    get_model(): Gtk.TreeModel | null
    get_n_columns(): number
    get_path_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    get_reorderable(): boolean
    get_rubber_banding(): boolean
    get_search_column(): number
    get_search_entry(): Gtk.Editable | null
    get_selection(): Gtk.TreeSelection
    get_show_expanders(): boolean
    get_tooltip_column(): number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [ /* returnType */ boolean, /* model */ Gtk.TreeModel | null, /* path */ Gtk.TreePath | null, /* iter */ Gtk.TreeIter | null ]
    get_visible_range(): [ /* returnType */ boolean, /* start_path */ Gtk.TreePath | null, /* end_path */ Gtk.TreePath | null ]
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    insert_column(column: Gtk.TreeViewColumn, position: number): number
    insert_column_with_data_func(position: number, title: string, cell: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): number
    is_blank_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    is_rubber_banding_active(): boolean
    map_expanded_rows(func: Gtk.TreeViewMappingFunc): void
    move_column_after(column: Gtk.TreeViewColumn, base_column?: Gtk.TreeViewColumn | null): void
    remove_column(column: Gtk.TreeViewColumn): number
    row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    row_expanded(path: Gtk.TreePath): boolean
    scroll_to_cell(path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void
    scroll_to_point(tree_x: number, tree_y: number): void
    set_activate_on_single_click(single: boolean): void
    set_column_drag_function(func?: Gtk.TreeViewColumnDropFunc | null): void
    set_cursor(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, start_editing: boolean): void
    set_cursor_on_cell(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, focus_cell: Gtk.CellRenderer | null, start_editing: boolean): void
    set_drag_dest_row(path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition): void
    set_enable_search(enable_search: boolean): void
    set_enable_tree_lines(enabled: boolean): void
    set_expander_column(column?: Gtk.TreeViewColumn | null): void
    set_fixed_height_mode(enable: boolean): void
    set_grid_lines(grid_lines: Gtk.TreeViewGridLines): void
    set_headers_clickable(setting: boolean): void
    set_headers_visible(headers_visible: boolean): void
    set_hover_expand(expand: boolean): void
    set_hover_selection(hover: boolean): void
    set_level_indentation(indentation: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_reorderable(reorderable: boolean): void
    set_row_separator_func(func?: Gtk.TreeViewRowSeparatorFunc | null): void
    set_rubber_banding(enable: boolean): void
    set_search_column(column: number): void
    set_search_entry(entry?: Gtk.Editable | null): void
    set_search_equal_func(search_equal_func: Gtk.TreeViewSearchEqualFunc): void
    set_show_expanders(enabled: boolean): void
    set_tooltip_cell(tooltip: Gtk.Tooltip, path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null, cell?: Gtk.CellRenderer | null): void
    set_tooltip_column(column: number): void
    set_tooltip_row(tooltip: Gtk.Tooltip, path: Gtk.TreePath): void
    unset_rows_drag_dest(): void
    unset_rows_drag_source(): void
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
    /* Virtual methods of Gitg.CommitListView */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.TreeView */
    vfunc_columns_changed(): void
    vfunc_cursor_changed(): void
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean): boolean
    vfunc_row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    vfunc_row_collapsed(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_row_expanded(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_select_all(): boolean
    vfunc_select_cursor_parent(): boolean
    vfunc_select_cursor_row(start_editing: boolean): boolean
    vfunc_start_interactive_search(): boolean
    vfunc_test_collapse_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_test_expand_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_toggle_cursor_row(): boolean
    vfunc_unselect_all(): boolean
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
    /* Signals of Gtk.TreeView */
    connect(sigName: "columns-changed", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "columns-changed", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "columns-changed"): void
    connect(sigName: "cursor-changed", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "expand-collapse-cursor-row", callback: (($obj: CommitListView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    connect_after(sigName: "expand-collapse-cursor-row", callback: (($obj: CommitListView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    emit(sigName: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void
    connect(sigName: "move-cursor", callback: (($obj: CommitListView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: CommitListView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean): void
    connect(sigName: "row-activated", callback: (($obj: CommitListView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    connect_after(sigName: "row-activated", callback: (($obj: CommitListView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    emit(sigName: "row-activated", path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    connect(sigName: "row-collapsed", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-collapsed", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-collapsed", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "row-expanded", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-expanded", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-expanded", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "select-all", callback: (($obj: CommitListView) => boolean)): number
    connect_after(sigName: "select-all", callback: (($obj: CommitListView) => boolean)): number
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-parent", callback: (($obj: CommitListView) => boolean)): number
    connect_after(sigName: "select-cursor-parent", callback: (($obj: CommitListView) => boolean)): number
    emit(sigName: "select-cursor-parent"): void
    connect(sigName: "select-cursor-row", callback: (($obj: CommitListView, object: boolean) => boolean)): number
    connect_after(sigName: "select-cursor-row", callback: (($obj: CommitListView, object: boolean) => boolean)): number
    emit(sigName: "select-cursor-row", object: boolean): void
    connect(sigName: "start-interactive-search", callback: (($obj: CommitListView) => boolean)): number
    connect_after(sigName: "start-interactive-search", callback: (($obj: CommitListView) => boolean)): number
    emit(sigName: "start-interactive-search"): void
    connect(sigName: "test-collapse-row", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-collapse-row", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-collapse-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "test-expand-row", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-expand-row", callback: (($obj: CommitListView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-expand-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: CommitListView) => boolean)): number
    connect_after(sigName: "toggle-cursor-row", callback: (($obj: CommitListView) => boolean)): number
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: CommitListView) => boolean)): number
    connect_after(sigName: "unselect-all", callback: (($obj: CommitListView) => boolean)): number
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: CommitListView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: CommitListView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: CommitListView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: CommitListView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "map", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: CommitListView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: CommitListView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: CommitListView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: CommitListView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: CommitListView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CommitListView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "show", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: CommitListView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: CommitListView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: CommitListView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: CommitListView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-search", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expander-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-clickable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-selection", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level-indentation", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reorderable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rubber-banding", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-expanders", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommitListView_ConstructProps)
    _init (config?: CommitListView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: CommitModel): CommitListView
    static new(): CommitListView
    static for_repository(repository: Repository): CommitListView
    static $gtype: GObject.Type
}
export interface CommitModel_ConstructProps extends GObject.Object_ConstructProps {
    limit?: number
    sort_mode?: Ggit.SortMode
    repository?: Repository
}
export class CommitModel {
    /* Properties of Gitg.CommitModel */
    limit: number
    sort_mode: Ggit.SortMode
    repository: Repository
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.CommitModel */
    get_permanent_lanes(): Ggit.OId[]
    set_permanent_lanes(value: Ggit.OId[]): void
    reload(): void
    size(): number
    get(idx: number): Commit | null
    set_include(ids: Ggit.OId[]): void
    get_include(): Ggit.OId[]
    set_exclude(ids: Ggit.OId[]): void
    commit_from_iter(iter: Gtk.TreeIter): Commit | null
    path_from_commit(commit: Commit): Gtk.TreePath | null
    commit_from_path(path: Gtk.TreePath): Commit | null
    get_limit(): number
    set_limit(value: number): void
    get_sort_mode(): Ggit.SortMode
    set_sort_mode(value: Ggit.SortMode): void
    get_repository(): Repository
    set_repository(value: Repository): void
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
    /* Virtual methods of Gitg.CommitModel */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gitg.CommitModel */
    connect(sigName: "started", callback: (($obj: CommitModel) => void)): number
    connect_after(sigName: "started", callback: (($obj: CommitModel) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "update", callback: (($obj: CommitModel, added: number) => void)): number
    connect_after(sigName: "update", callback: (($obj: CommitModel, added: number) => void)): number
    emit(sigName: "update", added: number): void
    connect(sigName: "finished", callback: (($obj: CommitModel) => void)): number
    connect_after(sigName: "finished", callback: (($obj: CommitModel) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "begin-clear", callback: (($obj: CommitModel) => void)): number
    connect_after(sigName: "begin-clear", callback: (($obj: CommitModel) => void)): number
    emit(sigName: "begin-clear"): void
    connect(sigName: "end-clear", callback: (($obj: CommitModel) => void)): number
    connect_after(sigName: "end-clear", callback: (($obj: CommitModel) => void)): number
    emit(sigName: "end-clear"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.TreeModel */
    connect(sigName: "row-changed", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-changed", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-changed", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-deleted", callback: (($obj: CommitModel, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: CommitModel, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-deleted", path: Gtk.TreePath): void
    connect(sigName: "row-has-child-toggled", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-has-child-toggled", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-has-child-toggled", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "row-inserted", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter) => void)): number
    emit(sigName: "row-inserted", path: Gtk.TreePath, iter: Gtk.TreeIter): void
    connect(sigName: "rows-reordered", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    connect_after(sigName: "rows-reordered", callback: (($obj: CommitModel, path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null) => void)): number
    emit(sigName: "rows-reordered", path: Gtk.TreePath, iter: Gtk.TreeIter, new_order?: object | null): void
    connect(sigName: "notify::limit", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sort-mode", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-mode", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repository", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommitModel_ConstructProps)
    _init (config?: CommitModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(repository?: Repository | null): CommitModel
    static $gtype: GObject.Type
}
export interface Commit_ConstructProps extends Ggit.Commit_ConstructProps {
    tag?: LaneTag
    mylane?: number
}
export class Commit {
    /* Properties of Gitg.Commit */
    tag: LaneTag
    mylane: number
    readonly lane: Lane
    readonly format_patch_name: string
    readonly committer_date_for_display: string
    readonly author_date_for_display: string
    /* Fields of Ggit.Commit */
    parent_instance: Ggit.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Commit */
    get_lanes(): Lane[]
    insert_lane(lane: Lane, idx: number): Lane[]
    remove_lane(lane: Lane): Lane[]
    update_lanes(lanes: Lane[], mylane: number): void
    get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff
    get_note(): Ggit.Note
    get_tag(): LaneTag
    set_tag(value: LaneTag): void
    get_mylane(): number
    set_mylane(value: number): void
    get_lane(): Lane
    get_format_patch_name(): string
    get_committer_date_for_display(): string
    get_author_date_for_display(): string
    /* Methods of Ggit.Commit */
    amend(update_ref: string | null, author: Ggit.Signature, committer: Ggit.Signature, message_encoding: string | null, message: string, tree: Ggit.Tree): Ggit.OId | null
    get_author(): Ggit.Signature | null
    get_committer(): Ggit.Signature | null
    get_message(): string | null
    get_message_encoding(): string | null
    get_nth_ancestor(n: number): Ggit.Commit | null
    get_parents(): Ggit.CommitParents | null
    get_subject(): string | null
    get_tree(): Ggit.Tree | null
    get_tree_id(): Ggit.OId | null
    /* Methods of Ggit.Object */
    get_id(): Ggit.OId | null
    get_owner(): Ggit.Repository | null
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
    connect(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tag", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mylane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mylane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format-patch-name", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-patch-name", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::committer-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::committer-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::author-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Commit_ConstructProps)
    _init (config?: Commit_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Commit
    static $gtype: GObject.Type
}
export class CredentialsManager {
    /* Fields of Gitg.CredentialsManager */
    ref_count: number
    /* Methods of Gitg.CredentialsManager */
    credentials(url: string, username: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null
    static name: string
    static new(config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean): CredentialsManager
    constructor(config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean)
    /* Static methods and pseudo-constructors */
    static new(config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean): CredentialsManager
}
export interface Date_ConstructProps extends GObject.Object_ConstructProps {
    date_string?: string
}
export class Date {
    /* Properties of Gitg.Date */
    date_string: string
    readonly date: GLib.DateTime
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Date */
    for_display(): string
    get_date_string(): string
    set_date_string(value: string): void
    get_date(): GLib.DateTime
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gitg.Date */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date-string", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-string", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Date_ConstructProps)
    _init (config?: Date_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(date: string): Date
    static for_date_time(dt: GLib.DateTime): Date
    static parse(date: string): GLib.DateTime
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DiffStat_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    added?: number
    removed?: number
}
export class DiffStat {
    /* Properties of Gitg.DiffStat */
    added: number
    removed: number
    /* Properties of Gtk.DrawingArea */
    content_height: number
    content_width: number
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
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.DiffStat */
    get_added(): number
    set_added(value: number): void
    get_removed(): number
    set_removed(value: number): void
    /* Methods of Gtk.DrawingArea */
    get_content_height(): number
    get_content_width(): number
    set_content_height(height: number): void
    set_content_width(width: number): void
    set_draw_func(draw_func: Gtk.DrawingAreaDrawFunc | null): void
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
    /* Virtual methods of Gtk.DrawingArea */
    vfunc_resize(width: number, height: number): void
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
    /* Signals of Gtk.DrawingArea */
    connect(sigName: "resize", callback: (($obj: DiffStat, width: number, height: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: DiffStat, width: number, height: number) => void)): number
    emit(sigName: "resize", width: number, height: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: DiffStat, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DiffStat, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: DiffStat, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DiffStat, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "map", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: DiffStat, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DiffStat, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: DiffStat, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DiffStat, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: DiffStat, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DiffStat, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "show", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: DiffStat, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DiffStat, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: DiffStat) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DiffStat) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::added", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::added", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::removed", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removed", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-height", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-height", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-width", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-width", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffStat_ConstructProps)
    _init (config?: DiffStat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiffStat
    static $gtype: GObject.Type
}
export interface DiffViewOptions_ConstructProps extends Gtk.Toolbar_ConstructProps {
    context_lines?: number
    view?: DiffView
}
export class DiffViewOptions {
    /* Properties of Gitg.DiffViewOptions */
    context_lines: number
    view: DiffView
    /* Properties of Gtk.Toolbar */
    icon_size: Gtk.IconSize
    icon_size_set: boolean
    show_arrow: boolean
    toolbar_style: Gtk.ToolbarStyle
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
    /* Fields of Gtk.Toolbar */
    container: Gtk.Container
    priv: Gtk.ToolbarPrivate
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.DiffViewOptions */
    get_context_lines(): number
    set_context_lines(value: number): void
    get_view(): DiffView | null
    set_view(value?: DiffView | null): void
    /* Methods of Gtk.Toolbar */
    get_drop_index(x: number, y: number): number
    get_icon_size(): Gtk.IconSize
    get_item_index(item: Gtk.ToolItem): number
    get_n_items(): number
    get_nth_item(n: number): Gtk.ToolItem | null
    get_relief_style(): Gtk.ReliefStyle
    get_show_arrow(): boolean
    get_style(): Gtk.ToolbarStyle
    insert(item: Gtk.ToolItem, pos: number): void
    set_drop_highlight_item(tool_item: Gtk.ToolItem | null, index_: number): void
    set_icon_size(icon_size: Gtk.IconSize): void
    set_show_arrow(show_arrow: boolean): void
    set_style(style: Gtk.ToolbarStyle): void
    unset_icon_size(): void
    unset_style(): void
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
    /* Virtual methods of Gtk.Toolbar */
    vfunc_orientation_changed(orientation: Gtk.Orientation): void
    vfunc_popup_context_menu(x: number, y: number, button_number: number): boolean
    vfunc_style_changed(style: Gtk.ToolbarStyle): void
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
    /* Signals of Gtk.Toolbar */
    connect(sigName: "focus-home-or-end", callback: (($obj: DiffViewOptions, focus_home: boolean) => boolean)): number
    connect_after(sigName: "focus-home-or-end", callback: (($obj: DiffViewOptions, focus_home: boolean) => boolean)): number
    emit(sigName: "focus-home-or-end", focus_home: boolean): void
    connect(sigName: "orientation-changed", callback: (($obj: DiffViewOptions, orientation: Gtk.Orientation) => void)): number
    connect_after(sigName: "orientation-changed", callback: (($obj: DiffViewOptions, orientation: Gtk.Orientation) => void)): number
    emit(sigName: "orientation-changed", orientation: Gtk.Orientation): void
    connect(sigName: "popup-context-menu", callback: (($obj: DiffViewOptions, x: number, y: number, button: number) => boolean)): number
    connect_after(sigName: "popup-context-menu", callback: (($obj: DiffViewOptions, x: number, y: number, button: number) => boolean)): number
    emit(sigName: "popup-context-menu", x: number, y: number, button: number): void
    connect(sigName: "style-changed", callback: (($obj: DiffViewOptions, style: Gtk.ToolbarStyle) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: DiffViewOptions, style: Gtk.ToolbarStyle) => void)): number
    emit(sigName: "style-changed", style: Gtk.ToolbarStyle): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: DiffViewOptions, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: DiffViewOptions, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DiffViewOptions, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: DiffViewOptions, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DiffViewOptions, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "map", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: DiffViewOptions, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DiffViewOptions, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: DiffViewOptions, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DiffViewOptions, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: DiffViewOptions, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DiffViewOptions, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "show", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: DiffViewOptions, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DiffViewOptions, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: DiffViewOptions) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DiffViewOptions) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context-lines", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-lines", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-size", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-size-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-arrow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-arrow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::toolbar-style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toolbar-style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffViewOptions_ConstructProps)
    _init (config?: DiffViewOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(view?: DiffView | null): DiffViewOptions
    static new(): DiffViewOptions
    static $gtype: GObject.Type
}
export interface DiffView_ConstructProps extends Gtk.Grid_ConstructProps {
    has_selection?: boolean
    diff?: Ggit.Diff
    commit?: Commit
    wrap_lines?: boolean
    staged?: boolean
    unstaged?: boolean
    show_parents?: boolean
    default_collapse_all?: boolean
    use_gravatar?: boolean
    tab_width?: number
    handle_selection?: boolean
    highlight?: boolean
    repository?: Repository
    new_is_workdir?: boolean
    ignore_whitespace?: boolean
    changes_inline?: boolean
    context_lines?: number
}
export class DiffView {
    /* Properties of Gitg.DiffView */
    readonly options: Ggit.DiffOptions
    has_selection: boolean
    diff: Ggit.Diff
    commit: Commit
    wrap_lines: boolean
    staged: boolean
    unstaged: boolean
    show_parents: boolean
    default_collapse_all: boolean
    use_gravatar: boolean
    tab_width: number
    handle_selection: boolean
    highlight: boolean
    repository: Repository
    new_is_workdir: boolean
    ignore_whitespace: boolean
    changes_inline: boolean
    context_lines: number
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
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.DiffView */
    apply_link_tags(buffer: Gtk.TextBuffer, regex: GLib.Regex, replacement: string | null, custom_color_link: Gdk.RGBA, is_custom_color: boolean, is_custom_link: boolean): void
    follow_if_link(texview: Gtk.Widget, iter: Gtk.TextIter): void
    get_selection(): PatchSet[]
    get_options(): Ggit.DiffOptions
    get_has_selection(): boolean
    get_diff(): Ggit.Diff | null
    set_diff(value?: Ggit.Diff | null): void
    get_commit(): Commit | null
    set_commit(value?: Commit | null): void
    get_wrap_lines(): boolean
    set_wrap_lines(value: boolean): void
    get_staged(): boolean
    set_staged(value: boolean): void
    get_unstaged(): boolean
    set_unstaged(value: boolean): void
    get_show_parents(): boolean
    set_show_parents(value: boolean): void
    get_default_collapse_all(): boolean
    set_default_collapse_all(value: boolean): void
    get_use_gravatar(): boolean
    set_use_gravatar(value: boolean): void
    get_tab_width(): number
    set_tab_width(value: number): void
    get_handle_selection(): boolean
    set_handle_selection(value: boolean): void
    get_highlight(): boolean
    set_highlight(value: boolean): void
    get_repository(): Repository | null
    set_repository(value?: Repository | null): void
    get_new_is_workdir(): boolean
    set_new_is_workdir(value: boolean): void
    get_ignore_whitespace(): boolean
    set_ignore_whitespace(value: boolean): void
    get_changes_inline(): boolean
    set_changes_inline(value: boolean): void
    get_context_lines(): number
    set_context_lines(value: number): void
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
    /* Signals of Gitg.DiffView */
    connect(sigName: "options-changed", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "options-changed", callback: (($obj: DiffView) => void)): number
    emit(sigName: "options-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DiffView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: DiffView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: DiffView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DiffView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: DiffView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: DiffView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "map", callback: (($obj: DiffView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: DiffView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: DiffView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: DiffView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: DiffView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: DiffView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: DiffView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DiffView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "show", callback: (($obj: DiffView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: DiffView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: DiffView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: DiffView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: DiffView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DiffView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::diff", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diff", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::staged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::staged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unstaged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unstaged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-parents", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-parents", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-collapse-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-collapse-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-gravatar", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gravatar", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::highlight", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repository", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::new-is-workdir", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-is-workdir", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-whitespace", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-whitespace", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::changes-inline", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changes-inline", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::context-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-row", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiffView_ConstructProps)
    _init (config?: DiffView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiffView
    static $gtype: GObject.Type
}
export interface FontManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontManager {
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
    connect(sigName: "notify", callback: (($obj: FontManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontManager_ConstructProps)
    _init (config?: FontManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text_view: Gtk.TextView, plugin: boolean): FontManager
    static $gtype: GObject.Type
}
export interface Hook_ConstructProps extends GObject.Object_ConstructProps {
    environment?: Gee.HashMap
    name?: string
    working_directory?: Gio.File
}
export class Hook {
    /* Properties of Gitg.Hook */
    environment: Gee.HashMap
    name: string
    working_directory: Gio.File
    readonly output: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Hook */
    add_argument(arg: string): void
    exists_in(repository: Ggit.Repository): boolean
    run_sync(repository: Ggit.Repository): number
    run(repository: Ggit.Repository, _callback_?: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): number
    get_environment(): Gee.HashMap
    set_environment(value: Gee.HashMap): void
    get_name(): string
    set_name(value: string): void
    get_working_directory(): Gio.File | null
    set_working_directory(value?: Gio.File | null): void
    get_output(): string[]
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
    connect(sigName: "notify", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::environment", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::working-directory", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working-directory", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hook_ConstructProps)
    _init (config?: Hook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Hook
    static $gtype: GObject.Type
}
export class LabelRenderer {
    /* Fields of Gitg.LabelRenderer */
    ref_count: number
    static name: string
    static new(): LabelRenderer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LabelRenderer
    static width(widget: Gtk.Widget, font: object | null, labels: Ref[]): number
    static draw(widget: Gtk.Widget, font: Pango.FontDescription, context: cairo.Context, labels: Ref[], area: Gdk.Rectangle): void
    static get_ref_at_pos(widget: Gtk.Widget, font: Pango.FontDescription, labels: Ref[], x: number): [ /* returnType */ Ref | null, /* hot_x */ number ]
    static render_ref(widget: Gtk.Widget, font: Pango.FontDescription, r: Ref, height: number, minwidth: number): GdkPixbuf.Pixbuf
}
export interface Lanes_ConstructProps extends GObject.Object_ConstructProps {
    inactive_max?: number
    inactive_collapse?: number
    inactive_gap?: number
    inactive_enabled?: boolean
    miss_commits?: Gee.LinkedList
}
export class Lanes {
    /* Properties of Gitg.Lanes */
    inactive_max: number
    inactive_collapse: number
    inactive_gap: number
    inactive_enabled: boolean
    miss_commits: Gee.LinkedList
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Lanes */
    reset(reserved: Ggit.OId[] | null, roots?: Gee.HashSet | null): void
    next(next: Commit, save_miss: boolean): [ /* returnType */ boolean, /* lanes */ Lane[], /* nextpos */ number ]
    get_inactive_max(): number
    set_inactive_max(value: number): void
    get_inactive_collapse(): number
    set_inactive_collapse(value: number): void
    get_inactive_gap(): number
    set_inactive_gap(value: number): void
    get_inactive_enabled(): boolean
    set_inactive_enabled(value: boolean): void
    get_miss_commits(): Gee.LinkedList
    set_miss_commits(value: Gee.LinkedList): void
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
    connect(sigName: "notify", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::inactive-max", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-max", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactive-collapse", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-collapse", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactive-gap", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-gap", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactive-enabled", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-enabled", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::miss-commits", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::miss-commits", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Lanes_ConstructProps)
    _init (config?: Lanes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Lanes
    static $gtype: GObject.Type
}
export interface Lane_ConstructProps extends GObject.Object_ConstructProps {
}
export class Lane {
    /* Fields of Gitg.Lane */
    color: Color
    from: number[]
    tag: LaneTag
    boundary_id: Ggit.OId | null
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Lane */
    copy(): Lane
    dup(): Lane
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
    connect(sigName: "notify", callback: (($obj: Lane, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Lane, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Lane_ConstructProps)
    _init (config?: Lane_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Lane
    static with_color(color?: Color | null): Lane
    static $gtype: GObject.Type
}
export interface ProgressBin_ConstructProps extends Gtk.Bin_ConstructProps {
    fraction?: number
}
export class ProgressBin {
    /* Properties of Gitg.ProgressBin */
    fraction: number
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
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.ProgressBin */
    get_fraction(): number
    set_fraction(value: number): void
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget | null
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
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: ProgressBin, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ProgressBin, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ProgressBin, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ProgressBin, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ProgressBin, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "map", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ProgressBin, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ProgressBin, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ProgressBin, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ProgressBin, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ProgressBin, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ProgressBin, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "show", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ProgressBin, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ProgressBin, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ProgressBin) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ProgressBin) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fraction", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fraction", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProgressBin_ConstructProps)
    _init (config?: ProgressBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProgressBin
    static $gtype: GObject.Type
}
export interface RefBase_ConstructProps extends Ggit.Ref_ConstructProps {
    d_parsed_name?: ParsedRefName
    d_pushes?: Ref[]
    state?: RefState
    working?: boolean
}
export class RefBase {
    /* Properties of Gitg.Ref */
    d_parsed_name: ParsedRefName
    d_pushes: Ref[]
    state: RefState
    working: boolean
    /* Fields of Ggit.Ref */
    parent_instance: Ggit.Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Ggit.Ref */
    delete(): void
    delete_log(): void
    get_log(): Ggit.Reflog | null
    get_name(): string | null
    get_owner(): Ggit.Repository | null
    get_reference_type(): Ggit.RefType
    get_shorthand(): string | null
    get_symbolic_target(): string | null
    get_target(): Ggit.OId | null
    has_log(): boolean
    is_branch(): boolean
    is_note(): boolean
    is_remote(): boolean
    is_tag(): boolean
    lookup(): Ggit.Object | null
    rename(new_name: string, force: boolean, log_message: string): Ggit.Ref | null
    resolve(): Ggit.Ref | null
    set_symbolic_target(target: string, log_message: string): Ggit.Ref | null
    set_target(oid: Ggit.OId, log_message: string): Ggit.Ref | null
    to_string(): string | null
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
    /* Methods of Gitg.Ref */
    get_owner(): Repository
    get_d_parsed_name(): ParsedRefName
    set_d_parsed_name(value: ParsedRefName): void
    get_d_pushes(): Ref[] | null
    set_d_pushes(value?: Ref[] | null): void
    get_state(): RefState
    set_state(value: RefState): void
    get_working(): boolean
    set_working(value: boolean): void
    get_parsed_name(): ParsedRefName
    get_pushes(): Ref[]
    /* Virtual methods of Gitg.RefBase */
    vfunc_get_owner(): Repository
    vfunc_get_d_parsed_name(): ParsedRefName
    vfunc_set_d_parsed_name(value: ParsedRefName): void
    vfunc_get_d_pushes(): Ref[] | null
    vfunc_set_d_pushes(value?: Ref[] | null): void
    vfunc_get_state(): RefState
    vfunc_set_state(value: RefState): void
    vfunc_get_working(): boolean
    vfunc_set_working(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::d-parsed-name", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::d-pushes", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::working", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RefBase_ConstructProps)
    _init (config?: RefBase_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RefBase
    static $gtype: GObject.Type
}
export interface ParsedRefName_ConstructProps extends GObject.Object_ConstructProps {
    rtype?: RefType
}
export class ParsedRefName {
    /* Properties of Gitg.ParsedRefName */
    rtype: RefType
    readonly name: string
    readonly shortname: string
    readonly remote_name: string
    readonly remote_branch: string
    readonly prefix: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.ParsedRefName */
    get_rtype(): RefType
    get_name(): string
    get_shortname(): string
    get_remote_name(): string | null
    get_remote_branch(): string | null
    get_prefix(): string | null
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
    connect(sigName: "notify", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rtype", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtype", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shortname", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortname", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-branch", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-branch", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ParsedRefName_ConstructProps)
    _init (config?: ParsedRefName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): ParsedRefName
    static $gtype: GObject.Type
}
export interface Remote_ConstructProps extends Ggit.Remote_ConstructProps {
    state?: RemoteState
    fetch_specs?: string[]
    push_specs?: string[]
    credentials_provider?: CredentialsProvider
}
export class Remote {
    /* Properties of Gitg.Remote */
    readonly transfer_progress: number
    state: RemoteState
    fetch_specs: string[]
    push_specs: string[]
    credentials_provider: CredentialsProvider
    /* Fields of Ggit.Remote */
    parent_instance: Ggit.Native
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Remote */
    connect(direction: Ggit.Direction, callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void
    connect_finish(_res_: Gio.AsyncResult): void
    disconnect(_callback_?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(_res_: Gio.AsyncResult): void
    download(callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void
    download_finish(_res_: Gio.AsyncResult): void
    push(branch: string, callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void
    push_finish(_res_: Gio.AsyncResult): void
    fetch(message?: string | null, callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void
    fetch_finish(_res_: Gio.AsyncResult): void
    get_transfer_progress(): number
    get_state(): RemoteState
    get_fetch_specs(): string[] | null
    set_fetch_specs(value: string[] | null): void
    get_push_specs(): string[] | null
    set_push_specs(value: string[] | null): void
    get_credentials_provider(): CredentialsProvider | null
    set_credentials_provider(value?: CredentialsProvider | null): void
    /* Methods of Ggit.Remote */
    connect(direction: Ggit.Direction, callbacks: Ggit.RemoteCallbacks, proxy_options?: Ggit.ProxyOptions | null, custom_headers?: string | null): void
    disconnect(): void
    download(specs: string[] | null, fetch_options: Ggit.FetchOptions): boolean
    get_connected(): boolean
    get_name(): string | null
    get_owner(): Ggit.Repository | null
    get_url(): string | null
    list(): Ggit.RemoteHead[] | null
    prune(callbacks: Ggit.RemoteCallbacks): void
    push(specs: string[] | null, push_options: Ggit.PushOptions): boolean
    update_tips(callbacks: Ggit.RemoteCallbacks, update_fetch_head: boolean, tags_type: Ggit.RemoteDownloadTagsType, message?: string | null): boolean
    upload(specs: string[] | null, push_options: Ggit.PushOptions): boolean
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
    /* Signals of Gitg.Remote */
    connect(sigName: "tip-updated", callback: (($obj: Remote, refname: string, a: Ggit.OId, b: Ggit.OId) => void)): number
    connect_after(sigName: "tip-updated", callback: (($obj: Remote, refname: string, a: Ggit.OId, b: Ggit.OId) => void)): number
    emit(sigName: "tip-updated", refname: string, a: Ggit.OId, b: Ggit.OId): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::transfer-progress", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transfer-progress", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fetch-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fetch-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::push-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::push-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::credentials-provider", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials-provider", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remote
    static new(repository: Ggit.Repository, name: string, url: string): Remote
    static $gtype: GObject.Type
}
export interface RepositoryListBox_ConstructProps extends Gtk.ListBox_ConstructProps {
    mode?: SelectionMode
    bookmarks_from_recent_files?: boolean
    location?: Gio.File
}
export class RepositoryListBox {
    /* Properties of Gitg.RepositoryListBox */
    mode: SelectionMode
    bookmarks_from_recent_files: boolean
    location: Gio.File
    readonly has_selection: boolean
    /* Properties of Gtk.ListBox */
    accept_unpaired_release: boolean
    activate_on_single_click: boolean
    selection_mode: Gtk.SelectionMode
    show_separators: boolean
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
    /* Methods of Gitg.RepositoryListBox */
    populate_bookmarks(): void
    end_cloning(row: RepositoryListBoxRow, repository?: Repository | null): void
    begin_cloning(location: Gio.File): RepositoryListBoxRow | null
    add_repository(repository: Repository, visited?: GLib.DateTime | null): RepositoryListBoxRow | null
    get_selection(): RepositoryListBoxRow[]
    filter_text(text?: string | null): void
    get_mode(): SelectionMode
    set_mode(value: SelectionMode): void
    get_bookmarks_from_recent_files(): boolean
    set_bookmarks_from_recent_files(value: boolean): void
    get_location(): Gio.File | null
    set_location(value?: Gio.File | null): void
    get_has_selection(): boolean
    /* Methods of Gtk.ListBox */
    append(child: Gtk.Widget): void
    bind_model(model: Gio.ListModel | null, create_widget_func: Gtk.ListBoxCreateWidgetFunc | null): void
    drag_highlight_row(row: Gtk.ListBoxRow): void
    drag_unhighlight_row(): void
    get_activate_on_single_click(): boolean
    get_adjustment(): Gtk.Adjustment
    get_row_at_index(index_: number): Gtk.ListBoxRow | null
    get_row_at_y(y: number): Gtk.ListBoxRow | null
    get_selected_row(): Gtk.ListBoxRow | null
    get_selected_rows(): Gtk.ListBoxRow[]
    get_selection_mode(): Gtk.SelectionMode
    get_show_separators(): boolean
    insert(child: Gtk.Widget, position: number): void
    invalidate_filter(): void
    invalidate_headers(): void
    invalidate_sort(): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    select_all(): void
    select_row(row?: Gtk.ListBoxRow | null): void
    selected_foreach(func: Gtk.ListBoxForeachFunc): void
    set_activate_on_single_click(single: boolean): void
    set_adjustment(adjustment?: Gtk.Adjustment | null): void
    set_filter_func(filter_func: Gtk.ListBoxFilterFunc | null): void
    set_header_func(update_header: Gtk.ListBoxUpdateHeaderFunc | null): void
    set_placeholder(placeholder?: Gtk.Widget | null): void
    set_selection_mode(mode: Gtk.SelectionMode): void
    set_show_separators(show_separators: boolean): void
    set_sort_func(sort_func: Gtk.ListBoxSortFunc | null): void
    unselect_all(): void
    unselect_row(row: Gtk.ListBoxRow): void
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
    /* Signals of Gitg.RepositoryListBox */
    connect(sigName: "repository-activated", callback: (($obj: RepositoryListBox, repository: Repository) => void)): number
    connect_after(sigName: "repository-activated", callback: (($obj: RepositoryListBox, repository: Repository) => void)): number
    emit(sigName: "repository-activated", repository: Repository): void
    connect(sigName: "show-error", callback: (($obj: RepositoryListBox, primary_message: string, secondary_message: string) => void)): number
    connect_after(sigName: "show-error", callback: (($obj: RepositoryListBox, primary_message: string, secondary_message: string) => void)): number
    emit(sigName: "show-error", primary_message: string, secondary_message: string): void
    /* Signals of Gtk.ListBox */
    connect(sigName: "activate-cursor-row", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "activate-cursor-row", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "activate-cursor-row"): void
    connect(sigName: "move-cursor", callback: (($obj: RepositoryListBox, object: Gtk.MovementStep, p0: number, p1: boolean, p2: boolean) => void)): number
    connect_after(sigName: "move-cursor", callback: (($obj: RepositoryListBox, object: Gtk.MovementStep, p0: number, p1: boolean, p2: boolean) => void)): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number, p1: boolean, p2: boolean): void
    connect(sigName: "row-activated", callback: (($obj: RepositoryListBox, row: Gtk.ListBoxRow) => void)): number
    connect_after(sigName: "row-activated", callback: (($obj: RepositoryListBox, row: Gtk.ListBoxRow) => void)): number
    emit(sigName: "row-activated", row: Gtk.ListBoxRow): void
    connect(sigName: "row-selected", callback: (($obj: RepositoryListBox, row?: Gtk.ListBoxRow | null) => void)): number
    connect_after(sigName: "row-selected", callback: (($obj: RepositoryListBox, row?: Gtk.ListBoxRow | null) => void)): number
    emit(sigName: "row-selected", row?: Gtk.ListBoxRow | null): void
    connect(sigName: "select-all", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "select-all", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "select-all"): void
    connect(sigName: "selected-rows-changed", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "selected-rows-changed", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "selected-rows-changed"): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "toggle-cursor-row", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "unselect-all", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: RepositoryListBox, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RepositoryListBox, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: RepositoryListBox, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RepositoryListBox, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "map", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: RepositoryListBox, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RepositoryListBox, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: RepositoryListBox, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RepositoryListBox, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: RepositoryListBox, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: RepositoryListBox, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "realize", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "show", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: RepositoryListBox, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RepositoryListBox, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: RepositoryListBox) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RepositoryListBox) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bookmarks-from-recent-files", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bookmarks-from-recent-files", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-selection", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-unpaired-release", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-unpaired-release", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-separators", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-separators", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepositoryListBox_ConstructProps)
    _init (config?: RepositoryListBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RepositoryListBox
    static $gtype: GObject.Type
}
export interface RepositoryListBoxRow_ConstructProps extends Gtk.ListBoxRow_ConstructProps {
    mode?: SelectionMode
    selected?: boolean
    repository?: Repository
    can_remove?: boolean
    time?: GLib.DateTime
    fraction?: number
    repository_name?: string
    dirname?: string
    branch_name?: string
    loading?: boolean
}
export class RepositoryListBoxRow {
    /* Properties of Gitg.RepositoryListBoxRow */
    mode: SelectionMode
    selected: boolean
    repository: Repository
    can_remove: boolean
    time: GLib.DateTime
    fraction: number
    repository_name: string
    dirname: string
    branch_name: string
    loading: boolean
    /* Properties of Gtk.ListBoxRow */
    activatable: boolean
    child: Gtk.Widget
    selectable: boolean
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
    /* Fields of Gtk.ListBoxRow */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.RepositoryListBoxRow */
    get_mode(): SelectionMode
    set_mode(value: SelectionMode): void
    get_selected(): boolean
    set_selected(value: boolean): void
    get_repository(): Repository | null
    set_repository(value?: Repository | null): void
    get_can_remove(): boolean
    set_can_remove(value: boolean): void
    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    set_fraction(value: number): void
    get_repository_name(): string | null
    set_repository_name(value?: string | null): void
    get_dirname(): string | null
    set_dirname(value?: string | null): void
    get_branch_name(): string | null
    set_branch_name(value?: string | null): void
    get_loading(): boolean
    set_loading(value: boolean): void
    /* Methods of Gtk.ListBoxRow */
    changed(): void
    get_activatable(): boolean
    get_child(): Gtk.Widget | null
    get_header(): Gtk.Widget | null
    get_index(): number
    get_selectable(): boolean
    is_selected(): boolean
    set_activatable(activatable: boolean): void
    set_child(child?: Gtk.Widget | null): void
    set_header(header?: Gtk.Widget | null): void
    set_selectable(selectable: boolean): void
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
    /* Virtual methods of Gtk.ListBoxRow */
    vfunc_activate(): void
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
    /* Signals of Gitg.RepositoryListBoxRow */
    connect(sigName: "request-remove", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "request-remove", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "request-remove"): void
    /* Signals of Gtk.ListBoxRow */
    connect(sigName: "activate", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "activate", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "activate"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: RepositoryListBoxRow, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RepositoryListBoxRow, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: RepositoryListBoxRow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RepositoryListBoxRow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "map", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: RepositoryListBoxRow, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RepositoryListBoxRow, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: RepositoryListBoxRow, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RepositoryListBoxRow, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: RepositoryListBoxRow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: RepositoryListBoxRow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "realize", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "show", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: RepositoryListBoxRow, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RepositoryListBoxRow, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: RepositoryListBoxRow) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RepositoryListBoxRow) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repository", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-remove", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fraction", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fraction", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repository-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirname", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirname", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::branch-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::loading", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loading", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activatable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepositoryListBoxRow_ConstructProps)
    _init (config?: RepositoryListBoxRow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(repository: Repository | null, dirname: string): RepositoryListBoxRow
    static new(): RepositoryListBoxRow
    static $gtype: GObject.Type
}
export interface Repository_ConstructProps extends Ggit.Repository_ConstructProps {
}
export class Repository {
    /* Properties of Gitg.Repository */
    readonly name: string
    readonly stage: Stage
    /* Properties of Ggit.Repository */
    readonly head: Ggit.Ref
    workdir: Gio.File
    /* Fields of Ggit.Native */
    parent_instance: Ggit.ObjectFactoryBase
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Repository */
    clear_refs_cache(): void
    refs_for_id(id: Ggit.OId): Ref[]
    lookup(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, id: Ggit.OId): object | null
    lookup_reference(name: string): Ref
    lookup_reference_dwim(short_name: string): Ref
    create_branch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags): Branch
    create_reference(name: string, oid: Ggit.OId, message: string): Ref
    create_symbolic_reference(name: string, target: string, message: string): Ref
    get_head(): Ref
    get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature
    get_name(): string | null
    get_stage(): Stage
    /* Methods of Ggit.Repository */
    add_remote_fetch(remote: Ggit.Remote, refspec: string): void
    add_remote_push(remote: Ggit.Remote, refspec: string): void
    blame_file(file: Gio.File, blame_options?: Ggit.BlameOptions | null): Ggit.Blame | null
    checkout_head(options?: Ggit.CheckoutOptions | null): boolean
    checkout_index(index?: Ggit.Index | null, options?: Ggit.CheckoutOptions | null): boolean
    checkout_tree(tree?: Ggit.Object | null, options?: Ggit.CheckoutOptions | null): boolean
    cherry_pick(commit: Ggit.Commit, options: Ggit.CherryPickOptions): boolean
    cherry_pick_commit(commit: Ggit.Commit, our_commit: Ggit.Commit, mainline: number, merge_options?: Ggit.MergeOptions | null): Ggit.Index | null
    create_blob(): Ggit.BlobOutputStream | null
    create_blob_from_buffer(buffer: Uint8Array): Ggit.OId | null
    create_blob_from_file(file: Gio.File): Ggit.OId
    create_blob_from_path(path: string): Ggit.OId | null
    create_branch(branch_name: string, target: Ggit.Object, flags: Ggit.CreateFlags): Ggit.Branch | null
    create_commit(update_ref: string | null, author: Ggit.Signature, committer: Ggit.Signature, message_encoding: string | null, message: string, tree: Ggit.Tree, parents: Ggit.Commit[]): Ggit.OId | null
    create_commit_from_ids(update_ref: string | null, author: Ggit.Signature, committer: Ggit.Signature, message_encoding: string | null, message: string, tree: Ggit.OId, parents: Ggit.OId[]): Ggit.OId | null
    create_index_entry_for_file(file?: Gio.File | null, id?: Ggit.OId | null): Ggit.IndexEntry | null
    create_index_entry_for_path(path?: string | null, id?: Ggit.OId | null): Ggit.IndexEntry | null
    create_note(notes_ref: string | null, author: Ggit.Signature, committer: Ggit.Signature, id: Ggit.OId, note: string, force: boolean): Ggit.OId | null
    create_reference(name: string, oid: Ggit.OId, log_message: string): Ggit.Ref | null
    create_remote(name: string, url: string): Ggit.Remote | null
    create_symbolic_reference(name: string, target: string, log_message: string): Ggit.Ref | null
    create_tag(tag_name: string, target: Ggit.Object, tagger: Ggit.Signature, message: string, flags: Ggit.CreateFlags): Ggit.OId | null
    create_tag_annotation(tag_name: string, target: Ggit.Object, signature: Ggit.Signature, message: string): Ggit.OId | null
    create_tag_from_buffer(tag: string, flags: Ggit.CreateFlags): Ggit.OId | null
    create_tag_lightweight(tag_name: string, target: Ggit.Object, flags: Ggit.CreateFlags): Ggit.OId | null
    create_tree_builder(): Ggit.TreeBuilder | null
    create_tree_builder_from_tree(tree: Ggit.Tree): Ggit.TreeBuilder | null
    delete_tag(name: string): boolean
    drop_stash(index: number): void
    enumerate_branches(list_type: Ggit.BranchType): Ggit.BranchEnumerator | null
    file_status(location: Gio.File): Ggit.StatusFlags
    file_status_foreach(options: Ggit.StatusOptions | null, callback: Ggit.StatusCallback): boolean
    get_ahead_behind(local: Ggit.OId, upstream: Ggit.OId): [ /* ahead */ number, /* behind */ number ]
    get_attribute(path: string, name: string, flags: Ggit.AttributeCheckFlags): string | null
    get_config(): Ggit.Config | null
    get_default_notes_ref(): string | null
    get_descendant_of(commit: Ggit.OId, ancestor: Ggit.OId): boolean
    get_head(): Ggit.Ref | null
    get_index(): Ggit.Index | null
    get_location(): Gio.File | null
    get_submodule_status(name: string, ignore: Ggit.SubmoduleIgnore): Ggit.SubmoduleStatus
    get_workdir(): Gio.File | null
    is_bare(): boolean
    is_empty(): boolean
    is_head_detached(): boolean
    is_head_unborn(): boolean
    list_remotes(): string[] | null
    list_tags(): string[] | null
    list_tags_match(pattern?: string | null): string[] | null
    lookup(oid: Ggit.OId, gtype: GObject.Type): Ggit.Object | null
    lookup_blob(oid: Ggit.OId): Ggit.Blob | null
    lookup_branch(branch_name: string, branch_type: Ggit.BranchType): Ggit.Branch | null
    lookup_commit(oid: Ggit.OId): Ggit.Commit | null
    lookup_reference(name: string): Ggit.Ref | null
    lookup_reference_dwim(short_name: string): Ggit.Ref | null
    lookup_remote(name: string): Ggit.Remote | null
    lookup_submodule(name: string): Ggit.Submodule | null
    lookup_tag(oid: Ggit.OId): Ggit.Tag | null
    lookup_tree(oid: Ggit.OId): Ggit.Tree | null
    merge(their_heads: Ggit.AnnotatedCommit[], merge_opts: Ggit.MergeOptions, checkout_opts: Ggit.CheckoutOptions): void
    merge_base(oid_one: Ggit.OId, oid_two: Ggit.OId): Ggit.OId | null
    merge_commits(our_commit: Ggit.Commit, their_commit: Ggit.Commit, merge_options: Ggit.MergeOptions): Ggit.Index | null
    merge_trees(ancestor_tree: Ggit.Tree, our_tree: Ggit.Tree, their_tree: Ggit.Tree, merge_options: Ggit.MergeOptions): Ggit.Index | null
    note_foreach(notes_ref: string | null, callback: Ggit.NoteCallback): boolean
    path_is_ignored(path: string): boolean
    read_note(notes_ref: string | null, id: Ggit.OId): Ggit.Note | null
    rebase_init(branch: Ggit.AnnotatedCommit | null, upstream: Ggit.AnnotatedCommit | null, onto: Ggit.AnnotatedCommit | null, options: Ggit.RebaseOptions): Ggit.Rebase | null
    rebase_open(options: Ggit.RebaseOptions): Ggit.Rebase | null
    references_foreach(callback: Ggit.ReferencesCallback): boolean
    references_foreach_name(callback: Ggit.ReferencesNameCallback): boolean
    remove_note(notes_ref: string | null, author: Ggit.Signature, committer: Ggit.Signature, id: Ggit.OId): boolean
    remove_remote(name: string): boolean
    rename_remote(name: string, new_name: string): string[] | null
    reset(target: Ggit.Object, reset_type: Ggit.ResetType, checkout_options: Ggit.CheckoutOptions): void
    reset_default(target: Ggit.Object | null, pathspecs: string[]): void
    revert(commit: Ggit.Commit, options: Ggit.RevertOptions): boolean
    revparse(spec: string): Ggit.Object | null
    save_stash(stasher: Ggit.Signature, message: string, flags: Ggit.StashFlags): Ggit.OId | null
    set_head(ref_name: string): boolean
    set_remote_url(remote: string, url: string): boolean
    set_submodule_fetch_recurse(name: string, fetch_recurse_submodules: Ggit.SubmoduleRecurse): void
    set_submodule_ignore(name: string, ignore: Ggit.SubmoduleIgnore): void
    set_submodule_update(name: string, update: Ggit.SubmoduleUpdate): void
    set_submodule_url(name: string, url: string): void
    set_workdir(workdir: Gio.File, update_gitlink: boolean): void
    stash_foreach(callback: Ggit.StashCallback): boolean
    submodule_foreach(callback: Ggit.SubmoduleCallback): boolean
    tag_foreach(callback: Ggit.TagCallback): boolean
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
    /* Virtual methods of Ggit.Repository */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stage", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stage", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(location: Gio.File, workdir?: Gio.File | null): Repository
    static init_repository(location: Gio.File, is_bare: boolean): Repository
    static init_repository(location: Gio.File, is_bare: boolean): Ggit.Repository | null
    static $gtype: GObject.Type
}
export class Resource {
    /* Fields of Gitg.Resource */
    ref_count: number
    static name: string
    static new(): Resource
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Resource
    static load_css(id: string): Gtk.CssProvider | null
}
export interface SidebarStore_ConstructProps extends Gtk.TreeStore_ConstructProps {
}
export class SidebarStore {
    /* Properties of Gitg.SidebarStore */
    readonly clearing: boolean
    /* Fields of Gtk.TreeStore */
    parent: GObject.Object
    priv: Gtk.TreeStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.SidebarStore */
    append_dummy(text: string): SidebarStore
    append(item: SidebarItem): SidebarStore
    begin_header(text: string, id: number): SidebarStoreSidebarHeader
    end_header(): SidebarStore
    begin_section(): number
    end_section(): void
    clear(): void
    item_for_iter(iter: Gtk.TreeIter): SidebarItem
    activate(iter: Gtk.TreeIter, numclick: number): void
    get_clearing(): boolean
    /* Methods of Gtk.TreeStore */
    append(parent?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert(parent: Gtk.TreeIter | null, position: number): /* iter */ Gtk.TreeIter
    insert_after(parent?: Gtk.TreeIter | null, sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_before(parent?: Gtk.TreeIter | null, sibling?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    insert_with_values(parent: Gtk.TreeIter | null, position: number, columns: number[], values: any): /* iter */ Gtk.TreeIter | null
    is_ancestor(iter: Gtk.TreeIter, descendant: Gtk.TreeIter): boolean
    iter_depth(iter: Gtk.TreeIter): number
    iter_is_valid(iter: Gtk.TreeIter): boolean
    move_after(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    move_before(iter: Gtk.TreeIter, position?: Gtk.TreeIter | null): void
    prepend(parent?: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    remove(iter: Gtk.TreeIter): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clearing", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearing", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SidebarStore_ConstructProps)
    _init (config?: SidebarStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SidebarStore
    static new(types: GObject.Type[]): SidebarStore
    static $gtype: GObject.Type
}
export interface SidebarStoreSidebarText_ConstructProps extends GObject.Object_ConstructProps {
}
export class SidebarStoreSidebarText {
    /* Properties of Gitg.SidebarItem */
    readonly text: string
    readonly icon_name: string
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
    /* Methods of Gitg.SidebarItem */
    activate(numclick: number): void
    get_text(): string
    get_icon_name(): string | null
    /* Virtual methods of Gitg.SidebarStoreSidebarText */
    vfunc_activate(numclick: number): void
    vfunc_get_text(): string
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gitg.SidebarItem */
    connect(sigName: "activated", callback: (($obj: SidebarStoreSidebarText, numclick: number) => void)): number
    connect_after(sigName: "activated", callback: (($obj: SidebarStoreSidebarText, numclick: number) => void)): number
    emit(sigName: "activated", numclick: number): void
    connect(sigName: "notify::text", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SidebarStoreSidebarText_ConstructProps)
    _init (config?: SidebarStoreSidebarText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): SidebarStoreSidebarText
    static $gtype: GObject.Type
}
export interface SidebarStoreSidebarHeader_ConstructProps extends SidebarStoreSidebarText_ConstructProps {
}
export class SidebarStoreSidebarHeader {
    /* Properties of Gitg.SidebarStoreSidebarHeader */
    readonly id: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.SidebarStoreSidebarHeader */
    get_id(): number
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
    /* Virtual methods of Gitg.SidebarStoreSidebarText */
    vfunc_activate(numclick: number): void
    vfunc_get_text(): string
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SidebarStoreSidebarHeader_ConstructProps)
    _init (config?: SidebarStoreSidebarHeader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string, id: number): SidebarStoreSidebarHeader
    static new(text: string): SidebarStoreSidebarHeader
    static $gtype: GObject.Type
}
export interface Sidebar_ConstructProps extends Gtk.TreeView_ConstructProps {
    model?: SidebarStore
}
export class Sidebar {
    /* Properties of Gitg.Sidebar */
    model: SidebarStore
    /* Properties of Gtk.TreeView */
    activate_on_single_click: boolean
    enable_grid_lines: Gtk.TreeViewGridLines
    enable_search: boolean
    enable_tree_lines: boolean
    expander_column: Gtk.TreeViewColumn
    fixed_height_mode: boolean
    headers_clickable: boolean
    headers_visible: boolean
    hover_expand: boolean
    hover_selection: boolean
    level_indentation: number
    reorderable: boolean
    rubber_banding: boolean
    search_column: number
    show_expanders: boolean
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
    /* Fields of Gtk.TreeView */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Sidebar */
    select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    selection_changed(sel: Gtk.TreeSelection): void
    get_selected_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_selected_item(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null
    get_selected_items(t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): [ /* returnType */ object[], /* result_length1 */ number ]
    select(item: SidebarItem): void
    is_selected(item: SidebarItem): boolean
    get_model(): SidebarStore
    set_model(value: SidebarStore): void
    /* Methods of Gtk.TreeView */
    append_column(column: Gtk.TreeViewColumn): number
    collapse_all(): void
    collapse_row(path: Gtk.TreePath): boolean
    columns_autosize(): void
    convert_bin_window_to_tree_coords(bx: number, by: number): [ /* tx */ number, /* ty */ number ]
    convert_bin_window_to_widget_coords(bx: number, by: number): [ /* wx */ number, /* wy */ number ]
    convert_tree_to_bin_window_coords(tx: number, ty: number): [ /* bx */ number, /* by */ number ]
    convert_tree_to_widget_coords(tx: number, ty: number): [ /* wx */ number, /* wy */ number ]
    convert_widget_to_bin_window_coords(wx: number, wy: number): [ /* bx */ number, /* by */ number ]
    convert_widget_to_tree_coords(wx: number, wy: number): [ /* tx */ number, /* ty */ number ]
    create_row_drag_icon(path: Gtk.TreePath): Gdk.Paintable | null
    enable_model_drag_dest(formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, formats: Gdk.ContentFormats, actions: Gdk.DragAction): void
    expand_all(): void
    expand_row(path: Gtk.TreePath, open_all: boolean): boolean
    expand_to_path(path: Gtk.TreePath): void
    get_activate_on_single_click(): boolean
    get_background_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_cell_area(path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null): /* rect */ Gdk.Rectangle
    get_column(n: number): Gtk.TreeViewColumn | null
    get_columns(): Gtk.TreeViewColumn[]
    get_cursor(): [ /* path */ Gtk.TreePath | null, /* focus_column */ Gtk.TreeViewColumn | null ]
    get_dest_row_at_pos(drag_x: number, drag_y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_drag_dest_row(): [ /* path */ Gtk.TreePath | null, /* pos */ Gtk.TreeViewDropPosition | null ]
    get_enable_search(): boolean
    get_enable_tree_lines(): boolean
    get_expander_column(): Gtk.TreeViewColumn | null
    get_fixed_height_mode(): boolean
    get_grid_lines(): Gtk.TreeViewGridLines
    get_headers_clickable(): boolean
    get_headers_visible(): boolean
    get_hover_expand(): boolean
    get_hover_selection(): boolean
    get_level_indentation(): number
    get_model(): Gtk.TreeModel | null
    get_n_columns(): number
    get_path_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    get_reorderable(): boolean
    get_rubber_banding(): boolean
    get_search_column(): number
    get_search_entry(): Gtk.Editable | null
    get_selection(): Gtk.TreeSelection
    get_show_expanders(): boolean
    get_tooltip_column(): number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [ /* returnType */ boolean, /* model */ Gtk.TreeModel | null, /* path */ Gtk.TreePath | null, /* iter */ Gtk.TreeIter | null ]
    get_visible_range(): [ /* returnType */ boolean, /* start_path */ Gtk.TreePath | null, /* end_path */ Gtk.TreePath | null ]
    get_visible_rect(): /* visible_rect */ Gdk.Rectangle
    insert_column(column: Gtk.TreeViewColumn, position: number): number
    insert_column_with_data_func(position: number, title: string, cell: Gtk.CellRenderer, func: Gtk.TreeCellDataFunc): number
    is_blank_at_pos(x: number, y: number): [ /* returnType */ boolean, /* path */ Gtk.TreePath | null, /* column */ Gtk.TreeViewColumn | null, /* cell_x */ number | null, /* cell_y */ number | null ]
    is_rubber_banding_active(): boolean
    map_expanded_rows(func: Gtk.TreeViewMappingFunc): void
    move_column_after(column: Gtk.TreeViewColumn, base_column?: Gtk.TreeViewColumn | null): void
    remove_column(column: Gtk.TreeViewColumn): number
    row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    row_expanded(path: Gtk.TreePath): boolean
    scroll_to_cell(path: Gtk.TreePath | null, column: Gtk.TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void
    scroll_to_point(tree_x: number, tree_y: number): void
    set_activate_on_single_click(single: boolean): void
    set_column_drag_function(func?: Gtk.TreeViewColumnDropFunc | null): void
    set_cursor(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, start_editing: boolean): void
    set_cursor_on_cell(path: Gtk.TreePath, focus_column: Gtk.TreeViewColumn | null, focus_cell: Gtk.CellRenderer | null, start_editing: boolean): void
    set_drag_dest_row(path: Gtk.TreePath | null, pos: Gtk.TreeViewDropPosition): void
    set_enable_search(enable_search: boolean): void
    set_enable_tree_lines(enabled: boolean): void
    set_expander_column(column?: Gtk.TreeViewColumn | null): void
    set_fixed_height_mode(enable: boolean): void
    set_grid_lines(grid_lines: Gtk.TreeViewGridLines): void
    set_headers_clickable(setting: boolean): void
    set_headers_visible(headers_visible: boolean): void
    set_hover_expand(expand: boolean): void
    set_hover_selection(hover: boolean): void
    set_level_indentation(indentation: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_reorderable(reorderable: boolean): void
    set_row_separator_func(func?: Gtk.TreeViewRowSeparatorFunc | null): void
    set_rubber_banding(enable: boolean): void
    set_search_column(column: number): void
    set_search_entry(entry?: Gtk.Editable | null): void
    set_search_equal_func(search_equal_func: Gtk.TreeViewSearchEqualFunc): void
    set_show_expanders(enabled: boolean): void
    set_tooltip_cell(tooltip: Gtk.Tooltip, path?: Gtk.TreePath | null, column?: Gtk.TreeViewColumn | null, cell?: Gtk.CellRenderer | null): void
    set_tooltip_column(column: number): void
    set_tooltip_row(tooltip: Gtk.Tooltip, path: Gtk.TreePath): void
    unset_rows_drag_dest(): void
    unset_rows_drag_source(): void
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
    /* Virtual methods of Gitg.Sidebar */
    vfunc_select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    vfunc_selection_changed(sel: Gtk.TreeSelection): void
    /* Virtual methods of Gtk.TreeView */
    vfunc_columns_changed(): void
    vfunc_cursor_changed(): void
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean
    vfunc_move_cursor(step: Gtk.MovementStep, count: number, extend: boolean, modify: boolean): boolean
    vfunc_row_activated(path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    vfunc_row_collapsed(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_row_expanded(iter: Gtk.TreeIter, path: Gtk.TreePath): void
    vfunc_select_all(): boolean
    vfunc_select_cursor_parent(): boolean
    vfunc_select_cursor_row(start_editing: boolean): boolean
    vfunc_start_interactive_search(): boolean
    vfunc_test_collapse_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_test_expand_row(iter: Gtk.TreeIter, path: Gtk.TreePath): boolean
    vfunc_toggle_cursor_row(): boolean
    vfunc_unselect_all(): boolean
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
    /* Signals of Gitg.Sidebar */
    connect(sigName: "deselected", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "deselected", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "deselected"): void
    connect(sigName: "populate-popup", callback: (($obj: Sidebar, menu: Gtk.Menu) => void)): number
    connect_after(sigName: "populate-popup", callback: (($obj: Sidebar, menu: Gtk.Menu) => void)): number
    emit(sigName: "populate-popup", menu: Gtk.Menu): void
    /* Signals of Gtk.TreeView */
    connect(sigName: "columns-changed", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "columns-changed", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "columns-changed"): void
    connect(sigName: "cursor-changed", callback: (($obj: Sidebar) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: Sidebar) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "expand-collapse-cursor-row", callback: (($obj: Sidebar, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    connect_after(sigName: "expand-collapse-cursor-row", callback: (($obj: Sidebar, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    emit(sigName: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void
    connect(sigName: "move-cursor", callback: (($obj: Sidebar, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: Sidebar, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean): void
    connect(sigName: "row-activated", callback: (($obj: Sidebar, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    connect_after(sigName: "row-activated", callback: (($obj: Sidebar, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    emit(sigName: "row-activated", path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    connect(sigName: "row-collapsed", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-collapsed", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-collapsed", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "row-expanded", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-expanded", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-expanded", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "select-all", callback: (($obj: Sidebar) => boolean)): number
    connect_after(sigName: "select-all", callback: (($obj: Sidebar) => boolean)): number
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-parent", callback: (($obj: Sidebar) => boolean)): number
    connect_after(sigName: "select-cursor-parent", callback: (($obj: Sidebar) => boolean)): number
    emit(sigName: "select-cursor-parent"): void
    connect(sigName: "select-cursor-row", callback: (($obj: Sidebar, object: boolean) => boolean)): number
    connect_after(sigName: "select-cursor-row", callback: (($obj: Sidebar, object: boolean) => boolean)): number
    emit(sigName: "select-cursor-row", object: boolean): void
    connect(sigName: "start-interactive-search", callback: (($obj: Sidebar) => boolean)): number
    connect_after(sigName: "start-interactive-search", callback: (($obj: Sidebar) => boolean)): number
    emit(sigName: "start-interactive-search"): void
    connect(sigName: "test-collapse-row", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-collapse-row", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-collapse-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "test-expand-row", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-expand-row", callback: (($obj: Sidebar, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-expand-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: Sidebar) => boolean)): number
    connect_after(sigName: "toggle-cursor-row", callback: (($obj: Sidebar) => boolean)): number
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: Sidebar) => boolean)): number
    connect_after(sigName: "unselect-all", callback: (($obj: Sidebar) => boolean)): number
    emit(sigName: "unselect-all"): void
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
    connect(sigName: "notify::model", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-search", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expander-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-clickable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-selection", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level-indentation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reorderable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rubber-banding", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-expanders", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sidebar_ConstructProps)
    _init (config?: Sidebar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Sidebar
    static $gtype: GObject.Type
}
export interface StageStatusFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class StageStatusFile {
    /* Properties of Gitg.StageStatusFile */
    readonly flags: Ggit.StatusFlags
    /* Properties of Gitg.StageStatusItem */
    readonly path: string
    readonly is_staged: boolean
    readonly is_unstaged: boolean
    readonly is_untracked: boolean
    readonly icon_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.StageStatusFile */
    get_flags(): Ggit.StatusFlags
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
    /* Methods of Gitg.StageStatusItem */
    get_path(): string
    get_is_staged(): boolean
    get_is_unstaged(): boolean
    get_is_untracked(): boolean
    get_icon_name(): string | null
    /* Virtual methods of Gitg.StageStatusFile */
    vfunc_get_path(): string
    vfunc_get_is_staged(): boolean
    vfunc_get_is_unstaged(): boolean
    vfunc_get_is_untracked(): boolean
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageStatusFile_ConstructProps)
    _init (config?: StageStatusFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: Ggit.StatusFlags): StageStatusFile
    static $gtype: GObject.Type
}
export interface StageStatusSubmodule_ConstructProps extends GObject.Object_ConstructProps {
}
export class StageStatusSubmodule {
    /* Properties of Gitg.StageStatusSubmodule */
    readonly submodule: Ggit.Submodule
    readonly is_dirty: boolean
    readonly flags: Ggit.SubmoduleStatus
    /* Properties of Gitg.StageStatusItem */
    readonly path: string
    readonly is_staged: boolean
    readonly is_unstaged: boolean
    readonly is_untracked: boolean
    readonly icon_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.StageStatusSubmodule */
    get_submodule(): Ggit.Submodule
    get_is_dirty(): boolean
    get_flags(): Ggit.SubmoduleStatus
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
    /* Methods of Gitg.StageStatusItem */
    get_path(): string
    get_is_staged(): boolean
    get_is_unstaged(): boolean
    get_is_untracked(): boolean
    get_icon_name(): string | null
    /* Virtual methods of Gitg.StageStatusSubmodule */
    vfunc_get_path(): string
    vfunc_get_is_staged(): boolean
    vfunc_get_is_unstaged(): boolean
    vfunc_get_is_untracked(): boolean
    vfunc_get_icon_name(): string | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::submodule", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::submodule", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-dirty", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-dirty", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageStatusSubmodule_ConstructProps)
    _init (config?: StageStatusSubmodule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(submodule: Ggit.Submodule): StageStatusSubmodule
    static $gtype: GObject.Type
}
export interface StageStatusEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
export class StageStatusEnumerator {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.StageStatusEnumerator */
    cancel(): void
    next_items(num: number, _callback_?: Gio.AsyncReadyCallback | null): void
    next_items_finish(_res_: Gio.AsyncResult): StageStatusItem[]
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
    connect(sigName: "notify", callback: (($obj: StageStatusEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StageStatusEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StageStatusEnumerator_ConstructProps)
    _init (config?: StageStatusEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export class PatchSet {
    /* Fields of Gitg.PatchSet */
    ref_count: number
    filename: string
    patches: PatchSetPatch[]
    patches_length1: number
    /* Methods of Gitg.PatchSet */
    reversed(): PatchSet
    static name: string
    static new(): PatchSet
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatchSet
}
export interface Stage_ConstructProps extends GObject.Object_ConstructProps {
}
export class Stage {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gitg.Stage */
    refresh(_callback_?: Gio.AsyncReadyCallback | null): void
    refresh_finish(_res_: Gio.AsyncResult): void
    get_head_tree(_callback_?: Gio.AsyncReadyCallback | null): void
    get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null
    file_status(options?: Ggit.StatusOptions | null): StageStatusEnumerator
    pre_commit_hook(author: Ggit.Signature, _callback_?: Gio.AsyncReadyCallback | null): void
    pre_commit_hook_finish(_res_: Gio.AsyncResult): void
    commit_index(index: Ggit.Index, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, _callback_?: Gio.AsyncReadyCallback | null): void
    commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    commit_tree(treeoid: Ggit.OId, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, _callback_?: Gio.AsyncReadyCallback | null): void
    commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    commit(message: string, author: Ggit.Signature, committer: Ggit.Signature, options: StageCommitOptions, _callback_?: Gio.AsyncReadyCallback | null): void
    commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    revert(file: Gio.File, _callback_?: Gio.AsyncReadyCallback | null): void
    revert_finish(_res_: Gio.AsyncResult): void
    revert_path(path: string, _callback_?: Gio.AsyncReadyCallback | null): void
    revert_path_finish(_res_: Gio.AsyncResult): void
    revert_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback | null): void
    revert_patch_finish(_res_: Gio.AsyncResult): void
    delete(file: Gio.File, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_finish(_res_: Gio.AsyncResult): void
    delete_path(path: string, _callback_?: Gio.AsyncReadyCallback | null): void
    delete_path_finish(_res_: Gio.AsyncResult): void
    stage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback | null): void
    stage_finish(_res_: Gio.AsyncResult): void
    stage_path(path: string, _callback_?: Gio.AsyncReadyCallback | null): void
    stage_path_finish(_res_: Gio.AsyncResult): void
    stage_commit(path: string, commit: Ggit.Commit, _callback_?: Gio.AsyncReadyCallback | null): void
    stage_commit_finish(_res_: Gio.AsyncResult): void
    stage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback | null): void
    stage_patch_finish(_res_: Gio.AsyncResult): void
    unstage(file: Gio.File, _callback_?: Gio.AsyncReadyCallback | null): void
    unstage_finish(_res_: Gio.AsyncResult): void
    unstage_path(path: string, _callback_?: Gio.AsyncReadyCallback | null): void
    unstage_path_finish(_res_: Gio.AsyncResult): void
    unstage_patch(patch: PatchSet, _callback_?: Gio.AsyncReadyCallback | null): void
    unstage_patch_finish(_res_: Gio.AsyncResult): void
    diff_index_all(files: StageStatusItem[] | null, defopts?: Ggit.DiffOptions | null, _callback_?: Gio.AsyncReadyCallback | null): void
    diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_index(f: StageStatusItem, defopts?: Ggit.DiffOptions | null, _callback_?: Gio.AsyncReadyCallback | null): void
    diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_workdir_all(files: StageStatusItem[], defopts?: Ggit.DiffOptions | null, _callback_?: Gio.AsyncReadyCallback | null): void
    diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_workdir(f: StageStatusItem, defopts?: Ggit.DiffOptions | null, _callback_?: Gio.AsyncReadyCallback | null): void
    diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
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
    connect(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Theme_ConstructProps extends Gtk.Widget_ConstructProps {
}
export class Theme {
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
    /* Methods of Gitg.Theme */
    is_theme_dark(): boolean
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
    connect(sigName: "destroy", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Theme) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Theme, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Theme, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Theme) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Theme, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Theme, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "map", callback: (($obj: Theme) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Theme, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Theme, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Theme, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Theme, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Theme, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Theme, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Theme) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "show", callback: (($obj: Theme) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Theme, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Theme, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Theme) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Theme) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Theme_ConstructProps)
    _init (config?: Theme_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Theme
    static instance(): Theme
    static $gtype: GObject.Type
}
export class Utils {
    /* Fields of Gitg.Utils */
    ref_count: number
    static name: string
    static new(): Utils
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Utils
    static replace_home_dir_with_tilde(file: Gio.File): string
    static expand_home_dir(path: string): string
}
export class WhenMapped {
    /* Fields of Gitg.WhenMapped */
    ref_count: number
    /* Methods of Gitg.WhenMapped */
    update(mapped: any, lifetime?: GObject.Object | null): void
    static name: string
    static new(widget: Gtk.Widget): WhenMapped
    constructor(widget: Gtk.Widget)
    /* Static methods and pseudo-constructors */
    static new(widget: Gtk.Widget): WhenMapped
}
export abstract class AsyncClass {
    static name: string
}
export class AsyncPrivate {
    static name: string
}
export abstract class AuthenticationDialogClass {
    static name: string
}
export class AuthenticationDialogPrivate {
    static name: string
}
export abstract class AvatarCacheClass {
    static name: string
}
export class AvatarCachePrivate {
    static name: string
}
export abstract class BranchBaseClass {
    static name: string
}
export class BranchBasePrivate {
    static name: string
}
export abstract class CellRendererLanesClass {
    static name: string
}
export class CellRendererLanesPrivate {
    static name: string
}
export abstract class ColorClass {
    static name: string
}
export class ColorPrivate {
    static name: string
}
export abstract class CommitListViewClass {
    static name: string
}
export class CommitListViewPrivate {
    static name: string
}
export abstract class CommitModelClass {
    static name: string
}
export class CommitModelPrivate {
    static name: string
}
export abstract class CommitClass {
    static name: string
}
export class CommitPrivate {
    static name: string
}
export abstract class CredentialsManagerClass {
    static name: string
}
export class CredentialsManagerPrivate {
    static name: string
}
export abstract class DateClass {
    static name: string
}
export class DatePrivate {
    static name: string
}
export abstract class DiffStatClass {
    static name: string
}
export class DiffStatPrivate {
    static name: string
}
export abstract class DiffViewOptionsClass {
    static name: string
}
export class DiffViewOptionsPrivate {
    static name: string
}
export abstract class DiffViewClass {
    /* Fields of Gitg.DiffViewClass */
    options_changed: () => void
    static name: string
}
export class DiffViewPrivate {
    static name: string
}
export abstract class FontManagerClass {
    static name: string
}
export class FontManagerPrivate {
    static name: string
}
export abstract class HookClass {
    static name: string
}
export class HookPrivate {
    static name: string
}
export abstract class LabelRendererClass {
    static name: string
}
export class LabelRendererPrivate {
    static name: string
}
export abstract class LanesClass {
    static name: string
}
export class LanesPrivate {
    static name: string
}
export abstract class LaneClass {
    static name: string
}
export class LanePrivate {
    static name: string
}
export abstract class ProgressBinClass {
    static name: string
}
export class ProgressBinPrivate {
    static name: string
}
export abstract class RefBaseClass {
    static name: string
}
export class RefBasePrivate {
    static name: string
}
export abstract class ParsedRefNameClass {
    static name: string
}
export class ParsedRefNamePrivate {
    static name: string
}
export abstract class RemoteClass {
    static name: string
}
export class RemotePrivate {
    static name: string
}
export abstract class RepositoryListBoxClass {
    static name: string
}
export class RepositoryListBoxPrivate {
    static name: string
}
export abstract class RepositoryListBoxRowClass {
    static name: string
}
export class RepositoryListBoxRowPrivate {
    static name: string
}
export abstract class RepositoryClass {
    static name: string
}
export class RepositoryPrivate {
    static name: string
}
export abstract class ResourceClass {
    static name: string
}
export class ResourcePrivate {
    static name: string
}
export abstract class SidebarStoreClass {
    static name: string
}
export class SidebarStorePrivate {
    static name: string
}
export abstract class SidebarStoreSidebarTextClass {
    static name: string
}
export class SidebarStoreSidebarTextPrivate {
    static name: string
}
export abstract class SidebarStoreSidebarHeaderClass {
    static name: string
}
export class SidebarStoreSidebarHeaderPrivate {
    static name: string
}
export abstract class SidebarClass {
    /* Fields of Gitg.SidebarClass */
    select_function: (sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean) => boolean
    selection_changed: (sel: Gtk.TreeSelection) => void
    static name: string
}
export class SidebarPrivate {
    static name: string
}
export abstract class StageStatusFileClass {
    static name: string
}
export class StageStatusFilePrivate {
    static name: string
}
export abstract class StageStatusSubmoduleClass {
    static name: string
}
export class StageStatusSubmodulePrivate {
    static name: string
}
export abstract class StageStatusEnumeratorClass {
    static name: string
}
export class StageStatusEnumeratorPrivate {
    static name: string
}
export abstract class PatchSetClass {
    static name: string
}
export class PatchSetPrivate {
    static name: string
}
export class PatchSetPatch {
    /* Fields of Gitg.PatchSetPatch */
    type: PatchSetType
    old_offset: number
    new_offset: number
    length: number
    static name: string
}
export abstract class StageClass {
    static name: string
}
export class StagePrivate {
    static name: string
}
export abstract class ThemeClass {
    static name: string
}
export class ThemePrivate {
    static name: string
}
export abstract class UtilsClass {
    static name: string
}
export class UtilsPrivate {
    static name: string
}
export abstract class WhenMappedClass {
    static name: string
}
export class WhenMappedPrivate {
    static name: string
}
export abstract class BranchIface {
    /* Fields of Gitg.BranchIface */
    get_upstream: () => Ref
    static name: string
}
export abstract class RefIface {
    /* Fields of Gitg.RefIface */
    get_owner: () => Repository
    get_d_parsed_name: () => ParsedRefName
    set_d_parsed_name: (value: ParsedRefName) => void
    get_d_pushes: () => Ref[] | null
    set_d_pushes: (value?: Ref[] | null) => void
    get_state: () => RefState
    set_state: (value: RefState) => void
    get_working: () => boolean
    set_working: (value: boolean) => void
    static name: string
}
export abstract class CredentialsProviderIface {
    /* Fields of Gitg.CredentialsProviderIface */
    credentials: (url: string, username_from_url: string | null, allowed_types: Ggit.Credtype) => Ggit.Cred | null
    static name: string
}
export abstract class SidebarItemIface {
    /* Fields of Gitg.SidebarItemIface */
    activate: (numclick: number) => void
    get_text: () => string
    get_icon_name: () => string | null
    static name: string
}
export abstract class StageStatusItemIface {
    /* Fields of Gitg.StageStatusItemIface */
    get_path: () => string
    get_is_staged: () => boolean
    get_is_unstaged: () => boolean
    get_is_untracked: () => boolean
    get_icon_name: () => string | null
    static name: string
}