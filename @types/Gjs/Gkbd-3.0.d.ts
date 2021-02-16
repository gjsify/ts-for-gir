/**
 * Gkbd-3.0
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as Xkl from './Xkl-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gtk from './Gtk-3.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export enum KeyboardDrawingGroupLevelPosition {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMLEFT,
    BOTTOMRIGHT,
    TOTAL,
    FIRST,
    LAST,
}
export enum KeyboardDrawingItemType {
    INVALID,
    KEY,
    KEY_EXTRA,
    DOODAD,
}
export const DESKTOP_SCHEMA: string
export const KEYBOARD_DRAWING_H: number
export const KEYBOARD_SCHEMA: string
export function install_glib_log_appender(): void
export function keyboard_config_add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[]
export function keyboard_config_format_full_description(layout_descr: string, variant_descr: string): string
export function keyboard_config_get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean
export function keyboard_config_merge_items(parent: string, child: string): string
export function keyboard_config_split_items(merged: string, parent: string, child: string): boolean
export function preview_load_position(): Gdk.Rectangle
export function preview_save_position(rect: Gdk.Rectangle): void
export function strv_append(arr: string, element: string): string[]
export function strv_behead(arr: string): void
export function strv_remove(arr: string, element: string): boolean
export interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}
export class Configuration {
    /* Fields of Gkbd.Configuration */
    parent: GObject.Object
    priv: ConfigurationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gkbd.Configuration */
    append_object(obj: GObject.Object): void
    extract_layout_name(group: number): string
    free_images(images: GdkPixbuf.Pixbuf[]): void
    get_all_objects(): GObject.Object[]
    get_caps_lock_state(): boolean
    get_current_group(): number
    get_current_tooltip(): string
    get_group_name(group: number): string
    get_group_names(): string[]
    get_image_filename(group: number): string
    get_indicator_config(): IndicatorConfig
    get_keyboard_config(): KeyboardConfig
    get_num_lock_state(): boolean
    get_scroll_lock_state(): boolean
    get_short_group_names(): string[]
    get_xkl_engine(): Xkl.Engine
    if_any_object_exists(): boolean
    if_flags_shown(): boolean
    load_images(): GdkPixbuf.Pixbuf[]
    lock_group(group: number): void
    lock_next_group(): void
    remove_object(obj: GObject.Object): void
    start_listen(): void
    stop_listen(): void
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
    /* Signals of Gkbd.Configuration */
    connect(sigName: "changed", callback: (($obj: Configuration) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Configuration) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "group-changed", callback: (($obj: Configuration, object: number) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Configuration, object: number) => void)): number
    emit(sigName: "group-changed", object: number): void
    connect(sigName: "indicators-changed", callback: (($obj: Configuration) => void)): number
    connect_after(sigName: "indicators-changed", callback: (($obj: Configuration) => void)): number
    emit(sigName: "indicators-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Configuration_ConstructProps)
    _init (config?: Configuration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create_label_title(group: number, ln2cnt_map: GLib.HashTable, layout_name: string): string
    static get(): Configuration
    static $gtype: GObject.Type
}
export interface Indicator_ConstructProps extends Gtk.Notebook_ConstructProps {
}
export class Indicator {
    /* Properties of Gtk.Notebook */
    enable_popup: boolean
    group_name: string
    page: number
    readonly pages: Gio.ListModel
    scrollable: boolean
    show_border: boolean
    show_tabs: boolean
    tab_pos: Gtk.PositionType
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
    /* Fields of Gkbd.Indicator */
    priv: IndicatorPrivate
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gkbd.Indicator */
    reinit_ui(): void
    set_angle(angle: number): void
    set_parent_tooltips(ifset: boolean): void
    /* Methods of Gtk.Notebook */
    append_page(child: Gtk.Widget, tab_label?: Gtk.Widget | null): number
    append_page_menu(child: Gtk.Widget, tab_label?: Gtk.Widget | null, menu_label?: Gtk.Widget | null): number
    detach_tab(child: Gtk.Widget): void
    get_action_widget(pack_type: Gtk.PackType): Gtk.Widget | null
    get_current_page(): number
    get_group_name(): string | null
    get_menu_label(child: Gtk.Widget): Gtk.Widget | null
    get_menu_label_text(child: Gtk.Widget): string | null
    get_n_pages(): number
    get_nth_page(page_num: number): Gtk.Widget | null
    get_page(child: Gtk.Widget): Gtk.NotebookPage
    get_pages(): Gio.ListModel
    get_scrollable(): boolean
    get_show_border(): boolean
    get_show_tabs(): boolean
    get_tab_detachable(child: Gtk.Widget): boolean
    get_tab_label(child: Gtk.Widget): Gtk.Widget | null
    get_tab_label_text(child: Gtk.Widget): string | null
    get_tab_pos(): Gtk.PositionType
    get_tab_reorderable(child: Gtk.Widget): boolean
    insert_page(child: Gtk.Widget, tab_label: Gtk.Widget | null, position: number): number
    insert_page_menu(child: Gtk.Widget, tab_label: Gtk.Widget | null, menu_label: Gtk.Widget | null, position: number): number
    next_page(): void
    page_num(child: Gtk.Widget): number
    popup_disable(): void
    popup_enable(): void
    prepend_page(child: Gtk.Widget, tab_label?: Gtk.Widget | null): number
    prepend_page_menu(child: Gtk.Widget, tab_label?: Gtk.Widget | null, menu_label?: Gtk.Widget | null): number
    prev_page(): void
    remove_page(page_num: number): void
    reorder_child(child: Gtk.Widget, position: number): void
    set_action_widget(widget: Gtk.Widget, pack_type: Gtk.PackType): void
    set_current_page(page_num: number): void
    set_group_name(group_name?: string | null): void
    set_menu_label(child: Gtk.Widget, menu_label?: Gtk.Widget | null): void
    set_menu_label_text(child: Gtk.Widget, menu_text: string): void
    set_scrollable(scrollable: boolean): void
    set_show_border(show_border: boolean): void
    set_show_tabs(show_tabs: boolean): void
    set_tab_detachable(child: Gtk.Widget, detachable: boolean): void
    set_tab_label(child: Gtk.Widget, tab_label?: Gtk.Widget | null): void
    set_tab_label_text(child: Gtk.Widget, tab_text: string): void
    set_tab_pos(pos: Gtk.PositionType): void
    set_tab_reorderable(child: Gtk.Widget, reorderable: boolean): void
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
    /* Virtual methods of Gkbd.Indicator */
    vfunc_reinit_ui(): void
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
    /* Signals of Gkbd.Indicator */
    connect(sigName: "reinit-ui", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "reinit-ui", callback: (($obj: Indicator) => void)): number
    emit(sigName: "reinit-ui"): void
    /* Signals of Gtk.Notebook */
    connect(sigName: "change-current-page", callback: (($obj: Indicator, object: number) => boolean)): number
    connect_after(sigName: "change-current-page", callback: (($obj: Indicator, object: number) => boolean)): number
    emit(sigName: "change-current-page", object: number): void
    connect(sigName: "create-window", callback: (($obj: Indicator, page: Gtk.Widget) => Gtk.Notebook)): number
    connect_after(sigName: "create-window", callback: (($obj: Indicator, page: Gtk.Widget) => Gtk.Notebook)): number
    emit(sigName: "create-window", page: Gtk.Widget): void
    connect(sigName: "focus-tab", callback: (($obj: Indicator, object: Gtk.NotebookTab) => boolean)): number
    connect_after(sigName: "focus-tab", callback: (($obj: Indicator, object: Gtk.NotebookTab) => boolean)): number
    emit(sigName: "focus-tab", object: Gtk.NotebookTab): void
    connect(sigName: "move-focus-out", callback: (($obj: Indicator, object: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus-out", callback: (($obj: Indicator, object: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus-out", object: Gtk.DirectionType): void
    connect(sigName: "page-added", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    connect_after(sigName: "page-added", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    emit(sigName: "page-added", child: Gtk.Widget, page_num: number): void
    connect(sigName: "page-removed", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    connect_after(sigName: "page-removed", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    emit(sigName: "page-removed", child: Gtk.Widget, page_num: number): void
    connect(sigName: "page-reordered", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    connect_after(sigName: "page-reordered", callback: (($obj: Indicator, child: Gtk.Widget, page_num: number) => void)): number
    emit(sigName: "page-reordered", child: Gtk.Widget, page_num: number): void
    connect(sigName: "reorder-tab", callback: (($obj: Indicator, object: Gtk.DirectionType, p0: boolean) => boolean)): number
    connect_after(sigName: "reorder-tab", callback: (($obj: Indicator, object: Gtk.DirectionType, p0: boolean) => boolean)): number
    emit(sigName: "reorder-tab", object: Gtk.DirectionType, p0: boolean): void
    connect(sigName: "select-page", callback: (($obj: Indicator, object: boolean) => boolean)): number
    connect_after(sigName: "select-page", callback: (($obj: Indicator, object: boolean) => boolean)): number
    emit(sigName: "select-page", object: boolean): void
    connect(sigName: "switch-page", callback: (($obj: Indicator, page: Gtk.Widget, page_num: number) => void)): number
    connect_after(sigName: "switch-page", callback: (($obj: Indicator, page: Gtk.Widget, page_num: number) => void)): number
    emit(sigName: "switch-page", page: Gtk.Widget, page_num: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Indicator) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Indicator, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Indicator, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Indicator) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Indicator, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Indicator, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "map", callback: (($obj: Indicator) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Indicator, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Indicator, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Indicator, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Indicator, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Indicator, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Indicator, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Indicator) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "show", callback: (($obj: Indicator) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Indicator, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Indicator, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Indicator) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Indicator) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-popup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pages", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pages", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scrollable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-border", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-tabs", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tab-pos", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Indicator_ConstructProps)
    _init (config?: Indicator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Indicator
    static get_group_names(): string[]
    static get_image_filename(group: number): string
    static get_max_width_height_ratio(): number
    static get_xkl_engine(): Xkl.Engine
    static $gtype: GObject.Type
}
export interface KeyboardDrawing_ConstructProps extends Gtk.DrawingArea_ConstructProps {
}
export class KeyboardDrawing {
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
    /* Methods of Gkbd.KeyboardDrawing */
    get_compat(): string
    get_geometry(): string
    get_keycodes(): string
    get_symbols(): string
    get_types(): string
    print(parent_window: Gtk.Window, description: string): void
    render(cr: cairo.Context, layout: Pango.Layout, x: number, y: number, width: number, height: number, dpi_x: number, dpi_y: number): boolean
    set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void
    set_layout(id: string): void
    set_track_config(enable: boolean): void
    set_track_modifiers(enable: boolean): void
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
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of Gkbd.KeyboardDrawing */
    vfunc_bad_keycode(keycode: number): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
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
    /* Signals of Gkbd.KeyboardDrawing */
    connect(sigName: "bad-keycode", callback: (($obj: KeyboardDrawing, object: number) => void)): number
    connect_after(sigName: "bad-keycode", callback: (($obj: KeyboardDrawing, object: number) => void)): number
    emit(sigName: "bad-keycode", object: number): void
    /* Signals of Gtk.DrawingArea */
    connect(sigName: "resize", callback: (($obj: KeyboardDrawing, width: number, height: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: KeyboardDrawing, width: number, height: number) => void)): number
    emit(sigName: "resize", width: number, height: number): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: KeyboardDrawing, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: KeyboardDrawing, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "hide", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: KeyboardDrawing, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: KeyboardDrawing, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "map", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: KeyboardDrawing, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: KeyboardDrawing, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: KeyboardDrawing, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: KeyboardDrawing, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: KeyboardDrawing, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: KeyboardDrawing, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "realize", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "show", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: KeyboardDrawing, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: KeyboardDrawing, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: KeyboardDrawing) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: KeyboardDrawing) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-height", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-height", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-width", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-width", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyboardDrawing_ConstructProps)
    _init (config?: KeyboardDrawing_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dialog_new(): KeyboardDrawing
    static new(): KeyboardDrawing
    static dialog_set_group(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void
    static dialog_set_layout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void
    static $gtype: GObject.Type
}
export interface Status_ConstructProps extends Gtk.StatusIcon_ConstructProps {
}
export class Status {
    /* Properties of Gtk.StatusIcon */
    readonly embedded: boolean
    file: string
    gicon: Gio.Icon
    has_tooltip: boolean
    icon_name: string
    readonly orientation: Gtk.Orientation
    pixbuf: GdkPixbuf.Pixbuf
    screen: Gdk.Screen
    readonly size: number
    stock: string
    readonly storage_type: Gtk.ImageType
    title: string
    tooltip_markup: string
    tooltip_text: string
    visible: boolean
    /* Fields of Gkbd.Status */
    parent: Gtk.StatusIcon
    priv: StatusPrivate
    /* Fields of Gtk.StatusIcon */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gkbd.Status */
    reinit_ui(): void
    /* Methods of Gtk.StatusIcon */
    get_geometry(): [ /* returnType */ boolean, /* screen */ Gdk.Screen | null, /* area */ Gdk.Rectangle | null, /* orientation */ Gtk.Orientation | null ]
    get_gicon(): Gio.Icon | null
    get_has_tooltip(): boolean
    get_icon_name(): string | null
    get_pixbuf(): GdkPixbuf.Pixbuf | null
    get_screen(): Gdk.Screen
    get_size(): number
    get_stock(): string | null
    get_storage_type(): Gtk.ImageType
    get_title(): string
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_visible(): boolean
    get_x11_window_id(): number
    is_embedded(): boolean
    set_from_file(filename: string): void
    set_from_gicon(icon: Gio.Icon): void
    set_from_icon_name(icon_name: string): void
    set_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    set_from_stock(stock_id: string): void
    set_has_tooltip(has_tooltip: boolean): void
    set_name(name: string): void
    set_screen(screen: Gdk.Screen): void
    set_title(title: string): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text: string): void
    set_visible(visible: boolean): void
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
    /* Virtual methods of Gtk.StatusIcon */
    vfunc_activate(): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_popup_menu(button: number, activate_time: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_size_changed(size: number): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.StatusIcon */
    connect(sigName: "activate", callback: (($obj: Status) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Status) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "button-press-event", callback: (($obj: Status, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Status, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Status, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Status, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "popup-menu", callback: (($obj: Status, button: number, activate_time: number) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Status, button: number, activate_time: number) => void)): number
    emit(sigName: "popup-menu", button: number, activate_time: number): void
    connect(sigName: "query-tooltip", callback: (($obj: Status, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Status, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: Status, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Status, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "size-changed", callback: (($obj: Status, size: number) => boolean)): number
    connect_after(sigName: "size-changed", callback: (($obj: Status, size: number) => boolean)): number
    emit(sigName: "size-changed", size: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::embedded", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gicon", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stock", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storage-type", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-type", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Status_ConstructProps)
    _init (config?: Status_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Status
    static get_group_names(): string[]
    static get_image_filename(group: number): string
    static get_xkl_engine(): Xkl.Engine
    static $gtype: GObject.Type
}
export abstract class ConfigurationClass {
    /* Fields of Gkbd.ConfigurationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ConfigurationPrivate {
    static name: string
}
export class DesktopConfig {
    /* Fields of Gkbd.DesktopConfig */
    default_group: number
    group_per_app: boolean
    handle_indicators: boolean
    layout_names_as_group_names: boolean
    load_extra_items: boolean
    settings: Gio.Settings
    config_listener_id: number
    engine: Xkl.Engine
    /* Methods of Gkbd.DesktopConfig */
    activate(): boolean
    init(engine: Xkl.Engine): void
    load(): void
    load_group_descriptions(registry: Xkl.ConfigRegistry, layout_ids: string, variant_ids: string, short_group_names: string, full_group_names: string): boolean
    lock_next_group(): void
    lock_prev_group(): void
    restore_group(): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
    static name: string
}
export abstract class IndicatorClass {
    /* Fields of Gkbd.IndicatorClass */
    parent_class: Gtk.NotebookClass
    reinit_ui: (gki: Indicator) => void
    static name: string
}
export class IndicatorConfig {
    /* Fields of Gkbd.IndicatorConfig */
    secondary_groups_mask: number
    show_flags: boolean
    font_family: string
    font_size: number
    foreground_color: string
    background_color: string
    settings: Gio.Settings
    image_filenames: object[]
    icon_theme: Gtk.IconTheme
    config_listener_id: number
    engine: Xkl.Engine
    /* Methods of Gkbd.IndicatorConfig */
    activate(): void
    free_image_filenames(): void
    get_fg_color_for_widget(widget: Gtk.Widget): string
    get_font_for_widget(widget: Gtk.Widget, font_family: string, font_size: number): void
    get_images_file(kbd_config: KeyboardConfig, group: number): string
    init(engine: Xkl.Engine): void
    load(): void
    load_image_filenames(kbd_config: KeyboardConfig): void
    refresh_style(): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
    static name: string
}
export class IndicatorPrivate {
    static name: string
}
export class KeyboardConfig {
    /* Fields of Gkbd.KeyboardConfig */
    model: string
    layouts_variants: string
    options: string
    settings: Gio.Settings
    config_listener_id: number
    engine: Xkl.Engine
    /* Methods of Gkbd.KeyboardConfig */
    activate(): boolean
    equals(kbd_config2: KeyboardConfig): boolean
    init(engine: Xkl.Engine): void
    load(kbd_config_default: KeyboardConfig): void
    load_from_x_current(buf: Xkl.ConfigRec): void
    load_from_x_initial(buf: Xkl.ConfigRec): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[]
    static format_full_description(layout_descr: string, variant_descr: string): string
    static get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean
    static merge_items(parent: string, child: string): string
    static split_items(merged: string, parent: string, child: string): boolean
}
export abstract class KeyboardDrawingClass {
    /* Fields of Gkbd.KeyboardDrawingClass */
    parent_class: Gtk.DrawingAreaClass
    bad_keycode: (drawing: KeyboardDrawing, keycode: number) => void
    static name: string
}
export class KeyboardDrawingDoodad {
    static name: string
}
export class KeyboardDrawingGroupLevel {
    /* Fields of Gkbd.KeyboardDrawingGroupLevel */
    group: number
    level: number
    static name: string
}
export class KeyboardDrawingItem {
    static name: string
}
export class KeyboardDrawingKey {
    static name: string
}
export class KeyboardDrawingRenderContext {
    /* Fields of Gkbd.KeyboardDrawingRenderContext */
    cr: cairo.Context
    angle: number
    layout: Pango.Layout
    font_desc: Pango.FontDescription
    scale_numerator: number
    scale_denominator: number
    dark_color: Gdk.RGBA
    static name: string
}
export abstract class StatusClass {
    /* Fields of Gkbd.StatusClass */
    parent_class: Gtk.NotebookClass
    static name: string
}
export class StatusPrivate {
    static name: string
}