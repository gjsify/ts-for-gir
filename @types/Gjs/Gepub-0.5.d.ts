/**
 * Gepub-0.5
 */

import * as Gjs from './Gjs';
import * as libxml2 from './libxml2-2.0';
import * as WebKit2 from './WebKit2-4.0';
import * as Soup from './Soup-2.4';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as JavaScriptCore from './JavaScriptCore-4.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export const META_AUTHOR: string
export const META_DESC: string
export const META_ID: string
export const META_LANG: string
export const META_TITLE: string
export interface Doc_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
    page?: number
    path?: string
}
export class Doc {
    /* Properties of Gepub.Doc */
    page: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gepub.Doc */
    get_cover(): string
    get_current(): GLib.Bytes
    get_current_id(): string
    get_current_mime(): string
    get_current_path(): string
    get_current_with_epub_uris(): GLib.Bytes
    get_metadata(mdata: string): string
    get_n_pages(): number
    get_page(): number
    get_resource(path: string): GLib.Bytes
    get_resource_by_id(id: string): GLib.Bytes
    get_resource_mime(path: string): string
    get_resource_mime_by_id(id: string): string
    get_resource_path(id: string): string
    go_next(): boolean
    go_prev(): boolean
    set_page(index: number): void
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
    /* Virtual methods of Gepub.Doc */
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
    connect(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Doc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Doc_ConstructProps)
    _init (config?: Doc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): Doc
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Widget_ConstructProps extends WebKit2.WebView_ConstructProps {
    doc?: Doc
}
export class Widget {
    /* Properties of Gepub.Widget */
    doc: Doc
    /* Properties of WebKit2.WebView */
    editable: boolean
    readonly estimated_load_progress: number
    readonly favicon: object
    readonly is_loading: boolean
    is_muted: boolean
    readonly is_playing_audio: boolean
    readonly page_id: number
    settings: WebKit2.Settings
    readonly title: string
    readonly uri: string
    zoom_level: number
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
    /* Fields of WebKit2.WebViewBase */
    parentInstance: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gepub.Widget */
    get_doc(): Doc
    set_doc(doc?: Doc | null): void
    /* Methods of WebKit2.WebView */
    can_execute_editing_command(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean
    can_go_back(): boolean
    can_go_forward(): boolean
    can_show_mime_type(mime_type: string): boolean
    download_uri(uri: string): WebKit2.Download
    execute_editing_command(command: string): void
    execute_editing_command_with_argument(command: string, argument: string): void
    get_automation_presentation_type(): WebKit2.AutomationBrowsingContextPresentation
    get_back_forward_list(): WebKit2.BackForwardList
    get_background_color(): /* rgba */ Gdk.RGBA
    get_context(): WebKit2.WebContext
    get_custom_charset(): string
    get_editor_state(): WebKit2.EditorState
    get_estimated_load_progress(): number
    get_favicon(): cairo.Surface
    get_find_controller(): WebKit2.FindController
    get_input_method_context(): WebKit2.InputMethodContext | null
    get_inspector(): WebKit2.WebInspector
    get_is_muted(): boolean
    get_main_resource(): WebKit2.WebResource
    get_page_id(): number
    get_session_state(): WebKit2.WebViewSessionState
    get_settings(): WebKit2.Settings
    get_snapshot(region: WebKit2.SnapshotRegion, options: WebKit2.SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface
    get_title(): string
    get_tls_info(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    get_uri(): string
    get_user_content_manager(): WebKit2.UserContentManager
    get_website_data_manager(): WebKit2.WebsiteDataManager
    get_website_policies(): WebKit2.WebsitePolicies
    get_window_properties(): WebKit2.WindowProperties
    get_zoom_level(): number
    go_back(): void
    go_forward(): void
    go_to_back_forward_list_item(list_item: WebKit2.BackForwardListItem): void
    is_controlled_by_automation(): boolean
    is_editable(): boolean
    is_ephemeral(): boolean
    load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void
    load_bytes(bytes: GLib.Bytes, mime_type?: string | null, encoding?: string | null, base_uri?: string | null): void
    load_html(content: string, base_uri?: string | null): void
    load_plain_text(plain_text: string): void
    load_request(request: WebKit2.URIRequest): void
    load_uri(uri: string): void
    reload(): void
    reload_bypass_cache(): void
    restore_session_state(state: WebKit2.WebViewSessionState): void
    run_javascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    run_javascript_from_gresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_from_gresource_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    run_javascript_in_world(script: string, world_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_in_world_finish(result: Gio.AsyncResult): WebKit2.JavascriptResult
    save(save_mode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): Gio.InputStream
    save_to_file(file: Gio.File, save_mode: WebKit2.SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_to_file_finish(result: Gio.AsyncResult): boolean
    send_message_to_page(message: WebKit2.UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_message_to_page_finish(result: Gio.AsyncResult): WebKit2.UserMessage
    set_background_color(rgba: Gdk.RGBA): void
    set_custom_charset(charset?: string | null): void
    set_editable(editable: boolean): void
    set_input_method_context(context?: WebKit2.InputMethodContext | null): void
    set_is_muted(muted: boolean): void
    set_settings(settings: WebKit2.Settings): void
    set_zoom_level(zoom_level: number): void
    stop_loading(): void
    try_close(): void
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
    /* Virtual methods of WebKit2.WebView */
    vfunc_authenticate(request: WebKit2.AuthenticationRequest): boolean
    vfunc_close(): void
    vfunc_context_menu(context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult): boolean
    vfunc_context_menu_dismissed(): void
    vfunc_decide_policy(decision: WebKit2.PolicyDecision, type: WebKit2.PolicyDecisionType): boolean
    vfunc_enter_fullscreen(): boolean
    vfunc_insecure_content_detected(event: WebKit2.InsecureContentEvent): void
    vfunc_leave_fullscreen(): boolean
    vfunc_load_changed(load_event: WebKit2.LoadEvent): void
    vfunc_load_failed(load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error): boolean
    vfunc_load_failed_with_tls_errors(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_mouse_target_changed(hit_test_result: WebKit2.HitTestResult, modifiers: number): void
    vfunc_permission_request(permission_request: WebKit2.PermissionRequest): boolean
    vfunc_print(print_operation: WebKit2.PrintOperation): boolean
    vfunc_ready_to_show(): void
    vfunc_resource_load_started(resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    vfunc_run_as_modal(): void
    vfunc_run_color_chooser(request: WebKit2.ColorChooserRequest): boolean
    vfunc_run_file_chooser(request: WebKit2.FileChooserRequest): boolean
    vfunc_script_dialog(dialog: WebKit2.ScriptDialog): boolean
    vfunc_show_notification(notification: WebKit2.Notification): boolean
    vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: WebKit2.OptionMenu): boolean
    vfunc_submit_form(request: WebKit2.FormSubmissionRequest): void
    vfunc_user_message_received(message: WebKit2.UserMessage): boolean
    vfunc_web_process_crashed(): boolean
    vfunc_web_process_terminated(reason: WebKit2.WebProcessTerminationReason): void
    /* Virtual methods of WebKit2.WebViewBase */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
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
    /* Signals of WebKit2.WebView */
    connect(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Widget, request: WebKit2.AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: WebKit2.AuthenticationRequest): void
    connect(sigName: "close", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "close", callback: (($obj: Widget) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "context-menu", callback: (($obj: Widget, context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: (($obj: Widget, context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult) => boolean)): number
    emit(sigName: "context-menu", context_menu: WebKit2.ContextMenu, event: Gdk.Event, hit_test_result: WebKit2.HitTestResult): void
    connect(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: (($obj: Widget) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    connect(sigName: "create", callback: (($obj: Widget, navigation_action: WebKit2.NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: (($obj: Widget, navigation_action: WebKit2.NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigation_action: WebKit2.NavigationAction): void
    connect(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: (($obj: Widget, decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: WebKit2.PolicyDecision, decision_type: WebKit2.PolicyDecisionType): void
    connect(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    connect(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: (($obj: Widget, event: WebKit2.InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: WebKit2.InsecureContentEvent): void
    connect(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    connect(sigName: "load-changed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent) => void)): number
    emit(sigName: "load-changed", load_event: WebKit2.LoadEvent): void
    connect(sigName: "load-failed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: (($obj: Widget, load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", load_event: WebKit2.LoadEvent, failing_uri: string, error: GLib.Error): void
    connect(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: (($obj: Widget, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "mouse-target-changed", callback: (($obj: Widget, hit_test_result: WebKit2.HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: (($obj: Widget, hit_test_result: WebKit2.HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hit_test_result: WebKit2.HitTestResult, modifiers: number): void
    connect(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: (($obj: Widget, request: WebKit2.PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: WebKit2.PermissionRequest): void
    connect(sigName: "print", callback: (($obj: Widget, print_operation: WebKit2.PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: (($obj: Widget, print_operation: WebKit2.PrintOperation) => boolean)): number
    emit(sigName: "print", print_operation: WebKit2.PrintOperation): void
    connect(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "ready-to-show", callback: (($obj: Widget) => void)): number
    emit(sigName: "ready-to-show"): void
    connect(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: (($obj: Widget, resource: WebKit2.WebResource, request: WebKit2.URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebKit2.WebResource, request: WebKit2.URIRequest): void
    connect(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "run-as-modal", callback: (($obj: Widget) => void)): number
    emit(sigName: "run-as-modal"): void
    connect(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: (($obj: Widget, request: WebKit2.ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: WebKit2.ColorChooserRequest): void
    connect(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: (($obj: Widget, request: WebKit2.FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: WebKit2.FileChooserRequest): void
    connect(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: (($obj: Widget, dialog: WebKit2.ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: WebKit2.ScriptDialog): void
    connect(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: (($obj: Widget, notification: WebKit2.Notification) => boolean)): number
    emit(sigName: "show-notification", notification: WebKit2.Notification): void
    connect(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: (($obj: Widget, object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", object: WebKit2.OptionMenu, p0: Gdk.Event, p1: Gdk.Rectangle): void
    connect(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: (($obj: Widget, request: WebKit2.FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: WebKit2.FormSubmissionRequest): void
    connect(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: Widget, message: WebKit2.UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: WebKit2.UserMessage): void
    connect(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: (($obj: Widget) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    connect(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: (($obj: Widget, reason: WebKit2.WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebKit2.WebProcessTerminationReason): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Widget) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Widget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Widget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Widget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Widget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Widget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Widget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "map", callback: (($obj: Widget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Widget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Widget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Widget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Widget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Widget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "show", callback: (($obj: Widget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Widget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Widget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Widget) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Widget_ConstructProps)
    _init (config?: Widget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Widget
    static $gtype: GObject.Type
}
export abstract class DocClass {
    static name: string
}
export abstract class WidgetClass {
    static name: string
}