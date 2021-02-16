/**
 * Wnck-3.0
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

export enum ClientType {
    APPLICATION,
    PAGER,
}
export enum MotionDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum PagerDisplayMode {
    NAME,
    CONTENT,
}
export enum PagerScrollMode {
    /* 2D (invalid, starts with a number) */
    /* 1D (invalid, starts with a number) */
}
export enum TasklistGroupingType {
    NEVER_GROUP,
    AUTO_GROUP,
    ALWAYS_GROUP,
}
export enum WindowGravity {
    CURRENT,
    NORTHWEST,
    NORTH,
    NORTHEAST,
    WEST,
    CENTER,
    EAST,
    SOUTHWEST,
    SOUTH,
    SOUTHEAST,
    STATIC,
}
export enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
}
export enum _LayoutCorner {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMRIGHT,
    BOTTOMLEFT,
}
export enum _LayoutOrientation {
    HORIZONTAL,
    VERTICAL,
}
export enum WindowActions {
    MOVE,
    RESIZE,
    SHADE,
    STICK,
    MAXIMIZE_HORIZONTALLY,
    MAXIMIZE_VERTICALLY,
    CHANGE_WORKSPACE,
    CLOSE,
    UNMAXIMIZE_HORIZONTALLY,
    UNMAXIMIZE_VERTICALLY,
    UNSHADE,
    UNSTICK,
    MINIMIZE,
    UNMINIMIZE,
    MAXIMIZE,
    UNMAXIMIZE,
    FULLSCREEN,
    ABOVE,
    BELOW,
}
export enum WindowMoveResizeMask {
    X,
    Y,
    WIDTH,
    HEIGHT,
}
export enum WindowState {
    MINIMIZED,
    MAXIMIZED_HORIZONTALLY,
    MAXIMIZED_VERTICALLY,
    SHADED,
    SKIP_PAGER,
    SKIP_TASKLIST,
    STICKY,
    HIDDEN,
    FULLSCREEN,
    DEMANDS_ATTENTION,
    URGENT,
    ABOVE,
    BELOW,
}
export const DEFAULT_ICON_SIZE: number
export const DEFAULT_MINI_ICON_SIZE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function pid_read_resource_usage(gdk_display: Gdk.Display, pid: number, usage: ResourceUsage): void
export function set_client_type(ewmh_sourceindication_client_type: ClientType): void
export function set_default_icon_size(size: number): void
export function set_default_mini_icon_size(size: number): void
export function shutdown(): void
export function xid_read_resource_usage(gdk_display: Gdk.Display, xid: number, usage: ResourceUsage): void
export interface ActionMenu_ConstructProps extends Gtk.Menu_ConstructProps {
    window?: object
}
export class ActionMenu {
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
    /* Fields of Wnck.ActionMenu */
    parent_instance: Gtk.Menu
    priv: ActionMenuPrivate
    /* Fields of Gtk.Menu */
    menu_shell: Gtk.MenuShell
    /* Fields of Gtk.MenuShell */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of Wnck.ActionMenu */
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
    connect(sigName: "move-scroll", callback: (($obj: ActionMenu, scroll_type: Gtk.ScrollType) => void)): number
    connect_after(sigName: "move-scroll", callback: (($obj: ActionMenu, scroll_type: Gtk.ScrollType) => void)): number
    emit(sigName: "move-scroll", scroll_type: Gtk.ScrollType): void
    connect(sigName: "popped-up", callback: (($obj: ActionMenu, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    connect_after(sigName: "popped-up", callback: (($obj: ActionMenu, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    emit(sigName: "popped-up", flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean): void
    /* Signals of Gtk.MenuShell */
    connect(sigName: "activate-current", callback: (($obj: ActionMenu, force_hide: boolean) => void)): number
    connect_after(sigName: "activate-current", callback: (($obj: ActionMenu, force_hide: boolean) => void)): number
    emit(sigName: "activate-current", force_hide: boolean): void
    connect(sigName: "cancel", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "cancel"): void
    connect(sigName: "cycle-focus", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "cycle-focus", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "cycle-focus", direction: Gtk.DirectionType): void
    connect(sigName: "deactivate", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "insert", callback: (($obj: ActionMenu, child: Gtk.Widget, position: number) => void)): number
    connect_after(sigName: "insert", callback: (($obj: ActionMenu, child: Gtk.Widget, position: number) => void)): number
    emit(sigName: "insert", child: Gtk.Widget, position: number): void
    connect(sigName: "move-current", callback: (($obj: ActionMenu, direction: Gtk.MenuDirectionType) => void)): number
    connect_after(sigName: "move-current", callback: (($obj: ActionMenu, direction: Gtk.MenuDirectionType) => void)): number
    emit(sigName: "move-current", direction: Gtk.MenuDirectionType): void
    connect(sigName: "move-selected", callback: (($obj: ActionMenu, distance: number) => boolean)): number
    connect_after(sigName: "move-selected", callback: (($obj: ActionMenu, distance: number) => boolean)): number
    emit(sigName: "move-selected", distance: number): void
    connect(sigName: "selection-done", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "selection-done", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "selection-done"): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: ActionMenu, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ActionMenu, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ActionMenu, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "map", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ActionMenu, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ActionMenu, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ActionMenu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ActionMenu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ActionMenu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "show", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ActionMenu, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ActionMenu, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ActionMenu) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ActionMenu) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accel-group", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-group", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accel-path", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-hints", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-hints", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attach-widget", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attach-widget", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu-type-hint", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-type-hint", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rect-anchor-dx", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dx", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rect-anchor-dy", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dy", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reserve-toggle-size", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserve-toggle-size", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tearoff-state", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-state", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tearoff-title", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::take-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionMenu_ConstructProps)
    _init (config?: ActionMenu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(window: Window): ActionMenu
    static new(): ActionMenu
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
export class Application {
    /* Fields of Wnck.Application */
    parent_instance: GObject.Object
    priv: ApplicationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Application */
    get_icon(): GdkPixbuf.Pixbuf
    get_icon_is_fallback(): boolean
    get_icon_name(): string
    get_mini_icon(): GdkPixbuf.Pixbuf
    get_n_windows(): number
    get_name(): string
    get_pid(): number
    get_startup_id(): string
    get_windows(): Window[]
    get_xid(): number
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
    /* Virtual methods of Wnck.Application */
    vfunc_icon_changed(): void
    vfunc_name_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Application */
    connect(sigName: "icon-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "icon-changed"): void
    connect(sigName: "name-changed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Application) => void)): number
    emit(sigName: "name-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(xwindow: number): Application
    static $gtype: GObject.Type
}
export interface ClassGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClassGroup {
    /* Fields of Wnck.ClassGroup */
    parent_instance: GObject.Object
    priv: ClassGroupPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.ClassGroup */
    get_icon(): GdkPixbuf.Pixbuf
    get_id(): string
    get_mini_icon(): GdkPixbuf.Pixbuf
    get_name(): string
    get_res_class(): string
    get_windows(): Window[]
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
    /* Virtual methods of Wnck.ClassGroup */
    vfunc_icon_changed(): void
    vfunc_name_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.ClassGroup */
    connect(sigName: "icon-changed", callback: (($obj: ClassGroup) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: ClassGroup) => void)): number
    emit(sigName: "icon-changed"): void
    connect(sigName: "name-changed", callback: (($obj: ClassGroup) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: ClassGroup) => void)): number
    emit(sigName: "name-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClassGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClassGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClassGroup_ConstructProps)
    _init (config?: ClassGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(id: string): ClassGroup
    static $gtype: GObject.Type
}
export interface Pager_ConstructProps extends Gtk.Widget_ConstructProps {
}
export class Pager {
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
    /* Fields of Wnck.Pager */
    parent_instance: Gtk.Container
    priv: PagerPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Pager */
    get_wrap_on_scroll(): boolean
    set_display_mode(mode: PagerDisplayMode): void
    set_n_rows(n_rows: number): boolean
    set_orientation(orientation: Gtk.Orientation): boolean
    set_scroll_mode(scroll_mode: PagerScrollMode): void
    set_shadow_type(shadow_type: Gtk.ShadowType): void
    set_show_all(show_all_workspaces: boolean): void
    set_wrap_on_scroll(wrap_on_scroll: boolean): void
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
    /* Virtual methods of Wnck.Pager */
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
    connect(sigName: "destroy", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Pager) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Pager, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Pager, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Pager) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Pager, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Pager, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "map", callback: (($obj: Pager) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Pager, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Pager, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Pager, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Pager, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Pager, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Pager, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Pager) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "show", callback: (($obj: Pager) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Pager, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Pager, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Pager) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Pager) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Pager) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pager_ConstructProps)
    _init (config?: Pager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pager
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screen {
    /* Fields of Wnck.Screen */
    parent_instance: GObject.Object
    priv: ScreenPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Screen */
    calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void
    change_workspace_count(count: number): void
    force_update(): void
    get_active_window(): Window
    get_active_workspace(): Workspace
    get_background_pixmap(): number
    get_height(): number
    get_number(): number
    get_previously_active_window(): Window
    get_showing_desktop(): boolean
    get_width(): number
    get_window_manager_name(): string
    get_windows(): Window[]
    get_windows_stacked(): Window[]
    get_workspace(workspace: number): Workspace
    get_workspace_count(): number
    get_workspaces(): Workspace[]
    move_viewport(x: number, y: number): void
    net_wm_supports(atom: string): boolean
    release_workspace_layout(current_token: number): void
    toggle_showing_desktop(show: boolean): void
    try_set_workspace_layout(current_token: number, rows: number, columns: number): number
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
    /* Virtual methods of Wnck.Screen */
    vfunc_active_window_changed(previous_window: Window): void
    vfunc_active_workspace_changed(previous_workspace: Workspace): void
    vfunc_application_closed(app: Application): void
    vfunc_application_opened(app: Application): void
    vfunc_background_changed(): void
    vfunc_class_group_closed(class_group: ClassGroup): void
    vfunc_class_group_opened(class_group: ClassGroup): void
    vfunc_showing_desktop_changed(): void
    vfunc_viewports_changed(): void
    vfunc_window_closed(window: Window): void
    vfunc_window_manager_changed(): void
    vfunc_window_opened(window: Window): void
    vfunc_window_stacking_changed(): void
    vfunc_workspace_created(space: Workspace): void
    vfunc_workspace_destroyed(space: Workspace): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Screen */
    connect(sigName: "active-window-changed", callback: (($obj: Screen, previously_active_window: Window) => void)): number
    connect_after(sigName: "active-window-changed", callback: (($obj: Screen, previously_active_window: Window) => void)): number
    emit(sigName: "active-window-changed", previously_active_window: Window): void
    connect(sigName: "active-workspace-changed", callback: (($obj: Screen, previously_active_space: Workspace) => void)): number
    connect_after(sigName: "active-workspace-changed", callback: (($obj: Screen, previously_active_space: Workspace) => void)): number
    emit(sigName: "active-workspace-changed", previously_active_space: Workspace): void
    connect(sigName: "application-closed", callback: (($obj: Screen, app: Application) => void)): number
    connect_after(sigName: "application-closed", callback: (($obj: Screen, app: Application) => void)): number
    emit(sigName: "application-closed", app: Application): void
    connect(sigName: "application-opened", callback: (($obj: Screen, app: Application) => void)): number
    connect_after(sigName: "application-opened", callback: (($obj: Screen, app: Application) => void)): number
    emit(sigName: "application-opened", app: Application): void
    connect(sigName: "background-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "background-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "background-changed"): void
    connect(sigName: "class-group-closed", callback: (($obj: Screen, class_group: ClassGroup) => void)): number
    connect_after(sigName: "class-group-closed", callback: (($obj: Screen, class_group: ClassGroup) => void)): number
    emit(sigName: "class-group-closed", class_group: ClassGroup): void
    connect(sigName: "class-group-opened", callback: (($obj: Screen, class_group: ClassGroup) => void)): number
    connect_after(sigName: "class-group-opened", callback: (($obj: Screen, class_group: ClassGroup) => void)): number
    emit(sigName: "class-group-opened", class_group: ClassGroup): void
    connect(sigName: "showing-desktop-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "showing-desktop-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "showing-desktop-changed"): void
    connect(sigName: "viewports-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "viewports-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "viewports-changed"): void
    connect(sigName: "window-closed", callback: (($obj: Screen, window: Window) => void)): number
    connect_after(sigName: "window-closed", callback: (($obj: Screen, window: Window) => void)): number
    emit(sigName: "window-closed", window: Window): void
    connect(sigName: "window-manager-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    connect(sigName: "window-opened", callback: (($obj: Screen, window: Window) => void)): number
    connect_after(sigName: "window-opened", callback: (($obj: Screen, window: Window) => void)): number
    emit(sigName: "window-opened", window: Window): void
    connect(sigName: "window-stacking-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "window-stacking-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "window-stacking-changed"): void
    connect(sigName: "workspace-created", callback: (($obj: Screen, space: Workspace) => void)): number
    connect_after(sigName: "workspace-created", callback: (($obj: Screen, space: Workspace) => void)): number
    emit(sigName: "workspace-created", space: Workspace): void
    connect(sigName: "workspace-destroyed", callback: (($obj: Screen, space: Workspace) => void)): number
    connect_after(sigName: "workspace-destroyed", callback: (($obj: Screen, space: Workspace) => void)): number
    emit(sigName: "workspace-destroyed", space: Workspace): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static free_workspace_layout(layout: WorkspaceLayout): void
    static get(index: number): Screen
    static get_default(): Screen | null
    static get_for_root(root_window_id: number): Screen
    static $gtype: GObject.Type
}
export interface Selector_ConstructProps extends Gtk.MenuBar_ConstructProps {
}
export class Selector {
    /* Properties of Gtk.MenuBar */
    child_pack_direction: Gtk.PackDirection
    pack_direction: Gtk.PackDirection
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
    /* Fields of Wnck.Selector */
    parent_instance: Gtk.MenuBar
    priv: SelectorPrivate
    /* Fields of Gtk.MenuBar */
    menu_shell: Gtk.MenuShell
    /* Fields of Gtk.MenuShell */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.MenuBar */
    get_child_pack_direction(): Gtk.PackDirection
    get_pack_direction(): Gtk.PackDirection
    set_child_pack_direction(child_pack_dir: Gtk.PackDirection): void
    set_pack_direction(pack_dir: Gtk.PackDirection): void
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
    /* Virtual methods of Wnck.Selector */
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
    /* Signals of Gtk.MenuShell */
    connect(sigName: "activate-current", callback: (($obj: Selector, force_hide: boolean) => void)): number
    connect_after(sigName: "activate-current", callback: (($obj: Selector, force_hide: boolean) => void)): number
    emit(sigName: "activate-current", force_hide: boolean): void
    connect(sigName: "cancel", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: Selector) => void)): number
    emit(sigName: "cancel"): void
    connect(sigName: "cycle-focus", callback: (($obj: Selector, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "cycle-focus", callback: (($obj: Selector, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "cycle-focus", direction: Gtk.DirectionType): void
    connect(sigName: "deactivate", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Selector) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "insert", callback: (($obj: Selector, child: Gtk.Widget, position: number) => void)): number
    connect_after(sigName: "insert", callback: (($obj: Selector, child: Gtk.Widget, position: number) => void)): number
    emit(sigName: "insert", child: Gtk.Widget, position: number): void
    connect(sigName: "move-current", callback: (($obj: Selector, direction: Gtk.MenuDirectionType) => void)): number
    connect_after(sigName: "move-current", callback: (($obj: Selector, direction: Gtk.MenuDirectionType) => void)): number
    emit(sigName: "move-current", direction: Gtk.MenuDirectionType): void
    connect(sigName: "move-selected", callback: (($obj: Selector, distance: number) => boolean)): number
    connect_after(sigName: "move-selected", callback: (($obj: Selector, distance: number) => boolean)): number
    emit(sigName: "move-selected", distance: number): void
    connect(sigName: "selection-done", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "selection-done", callback: (($obj: Selector) => void)): number
    emit(sigName: "selection-done"): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Selector) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Selector, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Selector) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Selector, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Selector, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Selector) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Selector, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Selector, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "map", callback: (($obj: Selector) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Selector, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Selector, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Selector, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Selector, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Selector, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Selector, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Selector) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "show", callback: (($obj: Selector) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Selector, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Selector, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Selector) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Selector) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Selector) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child-pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::take-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Selector_ConstructProps)
    _init (config?: Selector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Selector
    static $gtype: GObject.Type
}
export interface Tasklist_ConstructProps extends Gtk.Container_ConstructProps {
}
export class Tasklist {
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
    /* Fields of Wnck.Tasklist */
    parent_instance: Gtk.Container
    priv: TasklistPrivate
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Tasklist */
    get_scroll_enabled(): boolean
    get_size_hint_list(n_elements: number): number
    set_button_relief(relief: Gtk.ReliefStyle): void
    set_grouping(grouping: TasklistGroupingType): void
    set_grouping_limit(limit: number): void
    set_include_all_workspaces(include_all_workspaces: boolean): void
    set_middle_click_close(middle_click_close: boolean): void
    set_orientation(orient: Gtk.Orientation): void
    set_scroll_enabled(scroll_enabled: boolean): void
    set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void
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
    /* Virtual methods of Wnck.Tasklist */
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
    /* Signals of Wnck.Tasklist */
    connect(sigName: "task-enter-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    connect_after(sigName: "task-enter-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    emit(sigName: "task-enter-notify", windows?: object | null): void
    connect(sigName: "task-leave-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    connect_after(sigName: "task-leave-notify", callback: (($obj: Tasklist, windows?: object | null) => void)): number
    emit(sigName: "task-leave-notify", windows?: object | null): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Tasklist, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Tasklist, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Tasklist, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Tasklist, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Tasklist, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "map", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Tasklist, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Tasklist, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Tasklist, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Tasklist, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Tasklist, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Tasklist, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "show", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Tasklist, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Tasklist, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Tasklist) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Tasklist) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::border-width", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tasklist_ConstructProps)
    _init (config?: Tasklist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tasklist
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends GObject.Object_ConstructProps {
}
export class Window {
    /* Fields of Wnck.Window */
    parent_instance: GObject.Object
    priv: WindowPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Window */
    activate(timestamp: number): void
    activate_transient(timestamp: number): void
    close(timestamp: number): void
    get_actions(): WindowActions
    get_application(): Application
    get_class_group(): ClassGroup
    get_class_group_name(): string
    get_class_instance_name(): string
    get_client_window_geometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    get_geometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    get_group_leader(): number
    get_icon(): GdkPixbuf.Pixbuf
    get_icon_is_fallback(): boolean
    get_icon_name(): string
    get_mini_icon(): GdkPixbuf.Pixbuf
    get_name(): string
    get_pid(): number
    get_role(): string
    get_screen(): Screen
    get_session_id(): string
    get_session_id_utf8(): string
    get_sort_order(): number
    get_state(): WindowState
    get_transient(): Window
    get_window_type(): WindowType
    get_workspace(): Workspace
    get_xid(): number
    has_icon_name(): boolean
    has_name(): boolean
    is_above(): boolean
    is_active(): boolean
    is_below(): boolean
    is_fullscreen(): boolean
    is_in_viewport(workspace: Workspace): boolean
    is_maximized(): boolean
    is_maximized_horizontally(): boolean
    is_maximized_vertically(): boolean
    is_minimized(): boolean
    is_most_recently_activated(): boolean
    is_on_workspace(workspace: Workspace): boolean
    is_pinned(): boolean
    is_shaded(): boolean
    is_skip_pager(): boolean
    is_skip_tasklist(): boolean
    is_sticky(): boolean
    is_visible_on_workspace(workspace: Workspace): boolean
    keyboard_move(): void
    keyboard_size(): void
    make_above(): void
    make_below(): void
    maximize(): void
    maximize_horizontally(): void
    maximize_vertically(): void
    minimize(): void
    move_to_workspace(space: Workspace): void
    needs_attention(): boolean
    or_transient_needs_attention(): boolean
    pin(): void
    set_fullscreen(fullscreen: boolean): void
    set_geometry(gravity: WindowGravity, geometry_mask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void
    set_icon_geometry(x: number, y: number, width: number, height: number): void
    set_skip_pager(skip: boolean): void
    set_skip_tasklist(skip: boolean): void
    set_sort_order(order: number): void
    set_window_type(wintype: WindowType): void
    shade(): void
    stick(): void
    transient_is_most_recently_activated(): boolean
    unmake_above(): void
    unmake_below(): void
    unmaximize(): void
    unmaximize_horizontally(): void
    unmaximize_vertically(): void
    unminimize(timestamp: number): void
    unpin(): void
    unshade(): void
    unstick(): void
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
    /* Virtual methods of Wnck.Window */
    vfunc_actions_changed(changed_mask: WindowActions, new_actions: WindowActions): void
    vfunc_class_changed(): void
    vfunc_geometry_changed(): void
    vfunc_icon_changed(): void
    vfunc_name_changed(): void
    vfunc_role_changed(): void
    vfunc_state_changed(changed_mask: WindowState, new_state: WindowState): void
    vfunc_type_changed(): void
    vfunc_workspace_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Window */
    connect(sigName: "actions-changed", callback: (($obj: Window, changed_mask: WindowActions, new_state: WindowActions) => void)): number
    connect_after(sigName: "actions-changed", callback: (($obj: Window, changed_mask: WindowActions, new_state: WindowActions) => void)): number
    emit(sigName: "actions-changed", changed_mask: WindowActions, new_state: WindowActions): void
    connect(sigName: "class-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "class-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "class-changed"): void
    connect(sigName: "geometry-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "geometry-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "geometry-changed"): void
    connect(sigName: "icon-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "icon-changed"): void
    connect(sigName: "name-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "name-changed"): void
    connect(sigName: "role-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "role-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "role-changed"): void
    connect(sigName: "state-changed", callback: (($obj: Window, changed_mask: WindowState, new_state: WindowState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Window, changed_mask: WindowState, new_state: WindowState) => void)): number
    emit(sigName: "state-changed", changed_mask: WindowState, new_state: WindowState): void
    connect(sigName: "type-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "type-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "type-changed"): void
    connect(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "workspace-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "workspace-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(xwindow: number): Window
    static $gtype: GObject.Type
}
export interface Workspace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Workspace {
    /* Fields of Wnck.Workspace */
    parent_instance: GObject.Object
    priv: WorkspacePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Wnck.Workspace */
    activate(timestamp: number): void
    change_name(name: string): void
    get_height(): number
    get_layout_column(): number
    get_layout_row(): number
    get_name(): string
    get_neighbor(direction: MotionDirection): Workspace
    get_number(): number
    get_screen(): Screen
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    is_virtual(): boolean
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
    /* Virtual methods of Wnck.Workspace */
    vfunc_name_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Wnck.Workspace */
    connect(sigName: "name-changed", callback: (($obj: Workspace) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Workspace) => void)): number
    emit(sigName: "name-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Workspace_ConstructProps)
    _init (config?: Workspace_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class ActionMenuClass {
    /* Fields of Wnck.ActionMenuClass */
    parent_class: Gtk.MenuClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class ActionMenuPrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Wnck.ApplicationClass */
    parent_class: GObject.ObjectClass
    name_changed: (app: Application) => void
    icon_changed: (app: Application) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class ClassGroupClass {
    /* Fields of Wnck.ClassGroupClass */
    parent_class: GObject.ObjectClass
    name_changed: (group: ClassGroup) => void
    icon_changed: (group: ClassGroup) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class ClassGroupPrivate {
    static name: string
}
export abstract class PagerClass {
    /* Fields of Wnck.PagerClass */
    parent_class: Gtk.ContainerClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class PagerPrivate {
    static name: string
}
export class ResourceUsage {
    /* Fields of Wnck.ResourceUsage */
    total_bytes_estimate: number
    pixmap_bytes: number
    n_pixmaps: number
    n_windows: number
    n_gcs: number
    n_pictures: number
    n_glyphsets: number
    n_fonts: number
    n_colormap_entries: number
    n_passive_grabs: number
    n_cursors: number
    n_other: number
    static name: string
}
export abstract class ScreenClass {
    /* Fields of Wnck.ScreenClass */
    parent_class: GObject.ObjectClass
    active_window_changed: (screen: Screen, previous_window: Window) => void
    active_workspace_changed: (screen: Screen, previous_workspace: Workspace) => void
    window_stacking_changed: (screen: Screen) => void
    window_opened: (screen: Screen, window: Window) => void
    window_closed: (screen: Screen, window: Window) => void
    workspace_created: (screen: Screen, space: Workspace) => void
    workspace_destroyed: (screen: Screen, space: Workspace) => void
    application_opened: (screen: Screen, app: Application) => void
    application_closed: (screen: Screen, app: Application) => void
    background_changed: (screen: Screen) => void
    class_group_opened: (screen: Screen, class_group: ClassGroup) => void
    class_group_closed: (screen: Screen, class_group: ClassGroup) => void
    showing_desktop_changed: (screen: Screen) => void
    viewports_changed: (screen: Screen) => void
    window_manager_changed: (screen: Screen) => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    pad5: () => void
    pad6: () => void
    static name: string
}
export class ScreenPrivate {
    static name: string
}
export abstract class SelectorClass {
    /* Fields of Wnck.SelectorClass */
    parent_class: Gtk.MenuBarClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class SelectorPrivate {
    static name: string
}
export abstract class TasklistClass {
    /* Fields of Wnck.TasklistClass */
    parent_class: Gtk.ContainerClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class TasklistPrivate {
    static name: string
}
export abstract class WindowClass {
    /* Fields of Wnck.WindowClass */
    parent_class: GObject.ObjectClass
    name_changed: (window: Window) => void
    state_changed: (window: Window, changed_mask: WindowState, new_state: WindowState) => void
    workspace_changed: (window: Window) => void
    icon_changed: (window: Window) => void
    actions_changed: (window: Window, changed_mask: WindowActions, new_actions: WindowActions) => void
    geometry_changed: (window: Window) => void
    class_changed: (window: Window) => void
    role_changed: (window: Window) => void
    type_changed: (window: Window) => void
    pad1: () => void
    static name: string
}
export class WindowPrivate {
    static name: string
}
export abstract class WorkspaceClass {
    /* Fields of Wnck.WorkspaceClass */
    parent_class: GObject.ObjectClass
    name_changed: (space: Workspace) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    static name: string
}
export class WorkspaceLayout {
    /* Fields of Wnck.WorkspaceLayout */
    rows: number
    cols: number
    grid: number
    grid_area: number
    current_row: number
    current_col: number
    static name: string
}
export class WorkspacePrivate {
    static name: string
}