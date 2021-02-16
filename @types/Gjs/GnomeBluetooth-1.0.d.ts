/**
 * GnomeBluetooth-1.0
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

export enum Category {
    ALL,
    PAIRED,
    TRUSTED,
    NOT_PAIRED_OR_TRUSTED,
    PAIRED_OR_TRUSTED,
}
export enum Column {
    PROXY,
    PROPERTIES,
    ADDRESS,
    ALIAS,
    NAME,
    TYPE,
    ICON,
    DEFAULT,
    PAIRED,
    TRUSTED,
    CONNECTED,
    DISCOVERABLE,
    DISCOVERING,
    LEGACYPAIRING,
    POWERED,
    SERVICES,
    UUIDS,
}
export enum Status {
    INVALID,
    DISCONNECTED,
    CONNECTED,
    CONNECTING,
    PLAYING,
}
export enum Type {
    ANY,
    PHONE,
    MODEM,
    COMPUTER,
    NETWORK,
    HEADSET,
    HEADPHONES,
    OTHER_AUDIO,
    KEYBOARD,
    MOUSE,
    CAMERA,
    PRINTER,
    JOYPAD,
    TABLET,
    VIDEO,
    REMOTE_CONTROL,
    SCANNER,
    DISPLAY,
    WEARABLE,
    TOY,
}
export const CHOOSER_COMBO_FIRST_DEVICE: string
export const TYPE_AUDIO: number
export const TYPE_INPUT: number
export const UUID_A2DP: number
export const UUID_A2DP_SINK: number
export const UUID_A2DP_SOURCE: number
export const UUID_AVRCP_CONTROL: number
export const UUID_AVRCP_TARGET: number
export const UUID_DUN: number
export const UUID_FTP: number
export const UUID_GENERIC_AUDIO: number
export const UUID_GENERIC_NET: number
export const UUID_HFP_AG: number
export const UUID_HFP_HF: number
export const UUID_HID: number
export const UUID_HSP: number
export const UUID_HSP_AG: number
export const UUID_IRMC: number
export const UUID_OPP: number
export const UUID_PAN_GN: number
export const UUID_PAN_NAP: number
export const UUID_PAN_PANU: number
export const UUID_PBAP: number
export const UUID_PNP: number
export const UUID_SAP: number
export const UUID_SDP: number
export const UUID_SPP: number
export const UUID_VDP_SOURCE: number
export function class_to_type(class_: number): Type
export function send_to_address(address: string, alias: string): void
export function type_to_string(type: number): string
export function uuid_to_string(uuid: string): string
export function verify_address(bdaddr: string): boolean
export interface Chooser_ConstructProps extends Gtk.Box_ConstructProps {
    device_selected?: string
    device_service_filter?: string
    device_type_filter?: number
    has_internal_device_filter?: boolean
    show_connected?: boolean
    show_device_category?: boolean
    show_device_type?: boolean
    show_device_type_column?: boolean
    show_pairing?: boolean
    show_searching?: boolean
    orientation?: Gtk.Orientation
}
export class Chooser {
    /* Properties of GnomeBluetooth.Chooser */
    device_selected: string
    device_service_filter: string
    device_type_filter: number
    show_connected: boolean
    show_device_category: boolean
    show_device_type: boolean
    show_device_type_column: boolean
    show_pairing: boolean
    show_searching: boolean
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
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBluetooth.Chooser */
    dump_selected_device(): void
    get_scrolled_window(): Gtk.Widget
    get_selected_device(): string
    get_selected_device_icon(): string
    get_selected_device_info(field: string, value: any): boolean
    get_selected_device_is_connected(): boolean
    get_selected_device_name(): string
    get_selected_device_type(): Type
    start_discovery(): void
    stop_discovery(): void
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
    /* Virtual methods of GnomeBluetooth.Chooser */
    vfunc_selected_device_activated(address: string): void
    vfunc_selected_device_changed(address: string): void
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
    /* Signals of GnomeBluetooth.Chooser */
    connect(sigName: "selected-device-activated", callback: (($obj: Chooser, address: string) => void)): number
    connect_after(sigName: "selected-device-activated", callback: (($obj: Chooser, address: string) => void)): number
    emit(sigName: "selected-device-activated", address: string): void
    connect(sigName: "selected-device-changed", callback: (($obj: Chooser, address: string) => void)): number
    connect_after(sigName: "selected-device-changed", callback: (($obj: Chooser, address: string) => void)): number
    emit(sigName: "selected-device-changed", address: string): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Chooser) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: Chooser, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Chooser, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Chooser) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: Chooser, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Chooser, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "map", callback: (($obj: Chooser) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Chooser, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Chooser, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: Chooser, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Chooser, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: Chooser, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Chooser, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Chooser) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "show", callback: (($obj: Chooser) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: Chooser, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Chooser, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Chooser) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: Chooser) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Chooser) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-selected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-selected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-service-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-service-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type-filter", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-connected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-connected", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-device-category", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-category", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-device-type", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-device-type-column", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type-column", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-pairing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-pairing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-searching", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-searching", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Chooser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Chooser_ConstructProps)
    _init (config?: Chooser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Chooser
    static new(orientation: Gtk.Orientation, spacing: number): Chooser
    static $gtype: GObject.Type
}
export interface ChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
    device?: string
    action_name?: string
    action_target?: GLib.Variant
    related_action?: Gtk.Action
    use_action_appearance?: boolean
}
export class ChooserButton {
    /* Properties of GnomeBluetooth.ChooserButton */
    device: string
    readonly is_available: boolean
    /* Properties of Gtk.Button */
    child: Gtk.Widget
    has_frame: boolean
    icon_name: string
    label: string
    use_underline: boolean
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
    /* Properties of Gtk.Actionable */
    action_name: string
    action_target: GLib.Variant
    /* Properties of Gtk.Activatable */
    related_action: Gtk.Action
    use_action_appearance: boolean
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBluetooth.ChooserButton */
    available(): boolean
    /* Methods of Gtk.Button */
    get_child(): Gtk.Widget | null
    get_has_frame(): boolean
    get_icon_name(): string | null
    get_label(): string | null
    get_use_underline(): boolean
    set_child(child?: Gtk.Widget | null): void
    set_has_frame(has_frame: boolean): void
    set_icon_name(icon_name: string): void
    set_label(label: string): void
    set_use_underline(use_underline: boolean): void
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
    /* Methods of Gtk.Actionable */
    get_action_name(): string | null
    get_action_target_value(): GLib.Variant | null
    set_action_name(action_name?: string | null): void
    set_action_target_value(target_value?: GLib.Variant | null): void
    set_detailed_action_name(detailed_action_name: string): void
    /* Methods of Gtk.Activatable */
    do_set_related_action(action: Gtk.Action): void
    get_related_action(): Gtk.Action
    get_use_action_appearance(): boolean
    set_related_action(action: Gtk.Action): void
    set_use_action_appearance(use_appearance: boolean): void
    sync_action_properties(action?: Gtk.Action | null): void
    /* Methods of Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of GnomeBluetooth.ChooserButton */
    vfunc_chooser_created(chooser: Gtk.Widget): void
    vfunc_get_action_name(): string | null
    vfunc_get_action_target_value(): GLib.Variant | null
    vfunc_set_action_name(action_name?: string | null): void
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void
    vfunc_sync_action_properties(action?: Gtk.Action | null): void
    vfunc_update(action: Gtk.Action, property_name: string): void
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk.Button */
    vfunc_activate(): void
    vfunc_clicked(): void
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
    /* Signals of GnomeBluetooth.ChooserButton */
    connect(sigName: "chooser-created", callback: (($obj: ChooserButton, chooser: GObject.Object) => void)): number
    connect_after(sigName: "chooser-created", callback: (($obj: ChooserButton, chooser: GObject.Object) => void)): number
    emit(sigName: "chooser-created", chooser: GObject.Object): void
    /* Signals of Gtk.Button */
    connect(sigName: "activate", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "activate", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "clicked", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "clicked"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ChooserButton, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ChooserButton, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ChooserButton, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "map", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ChooserButton, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ChooserButton, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ChooserButton, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ChooserButton, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ChooserButton, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "show", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ChooserButton, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ChooserButton, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ChooserButton) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ChooserButton) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-available", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-available", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-underline", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::action-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::related-action", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-action-appearance", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: ChooserButton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChooserButton_ConstructProps)
    _init (config?: ChooserButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChooserButton
    static $gtype: GObject.Type
}
export interface ChooserCombo_ConstructProps extends Gtk.Box_ConstructProps {
    device?: string
    orientation?: Gtk.Orientation
}
export class ChooserCombo {
    /* Properties of GnomeBluetooth.ChooserCombo */
    readonly chooser: Chooser
    device: string
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
    /* Fields of GnomeBluetooth.ChooserCombo */
    priv: ChooserComboPrivate
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of GnomeBluetooth.ChooserCombo */
    vfunc_chooser_created(chooser: Gtk.Widget): void
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
    /* Signals of GnomeBluetooth.ChooserCombo */
    connect(sigName: "chooser-created", callback: (($obj: ChooserCombo, chooser: GObject.Object) => void)): number
    connect_after(sigName: "chooser-created", callback: (($obj: ChooserCombo, chooser: GObject.Object) => void)): number
    emit(sigName: "chooser-created", chooser: GObject.Object): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: ChooserCombo, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: ChooserCombo, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "hide", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: ChooserCombo, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: ChooserCombo, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "map", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: ChooserCombo, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: ChooserCombo, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: ChooserCombo, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: ChooserCombo, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: ChooserCombo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: ChooserCombo, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "realize", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "show", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: ChooserCombo, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: ChooserCombo, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: ChooserCombo) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: ChooserCombo) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::chooser", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chooser", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ChooserCombo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChooserCombo_ConstructProps)
    _init (config?: ChooserCombo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChooserCombo
    static new(orientation: Gtk.Orientation, spacing: number): ChooserCombo
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    default_adapter_discoverable?: boolean
    default_adapter_discovering?: boolean
}
export class Client {
    /* Properties of GnomeBluetooth.Client */
    readonly default_adapter: string
    default_adapter_discoverable: boolean
    default_adapter_discovering: boolean
    readonly default_adapter_name: string
    readonly default_adapter_powered: boolean
    /* Fields of GnomeBluetooth.Client */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBluetooth.Client */
    connect_service(path: string, connect: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    connect_service_finish(res: Gio.AsyncResult): boolean
    get_adapter_model(): Gtk.TreeModel
    get_device_model(): Gtk.TreeModel
    get_filter_model(func: Gtk.TreeModelFilterVisibleFunc): Gtk.TreeModel
    get_model(): Gtk.TreeModel
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
    /* Signals of GnomeBluetooth.Client */
    connect(sigName: "device-removed", callback: (($obj: Client, device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, device: string) => void)): number
    emit(sigName: "device-removed", device: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-adapter", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-adapter-discoverable", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-discoverable", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-adapter-discovering", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-discovering", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-adapter-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-adapter-powered", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-adapter-powered", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
export interface FilterWidget_ConstructProps extends Gtk.Box_ConstructProps {
    device_service_filter?: string
    device_type_filter?: number
    show_device_category?: boolean
    show_device_type?: boolean
    orientation?: Gtk.Orientation
}
export class FilterWidget {
    /* Properties of GnomeBluetooth.FilterWidget */
    device_service_filter: string
    device_type_filter: number
    show_device_category: boolean
    show_device_type: boolean
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
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBluetooth.FilterWidget */
    bind_filter(chooser: Chooser): void
    set_title(title: string): void
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
    /* Virtual methods of GnomeBluetooth.FilterWidget */
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
    connect(sigName: "destroy", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: FilterWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: FilterWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: FilterWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: FilterWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: FilterWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: FilterWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: FilterWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: FilterWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: FilterWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: FilterWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: FilterWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: FilterWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: FilterWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: FilterWidget) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-service-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-service-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-type-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type-filter", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-device-category", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-category", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-device-type", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-device-type", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::baseline-position", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: FilterWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterWidget_ConstructProps)
    _init (config?: FilterWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterWidget
    static new(orientation: Gtk.Orientation, spacing: number): FilterWidget
    static $gtype: GObject.Type
}
export interface SettingsWidget_ConstructProps extends Gtk.Box_ConstructProps {
    orientation?: Gtk.Orientation
}
export class SettingsWidget {
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
    /* Fields of Gtk.Box */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GnomeBluetooth.SettingsWidget */
    get_default_adapter_powered(): boolean
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
    /* Virtual methods of GnomeBluetooth.SettingsWidget */
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
    /* Signals of GnomeBluetooth.SettingsWidget */
    connect(sigName: "adapter-status-changed", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "adapter-status-changed", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "adapter-status-changed"): void
    connect(sigName: "panel-changed", callback: (($obj: SettingsWidget, panel: string) => void)): number
    connect_after(sigName: "panel-changed", callback: (($obj: SettingsWidget, panel: string) => void)): number
    emit(sigName: "panel-changed", panel: string): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: SettingsWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: SettingsWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: SettingsWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: SettingsWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: SettingsWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: SettingsWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: SettingsWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: SettingsWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: SettingsWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: SettingsWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: SettingsWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: SettingsWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: SettingsWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SettingsWidget) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spacing", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::orientation", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SettingsWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingsWidget_ConstructProps)
    _init (config?: SettingsWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingsWidget
    static new(orientation: Gtk.Orientation, spacing: number): SettingsWidget
    static $gtype: GObject.Type
}
export abstract class ChooserButtonClass {
    /* Fields of GnomeBluetooth.ChooserButtonClass */
    parent_class: Gtk.ButtonClass
    chooser_created: (self: ChooserButton, chooser: Gtk.Widget) => void
    static name: string
}
export abstract class ChooserClass {
    /* Fields of GnomeBluetooth.ChooserClass */
    parent_class: Gtk.BoxClass
    selected_device_changed: (chooser: Chooser, address: string) => void
    selected_device_activated: (chooser: Chooser, address: string) => void
    static name: string
}
export abstract class ChooserComboClass {
    /* Fields of GnomeBluetooth.ChooserComboClass */
    parent_class: Gtk.BoxClass
    chooser_created: (self: ChooserCombo, chooser: Gtk.Widget) => void
    static name: string
}
export class ChooserComboPrivate {
    static name: string
}
export abstract class ClientClass {
    /* Fields of GnomeBluetooth.ClientClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FilterWidgetClass {
    /* Fields of GnomeBluetooth.FilterWidgetClass */
    parent_class: Gtk.BoxClass
    static name: string
}
export abstract class SettingsWidgetClass {
    /* Fields of GnomeBluetooth.SettingsWidgetClass */
    parent_class: Gtk.BoxClass
    static name: string
}