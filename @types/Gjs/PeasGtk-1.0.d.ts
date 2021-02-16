/**
 * PeasGtk-1.0
 */

import * as Gjs from './Gjs';
import * as Peas from './Peas-1.0';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';
import * as GIRepository from './GIRepository-2.0';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as Atk from './Atk-1.0';

export class Configurable {
    /* Methods of PeasGtk.Configurable */
    create_configure_widget(): Gtk.Widget
    /* Virtual methods of PeasGtk.Configurable */
    vfunc_create_configure_widget(): Gtk.Widget
    static name: string
}
export interface PluginManager_ConstructProps extends Gtk.Box_ConstructProps {
    engine?: Peas.Engine
    view?: PluginManagerView
    orientation?: Gtk.Orientation
}
export class PluginManager {
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
    /* Fields of PeasGtk.PluginManager */
    box: Gtk.Box
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of PeasGtk.PluginManager */
    get_view(): Gtk.Widget
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
    /* Virtual methods of PeasGtk.PluginManager */
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
    connect(sigName: "destroy", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: PluginManager, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PluginManager, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: PluginManager, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PluginManager, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "map", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: PluginManager, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PluginManager, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: PluginManager, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PluginManager, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: PluginManager, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PluginManager, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "show", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: PluginManager, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PluginManager, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: PluginManager) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PluginManager) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baseline-position", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: PluginManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginManager_ConstructProps)
    _init (config?: PluginManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine?: Peas.Engine | null): PluginManager
    static new(orientation: Gtk.Orientation, spacing: number): PluginManager
    static $gtype: GObject.Type
}
export interface PluginManagerView_ConstructProps extends Gtk.TreeView_ConstructProps {
    engine?: Peas.Engine
    show_builtin?: boolean
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class PluginManagerView {
    /* Properties of PeasGtk.PluginManagerView */
    show_builtin: boolean
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
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of Gtk.TreeView */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of PeasGtk.PluginManagerView */
    get_selected_plugin(): Peas.PluginInfo
    get_show_builtin(): boolean
    set_selected_plugin(info: Peas.PluginInfo): void
    set_show_builtin(show_builtin: boolean): void
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
    /* Virtual methods of PeasGtk.PluginManagerView */
    vfunc_populate_popup(menu: Gtk.Menu): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
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
    /* Signals of PeasGtk.PluginManagerView */
    connect(sigName: "populate-popup", callback: (($obj: PluginManagerView, menu: Gtk.Menu) => void)): number
    connect_after(sigName: "populate-popup", callback: (($obj: PluginManagerView, menu: Gtk.Menu) => void)): number
    emit(sigName: "populate-popup", menu: Gtk.Menu): void
    /* Signals of Gtk.TreeView */
    connect(sigName: "columns-changed", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "columns-changed", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "columns-changed"): void
    connect(sigName: "cursor-changed", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "cursor-changed", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "cursor-changed"): void
    connect(sigName: "expand-collapse-cursor-row", callback: (($obj: PluginManagerView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    connect_after(sigName: "expand-collapse-cursor-row", callback: (($obj: PluginManagerView, object: boolean, p0: boolean, p1: boolean) => boolean)): number
    emit(sigName: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void
    connect(sigName: "move-cursor", callback: (($obj: PluginManagerView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    connect_after(sigName: "move-cursor", callback: (($obj: PluginManagerView, step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean) => boolean)): number
    emit(sigName: "move-cursor", step: Gtk.MovementStep, direction: number, extend: boolean, modify: boolean): void
    connect(sigName: "row-activated", callback: (($obj: PluginManagerView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    connect_after(sigName: "row-activated", callback: (($obj: PluginManagerView, path: Gtk.TreePath, column: Gtk.TreeViewColumn) => void)): number
    emit(sigName: "row-activated", path: Gtk.TreePath, column: Gtk.TreeViewColumn): void
    connect(sigName: "row-collapsed", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-collapsed", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-collapsed", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "row-expanded", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    connect_after(sigName: "row-expanded", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => void)): number
    emit(sigName: "row-expanded", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "select-all", callback: (($obj: PluginManagerView) => boolean)): number
    connect_after(sigName: "select-all", callback: (($obj: PluginManagerView) => boolean)): number
    emit(sigName: "select-all"): void
    connect(sigName: "select-cursor-parent", callback: (($obj: PluginManagerView) => boolean)): number
    connect_after(sigName: "select-cursor-parent", callback: (($obj: PluginManagerView) => boolean)): number
    emit(sigName: "select-cursor-parent"): void
    connect(sigName: "select-cursor-row", callback: (($obj: PluginManagerView, object: boolean) => boolean)): number
    connect_after(sigName: "select-cursor-row", callback: (($obj: PluginManagerView, object: boolean) => boolean)): number
    emit(sigName: "select-cursor-row", object: boolean): void
    connect(sigName: "start-interactive-search", callback: (($obj: PluginManagerView) => boolean)): number
    connect_after(sigName: "start-interactive-search", callback: (($obj: PluginManagerView) => boolean)): number
    emit(sigName: "start-interactive-search"): void
    connect(sigName: "test-collapse-row", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-collapse-row", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-collapse-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "test-expand-row", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    connect_after(sigName: "test-expand-row", callback: (($obj: PluginManagerView, iter: Gtk.TreeIter, path: Gtk.TreePath) => boolean)): number
    emit(sigName: "test-expand-row", iter: Gtk.TreeIter, path: Gtk.TreePath): void
    connect(sigName: "toggle-cursor-row", callback: (($obj: PluginManagerView) => boolean)): number
    connect_after(sigName: "toggle-cursor-row", callback: (($obj: PluginManagerView) => boolean)): number
    emit(sigName: "toggle-cursor-row"): void
    connect(sigName: "unselect-all", callback: (($obj: PluginManagerView) => boolean)): number
    connect_after(sigName: "unselect-all", callback: (($obj: PluginManagerView) => boolean)): number
    emit(sigName: "unselect-all"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: PluginManagerView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: PluginManagerView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: PluginManagerView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: PluginManagerView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "map", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: PluginManagerView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: PluginManagerView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: PluginManagerView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: PluginManagerView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: PluginManagerView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: PluginManagerView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "show", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: PluginManagerView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: PluginManagerView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: PluginManagerView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PluginManagerView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-builtin", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-builtin", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-search", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expander-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-clickable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers-visible", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-expand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hover-selection", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::level-indentation", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reorderable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rubber-banding", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-expanders", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: PluginManagerView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginManagerView_ConstructProps)
    _init (config?: PluginManagerView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine?: Peas.Engine | null): PluginManagerView
    static new(): PluginManagerView
    static $gtype: GObject.Type
}
export abstract class ConfigurableInterface {
    /* Fields of PeasGtk.ConfigurableInterface */
    g_iface: GObject.TypeInterface
    create_configure_widget: (configurable: Configurable) => Gtk.Widget
    static name: string
}
export abstract class PluginManagerClass {
    /* Fields of PeasGtk.PluginManagerClass */
    parent_class: Gtk.BoxClass
    static name: string
}
export class PluginManagerPrivate {
    static name: string
}
export abstract class PluginManagerViewClass {
    /* Fields of PeasGtk.PluginManagerViewClass */
    parent_class: Gtk.TreeViewClass
    populate_popup: (view: PluginManagerView, menu: Gtk.Menu) => void
    static name: string
}
export class PluginManagerViewPrivate {
    static name: string
}