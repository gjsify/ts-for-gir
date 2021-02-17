/**
 * MxGtk-1.0
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gtk from './Gtk-2.0';
import type * as Gdk from './Gdk-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

export interface Frame_ConstructProps extends Gtk.Frame_ConstructProps {
}
export class Frame {
    /* Properties of Gtk.Frame */
    label: string
    label_widget: Gtk.Widget
    label_xalign: number
    label_yalign: number
    shadow: Gtk.ShadowType
    shadow_type: Gtk.ShadowType
    /* Properties of Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    extension_events: Gdk.ExtensionMode
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    is_focus: boolean
    name: string
    no_show_all: boolean
    parent: Gtk.Container
    receives_default: boolean
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Object */
    user_data: object
    /* Fields of Gtk.Frame */
    bin: Gtk.Bin
    child_allocation: Gtk.Allocation
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    focus_child: Gtk.Widget
    /* Fields of Gtk.Widget */
    object: Gtk.Object
    private_flags: number
    state: number
    saved_state: number
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    /* Fields of Gtk.Object */
    parent_instance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.Frame */
    get_label(): string
    get_label_align(): [ /* xalign */ number | null, /* yalign */ number | null ]
    get_label_widget(): Gtk.Widget
    get_shadow_type(): Gtk.ShadowType
    set_label(label?: string | null): void
    set_label_align(xalign: number, yalign: number): void
    set_label_widget(label_widget: Gtk.Widget): void
    set_shadow_type(type: Gtk.ShadowType): void
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): GObject.Type
    foreach(callback: Gtk.Callback): void
    get_border_width(): number
    get_children(): Gtk.Widget[]
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    get_focus_child(): Gtk.Widget
    get_focus_hadjustment(): Gtk.Adjustment
    get_focus_vadjustment(): Gtk.Adjustment
    get_resize_mode(): Gtk.ResizeMode
    propagate_expose(child: Gtk.Widget, event: Gdk.EventExpose): void
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
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    create_pango_context(): Pango.Context
    create_pango_layout(text: string): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    draw(area: Gdk.Rectangle): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(requisition: Gtk.Requisition): void
    get_child_visible(): boolean
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_colormap(): Gdk.Colormap
    get_composite_name(): string
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_extension_events(): Gdk.ExtensionMode
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_mapped(): boolean
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget
    get_parent_window(): Gdk.Window
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_style(): Gtk.Style
    get_tooltip_markup(): string
    get_tooltip_text(): string
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window
    grab_default(): void
    grab_focus(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    hide(): void
    hide_all(): void
    hide_on_delete(): boolean
    input_shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color, secondary: Gdk.Color): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_clear(): void
    queue_clear_area(x: number, y: number, width: number, height: number): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_shapes(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_colormap(colormap: Gdk.Colormap): void
    set_composite_name(name: string): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_extension_events(mode: Gdk.ExtensionMode): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_mapped(mapped: boolean): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_scroll_adjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_style(style?: Gtk.Style | null): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text: string): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_uposition(x: number, y: number): void
    set_usize(width: number, height: number): void
    set_visible(visible: boolean): void
    set_window(window: Gdk.Window): void
    shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_request(requisition: Gtk.Requisition): void
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unref(): void
    /* Methods of Gtk.Object */
    get_data(key: string): object | null
    get_data_by_id(data_id: GLib.Quark): object | null
    get_user_data(): object | null
    remove_data(key: string): void
    remove_data_by_id(data_id: GLib.Quark): void
    remove_no_notify(key: string): void
    remove_no_notify_by_id(key_id: GLib.Quark): void
    set_data(key: string, data?: object | null): void
    set_data_by_id(data_id: GLib.Quark, data?: object | null): void
    set_data_by_id_full(data_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    set_data_full(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    set_user_data(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of MxGtk.Frame */
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
    /* Virtual methods of Gtk.Frame */
    vfunc_compute_child_allocation(allocation: Gtk.Allocation): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(widget: Gtk.Widget): void
    /* Virtual methods of Gtk.Widget */
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_client_event(event: Gdk.EventClient): boolean
    vfunc_composited_changed(): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_expose_event(event: Gdk.EventExpose): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_no_expose_event(event: Gdk.EventAny): boolean
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
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
    vfunc_size_request(requisition: Gtk.Requisition): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk.Object */
    vfunc_destroy(): void
    vfunc_get_arg(arg: Gtk.Arg, arg_id: number): void
    vfunc_set_arg(arg: Gtk.Arg, arg_id: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Frame, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Frame, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    connect(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    connect(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Frame, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Frame, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Frame, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Frame, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Frame, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Frame, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Frame, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", drag_context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Frame, drag_context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Frame, drag_context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", drag_context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Frame, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    connect(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    connect(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Frame, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Frame, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Frame) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Frame, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Frame, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "map", callback: (($obj: Frame) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    connect(sigName: "parent-set", callback: (($obj: Frame, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Frame, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Frame) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Frame, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Frame, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    connect(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "show", callback: (($obj: Frame) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Frame, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Frame, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    connect(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    connect(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "style-set", callback: (($obj: Frame, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Frame, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "unmap", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Frame) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Frame) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label-widget", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-widget", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label-xalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-xalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label-yalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-yalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shadow-type", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Frame_ConstructProps)
    _init (config?: Frame_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Frame
    static new(label: string): Frame
    static $gtype: GObject.Type
}
export interface LightSwitch_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    active?: boolean
}
export class LightSwitch {
    /* Properties of MxGtk.LightSwitch */
    active: boolean
    /* Properties of Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    extension_events: Gdk.ExtensionMode
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    is_focus: boolean
    name: string
    no_show_all: boolean
    parent: Gtk.Container
    receives_default: boolean
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Object */
    user_data: object
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    draw_data: object
    /* Fields of Gtk.Widget */
    object: Gtk.Object
    private_flags: number
    state: number
    saved_state: number
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    /* Fields of Gtk.Object */
    parent_instance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of MxGtk.LightSwitch */
    get_active(): boolean
    set_active(active: boolean): void
    /* Methods of Gtk.DrawingArea */
    size(width: number, height: number): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    create_pango_context(): Pango.Context
    create_pango_layout(text: string): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    draw(area: Gdk.Rectangle): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(requisition: Gtk.Requisition): void
    get_child_visible(): boolean
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_colormap(): Gdk.Colormap
    get_composite_name(): string
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_extension_events(): Gdk.ExtensionMode
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_mapped(): boolean
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget
    get_parent_window(): Gdk.Window
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_style(): Gtk.Style
    get_tooltip_markup(): string
    get_tooltip_text(): string
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window
    grab_default(): void
    grab_focus(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    hide(): void
    hide_all(): void
    hide_on_delete(): boolean
    input_shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary: Gdk.Color, secondary: Gdk.Color): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_clear(): void
    queue_clear_area(x: number, y: number, width: number, height: number): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_shapes(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_colormap(colormap: Gdk.Colormap): void
    set_composite_name(name: string): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_extension_events(mode: Gdk.ExtensionMode): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_mapped(mapped: boolean): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_scroll_adjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_style(style?: Gtk.Style | null): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text: string): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_uposition(x: number, y: number): void
    set_usize(width: number, height: number): void
    set_visible(visible: boolean): void
    set_window(window: Gdk.Window): void
    shape_combine_mask(shape_mask: Gdk.Bitmap | null, offset_x: number, offset_y: number): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_request(requisition: Gtk.Requisition): void
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number, /* dest_y */ number ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unref(): void
    /* Methods of Gtk.Object */
    get_data(key: string): object | null
    get_data_by_id(data_id: GLib.Quark): object | null
    get_user_data(): object | null
    remove_data(key: string): void
    remove_data_by_id(data_id: GLib.Quark): void
    remove_no_notify(key: string): void
    remove_no_notify_by_id(key_id: GLib.Quark): void
    set_data(key: string, data?: object | null): void
    set_data_by_id(data_id: GLib.Quark, data?: object | null): void
    set_data_by_id_full(data_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    set_data_full(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    set_user_data(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of MxGtk.LightSwitch */
    vfunc_switch_flipped(state: boolean): void
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
    /* Virtual methods of Gtk.Widget */
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_client_event(event: Gdk.EventClient): boolean
    vfunc_composited_changed(): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_expose_event(event: Gdk.EventExpose): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_no_expose_event(event: Gdk.EventAny): boolean
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
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
    vfunc_size_request(requisition: Gtk.Requisition): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk.Object */
    vfunc_destroy(): void
    vfunc_get_arg(arg: Gtk.Arg, arg_id: number): void
    vfunc_set_arg(arg: Gtk.Arg, arg_id: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MxGtk.LightSwitch */
    connect(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    connect_after(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    emit(sigName: "switch-flipped", object: boolean): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    connect(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    connect(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: LightSwitch, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: LightSwitch, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", drag_context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", drag_context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", drag_context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", drag_context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", drag_context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: LightSwitch, drag_context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", drag_context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    connect(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    connect(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: LightSwitch, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: LightSwitch, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    connect(sigName: "parent-set", callback: (($obj: LightSwitch, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: LightSwitch, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: LightSwitch, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: LightSwitch, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    connect(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: LightSwitch, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: LightSwitch, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    connect(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    connect(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "style-set", callback: (($obj: LightSwitch, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: LightSwitch, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LightSwitch_ConstructProps)
    _init (config?: LightSwitch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LightSwitch
    static $gtype: GObject.Type
}
export abstract class FrameClass {
    /* Fields of MxGtk.FrameClass */
    parent_class: Gtk.FrameClass
    static name: string
}
export abstract class LightSwitchClass {
    /* Fields of MxGtk.LightSwitchClass */
    parent_class: Gtk.DrawingAreaClass
    switch_flipped: (lightswitch: LightSwitch, state: boolean) => void
    static name: string
}