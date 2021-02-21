/**
 * EDataServerUI-1.2
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-2.4';
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
import type * as EDataServer from './EDataServer-1.2';
import type * as libxml2 from './libxml2-2.0';
import type * as GData from './GData-0.0';
import type * as Json from './Json-1.0';
import type * as Goa from './Goa-1.0';
import type * as Camel from './Camel-1.2';
import type * as ECal from './ECal-2.0';
import type * as ICalGLib from './ICalGLib-3.0';

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
    /* Properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor */
    rgba: Gdk.RGBA
    /* Properties of Gtk-3.0.Gtk.CellRenderer */
    cell_background: string
    cell_background_gdk: Gdk.Color
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
    /* Fields of EDataServerUI-1.2.EDataServerUI.CellRendererColor */
    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate
    /* Fields of Gtk-3.0.Gtk.CellRenderer */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-3.0.Gtk.CellRenderer */
    activate(event: Gdk.Event, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    get_aligned_area(widget: Gtk.Widget, flags: Gtk.CellRendererState, cell_area: Gdk.Rectangle): /* aligned_area */ Gdk.Rectangle
    get_alignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    get_fixed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_padding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    get_preferred_height(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    get_preferred_height_for_width(widget: Gtk.Widget, width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(widget: Gtk.Widget): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    get_preferred_width_for_height(widget: Gtk.Widget, height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_request_mode(): Gtk.SizeRequestMode
    get_sensitive(): boolean
    get_size(widget: Gtk.Widget, cell_area?: Gdk.Rectangle | null): [ /* x_offset */ number | null, /* y_offset */ number | null, /* width */ number | null, /* height */ number | null ]
    get_state(widget: Gtk.Widget | null, cell_state: Gtk.CellRendererState): Gtk.StateFlags
    get_visible(): boolean
    is_activatable(): boolean
    render(cr: cairo.Context, widget: Gtk.Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    set_alignment(xalign: number, yalign: number): void
    set_fixed_size(width: number, height: number): void
    set_padding(xpad: number, ypad: number): void
    set_sensitive(sensitive: boolean): void
    set_visible(visible: boolean): void
    start_editing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    stop_editing(canceled: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gtk-3.0.Gtk.CellRenderer */
    vfunc_activate(event: Gdk.Event, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    vfunc_editing_canceled(): void
    vfunc_editing_started(editable: Gtk.CellEditable, path: string): void
    vfunc_get_aligned_area(widget: Gtk.Widget, flags: Gtk.CellRendererState, cell_area: Gdk.Rectangle): /* aligned_area */ Gdk.Rectangle
    vfunc_get_preferred_height(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    vfunc_get_preferred_height_for_width(widget: Gtk.Widget, width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(widget: Gtk.Widget): [ /* minimum_size */ number | null, /* natural_size */ number | null ]
    vfunc_get_preferred_width_for_height(widget: Gtk.Widget, height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_get_size(widget: Gtk.Widget, cell_area?: Gdk.Rectangle | null): [ /* x_offset */ number | null, /* y_offset */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_render(cr: cairo.Context, widget: Gtk.Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    vfunc_start_editing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.CellRenderer */
    connect(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    connect_after(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    emit(sigName: "editing-canceled"): void
    connect(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    connect_after(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    emit(sigName: "editing-started", editable: Gtk.CellEditable, path: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter */
    auto_prompt: boolean
    readonly provider: EDataServer.SourceCredentialsProvider
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter */
    parent: GObject.Object
    priv: CredentialsPrompterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter */
    vfunc_get_dialog_parent(): Gtk.Window
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter */
    connect(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    connect_after(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    emit(sigName: "get-dialog-parent"): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2 */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplOAuth2Private
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplPasswordPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    cancel_prompt(prompt_id?: object | null): void
    get_credentials_prompter(): object | null
    prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string | null, credentials: EDataServer.NamedParameters): void
    prompt_finish(prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): EDataServer.Extensible
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    vfunc_cancel_prompt(prompt_id?: object | null): void
    vfunc_process_prompt(prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters): void
    vfunc_prompt_finished(prompt_id: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", prompt_id?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget */
    readonly empty: boolean
    /* Properties of Gtk-3.0.Gtk.Grid */
    baseline_row: number
    column_homogeneous: boolean
    column_spacing: number
    row_homogeneous: boolean
    row_spacing: number
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    name: string
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget */
    get_paned(): Gtk.Paned
    get_settings(): Gio.Settings
    get_tree_view(): Gtk.TreeView
    get_watcher(): ECal.ReminderWatcher
    is_empty(): boolean
    report_error(prefix?: string | null, error?: GLib.Error | null): void
    /* Methods of Gtk-3.0.Gtk.Grid */
    attach(child: Gtk.Widget, left: number, top: number, width: number, height: number): void
    attach_next_to(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    get_baseline_row(): number
    get_child_at(left: number, top: number): Gtk.Widget | null
    get_column_homogeneous(): boolean
    get_column_spacing(): number
    get_row_baseline_position(row: number): Gtk.BaselinePosition
    get_row_homogeneous(): boolean
    get_row_spacing(): number
    insert_column(position: number): void
    insert_next_to(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insert_row(position: number): void
    remove_column(position: number): void
    remove_row(position: number): void
    set_baseline_row(row: number): void
    set_column_homogeneous(homogeneous: boolean): void
    set_column_spacing(spacing: number): void
    set_row_baseline_position(row: number, pos: Gtk.BaselinePosition): void
    set_row_homogeneous(homogeneous: boolean): void
    set_row_spacing(spacing: number): void
    /* Methods of Gtk-3.0.Gtk.Container */
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
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function[]
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): EDataServer.Extension[]
    load_extensions(): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk-3.0.Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget */
    vfunc_activated(rd: ECal.ReminderData): boolean
    vfunc_changed(): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
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
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI-1.2.EDataServerUI.RemindersWidget */
    connect(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    connect_after(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    emit(sigName: "activated", object: ECal.ReminderData): void
    connect(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "changed"): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: RemindersWidget, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: RemindersWidget, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: RemindersWidget, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: RemindersWidget, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: RemindersWidget, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: RemindersWidget, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: RemindersWidget, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: RemindersWidget, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: RemindersWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RemindersWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: RemindersWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: RemindersWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: RemindersWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: RemindersWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: RemindersWidget, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: RemindersWidget, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: RemindersWidget, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: RemindersWidget, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: RemindersWidget, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: RemindersWidget, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: RemindersWidget, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: RemindersWidget, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: RemindersWidget, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: RemindersWidget, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: RemindersWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: RemindersWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: RemindersWidget, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: RemindersWidget, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: RemindersWidget) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: RemindersWidget) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: RemindersWidget, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: RemindersWidget, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: RemindersWidget, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: RemindersWidget, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: RemindersWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: RemindersWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: RemindersWidget, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: RemindersWidget, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: RemindersWidget, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: RemindersWidget, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: RemindersWidget, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: RemindersWidget, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: RemindersWidget, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: RemindersWidget, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: RemindersWidget, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: RemindersWidget, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
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
    connect(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gtk-3.0.Gtk.Grid */
    baseline_row: number
    column_homogeneous: boolean
    column_spacing: number
    row_homogeneous: boolean
    row_spacing: number
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    name: string
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent */
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
    /* Methods of Gtk-3.0.Gtk.Grid */
    attach(child: Gtk.Widget, left: number, top: number, width: number, height: number): void
    attach_next_to(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    get_baseline_row(): number
    get_child_at(left: number, top: number): Gtk.Widget | null
    get_column_homogeneous(): boolean
    get_column_spacing(): number
    get_row_baseline_position(row: number): Gtk.BaselinePosition
    get_row_homogeneous(): boolean
    get_row_spacing(): number
    insert_column(position: number): void
    insert_next_to(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insert_row(position: number): void
    remove_column(position: number): void
    remove_row(position: number): void
    set_baseline_row(row: number): void
    set_column_homogeneous(homogeneous: boolean): void
    set_column_spacing(spacing: number): void
    set_row_baseline_position(row: number, pos: Gtk.BaselinePosition): void
    set_row_homogeneous(homogeneous: boolean): void
    set_row_spacing(spacing: number): void
    /* Methods of Gtk-3.0.Gtk.Container */
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
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function[]
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk-3.0.Gtk.Orientable */
    get_orientation(): Gtk.Orientation
    set_orientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
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
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverContent, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverContent, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: WebDAVDiscoverContent, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WebDAVDiscoverContent, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: WebDAVDiscoverContent, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: WebDAVDiscoverContent, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverContent, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverContent, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverContent, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverContent, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: WebDAVDiscoverContent, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WebDAVDiscoverContent, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverContent) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverContent) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverContent, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverContent, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: WebDAVDiscoverContent, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: WebDAVDiscoverContent, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverContent, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverContent, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: WebDAVDiscoverContent, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: WebDAVDiscoverContent, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: WebDAVDiscoverContent, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: WebDAVDiscoverContent, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: WebDAVDiscoverContent, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WebDAVDiscoverContent, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
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
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
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
    /* Properties of Gtk-3.0.Gtk.Window */
    accept_focus: boolean
    application: Gtk.Application
    attached_to: Gtk.Widget
    decorated: boolean
    default_height: number
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    focus_on_map: boolean
    focus_visible: boolean
    gravity: Gdk.Gravity
    has_resize_grip: boolean
    readonly has_toplevel_focus: boolean
    hide_titlebar_when_maximized: boolean
    icon: GdkPixbuf.Pixbuf
    icon_name: string
    readonly is_active: boolean
    readonly is_maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    readonly resize_grip_visible: boolean
    role: string
    screen: Gdk.Screen
    skip_pager_hint: boolean
    skip_taskbar_hint: boolean
    startup_id: string
    title: string
    transient_for: Gtk.Window
    type_hint: Gdk.WindowTypeHint
    urgency_hint: boolean
    window_position: Gtk.WindowPosition
    /* Properties of Gtk-3.0.Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    name: string
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Fields of Gtk-3.0.Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk-3.0.Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog */
    get_content(): WebDAVDiscoverContent
    refresh(): void
    /* Methods of Gtk-3.0.Gtk.Dialog */
    add_action_widget(child: Gtk.Widget, response_id: number): void
    add_button(button_text: string, response_id: number): Gtk.Widget
    get_action_area(): Gtk.Box
    get_content_area(): Gtk.Box
    get_header_bar(): Gtk.HeaderBar
    get_response_for_widget(widget: Gtk.Widget): number
    get_widget_for_response(response_id: number): Gtk.Widget | null
    response(response_id: number): void
    run(): number
    set_alternative_button_order_from_array(new_order: number[]): void
    set_default_response(response_id: number): void
    set_response_sensitive(response_id: number, setting: boolean): void
    /* Methods of Gtk-3.0.Gtk.Window */
    activate_default(): boolean
    activate_focus(): boolean
    activate_key(event: Gdk.EventKey): boolean
    add_accel_group(accel_group: Gtk.AccelGroup): void
    add_mnemonic(keyval: number, target: Gtk.Widget): void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void
    get_accept_focus(): boolean
    get_application(): Gtk.Application | null
    get_attached_to(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_on_map(): boolean
    get_focus_visible(): boolean
    get_gravity(): Gdk.Gravity
    get_group(): Gtk.WindowGroup
    get_has_resize_grip(): boolean
    get_hide_titlebar_when_maximized(): boolean
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_list(): GdkPixbuf.Pixbuf[]
    get_icon_name(): string | null
    get_mnemonic_modifier(): Gdk.ModifierType
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_opacity(): number
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    get_resizable(): boolean
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    get_role(): string | null
    get_screen(): Gdk.Screen
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_skip_pager_hint(): boolean
    get_skip_taskbar_hint(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    get_type_hint(): Gdk.WindowTypeHint
    get_urgency_hint(): boolean
    get_window_type(): Gtk.WindowType
    has_group(): boolean
    iconify(): void
    maximize(): void
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parse_geometry(geometry: string): boolean
    present(): void
    present_with_time(timestamp: number): void
    propagate_key_event(event: Gdk.EventKey): boolean
    remove_accel_group(accel_group: Gtk.AccelGroup): void
    remove_mnemonic(keyval: number, target: Gtk.Widget): void
    reshow_with_initial_size(): void
    resize(width: number, height: number): void
    resize_grip_is_visible(): boolean
    resize_to_geometry(width: number, height: number): void
    set_accept_focus(setting: boolean): void
    set_application(application?: Gtk.Application | null): void
    set_attached_to(attach_widget?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default(default_widget?: Gtk.Widget | null): void
    set_default_geometry(width: number, height: number): void
    set_default_size(width: number, height: number): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_on_map(setting: boolean): void
    set_focus_visible(setting: boolean): void
    set_geometry_hints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    set_gravity(gravity: Gdk.Gravity): void
    set_has_resize_grip(value: boolean): void
    set_has_user_ref_count(setting: boolean): void
    set_hide_titlebar_when_maximized(setting: boolean): void
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void
    set_icon_from_file(filename: string): boolean
    set_icon_list(list: GdkPixbuf.Pixbuf[]): void
    set_icon_name(name?: string | null): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_opacity(opacity: number): void
    set_position(position: Gtk.WindowPosition): void
    set_resizable(resizable: boolean): void
    set_role(role: string): void
    set_screen(screen: Gdk.Screen): void
    set_skip_pager_hint(setting: boolean): void
    set_skip_taskbar_hint(setting: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    set_type_hint(hint: Gdk.WindowTypeHint): void
    set_urgency_hint(setting: boolean): void
    set_wmclass(wmclass_name: string, wmclass_class: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk-3.0.Gtk.Bin */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
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
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function[]
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Dialog */
    vfunc_close(): void
    vfunc_response(response_id: number): void
    /* Virtual methods of Gtk-3.0.Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    vfunc_set_focus(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk-3.0.Gtk.Container */
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
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-3.0.Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, response_id: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, response_id: number) => void)): number
    emit(sigName: "response", response_id: number): void
    /* Signals of Gtk-3.0.Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "set-focus", callback: (($obj: WebDAVDiscoverDialog, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: WebDAVDiscoverDialog, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverDialog, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverDialog, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: WebDAVDiscoverDialog, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WebDAVDiscoverDialog, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: WebDAVDiscoverDialog, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: WebDAVDiscoverDialog, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverDialog, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverDialog, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverDialog, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverDialog, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: WebDAVDiscoverDialog, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WebDAVDiscoverDialog, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverDialog, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverDialog, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: WebDAVDiscoverDialog, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: WebDAVDiscoverDialog, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverDialog, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverDialog, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: WebDAVDiscoverDialog, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: WebDAVDiscoverDialog, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: WebDAVDiscoverDialog, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: WebDAVDiscoverDialog, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: WebDAVDiscoverDialog, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WebDAVDiscoverDialog, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
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
    static new(type: Gtk.WindowType): WebDAVDiscoverDialog
    static $gtype: GObject.Type
}
export abstract class CellRendererColorClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.CellRendererColorClass */
    parent_class: Gtk.CellRendererClass
    static name: string
}
export class CellRendererColorPrivate {
    static name: string
}
export abstract class CredentialsPrompterClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterClass */
    parent_class: GObject.ObjectClass
    get_dialog_parent: (prompter: CredentialsPrompter) => Gtk.Window
    static name: string
}
export abstract class CredentialsPrompterImplClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplClass */
    parent_class: EDataServer.ExtensionClass
    authentication_methods: string
    process_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id: object | null, auth_source: EDataServer.Source, cred_source: EDataServer.Source, error_text: string, credentials: EDataServer.NamedParameters) => void
    cancel_prompt: (prompter_impl: CredentialsPrompterImpl, prompt_id?: object | null) => void
    prompt_finished: (prompter_impl: CredentialsPrompterImpl, prompt_id: object | null, credentials: EDataServer.NamedParameters) => void
    static name: string
}
export abstract class CredentialsPrompterImplOAuth2Class {
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Class */
    parent_class: CredentialsPrompterImplClass
    static name: string
}
export class CredentialsPrompterImplOAuth2Private {
    static name: string
}
export abstract class CredentialsPrompterImplPasswordClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordClass */
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
    /* Fields of EDataServerUI-1.2.EDataServerUI.RemindersWidgetClass */
    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
    static name: string
}
export class RemindersWidgetPrivate {
    static name: string
}
export abstract class WebDAVDiscoverContentClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContentClass */
    parent_class: Gtk.GridClass
    static name: string
}
export abstract class WebDAVDiscoverDialogClass {
    /* Fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialogClass */
    parent_class: Gtk.DialogClass
    static name: string
}