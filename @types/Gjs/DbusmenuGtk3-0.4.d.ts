/**
 * DbusmenuGtk3-0.4
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
import * as Dbusmenu from './Dbusmenu-0.4';

export const GTK_MENUITEM_H__: number
export function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem
export function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem
export function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf
export function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [ /* key */ number, /* modifier */ Gdk.ModifierType ]
export function menuitem_property_set_image(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean
export function menuitem_property_set_shortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean
export function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean
export function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean
export interface Client_ConstructProps extends Dbusmenu.Client_ConstructProps {
}
export class Client {
    /* Properties of Dbusmenu.Client */
    group_events: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of DbusmenuGtk3.Client */
    get_accel_group(): Gtk.AccelGroup
    menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem
    menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu
    newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void
    set_accel_group(agroup: Gtk.AccelGroup): void
    /* Methods of Dbusmenu.Client */
    add_type_handler(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    add_type_handler_full(type: string, newfunc: Dbusmenu.ClientTypeHandler): boolean
    get_icon_paths(): string[]
    get_root(): Dbusmenu.Menuitem
    get_status(): Dbusmenu.Status
    get_text_direction(): Dbusmenu.TextDirection
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
    /* Signals of Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    connect_after(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    emit(sigName: "layout-updated"): void
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "root-changed", arg1: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_name: string, dbus_object: string): Client
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends Gtk.Menu_ConstructProps {
    dbus_name?: string
    dbus_object?: string
}
export class Menu {
    /* Properties of Gtk.Menu */
    accel_group: Gtk.AccelGroup
    accel_path: string
    active: number
    anchor_hints: Gdk.AnchorHints
    attach_widget: Gtk.Widget
    menu_type_hint: Gdk.WindowTypeHint
    monitor: number
    rect_anchor_dx: number
    rect_anchor_dy: number
    reserve_toggle_size: boolean
    tearoff_state: boolean
    tearoff_title: string
    /* Properties of Gtk.MenuShell */
    take_focus: boolean
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
    /* Fields of DbusmenuGtk3.Menu */
    priv: MenuPrivate
    /* Fields of Gtk.Menu */
    menu_shell: Gtk.MenuShell
    /* Fields of Gtk.MenuShell */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of DbusmenuGtk3.Menu */
    get_client(): Client
    /* Methods of Gtk.Menu */
    attach(child: Gtk.Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void
    attach_to_widget(attach_widget: Gtk.Widget, detacher?: Gtk.MenuDetachFunc | null): void
    detach(): void
    get_accel_group(): Gtk.AccelGroup
    get_accel_path(): string
    get_active(): Gtk.Widget
    get_attach_widget(): Gtk.Widget
    get_monitor(): number
    get_reserve_toggle_size(): boolean
    get_tearoff_state(): boolean
    get_title(): string
    place_on_monitor(monitor: Gdk.Monitor): void
    popdown(): void
    popup(parent_menu_shell: Gtk.Widget | null, parent_menu_item: Gtk.Widget | null, func: Gtk.MenuPositionFunc | null, button: number, activate_time: number): void
    popup_at_pointer(trigger_event?: Gdk.Event | null): void
    popup_at_rect(rect_window: Gdk.Window, rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event?: Gdk.Event | null): void
    popup_at_widget(widget: Gtk.Widget, widget_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event?: Gdk.Event | null): void
    popup_for_device(device: Gdk.Device | null, parent_menu_shell: Gtk.Widget | null, parent_menu_item: Gtk.Widget | null, func: Gtk.MenuPositionFunc | null, button: number, activate_time: number): void
    reorder_child(child: Gtk.Widget, position: number): void
    reposition(): void
    set_accel_group(accel_group?: Gtk.AccelGroup | null): void
    set_accel_path(accel_path?: string | null): void
    set_active(index: number): void
    set_monitor(monitor_num: number): void
    set_reserve_toggle_size(reserve_toggle_size: boolean): void
    set_screen(screen?: Gdk.Screen | null): void
    set_tearoff_state(torn_off: boolean): void
    set_title(title?: string | null): void
    /* Methods of Gtk.MenuShell */
    activate_item(menu_item: Gtk.Widget, force_deactivate: boolean): void
    append(child: Gtk.MenuItem): void
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null, with_separators: boolean): void
    cancel(): void
    deactivate(): void
    deselect(): void
    get_parent_shell(): Gtk.Widget
    get_selected_item(): Gtk.Widget
    get_take_focus(): boolean
    insert(child: Gtk.Widget, position: number): void
    prepend(child: Gtk.Widget): void
    select_first(search_sensitive: boolean): void
    select_item(menu_item: Gtk.Widget): void
    set_take_focus(take_focus: boolean): void
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
    /* Virtual methods of DbusmenuGtk3.Menu */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.MenuShell */
    vfunc_activate_current(force_hide: boolean): void
    vfunc_cancel(): void
    vfunc_deactivate(): void
    vfunc_get_popup_delay(): number
    vfunc_insert(child: Gtk.Widget, position: number): void
    vfunc_move_current(direction: Gtk.MenuDirectionType): void
    vfunc_move_selected(distance: number): boolean
    vfunc_select_item(menu_item: Gtk.Widget): void
    vfunc_selection_done(): void
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
    /* Signals of Gtk.Menu */
    connect(sigName: "move-scroll", callback: (($obj: Menu, scroll_type: Gtk.ScrollType) => void)): number
    connect_after(sigName: "move-scroll", callback: (($obj: Menu, scroll_type: Gtk.ScrollType) => void)): number
    emit(sigName: "move-scroll", scroll_type: Gtk.ScrollType): void
    connect(sigName: "popped-up", callback: (($obj: Menu, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    connect_after(sigName: "popped-up", callback: (($obj: Menu, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    emit(sigName: "popped-up", flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean): void
    /* Signals of Gtk.MenuShell */
    connect(sigName: "activate-current", callback: (($obj: Menu, force_hide: boolean) => void)): number
    connect_after(sigName: "activate-current", callback: (($obj: Menu, force_hide: boolean) => void)): number
    emit(sigName: "activate-current", force_hide: boolean): void
    connect(sigName: "cancel", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: Menu) => void)): number
    emit(sigName: "cancel"): void
    connect(sigName: "cycle-focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "cycle-focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "cycle-focus", direction: Gtk.DirectionType): void
    connect(sigName: "deactivate", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Menu) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "insert", callback: (($obj: Menu, child: Gtk.Widget, position: number) => void)): number
    connect_after(sigName: "insert", callback: (($obj: Menu, child: Gtk.Widget, position: number) => void)): number
    emit(sigName: "insert", child: Gtk.Widget, position: number): void
    connect(sigName: "move-current", callback: (($obj: Menu, direction: Gtk.MenuDirectionType) => void)): number
    connect_after(sigName: "move-current", callback: (($obj: Menu, direction: Gtk.MenuDirectionType) => void)): number
    emit(sigName: "move-current", direction: Gtk.MenuDirectionType): void
    connect(sigName: "move-selected", callback: (($obj: Menu, distance: number) => boolean)): number
    connect_after(sigName: "move-selected", callback: (($obj: Menu, distance: number) => boolean)): number
    emit(sigName: "move-selected", distance: number): void
    connect(sigName: "selection-done", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "selection-done", callback: (($obj: Menu) => void)): number
    emit(sigName: "selection-done"): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Menu) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Menu, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Menu) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Menu, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Menu, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Menu) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Menu, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Menu, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "map", callback: (($obj: Menu) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Menu, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Menu, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Menu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Menu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Menu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Menu) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "show", callback: (($obj: Menu) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Menu, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Menu, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Menu) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Menu) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Menu) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-group", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-hints", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-hints", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attach-widget", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu-type-hint", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-type-hint", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rect-anchor-dx", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dx", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rect-anchor-dy", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dy", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserve-toggle-size", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-state", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_name: string, dbus_object: string): Menu
    static new(): Menu
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of DbusmenuGtk3.ClientClass */
    parent_class: Dbusmenu.ClientClass
    root_changed: (newroot: Dbusmenu.Menuitem) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class MenuClass {
    /* Fields of DbusmenuGtk3.MenuClass */
    parent_class: Gtk.MenuClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
export class MenuPrivate {
    static name: string
}