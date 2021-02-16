/**
 * TimezoneMap-1.0
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Json from './Json-1.0';
import * as Gio from './Gio-2.0';
import * as Gtk from './Gtk-3.0';
import * as Gdk from './Gdk-3.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export const TIMEZONE_COMPLETION_ADMIN1: number
export const TIMEZONE_COMPLETION_COUNTRY: number
export const TIMEZONE_COMPLETION_LAST: number
export const TIMEZONE_COMPLETION_LATITUDE: number
export const TIMEZONE_COMPLETION_LONGITUDE: number
export const TIMEZONE_COMPLETION_NAME: number
export const TIMEZONE_COMPLETION_ZONE: number
export interface TimezoneCompletion_ConstructProps extends Gtk.EntryCompletion_ConstructProps {
}
export class TimezoneCompletion {
    /* Properties of Gtk.EntryCompletion */
    inline_completion: boolean
    inline_selection: boolean
    minimum_key_length: number
    model: Gtk.TreeModel
    popup_completion: boolean
    popup_set_width: boolean
    popup_single_match: boolean
    text_column: number
    /* Fields of TimezoneMap.TimezoneCompletion */
    parent: Gtk.EntryCompletion
    priv: TimezoneCompletionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TimezoneMap.TimezoneCompletion */
    watch_entry(entry: Gtk.Entry): void
    /* Methods of Gtk.EntryCompletion */
    complete(): void
    compute_prefix(key: string): string | null
    get_completion_prefix(): string | null
    get_entry(): Gtk.Widget
    get_inline_completion(): boolean
    get_inline_selection(): boolean
    get_minimum_key_length(): number
    get_model(): Gtk.TreeModel | null
    get_popup_completion(): boolean
    get_popup_set_width(): boolean
    get_popup_single_match(): boolean
    get_text_column(): number
    insert_prefix(): void
    set_inline_completion(inline_completion: boolean): void
    set_inline_selection(inline_selection: boolean): void
    set_match_func(func: Gtk.EntryCompletionMatchFunc): void
    set_minimum_key_length(length: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_popup_completion(popup_completion: boolean): void
    set_popup_set_width(popup_set_width: boolean): void
    set_popup_single_match(popup_single_match: boolean): void
    set_text_column(column: number): void
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
    /* Methods of Gtk.CellLayout */
    add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    clear(): void
    clear_attributes(cell: Gtk.CellRenderer): void
    get_area(): Gtk.CellArea | null
    get_cells(): Gtk.CellRenderer[]
    pack_end(cell: Gtk.CellRenderer, expand: boolean): void
    pack_start(cell: Gtk.CellRenderer, expand: boolean): void
    reorder(cell: Gtk.CellRenderer, position: number): void
    set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Virtual methods of TimezoneMap.TimezoneCompletion */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    vfunc_clear(): void
    vfunc_clear_attributes(cell: Gtk.CellRenderer): void
    vfunc_get_area(): Gtk.CellArea | null
    vfunc_get_cells(): Gtk.CellRenderer[]
    vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_reorder(cell: Gtk.CellRenderer, position: number): void
    vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.EntryCompletion */
    connect(sigName: "cursor-on-match", callback: (($obj: TimezoneCompletion, model: Gtk.TreeModel, iter: Gtk.TreeIter) => boolean)): number
    connect_after(sigName: "cursor-on-match", callback: (($obj: TimezoneCompletion, model: Gtk.TreeModel, iter: Gtk.TreeIter) => boolean)): number
    emit(sigName: "cursor-on-match", model: Gtk.TreeModel, iter: Gtk.TreeIter): void
    connect(sigName: "insert-prefix", callback: (($obj: TimezoneCompletion, prefix: string) => boolean)): number
    connect_after(sigName: "insert-prefix", callback: (($obj: TimezoneCompletion, prefix: string) => boolean)): number
    emit(sigName: "insert-prefix", prefix: string): void
    connect(sigName: "match-selected", callback: (($obj: TimezoneCompletion, model: Gtk.TreeModel, iter: Gtk.TreeIter) => boolean)): number
    connect_after(sigName: "match-selected", callback: (($obj: TimezoneCompletion, model: Gtk.TreeModel, iter: Gtk.TreeIter) => boolean)): number
    emit(sigName: "match-selected", model: Gtk.TreeModel, iter: Gtk.TreeIter): void
    connect(sigName: "no-matches", callback: (($obj: TimezoneCompletion) => void)): number
    connect_after(sigName: "no-matches", callback: (($obj: TimezoneCompletion) => void)): number
    emit(sigName: "no-matches"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::inline-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inline-selection", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-selection", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-key-length", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-key-length", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-set-width", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-set-width", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-single-match", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-single-match", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-column", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-column", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimezoneCompletion_ConstructProps)
    _init (config?: TimezoneCompletion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TimezoneCompletion
    static $gtype: GObject.Type
}
export interface TimezoneLocation_ConstructProps extends GObject.Object_ConstructProps {
    Comment?: string
    country?: string
    dist?: number
    latitude?: number
    longitude?: number
    zone?: string
}
export class TimezoneLocation {
    /* Properties of TimezoneMap.TimezoneLocation */
    Comment: string
    country: string
    dist: number
    latitude: number
    longitude: number
    zone: string
    /* Fields of TimezoneMap.TimezoneLocation */
    parent: GObject.Object
    priv: TimezoneLocationPrivate
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
    connect(sigName: "notify", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::Comment", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Comment", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dist", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dist", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zone", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimezoneLocation_ConstructProps)
    _init (config?: TimezoneLocation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TimezoneLocation
    static $gtype: GObject.Type
}
export interface TimezoneMap_ConstructProps extends Gtk.Widget_ConstructProps {
}
export class TimezoneMap {
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
    /* Fields of TimezoneMap.TimezoneMap */
    priv: TimezoneMapPrivate
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of TimezoneMap.TimezoneMap */
    get_timezone_at_coords(lon: number, lat: number): string
    set_coords(lon: number, lat: number): void
    set_timezone(timezone: string): void
    set_watermark(watermark: string): void
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
    /* Virtual methods of TimezoneMap.TimezoneMap */
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
    /* Signals of TimezoneMap.TimezoneMap */
    connect(sigName: "location-changed", callback: (($obj: TimezoneMap, object: TimezoneLocation) => void)): number
    connect_after(sigName: "location-changed", callback: (($obj: TimezoneMap, object: TimezoneLocation) => void)): number
    emit(sigName: "location-changed", object: TimezoneLocation): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: TimezoneMap, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: TimezoneMap, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "hide", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: TimezoneMap, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: TimezoneMap, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "map", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: TimezoneMap, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: TimezoneMap, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: TimezoneMap, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: TimezoneMap, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: TimezoneMap, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: TimezoneMap, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "realize", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "show", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: TimezoneMap, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: TimezoneMap, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: TimezoneMap) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: TimezoneMap) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimezoneMap_ConstructProps)
    _init (config?: TimezoneMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TimezoneMap
    static $gtype: GObject.Type
}
export abstract class TimezoneCompletionClass {
    /* Fields of TimezoneMap.TimezoneCompletionClass */
    parent_class: Gtk.EntryCompletionClass
    static name: string
}
export class TimezoneCompletionPrivate {
    static name: string
}
export abstract class TimezoneLocationClass {
    /* Fields of TimezoneMap.TimezoneLocationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TimezoneLocationPrivate {
    static name: string
}
export abstract class TimezoneMapClass {
    /* Fields of TimezoneMap.TimezoneMapClass */
    parent_class: Gtk.WidgetClass
    static name: string
}
export class TimezoneMapPrivate {
    static name: string
}