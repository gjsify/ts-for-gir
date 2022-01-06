/**
 * GitgExt-1.0
 */

import type * as Gjs from './Gjs';
import type Gitg from './Gitg-1.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type Gdk from './Gdk-3.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Ggit from './Ggit-1.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Atk from './Atk-1.0';

export namespace GitgExt {

enum SelectionMode {
    NORMAL,
    SELECTION,
}
enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
interface MessageCallback {
    (message: Message): void
}
interface RefNameEditingDone {
    (new_name: string, cancelled: boolean): void
}
export interface Action_ConstructProps extends UIElement_ConstructProps {
}
class Action {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly display_name: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populate_menu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value?: Application | null): void
    get_id(): string
    get_display_name(): string
    get_description(): string
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Action */
    vfunc_populate_menu(menu: Gtk.Menu): void
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GitgExt-1.0.GitgExt.UIElement */
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: Action) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Action) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: Action) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Action) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Action_ConstructProps)
    _init (config?: Action_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Activity_ConstructProps extends GObject.Object_ConstructProps {
}
class Activity {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    is_default_for(action: string): boolean
    on_key_pressed(event: Gdk.EventKey): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Activity */
    vfunc_is_default_for(action: string): boolean
    vfunc_on_key_pressed(event: Gdk.EventKey): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Activity_ConstructProps)
    _init (config?: Activity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    repository?: Gitg.Repository
    busy?: boolean
}
class Application {
    /* Properties of GitgExt-1.0.GitgExt.Application */
    repository: Gitg.Repository
    readonly message_bus: MessageBus
    readonly current_activity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remote_lookup: RemoteLookup
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Application */
    get_verified_committer(): Ggit.Signature | null
    get_activity_by_id(id: string): Activity | null
    set_activity_by_id(id: string): Activity | null
    user_query(query: UserQuery): void
    user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback | null): void
    user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void
    open_new(repository: Ggit.Repository, hint?: string | null): Application
    open_repository(path: Gio.File): void
    get_repository(): Gitg.Repository | null
    set_repository(value?: Gitg.Repository | null): void
    get_message_bus(): MessageBus
    get_current_activity(): Activity | null
    get_environment(): Gee.Map
    get_notifications(): Notifications
    get_busy(): boolean
    set_busy(value: boolean): void
    get_remote_lookup(): RemoteLookup
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Application */
    vfunc_get_verified_committer(): Ggit.Signature | null
    vfunc_get_activity_by_id(id: string): Activity | null
    vfunc_set_activity_by_id(id: string): Activity | null
    vfunc_user_query(query: UserQuery): void
    vfunc_user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    vfunc_show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void
    vfunc_open_new(repository: Ggit.Repository, hint?: string | null): Application
    vfunc_open_repository(path: Gio.File): void
    vfunc_get_repository(): Gitg.Repository | null
    vfunc_set_repository(value?: Gitg.Repository | null): void
    vfunc_get_message_bus(): MessageBus
    vfunc_get_current_activity(): Activity | null
    vfunc_get_environment(): Gee.Map
    vfunc_get_notifications(): Notifications
    vfunc_get_busy(): boolean
    vfunc_set_busy(value: boolean): void
    vfunc_get_remote_lookup(): RemoteLookup
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.Application */
    connect(sigName: "repository-changed-externally", callback: (($obj: Application, hint: ExternalChangeHint) => void)): number
    connect_after(sigName: "repository-changed-externally", callback: (($obj: Application, hint: ExternalChangeHint) => void)): number
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint): void
    connect(sigName: "repository-commits-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "repository-commits-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "repository-commits-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLine_ConstructProps extends GObject.Object_ConstructProps {
}
class CommandLine {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLine */
    get_option_group(): GLib.OptionGroup
    parse_finished(): void
    apply(application: Application): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.CommandLine */
    vfunc_get_option_group(): GLib.OptionGroup
    vfunc_parse_finished(): void
    vfunc_apply(application: Application): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommandLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommandLine_ConstructProps)
    _init (config?: CommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommitAction_ConstructProps extends Action_ConstructProps {
    action_interface?: RefActionInterface
    commit?: Gitg.Commit
}
class CommitAction {
    /* Properties of GitgExt-1.0.GitgExt.CommitAction */
    action_interface: RefActionInterface
    commit: Gitg.Commit
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly display_name: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommitAction */
    get_action_interface(): RefActionInterface
    set_action_interface(value: RefActionInterface): void
    get_commit(): Gitg.Commit
    set_commit(value: Gitg.Commit): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populate_menu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value?: Application | null): void
    get_id(): string
    get_display_name(): string
    get_description(): string
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.CommitAction */
    vfunc_get_action_interface(): RefActionInterface
    vfunc_set_action_interface(value: RefActionInterface): void
    vfunc_get_commit(): Gitg.Commit
    vfunc_set_commit(value: Gitg.Commit): void
    vfunc_populate_menu(menu: Gtk.Menu): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Action */
    vfunc_populate_menu(menu: Gtk.Menu): void
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GitgExt-1.0.GitgExt.UIElement */
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.CommitAction */
    connect(sigName: "finished", callback: (($obj: CommitAction) => void)): number
    connect_after(sigName: "finished", callback: (($obj: CommitAction) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    connect_after(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    connect_after(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommitAction_ConstructProps)
    _init (config?: CommitAction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HistoryPanel_ConstructProps extends GObject.Object_ConstructProps {
    history?: History
}
class HistoryPanel {
    /* Properties of GitgExt-1.0.GitgExt.HistoryPanel */
    history: History
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.HistoryPanel */
    get_history(): History | null
    set_history(value?: History | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.HistoryPanel */
    vfunc_get_history(): History | null
    vfunc_set_history(value?: History | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HistoryPanel_ConstructProps)
    _init (config?: HistoryPanel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface History_ConstructProps extends GObject.Object_ConstructProps {
}
class History {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.History */
    foreach_selected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.History */
    vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void
    vfunc_select(commit: Gitg.Commit): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.History */
    connect(sigName: "selection-changed", callback: (($obj: History) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: History) => void)): number
    emit(sigName: "selection-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: History_ConstructProps)
    _init (config?: History_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
class Notification {
    /* Properties of GitgExt-1.0.GitgExt.Notification */
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notification */
    get_widget(): Gtk.Widget | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Notification */
    vfunc_get_widget(): Gtk.Widget | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.Notification */
    connect(sigName: "close", callback: (($obj: Notification, delay: number) => void)): number
    connect_after(sigName: "close", callback: (($obj: Notification, delay: number) => void)): number
    emit(sigName: "close", delay: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notifications_ConstructProps extends GObject.Object_ConstructProps {
}
class Notifications {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notifications */
    add(notification: Notification): void
    remove(notification: Notification, delay: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Notifications */
    vfunc_add(notification: Notification): void
    vfunc_remove(notification: Notification, delay: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notifications, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notifications, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notifications_ConstructProps)
    _init (config?: Notifications_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}
class Preferences {
    /* Properties of GitgExt-1.0.GitgExt.Preferences */
    readonly id: string
    readonly display_name: string
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Preferences */
    get_id(): string
    get_display_name(): string
    get_widget(): Gtk.Widget
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Preferences */
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_widget(): Gtk.Widget
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Preferences_ConstructProps)
    _init (config?: Preferences_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RefActionInterface_ConstructProps extends GObject.Object_ConstructProps {
    application?: Application
}
class RefActionInterface {
    /* Properties of GitgExt-1.0.GitgExt.RefActionInterface */
    application: Application
    readonly references: Gee.List
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefActionInterface */
    add_ref(reference: Gitg.Ref): void
    remove_ref(reference: Gitg.Ref): void
    replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void
    set_busy(reference: Gitg.Ref, busy: boolean): void
    edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void
    refresh(): void
    get_application(): Application
    set_application(value: Application): void
    get_references(): Gee.List
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.RefActionInterface */
    vfunc_add_ref(reference: Gitg.Ref): void
    vfunc_remove_ref(reference: Gitg.Ref): void
    vfunc_replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void
    vfunc_set_busy(reference: Gitg.Ref, busy: boolean): void
    vfunc_edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void
    vfunc_refresh(): void
    vfunc_get_application(): Application
    vfunc_set_application(value: Application): void
    vfunc_get_references(): Gee.List
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RefActionInterface_ConstructProps)
    _init (config?: RefActionInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RefAction_ConstructProps extends Action_ConstructProps {
    action_interface?: RefActionInterface
    reference?: Gitg.Ref
}
class RefAction {
    /* Properties of GitgExt-1.0.GitgExt.RefAction */
    action_interface: RefActionInterface
    reference: Gitg.Ref
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly display_name: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefAction */
    get_action_interface(): RefActionInterface
    set_action_interface(value: RefActionInterface): void
    get_reference(): Gitg.Ref
    set_reference(value: Gitg.Ref): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populate_menu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value?: Application | null): void
    get_id(): string
    get_display_name(): string
    get_description(): string
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.RefAction */
    vfunc_get_action_interface(): RefActionInterface
    vfunc_set_action_interface(value: RefActionInterface): void
    vfunc_get_reference(): Gitg.Ref
    vfunc_set_reference(value: Gitg.Ref): void
    vfunc_populate_menu(menu: Gtk.Menu): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Action */
    vfunc_populate_menu(menu: Gtk.Menu): void
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GitgExt-1.0.GitgExt.UIElement */
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: RefAction) => void)): number
    connect_after(sigName: "activate", callback: (($obj: RefAction) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: RefAction) => void)): number
    connect_after(sigName: "activate", callback: (($obj: RefAction) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RefAction_ConstructProps)
    _init (config?: RefAction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteLookup_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteLookup {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RemoteLookup */
    lookup(name: string): Gitg.Remote | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.RemoteLookup */
    vfunc_lookup(name: string): Gitg.Remote | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteLookup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteLookup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteLookup_ConstructProps)
    _init (config?: RemoteLookup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Searchable_ConstructProps extends GObject.Object_ConstructProps {
    search_text?: string
    search_visible?: boolean
    search_entry?: Gtk.Entry
}
class Searchable {
    /* Properties of GitgExt-1.0.GitgExt.Searchable */
    search_text: string
    search_visible: boolean
    readonly search_available: boolean
    search_entry: Gtk.Entry
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Searchable */
    get_search_text(): string
    set_search_text(value: string): void
    get_search_visible(): boolean
    set_search_visible(value: boolean): void
    get_search_available(): boolean
    set_search_entry(value?: Gtk.Entry | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Searchable */
    vfunc_get_search_text(): string
    vfunc_set_search_text(value: string): void
    vfunc_get_search_visible(): boolean
    vfunc_set_search_visible(value: boolean): void
    vfunc_get_search_available(): boolean
    vfunc_set_search_entry(value?: Gtk.Entry | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Searchable_ConstructProps)
    _init (config?: Searchable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Selectable_ConstructProps extends GObject.Object_ConstructProps {
    selectable_mode?: SelectionMode
}
class Selectable {
    /* Properties of GitgExt-1.0.GitgExt.Selectable */
    selectable_mode: SelectionMode
    readonly selectable_available: boolean
    readonly selectable_mode_tooltip: string
    readonly action_widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Selectable */
    get_selectable_mode(): SelectionMode
    set_selectable_mode(value: SelectionMode): void
    get_selectable_available(): boolean
    get_selectable_mode_tooltip(): string
    get_action_widget(): Gtk.Widget | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.Selectable */
    vfunc_get_selectable_mode(): SelectionMode
    vfunc_set_selectable_mode(value: SelectionMode): void
    vfunc_get_selectable_available(): boolean
    vfunc_get_selectable_mode_tooltip(): string
    vfunc_get_action_widget(): Gtk.Widget | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Selectable_ConstructProps)
    _init (config?: Selectable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UIElement_ConstructProps extends GObject.Object_ConstructProps {
    application?: Application
}
class UIElement {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly display_name: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value?: Application | null): void
    get_id(): string
    get_display_name(): string
    get_description(): string
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.UIElement */
    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value?: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: UIElement) => void)): number
    connect_after(sigName: "activate", callback: (($obj: UIElement) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UIElement_ConstructProps)
    _init (config?: UIElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLines_ConstructProps extends GObject.Object_ConstructProps {
}
class CommandLines {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLines */
    get_for(t_type: GObject.Type, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null
    parse_finished(): void
    apply(application: Application): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommandLines, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CommandLines, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CommandLines_ConstructProps)
    _init (config?: CommandLines_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(command_lines: CommandLine[]): CommandLines
    static $gtype: GObject.Type
}
export interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}
class MessageBus {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageBus */
    lookup(id: MessageId): GObject.Type
    register(message_type: GObject.Type, id: MessageId): void
    unregister(id: MessageId): void
    unregister_all(object_path: string): void
    is_registered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    send_message(message: Message): Message
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GitgExt-1.0.GitgExt.MessageBus */
    vfunc_dispatch(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.MessageBus */
    connect(sigName: "registered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    connect_after(sigName: "registered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    emit(sigName: "registered", id: MessageId): void
    connect(sigName: "unregistered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    connect_after(sigName: "unregistered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    emit(sigName: "unregistered", id: MessageId): void
    connect(sigName: "dispatch", callback: (($obj: MessageBus, message: Message) => void)): number
    connect_after(sigName: "dispatch", callback: (($obj: MessageBus, message: Message) => void)): number
    emit(sigName: "dispatch", message: Message): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageBus_ConstructProps)
    _init (config?: MessageBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MessageBus
    static get_default(): MessageBus
    static $gtype: GObject.Type
}
export interface MessageId_ConstructProps extends GObject.Object_ConstructProps {
    object_path?: string
    method?: string
}
class MessageId {
    /* Properties of GitgExt-1.0.GitgExt.MessageId */
    object_path: string
    method: string
    readonly id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageId */
    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    get_object_path(): string
    set_object_path(value: string): void
    get_method(): string
    set_method(value: string): void
    get_id(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageId_ConstructProps)
    _init (config?: MessageId_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string, method: string): MessageId
    static valid_object_path(path: string): boolean
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    id?: MessageId
}
class Message {
    /* Properties of GitgExt-1.0.GitgExt.Message */
    id: MessageId
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Message */
    has(propname: string): boolean
    get_id(): MessageId
    set_id(value: MessageId): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static type_has(type: GObject.Type, propname: string): boolean
    static type_check(type: GObject.Type, propname: string, value_type: GObject.Type): boolean
    static $gtype: GObject.Type
}
class UI {
    /* Fields of GitgExt-1.0.GitgExt.UI */
    ref_count: number
    static name: string
    static new(): UI
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UI
}
export interface UserQueryResponse_ConstructProps extends GObject.Object_ConstructProps {
}
class UserQueryResponse {
    /* Fields of GitgExt-1.0.GitgExt.UserQueryResponse */
    text: string
    response_type: Gtk.ResponseType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserQueryResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserQueryResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserQueryResponse_ConstructProps)
    _init (config?: UserQueryResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string, response_type: Gtk.ResponseType): UserQueryResponse
    static $gtype: GObject.Type
}
export interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {
    title?: string
    message?: string
    message_type?: Gtk.MessageType
    default_response?: Gtk.ResponseType
    default_is_destructive?: boolean
    message_use_markup?: boolean
}
class UserQuery {
    /* Properties of GitgExt-1.0.GitgExt.UserQuery */
    title: string
    message: string
    message_type: Gtk.MessageType
    default_response: Gtk.ResponseType
    default_is_destructive: boolean
    message_use_markup: boolean
    /* Fields of GitgExt-1.0.GitgExt.UserQuery */
    _responses: UserQueryResponse[]
    _responses_length1: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UserQuery */
    get_responses(): UserQueryResponse[]
    set_responses(value: UserQueryResponse[]): void
    get_title(): string
    set_title(value: string): void
    get_message(): string
    set_message(value: string): void
    get_message_type(): Gtk.MessageType
    set_message_type(value: Gtk.MessageType): void
    get_default_response(): Gtk.ResponseType
    set_default_response(value: Gtk.ResponseType): void
    get_default_is_destructive(): boolean
    set_default_is_destructive(value: boolean): void
    get_message_use_markup(): boolean
    set_message_use_markup(value: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UserQuery */
    connect(sigName: "quit", callback: (($obj: UserQuery) => void)): number
    connect_after(sigName: "quit", callback: (($obj: UserQuery) => void)): number
    emit(sigName: "quit"): void
    connect(sigName: "response", callback: (($obj: UserQuery, response_type: Gtk.ResponseType) => boolean)): number
    connect_after(sigName: "response", callback: (($obj: UserQuery, response_type: Gtk.ResponseType) => boolean)): number
    emit(sigName: "response", response_type: Gtk.ResponseType): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserQuery_ConstructProps)
    _init (config?: UserQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserQuery
    static $gtype: GObject.Type
}
abstract class CommandLinesClass {
    static name: string
}
class CommandLinesPrivate {
    static name: string
}
abstract class MessageBusClass {
    /* Fields of GitgExt-1.0.GitgExt.MessageBusClass */
    dispatch: (self: MessageBus, message: Message) => void
    static name: string
}
class MessageBusPrivate {
    static name: string
}
abstract class MessageIdClass {
    static name: string
}
class MessageIdPrivate {
    static name: string
}
abstract class MessageClass {
    static name: string
}
class MessagePrivate {
    static name: string
}
abstract class UIClass {
    static name: string
}
class UIPrivate {
    static name: string
}
abstract class UserQueryResponseClass {
    static name: string
}
class UserQueryResponsePrivate {
    static name: string
}
abstract class UserQueryClass {
    static name: string
}
class UserQueryPrivate {
    static name: string
}
abstract class ActionIface {
    /* Fields of GitgExt-1.0.GitgExt.ActionIface */
    populate_menu: (self: Action, menu: Gtk.Menu) => void
    static name: string
}
abstract class ActivityIface {
    /* Fields of GitgExt-1.0.GitgExt.ActivityIface */
    is_default_for: (self: Activity, action: string) => boolean
    on_key_pressed: (self: Activity, event: Gdk.EventKey) => boolean
    static name: string
}
abstract class ApplicationIface {
    /* Fields of GitgExt-1.0.GitgExt.ApplicationIface */
    get_verified_committer: (self: Application) => Ggit.Signature | null
    get_activity_by_id: (self: Application, id: string) => Activity | null
    set_activity_by_id: (self: Application, id: string) => Activity | null
    user_query: (self: Application, query: UserQuery) => void
    user_query_async: (self: Application, query: UserQuery, _callback_?: Gio.AsyncReadyCallback | null) => void
    user_query_finish: (self: Application, _res_: Gio.AsyncResult) => Gtk.ResponseType
    show_infobar: (self: Application, primary_msg: string, secondary_msg: string, type: Gtk.MessageType) => void
    open_new: (self: Application, repository: Ggit.Repository, hint?: string | null) => Application
    open_repository: (self: Application, path: Gio.File) => void
    get_repository: (self: Application) => Gitg.Repository | null
    set_repository: (self: Application, value?: Gitg.Repository | null) => void
    get_message_bus: (self: Application) => MessageBus
    get_current_activity: (self: Application) => Activity | null
    get_environment: (self: Application) => Gee.Map
    get_notifications: (self: Application) => Notifications
    get_busy: (self: Application) => boolean
    set_busy: (self: Application, value: boolean) => void
    get_remote_lookup: (self: Application) => RemoteLookup
    static name: string
}
abstract class CommandLineIface {
    /* Fields of GitgExt-1.0.GitgExt.CommandLineIface */
    get_option_group: (self: CommandLine) => GLib.OptionGroup
    parse_finished: (self: CommandLine) => void
    apply: (self: CommandLine, application: Application) => void
    static name: string
}
abstract class CommitActionIface {
    /* Fields of GitgExt-1.0.GitgExt.CommitActionIface */
    get_action_interface: (self: CommitAction) => RefActionInterface
    set_action_interface: (self: CommitAction, value: RefActionInterface) => void
    get_commit: (self: CommitAction) => Gitg.Commit
    set_commit: (self: CommitAction, value: Gitg.Commit) => void
    static name: string
}
abstract class HistoryPanelIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryPanelIface */
    get_history: (self: HistoryPanel) => History | null
    set_history: (self: HistoryPanel, value?: History | null) => void
    static name: string
}
abstract class HistoryIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryIface */
    foreach_selected: (self: History, func: ForeachCommitSelectionFunc) => void
    select: (self: History, commit: Gitg.Commit) => void
    static name: string
}
abstract class NotificationIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationIface */
    get_widget: (self: Notification) => Gtk.Widget | null
    static name: string
}
abstract class NotificationsIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationsIface */
    add: (self: Notifications, notification: Notification) => void
    remove: (self: Notifications, notification: Notification, delay: number) => void
    static name: string
}
abstract class PreferencesIface {
    /* Fields of GitgExt-1.0.GitgExt.PreferencesIface */
    get_id: (self: Preferences) => string
    get_display_name: (self: Preferences) => string
    get_widget: (self: Preferences) => Gtk.Widget
    static name: string
}
abstract class RefActionInterfaceIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionInterfaceIface */
    add_ref: (self: RefActionInterface, reference: Gitg.Ref) => void
    remove_ref: (self: RefActionInterface, reference: Gitg.Ref) => void
    replace_ref: (self: RefActionInterface, old_ref: Gitg.Ref, new_ref: Gitg.Ref) => void
    set_busy: (self: RefActionInterface, reference: Gitg.Ref, busy: boolean) => void
    edit_ref_name: (self: RefActionInterface, reference: Gitg.Ref, callback: RefNameEditingDone) => void
    refresh: (self: RefActionInterface) => void
    get_application: (self: RefActionInterface) => Application
    set_application: (self: RefActionInterface, value: Application) => void
    get_references: (self: RefActionInterface) => Gee.List
    static name: string
}
abstract class RefActionIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionIface */
    get_action_interface: (self: RefAction) => RefActionInterface
    set_action_interface: (self: RefAction, value: RefActionInterface) => void
    get_reference: (self: RefAction) => Gitg.Ref
    set_reference: (self: RefAction, value: Gitg.Ref) => void
    static name: string
}
abstract class RemoteLookupIface {
    /* Fields of GitgExt-1.0.GitgExt.RemoteLookupIface */
    lookup: (self: RemoteLookup, name: string) => Gitg.Remote | null
    static name: string
}
abstract class SearchableIface {
    /* Fields of GitgExt-1.0.GitgExt.SearchableIface */
    get_search_text: (self: Searchable) => string
    set_search_text: (self: Searchable, value: string) => void
    get_search_visible: (self: Searchable) => boolean
    set_search_visible: (self: Searchable, value: boolean) => void
    get_search_available: (self: Searchable) => boolean
    set_search_entry: (self: Searchable, value?: Gtk.Entry | null) => void
    static name: string
}
abstract class SelectableIface {
    /* Fields of GitgExt-1.0.GitgExt.SelectableIface */
    get_selectable_mode: (self: Selectable) => SelectionMode
    set_selectable_mode: (self: Selectable, value: SelectionMode) => void
    get_selectable_available: (self: Selectable) => boolean
    get_selectable_mode_tooltip: (self: Selectable) => string
    get_action_widget: (self: Selectable) => Gtk.Widget | null
    static name: string
}
abstract class UIElementIface {
    /* Fields of GitgExt-1.0.GitgExt.UIElementIface */
    negotiate_order: (self: UIElement, other: UIElement) => number
    get_application: (self: UIElement) => Application | null
    set_application: (self: UIElement, value?: Application | null) => void
    get_id: (self: UIElement) => string
    get_display_name: (self: UIElement) => string
    get_description: (self: UIElement) => string
    get_icon: (self: UIElement) => string | null
    get_widget: (self: UIElement) => Gtk.Widget | null
    get_shortcut: (self: UIElement) => number | null
    get_available: (self: UIElement) => boolean
    get_enabled: (self: UIElement) => boolean
    static name: string
}
}
export default GitgExt