/**
 * EDataServerUI-1.2
 */

import * as Gjs from './Gjs';
import * as Soup from './Soup-2.4';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
import * as EDataServer from './EDataServer-1.2';
import * as libxml2 from './libxml2-2.0';
import * as GData from './GData-0.0';
import * as Json from './Json-1.0';
import * as Goa from './Goa-1.0';
import * as Camel from './Camel-1.2';
import * as ECal from './ECal-2.0';
import * as ICalGLib from './ICalGLib-3.0';

export enum CredentialsPrompterPromptFlags {
    NONE,
    ALLOW_SOURCE_SAVE,
    ALLOW_STORED_CREDENTIALS,
}
export function buffer_tagger_connect(textview: Gtk.TextView): void
export function buffer_tagger_disconnect(textview: Gtk.TextView): void
export function buffer_tagger_update_tags(textview: Gtk.TextView): void
export function trust_prompt_describe_certificate_errors(flags: Gio.TlsCertificateFlags): string
export function trust_prompt_run_for_source(parent: Gtk.Window, source: EDataServer.Source, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error_text: string | null, allow_source_save: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trust_prompt_run_for_source_finish(source: EDataServer.Source, result: Gio.AsyncResult, response: EDataServer.TrustPromptResponse): boolean
export function trust_prompt_run_modal(parent: Gtk.Window, source_extension: string | null, source_display_name: string | null, host: string, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error_text?: string | null): EDataServer.TrustPromptResponse
export interface CredentialsPrompterLoopPromptFunc {
    (prompter: CredentialsPrompter, source: EDataServer.Source, credentials: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): boolean
}
export interface CellRendererColor_ConstructProps extends Gtk.CellRenderer_ConstructProps {
    rgba?: Gdk.RGBA
}
export class CellRendererColor {
    /* Properties of EDataServerUI.CellRendererColor */
    rgba: Gdk.RGBA
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
    /* Fields of EDataServerUI.CellRendererColor */
    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate
    /* Fields of Gtk.CellRenderer */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gtk.CellRenderer */
    connect(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    connect_after(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    emit(sigName: "editing-canceled"): void
    connect(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    connect_after(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    emit(sigName: "editing-started", editable: Gtk.CellEditable, path: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CellRendererColor_ConstructProps)
    _init (config?: CellRendererColor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CellRendererColor
    static $gtype: GObject.Type
}
export interface CredentialsPrompter_ConstructProps extends GObject.Object_ConstructProps {
    auto_prompt?: boolean
    registry?: EDataServer.SourceRegistry
}
export class CredentialsPrompter {
    /* Properties of EDataServerUI.CredentialsPrompter */
    auto_prompt: boolean
    readonly provider: EDataServer.SourceCredentialsProvider
    /* Fields of EDataServerUI.CredentialsPrompter */
    parent: GObject.Object
    priv: CredentialsPrompterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompter */
    complete_prompt_call(async_result: Gio.SimpleAsyncResult, source: EDataServer.Source, credentials?: EDataServer.NamedParameters | null, error?: GLib.Error | null): void
    get_auto_prompt(): boolean
    get_auto_prompt_disabled_for(source: EDataServer.Source): boolean
    get_dialog_parent(): Gtk.Window
    get_provider(): EDataServer.SourceCredentialsProvider
    get_registry(): EDataServer.SourceRegistry
    loop_prompt_sync(source: EDataServer.Source, flags: CredentialsPrompterPromptFlags, func: CredentialsPrompterLoopPromptFunc, cancellable?: Gio.Cancellable | null): boolean
    process_awaiting_credentials(): void
    process_source(source: EDataServer.Source): boolean
    prompt(source: EDataServer.Source, error_text: string | null, flags: CredentialsPrompterPromptFlags, callback?: Gio.AsyncReadyCallback | null): void
    prompt_finish(result: Gio.AsyncResult, out_source: EDataServer.Source | null, out_credentials: EDataServer.NamedParameters): boolean
    register_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): boolean
    set_auto_prompt(auto_prompt: boolean): void
    set_auto_prompt_disabled_for(source: EDataServer.Source, is_disabled: boolean): void
    unregister_impl(authentication_method: string | null, prompter_impl: CredentialsPrompterImpl): void
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
    /* Methods of EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataServerUI.CredentialsPrompter */
    vfunc_get_dialog_parent(): Gtk.Window
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompter */
    connect(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    connect_after(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    emit(sigName: "get-dialog-parent"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredentialsPrompter_ConstructProps)
    _init (config?: CredentialsPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: EDataServer.SourceRegistry): CredentialsPrompter
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImpl_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class CredentialsPrompterImpl {
    /* Fields of EDataServerUI.CredentialsPrompterImpl */
    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredentialsPrompterImpl_ConstructProps)
    _init (config?: CredentialsPrompterImpl_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImplOAuth2_ConstructProps extends CredentialsPrompterImpl_ConstructProps {
}
export class CredentialsPrompterImplOAuth2 {
    /* Fields of EDataServerUI.CredentialsPrompterImplOAuth2 */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplOAuth2Private
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredentialsPrompterImplOAuth2_ConstructProps)
    _init (config?: CredentialsPrompterImplOAuth2_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CredentialsPrompterImplOAuth2
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImplPassword_ConstructProps extends CredentialsPrompterImpl_ConstructProps {
}
export class CredentialsPrompterImplPassword {
    /* Fields of EDataServerUI.CredentialsPrompterImplPassword */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplPasswordPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
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
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CredentialsPrompterImplPassword_ConstructProps)
    _init (config?: CredentialsPrompterImplPassword_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CredentialsPrompterImplPassword
    static $gtype: GObject.Type
}
export interface RemindersWidget_ConstructProps extends Gtk.Grid_ConstructProps {
    watcher?: ECal.ReminderWatcher
    orientation?: Gtk.Orientation
}
export class RemindersWidget {
    /* Properties of EDataServerUI.RemindersWidget */
    readonly empty: boolean
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
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.RemindersWidget */
    get_paned(): Gtk.Paned
    get_settings(): Gio.Settings
    get_tree_view(): Gtk.TreeView
    get_watcher(): ECal.ReminderWatcher
    is_empty(): boolean
    report_error(prefix?: string | null, error?: GLib.Error | null): void
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
    /* Methods of EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Methods of Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI.RemindersWidget */
    vfunc_activated(rd: ECal.ReminderData): boolean
    vfunc_changed(): void
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
    /* Signals of EDataServerUI.RemindersWidget */
    connect(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    connect_after(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    emit(sigName: "activated", object: ECal.ReminderData): void
    connect(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: RemindersWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RemindersWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemindersWidget_ConstructProps)
    _init (config?: RemindersWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(watcher: ECal.ReminderWatcher): RemindersWidget
    static new(): RemindersWidget
    static $gtype: GObject.Type
}
export interface WebDAVDiscoverContent_ConstructProps extends Gtk.Grid_ConstructProps {
    orientation?: Gtk.Orientation
}
export class WebDAVDiscoverContent {
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
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI.WebDAVDiscoverContent */
    get_base_url(): string
    get_multiselect(): boolean
    get_selected(index: number): [ /* returnType */ boolean, /* out_href */ string, /* out_supports */ number, /* out_display_name */ string, /* out_color */ string, /* out_order */ number ]
    get_tree_selection(): Gtk.TreeSelection
    get_user_address(): string
    refresh(display_name?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    set_base_url(base_url: string): void
    set_multiselect(multiselect: boolean): void
    show_error(error?: GLib.Error | null): void
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
    /* Virtual methods of EDataServerUI.WebDAVDiscoverContent */
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
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebDAVDiscoverContent_ConstructProps)
    _init (config?: WebDAVDiscoverContent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(credentials_prompter: CredentialsPrompter, source: EDataServer.Source | null, base_url: string | null, supports_filter: number): WebDAVDiscoverContent
    static new(): WebDAVDiscoverContent
    static $gtype: GObject.Type
}
export interface WebDAVDiscoverDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}
export class WebDAVDiscoverDialog {
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
    /* Methods of EDataServerUI.WebDAVDiscoverDialog */
    get_content(): WebDAVDiscoverContent
    refresh(): void
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
    /* Virtual methods of EDataServerUI.WebDAVDiscoverDialog */
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
    connect(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "close-request", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    emit(sigName: "close-request"): void
    connect(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "keys-changed"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreened", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-on-close", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebDAVDiscoverDialog_ConstructProps)
    _init (config?: WebDAVDiscoverDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Gtk.Window, title: string, credentials_prompter: CredentialsPrompter, source: EDataServer.Source, base_url: string | null, supports_filter: number): WebDAVDiscoverDialog
    static new(): WebDAVDiscoverDialog
    static $gtype: GObject.Type
}
export abstract class CellRendererColorClass {
    /* Fields of EDataServerUI.CellRendererColorClass */
    parent_class: Gtk.CellRendererClass
    static name: string
}
export class CellRendererColorPrivate {
    static name: string
}
export abstract class CredentialsPrompterClass {
    /* Fields of EDataServerUI.CredentialsPrompterClass */
    parent_class: GObject.ObjectClass
    get_dialog_parent: (prompter: CredentialsPrompter) => Gtk.Window
    static name: string
}
export abstract class CredentialsPrompterImplClass {
    /* Fields of EDataServerUI.CredentialsPrompterImplClass */
    parent_class: EDataServer.ExtensionClass
    authentication_methods: string
    process_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters) => void
    cancel_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id?: object | null) => void
    prompt_finished: (prompter_impl: CredentialsPrompterImpl, prompt_id: object | null, credentials: EDataServer.NamedParameters) => void
    static name: string
}
export abstract class CredentialsPrompterImplOAuth2Class {
    /* Fields of EDataServerUI.CredentialsPrompterImplOAuth2Class */
    parent_class: CredentialsPrompterImplClass
    static name: string
}
export class CredentialsPrompterImplOAuth2Private {
    static name: string
}
export abstract class CredentialsPrompterImplPasswordClass {
    /* Fields of EDataServerUI.CredentialsPrompterImplPasswordClass */
    parent_class: CredentialsPrompterImplClass
    static name: string
}
export class CredentialsPrompterImplPasswordPrivate {
    static name: string
}
export class CredentialsPrompterImplPrivate {
    static name: string
}
export class CredentialsPrompterPrivate {
    static name: string
}
export abstract class RemindersWidgetClass {
    /* Fields of EDataServerUI.RemindersWidgetClass */
    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
    static name: string
}
export class RemindersWidgetPrivate {
    static name: string
}
export abstract class WebDAVDiscoverContentClass {
    /* Fields of EDataServerUI.WebDAVDiscoverContentClass */
    parent_class: Gtk.GridClass
    static name: string
}
export abstract class WebDAVDiscoverDialogClass {
    /* Fields of EDataServerUI.WebDAVDiscoverDialogClass */
    parent_class: Gtk.DialogClass
    static name: string
}