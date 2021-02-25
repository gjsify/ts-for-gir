/**
 * GooCanvas-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

export enum CairoAntialias {
    DEFAULT,
    NONE,
    GRAY,
    SUBPIXEL,
}
export enum CairoFillRule {
    WINDING,
    EVEN_ODD,
}
export enum CairoHintMetrics {
    DEFAULT,
    OFF,
    ON,
}
export enum CairoLineCap {
    BUTT,
    ROUND,
    SQUARE,
}
export enum CairoLineJoin {
    MITER,
    ROUND,
    BEVEL,
}
export enum CairoOperator {
    CLEAR,
    SOURCE,
    OVER,
    IN,
    OUT,
    ATOP,
    DEST,
    DEST_OVER,
    DEST_IN,
    DEST_OUT,
    DEST_ATOP,
    XOR,
    ADD,
    SATURATE,
}
export enum CanvasAnchorType {
    CENTER,
    NORTH,
    NORTH_WEST,
    NORTH_EAST,
    SOUTH,
    SOUTH_WEST,
    SOUTH_EAST,
    WEST,
    EAST,
    N,
    NW,
    NE,
    S,
    SW,
    SE,
    W,
    E,
}
export enum CanvasAnimateType {
    FREEZE,
    RESET,
    RESTART,
    BOUNCE,
}
export enum CanvasItemVisibility {
    HIDDEN,
    INVISIBLE,
    VISIBLE,
    VISIBLE_ABOVE_THRESHOLD,
}
export enum CanvasPathCommandType {
    MOVE_TO,
    CLOSE_PATH,
    LINE_TO,
    HORIZONTAL_LINE_TO,
    VERTICAL_LINE_TO,
    CURVE_TO,
    SMOOTH_CURVE_TO,
    QUADRATIC_CURVE_TO,
    SMOOTH_QUADRATIC_CURVE_TO,
    ELLIPTICAL_ARC,
}
export enum CanvasPointerEvents {
    VISIBLE_MASK,
    PAINTED_MASK,
    FILL_MASK,
    STROKE_MASK,
    NONE,
    VISIBLE_PAINTED,
    VISIBLE_FILL,
    VISIBLE_STROKE,
    VISIBLE,
    PAINTED,
    FILL,
    STROKE,
    ALL,
}
export const CANVAS_POLYLINE_NUM_ARROW_POINTS: number
export function cairo_matrix_copy(matrix: cairo.Matrix): cairo.Matrix
export function cairo_matrix_free(matrix: cairo.Matrix): void
export function canvas_item_class_find_child_property(iclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
export function canvas_item_class_install_child_property(iclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
export function canvas_item_class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
export function canvas_item_model_class_find_child_property(mclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
export function canvas_item_model_class_install_child_property(mclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
export function canvas_item_model_class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
export class CanvasItem {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_model(model: CanvasItemModel): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItem, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItem, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasItem, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasItem, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasItem, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    static name: string
    /* Static methods and pseudo-constructors */
    static class_find_child_property(iclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_install_child_property(iclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    static class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
}
export class CanvasItemModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasItemModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasItemModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasItemModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasItemModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasItemModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasItemModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasItemModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasItemModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static class_find_child_property(mclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_install_child_property(mclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    static class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
}
export interface Canvas_ConstructProps extends Gtk.Container_ConstructProps {
    anchor?: CanvasAnchorType
    automatic_bounds?: boolean
    background_color?: string
    background_color_gdk_rgba?: Gdk.RGBA
    background_color_rgb?: number
    bounds_from_origin?: boolean
    bounds_padding?: number
    clear_background?: boolean
    integer_layout?: boolean
    redraw_when_scrolled?: boolean
    resolution_x?: number
    resolution_y?: number
    scale?: number
    scale_x?: number
    scale_y?: number
    units?: Gtk.Unit
    x1?: number
    x2?: number
    y1?: number
    y2?: number
    hadjustment?: Gtk.Adjustment
    hscroll_policy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscroll_policy?: Gtk.ScrollablePolicy
}
export class Canvas {
    /* Properties of GooCanvas-3.0.GooCanvas.Canvas */
    anchor: CanvasAnchorType
    automatic_bounds: boolean
    background_color: string
    background_color_gdk_rgba: Gdk.RGBA
    background_color_rgb: number
    bounds_from_origin: boolean
    bounds_padding: number
    clear_background: boolean
    integer_layout: boolean
    redraw_when_scrolled: boolean
    resolution_x: number
    resolution_y: number
    scale: number
    scale_x: number
    scale_y: number
    units: Gtk.Unit
    x1: number
    x2: number
    y1: number
    y2: number
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
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscroll_policy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscroll_policy: Gtk.ScrollablePolicy
    /* Fields of GooCanvas-3.0.GooCanvas.Canvas */
    container: Gtk.Container
    root_item_model: CanvasItemModel
    root_item: CanvasItem
    bounds: CanvasBounds
    idle_id: number
    need_update: number
    need_entire_subtree_update: number
    before_initial_draw: number
    pointer_item: CanvasItem
    pointer_grab_item: CanvasItem
    pointer_grab_initial_item: CanvasItem
    pointer_grab_button: number
    focused_item: CanvasItem
    keyboard_grab_item: CanvasItem
    crossing_event: Gdk.EventCrossing
    canvas_window: Gdk.Window
    canvas_x_offset: number
    canvas_y_offset: number
    freeze_count: number
    tmp_window: Gdk.Window
    model_to_item: GLib.HashTable
    device_to_pixels_x: number
    device_to_pixels_y: number
    widget_items: object[]
    /* Fields of Gtk-3.0.Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.Canvas */
    convert_bounds_to_item_space(item: CanvasItem, bounds: CanvasBounds): void
    convert_from_item_space(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convert_from_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convert_to_item_space(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convert_to_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convert_units_from_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convert_units_to_pixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    create_cairo_context(): cairo.Context
    create_item(model: CanvasItemModel): CanvasItem
    get_bounds(): [ /* left */ number | null, /* top */ number | null, /* right */ number | null, /* bottom */ number | null ]
    get_default_line_width(): number
    get_item(model: CanvasItemModel): CanvasItem
    get_item_at(x: number, y: number, is_pointer_event: boolean): CanvasItem
    get_items_at(x: number, y: number, is_pointer_event: boolean): CanvasItem[]
    get_items_in_area(area: CanvasBounds, inside_area: boolean, allow_overlaps: boolean, include_containers: boolean): CanvasItem[]
    get_root_item(): CanvasItem
    get_root_item_model(): CanvasItemModel
    get_scale(): number
    get_static_root_item(): CanvasItem
    get_static_root_item_model(): CanvasItemModel
    grab_focus(item: CanvasItem): void
    keyboard_grab(item: CanvasItem, owner_events: boolean, time: number): Gdk.GrabStatus
    keyboard_ungrab(item: CanvasItem, time: number): void
    pointer_grab(item: CanvasItem, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    pointer_ungrab(item: CanvasItem, time: number): void
    register_widget_item(witem: CanvasWidget): void
    render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void
    request_item_redraw(bounds: CanvasBounds, is_static: boolean): void
    request_redraw(bounds: CanvasBounds): void
    request_update(): void
    scroll_to(left: number, top: number): void
    set_bounds(left: number, top: number, right: number, bottom: number): void
    set_root_item(item: CanvasItem): void
    set_root_item_model(model: CanvasItemModel): void
    set_scale(scale: number): void
    set_static_root_item(item: CanvasItem): void
    set_static_root_item_model(model: CanvasItemModel): void
    unregister_item(model: CanvasItemModel): void
    unregister_widget_item(witem: CanvasWidget): void
    update(): void
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    /* child_notify clashes with Gtk.Widget.child_notify */
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
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    get_hadjustment(): Gtk.Adjustment
    get_hscroll_policy(): Gtk.ScrollablePolicy
    get_vadjustment(): Gtk.Adjustment
    get_vscroll_policy(): Gtk.ScrollablePolicy
    set_hadjustment(hadjustment?: Gtk.Adjustment | null): void
    set_hscroll_policy(policy: Gtk.ScrollablePolicy): void
    set_vadjustment(vadjustment?: Gtk.Adjustment | null): void
    set_vscroll_policy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.Canvas */
    vfunc_create_item(model: CanvasItemModel): CanvasItem
    vfunc_item_created(item: CanvasItem, model: CanvasItemModel): void
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
    vfunc_get_border(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
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
    /* Signals of GooCanvas-3.0.GooCanvas.Canvas */
    connect(sigName: "item-created", callback: (($obj: Canvas, item: CanvasItem, model: CanvasItemModel) => void)): number
    connect_after(sigName: "item-created", callback: (($obj: Canvas, item: CanvasItem, model: CanvasItemModel) => void)): number
    emit(sigName: "item-created", item: CanvasItem, model: CanvasItemModel): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Canvas) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Canvas, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Canvas, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Canvas, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Canvas, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Canvas, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Canvas, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: Canvas, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Canvas, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Canvas) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Canvas, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Canvas, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Canvas, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Canvas, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Canvas) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Canvas, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Canvas, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Canvas, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Canvas, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Canvas, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Canvas, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Canvas, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Canvas, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Canvas, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Canvas, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Canvas, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Canvas, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Canvas, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Canvas, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Canvas, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Canvas, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Canvas, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Canvas, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Canvas, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Canvas, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Canvas, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Canvas, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Canvas, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Canvas) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Canvas, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Canvas, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Canvas) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Canvas, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Canvas, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Canvas, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Canvas, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Canvas, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Canvas, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Canvas, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Canvas, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "map", callback: (($obj: Canvas) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Canvas, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Canvas, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Canvas, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Canvas, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Canvas, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Canvas, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Canvas, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Canvas, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Canvas) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Canvas) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Canvas, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Canvas, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Canvas, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Canvas, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Canvas, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Canvas, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Canvas, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Canvas, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Canvas, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Canvas, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Canvas, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Canvas, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Canvas, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Canvas, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Canvas, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Canvas, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Canvas, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "show", callback: (($obj: Canvas) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Canvas, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Canvas, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Canvas, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Canvas, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Canvas, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Canvas, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Canvas, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Canvas, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Canvas, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Canvas, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Canvas) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Canvas, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Canvas, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Canvas) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Canvas, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Canvas, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Canvas, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Canvas, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Canvas, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Canvas, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anchor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::units", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::units", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Canvas_ConstructProps)
    _init (config?: Canvas_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Canvas
    static create_path(commands: CanvasPathCommand[], cr: cairo.Context): void
    static marshal_BOOLEAN__BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_BOOLEAN__DOUBLE_DOUBLE_BOOLEAN_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_BOOLEAN__OBJECT_BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__INT_INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__OBJECT_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static parse_path_data(path_data: string): CanvasPathCommand[]
    static $gtype: GObject.Type
}
export interface CanvasAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Atk.Object
    get_accessible_type(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk-1.0.Atk.ObjectFactory */
    vfunc_invalidate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasAccessibleFactory_ConstructProps)
    _init (config?: CanvasAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasEllipse_ConstructProps extends CanvasItemSimple_ConstructProps {
    center_x?: number
    center_y?: number
    height?: number
    radius_x?: number
    radius_y?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasEllipse {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasEllipse */
    center_x: number
    center_y: number
    height: number
    radius_x: number
    radius_y: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasEllipse */
    parent_object: CanvasItemSimple
    ellipse_data: CanvasEllipseData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasEllipse, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasEllipse, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasEllipse, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasEllipse, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasEllipse, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasEllipse_ConstructProps)
    _init (config?: CanvasEllipse_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasEllipseModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    center_x?: number
    center_y?: number
    height?: number
    radius_x?: number
    radius_y?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasEllipseModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasEllipseModel */
    center_x: number
    center_y: number
    height: number
    radius_x: number
    radius_y: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModel */
    parent_object: CanvasItemModelSimple
    ellipse_data: CanvasEllipseData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasEllipseModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasEllipseModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasEllipseModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasEllipseModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasEllipseModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasEllipseModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasEllipseModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasEllipseModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasEllipseModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasEllipseModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasEllipseModel_ConstructProps)
    _init (config?: CanvasEllipseModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGrid_ConstructProps extends CanvasItemSimple_ConstructProps {
    border_color?: string
    border_color_gdk_rgba?: Gdk.RGBA
    border_color_rgba?: number
    border_pattern?: any
    border_pixbuf?: GdkPixbuf.Pixbuf
    border_width?: number
    height?: number
    horz_grid_line_color?: string
    horz_grid_line_color_gdk_rgba?: Gdk.RGBA
    horz_grid_line_color_rgba?: number
    horz_grid_line_pattern?: any
    horz_grid_line_pixbuf?: GdkPixbuf.Pixbuf
    horz_grid_line_width?: number
    show_horz_grid_lines?: boolean
    show_vert_grid_lines?: boolean
    vert_grid_line_color?: string
    vert_grid_line_color_gdk_rgba?: Gdk.RGBA
    vert_grid_line_color_rgba?: number
    vert_grid_line_pattern?: any
    vert_grid_line_pixbuf?: GdkPixbuf.Pixbuf
    vert_grid_line_width?: number
    vert_grid_lines_on_top?: boolean
    width?: number
    x?: number
    x_offset?: number
    x_step?: number
    y?: number
    y_offset?: number
    y_step?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasGrid {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGrid */
    border_color: string
    border_color_gdk_rgba: Gdk.RGBA
    border_color_rgba: number
    border_pattern: any
    border_pixbuf: GdkPixbuf.Pixbuf
    border_width: number
    height: number
    horz_grid_line_color: string
    horz_grid_line_color_gdk_rgba: Gdk.RGBA
    horz_grid_line_color_rgba: number
    horz_grid_line_pattern: any
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf
    horz_grid_line_width: number
    show_horz_grid_lines: boolean
    show_vert_grid_lines: boolean
    vert_grid_line_color: string
    vert_grid_line_color_gdk_rgba: Gdk.RGBA
    vert_grid_line_color_rgba: number
    vert_grid_line_pattern: any
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf
    vert_grid_line_width: number
    vert_grid_lines_on_top: boolean
    width: number
    x: number
    x_offset: number
    x_step: number
    y: number
    y_offset: number
    y_step: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGrid */
    parent_object: CanvasItemSimple
    grid_data: CanvasGridData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGrid, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGrid, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasGrid, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasGrid, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasGrid, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasGrid_ConstructProps)
    _init (config?: CanvasGrid_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGridModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    border_color?: string
    border_color_gdk_rgba?: Gdk.RGBA
    border_color_rgba?: number
    border_pattern?: any
    border_pixbuf?: GdkPixbuf.Pixbuf
    border_width?: number
    height?: number
    horz_grid_line_color?: string
    horz_grid_line_color_gdk_rgba?: Gdk.RGBA
    horz_grid_line_color_rgba?: number
    horz_grid_line_pattern?: any
    horz_grid_line_pixbuf?: GdkPixbuf.Pixbuf
    horz_grid_line_width?: number
    show_horz_grid_lines?: boolean
    show_vert_grid_lines?: boolean
    vert_grid_line_color?: string
    vert_grid_line_color_gdk_rgba?: Gdk.RGBA
    vert_grid_line_color_rgba?: number
    vert_grid_line_pattern?: any
    vert_grid_line_pixbuf?: GdkPixbuf.Pixbuf
    vert_grid_line_width?: number
    vert_grid_lines_on_top?: boolean
    width?: number
    x?: number
    x_offset?: number
    x_step?: number
    y?: number
    y_offset?: number
    y_step?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasGridModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGridModel */
    border_color: string
    border_color_gdk_rgba: Gdk.RGBA
    border_color_rgba: number
    border_pattern: any
    border_pixbuf: GdkPixbuf.Pixbuf
    border_width: number
    height: number
    horz_grid_line_color: string
    horz_grid_line_color_gdk_rgba: Gdk.RGBA
    horz_grid_line_color_rgba: number
    horz_grid_line_pattern: any
    horz_grid_line_pixbuf: GdkPixbuf.Pixbuf
    horz_grid_line_width: number
    show_horz_grid_lines: boolean
    show_vert_grid_lines: boolean
    vert_grid_line_color: string
    vert_grid_line_color_gdk_rgba: Gdk.RGBA
    vert_grid_line_color_rgba: number
    vert_grid_line_pattern: any
    vert_grid_line_pixbuf: GdkPixbuf.Pixbuf
    vert_grid_line_width: number
    vert_grid_lines_on_top: boolean
    width: number
    x: number
    x_offset: number
    x_step: number
    y: number
    y_offset: number
    y_step: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGridModel */
    parent_object: CanvasItemModelSimple
    grid_data: CanvasGridData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGridModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGridModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasGridModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasGridModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasGridModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasGridModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasGridModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasGridModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasGridModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasGridModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasGridModel_ConstructProps)
    _init (config?: CanvasGridModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGroup_ConstructProps extends CanvasItemSimple_ConstructProps {
    height?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasGroup {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroup */
    parent_object: CanvasItemSimple
    items: object[]
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGroup, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGroup, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasGroup, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasGroup, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasGroup, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasGroup_ConstructProps)
    _init (config?: CanvasGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGroupModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    height?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasGroupModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroupModel */
    parent_object: CanvasItemModelSimple
    children: object[]
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGroupModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGroupModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasGroupModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasGroupModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasGroupModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasGroupModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasGroupModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasGroupModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasGroupModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasGroupModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasGroupModel_ConstructProps)
    _init (config?: CanvasGroupModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasImage_ConstructProps extends CanvasItemSimple_ConstructProps {
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scale_to_fit?: boolean
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasImage {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasImage */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scale_to_fit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasImage */
    parent_object: CanvasItemSimple
    image_data: CanvasImageData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasImage, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasImage, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasImage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasImage, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasImage, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasImage_ConstructProps)
    _init (config?: CanvasImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasImageModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scale_to_fit?: boolean
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasImageModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasImageModel */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scale_to_fit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasImageModel */
    parent_object: CanvasItemModelSimple
    image_data: CanvasImageData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasImageModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasImageModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasImageModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasImageModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasImageModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasImageModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasImageModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasImageModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasImageModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasImageModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasImageModel_ConstructProps)
    _init (config?: CanvasImageModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasItemAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasItemAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Atk.Object
    get_accessible_type(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk-1.0.Atk.ObjectFactory */
    vfunc_invalidate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasItemAccessibleFactory_ConstructProps)
    _init (config?: CanvasItemAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasItemModelSimple_ConstructProps extends GObject.Object_ConstructProps {
    antialias?: CairoAntialias
    clip_fill_rule?: CairoFillRule
    clip_path?: string
    fill_color?: string
    fill_color_gdk_rgba?: Gdk.RGBA
    fill_color_rgba?: number
    fill_pattern?: any
    fill_pixbuf?: GdkPixbuf.Pixbuf
    fill_rule?: CairoFillRule
    font?: string
    font_desc?: Pango.FontDescription
    hint_metrics?: CairoHintMetrics
    line_cap?: CairoLineCap
    line_dash?: CanvasLineDash
    line_join?: CairoLineJoin
    line_join_miter_limit?: number
    line_width?: number
    operator?: CairoOperator
    stroke_color?: string
    stroke_color_gdk_rgba?: Gdk.RGBA
    stroke_color_rgba?: number
    stroke_pattern?: any
    stroke_pixbuf?: GdkPixbuf.Pixbuf
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasItemModelSimple {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    parent_object: GObject.Object
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemModelSimple, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemModelSimple, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasItemModelSimple, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasItemModelSimple, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasItemModelSimple, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasItemModelSimple, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasItemModelSimple, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasItemModelSimple, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasItemModelSimple, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasItemModelSimple, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasItemModelSimple_ConstructProps)
    _init (config?: CanvasItemModelSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(mclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_install_child_property(mclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    static class_list_child_properties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface CanvasItemSimple_ConstructProps extends GObject.Object_ConstructProps {
    antialias?: CairoAntialias
    clip_fill_rule?: CairoFillRule
    clip_path?: string
    fill_color?: string
    fill_color_gdk_rgba?: Gdk.RGBA
    fill_color_rgba?: number
    fill_pattern?: any
    fill_pixbuf?: GdkPixbuf.Pixbuf
    fill_rule?: CairoFillRule
    font?: string
    font_desc?: Pango.FontDescription
    hint_metrics?: CairoHintMetrics
    line_cap?: CairoLineCap
    line_dash?: CanvasLineDash
    line_join?: CairoLineJoin
    line_join_miter_limit?: number
    line_width?: number
    operator?: CairoOperator
    stroke_color?: string
    stroke_color_gdk_rgba?: Gdk.RGBA
    stroke_color_rgba?: number
    stroke_pattern?: any
    stroke_pixbuf?: GdkPixbuf.Pixbuf
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasItemSimple {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemSimple, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemSimple, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasItemSimple, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasItemSimple, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasItemSimple, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasItemSimple_ConstructProps)
    _init (config?: CanvasItemSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(iclass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_install_child_property(iclass: GObject.ObjectClass, property_id: number, pspec: GObject.ParamSpec): void
    static class_list_child_properties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface CanvasPath_ConstructProps extends CanvasItemSimple_ConstructProps {
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasPath {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasPath */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPath */
    path_data: CanvasPathData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPath, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPath, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasPath, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasPath, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasPath, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasPath_ConstructProps)
    _init (config?: CanvasPath_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPathModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasPathModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasPathModel */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPathModel */
    parent_object: CanvasItemModelSimple
    path_data: CanvasPathData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPathModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPathModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasPathModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasPathModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasPathModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasPathModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasPathModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasPathModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasPathModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasPathModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasPathModel_ConstructProps)
    _init (config?: CanvasPathModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPolyline_ConstructProps extends CanvasItemSimple_ConstructProps {
    arrow_length?: number
    arrow_tip_length?: number
    arrow_width?: number
    close_path?: boolean
    end_arrow?: boolean
    height?: number
    points?: CanvasPoints
    start_arrow?: boolean
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasPolyline {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasPolyline */
    arrow_length: number
    arrow_tip_length: number
    arrow_width: number
    close_path: boolean
    end_arrow: boolean
    height: number
    points: CanvasPoints
    start_arrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolyline */
    polyline_data: CanvasPolylineData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPolyline, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPolyline, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasPolyline, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasPolyline, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasPolyline, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasPolyline_ConstructProps)
    _init (config?: CanvasPolyline_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPolylineModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    arrow_length?: number
    arrow_tip_length?: number
    arrow_width?: number
    close_path?: boolean
    end_arrow?: boolean
    height?: number
    points?: CanvasPoints
    start_arrow?: boolean
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasPolylineModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasPolylineModel */
    arrow_length: number
    arrow_tip_length: number
    arrow_width: number
    close_path: boolean
    end_arrow: boolean
    height: number
    points: CanvasPoints
    start_arrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModel */
    parent_object: CanvasItemModelSimple
    polyline_data: CanvasPolylineData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPolylineModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPolylineModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasPolylineModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasPolylineModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasPolylineModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasPolylineModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasPolylineModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasPolylineModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasPolylineModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasPolylineModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasPolylineModel_ConstructProps)
    _init (config?: CanvasPolylineModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasRect_ConstructProps extends CanvasItemSimple_ConstructProps {
    height?: number
    radius_bottom_left_x?: number
    radius_bottom_left_y?: number
    radius_bottom_right_x?: number
    radius_bottom_right_y?: number
    radius_top_left_x?: number
    radius_top_left_y?: number
    radius_top_right_x?: number
    radius_top_right_y?: number
    radius_x?: number
    radius_y?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasRect {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasRect */
    height: number
    radius_bottom_left_x: number
    radius_bottom_left_y: number
    radius_bottom_right_x: number
    radius_bottom_right_y: number
    radius_top_left_x: number
    radius_top_left_y: number
    radius_top_right_x: number
    radius_top_right_y: number
    radius_x: number
    radius_y: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasRect */
    rect_data: CanvasRectData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasRect, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasRect, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasRect, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasRect, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasRect, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasRect_ConstructProps)
    _init (config?: CanvasRect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasRectModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    height?: number
    radius_bottom_left_x?: number
    radius_bottom_left_y?: number
    radius_bottom_right_x?: number
    radius_bottom_right_y?: number
    radius_top_left_x?: number
    radius_top_left_y?: number
    radius_top_right_x?: number
    radius_top_right_y?: number
    radius_x?: number
    radius_y?: number
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasRectModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasRectModel */
    height: number
    radius_bottom_left_x: number
    radius_bottom_left_y: number
    radius_bottom_right_x: number
    radius_bottom_right_y: number
    radius_top_left_x: number
    radius_top_left_y: number
    radius_top_right_x: number
    radius_top_right_y: number
    radius_x: number
    radius_y: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasRectModel */
    parent_object: CanvasItemModelSimple
    rect_data: CanvasRectData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasRectModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasRectModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasRectModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasRectModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasRectModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasRectModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasRectModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasRectModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasRectModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasRectModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-bottom-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-left-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-top-right-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasRectModel_ConstructProps)
    _init (config?: CanvasRectModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasStyle_ConstructProps extends GObject.Object_ConstructProps {
}
export class CanvasStyle {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasStyle */
    parent: CanvasStyle
    properties: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasStyle */
    copy(): CanvasStyle
    get_parent(): CanvasStyle
    get_property(property_id: GLib.Quark): any
    set_fill_options(cr: cairo.Context): boolean
    set_parent(parent: CanvasStyle): void
    set_property(property_id: GLib.Quark, value: any): void
    set_stroke_options(cr: cairo.Context): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasStyle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasStyle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasStyle_ConstructProps)
    _init (config?: CanvasStyle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CanvasStyle
    static $gtype: GObject.Type
}
export interface CanvasTable_ConstructProps extends CanvasGroup_ConstructProps {
    column_spacing?: number
    homogeneous_columns?: boolean
    homogeneous_rows?: boolean
    horz_grid_line_width?: number
    row_spacing?: number
    vert_grid_line_width?: number
    x_border_spacing?: number
    y_border_spacing?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasTable {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasTable */
    column_spacing: number
    homogeneous_columns: boolean
    homogeneous_rows: boolean
    horz_grid_line_width: number
    row_spacing: number
    vert_grid_line_width: number
    x_border_spacing: number
    y_border_spacing: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTable */
    table_data: CanvasTableData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroup */
    parent_object: CanvasItemSimple
    items: object[]
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTable, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTable, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasTable, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasTable, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasTable, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasTable_ConstructProps)
    _init (config?: CanvasTable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasTableModel_ConstructProps extends CanvasGroupModel_ConstructProps {
    column_spacing?: number
    homogeneous_columns?: boolean
    homogeneous_rows?: boolean
    horz_grid_line_width?: number
    row_spacing?: number
    vert_grid_line_width?: number
    x_border_spacing?: number
    y_border_spacing?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasTableModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasTableModel */
    column_spacing: number
    homogeneous_columns: boolean
    homogeneous_rows: boolean
    horz_grid_line_width: number
    row_spacing: number
    vert_grid_line_width: number
    x_border_spacing: number
    y_border_spacing: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTableModel */
    parent_object: CanvasGroupModel
    table_data: CanvasTableData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroupModel */
    children: object[]
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTableModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTableModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasTableModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasTableModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasTableModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasTableModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasTableModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasTableModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasTableModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasTableModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasTableModel_ConstructProps)
    _init (config?: CanvasTableModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasText_ConstructProps extends CanvasItemSimple_ConstructProps {
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    use_markup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasText {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasText */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    use_markup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasText */
    text_data: CanvasTextData
    layout_width: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasText */
    get_natural_extents(): [ /* ink_rect */ Pango.Rectangle | null, /* logical_rect */ Pango.Rectangle | null ]
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasText, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasText, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasText, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasText, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasText, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasText_ConstructProps)
    _init (config?: CanvasText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasTextModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    use_markup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasTextModel {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasTextModel */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    use_markup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    can_focus: boolean
    description: string
    parent: CanvasItemModel
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTextModel */
    parent_object: CanvasItemModelSimple
    text_data: CanvasTextData
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    simple_data: CanvasItemSimpleData
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    add_child(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    find_child(child: CanvasItemModel): number
    get_child(child_num: number): CanvasItemModel
    get_child_property(child: CanvasItemModel, property_name: string, value: any): void
    get_n_children(): number
    get_parent(): CanvasItemModel
    get_simple_transform(x: number, y: number, scale: number, rotation: number): boolean
    get_style(): CanvasStyle
    get_transform(transform: cairo.Matrix): boolean
    is_container(): boolean
    lower(below?: CanvasItemModel | null): void
    move_child(old_position: number, new_position: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    remove_child(child_num: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_child_property(child: CanvasItemModel, property_name: string, value: any): void
    set_parent(parent: CanvasItemModel): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemModelSimple */
    vfunc_add_child(child: CanvasItemModel, position: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_changed(recompute_bounds: boolean): void
    vfunc_child_added(child_num: number): void
    vfunc_child_moved(old_child_num: number, new_child_num: number): void
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_child_removed(child_num: number): void
    vfunc_get_child(child_num: number): CanvasItemModel
    vfunc_get_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItemModel
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(transform: cairo.Matrix): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_remove_child(child_num: number): void
    vfunc_set_child_property(child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_parent(parent: CanvasItemModel): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTextModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTextModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: (($obj: CanvasTextModel, recompute_bounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasTextModel, recompute_bounds: boolean) => void)): number
    emit(sigName: "changed", recompute_bounds: boolean): void
    connect(sigName: "child-added", callback: (($obj: CanvasTextModel, child_num: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasTextModel, child_num: number) => void)): number
    emit(sigName: "child-added", child_num: number): void
    connect(sigName: "child-moved", callback: (($obj: CanvasTextModel, old_child_num: number, new_child_num: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasTextModel, old_child_num: number, new_child_num: number) => void)): number
    emit(sigName: "child-moved", old_child_num: number, new_child_num: number): void
    connect(sigName: "child-notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: (($obj: CanvasTextModel, child_num: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasTextModel, child_num: number) => void)): number
    emit(sigName: "child-removed", child_num: number): void
    connect(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasTextModel_ConstructProps)
    _init (config?: CanvasTextModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasWidget_ConstructProps extends CanvasItemSimple_ConstructProps {
    anchor?: CanvasAnchorType
    height?: number
    widget?: Gtk.Widget
    width?: number
    x?: number
    y?: number
    can_focus?: boolean
    description?: string
    parent?: CanvasItem
    pointer_events?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibility_threshold?: number
}
export class CanvasWidget {
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasWidget */
    anchor: CanvasAnchorType
    height: number
    widget: Gtk.Widget
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clip_fill_rule: CairoFillRule
    clip_path: string
    fill_color: string
    fill_color_gdk_rgba: Gdk.RGBA
    fill_color_rgba: number
    fill_pattern: any
    fill_pixbuf: GdkPixbuf.Pixbuf
    fill_rule: CairoFillRule
    font: string
    font_desc: Pango.FontDescription
    hint_metrics: CairoHintMetrics
    line_cap: CairoLineCap
    line_dash: CanvasLineDash
    line_join: CairoLineJoin
    line_join_miter_limit: number
    line_width: number
    operator: CairoOperator
    stroke_color: string
    stroke_color_gdk_rgba: Gdk.RGBA
    stroke_color_rgba: number
    stroke_pattern: any
    stroke_pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-3.0.GooCanvas.CanvasItem */
    can_focus: boolean
    description: string
    parent: CanvasItem
    pointer_events: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibility_threshold: number
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasWidget */
    parent_object: CanvasItemSimple
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simple_data: CanvasItemSimpleData
    bounds: CanvasBounds
    need_update: number
    need_entire_subtree_update: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    changed(recompute_bounds: boolean): void
    check_in_path(x: number, y: number, cr: cairo.Context, pointer_events: CanvasPointerEvents): boolean
    check_style(): void
    get_line_width(): number
    get_path_bounds(cr: cairo.Context, bounds: CanvasBounds): void
    paint_path(cr: cairo.Context): void
    set_model(model: CanvasItemModel): void
    user_bounds_to_device(cr: cairo.Context, bounds: CanvasBounds): void
    user_bounds_to_parent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasItem */
    add_child(child: CanvasItem, position: number): void
    allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, step_time: number, type: CanvasAnimateType): void
    ensure_updated(): void
    find_child(child: CanvasItem): number
    get_bounds(): /* bounds */ CanvasBounds
    get_canvas(): Canvas
    get_child(child_num: number): CanvasItem
    get_child_property(child: CanvasItem, property_name: string, value: any): void
    get_is_static(): boolean
    get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    get_model(): CanvasItemModel
    get_n_children(): number
    get_parent(): CanvasItem
    get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    get_requested_height(cr: cairo.Context, width: number): number
    get_simple_transform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    get_style(): CanvasStyle
    get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    is_container(): boolean
    is_visible(): boolean
    lower(below?: CanvasItem | null): void
    move_child(old_position: number, new_position: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    remove_child(child_num: number): void
    request_update(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    set_canvas(canvas: Canvas): void
    set_child_property(child: CanvasItem, property_name: string, value: any): void
    set_is_static(is_static: boolean): void
    set_parent(parent: CanvasItem): void
    set_simple_transform(x: number, y: number, scale: number, rotation: number): void
    set_style(style: CanvasStyle): void
    set_transform(transform?: cairo.Matrix | null): void
    skew_x(degrees: number, cx: number, cy: number): void
    skew_y(degrees: number, cx: number, cy: number): void
    stop_animation(): void
    translate(tx: number, ty: number): void
    update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas-3.0.GooCanvas.CanvasItemSimple */
    vfunc_simple_create_path(cr: cairo.Context): void
    vfunc_simple_is_item_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean): boolean
    vfunc_simple_paint(cr: cairo.Context, bounds: CanvasBounds): void
    vfunc_simple_update(cr: cairo.Context): void
    vfunc_add_child(child: CanvasItem, position: number): void
    vfunc_allocate_area(cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number): void
    vfunc_animation_finished(stopped: boolean): void
    vfunc_button_press_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_button_release_event(target: CanvasItem, event: Gdk.EventButton): boolean
    vfunc_child_notify(pspec: GObject.ParamSpec): void
    vfunc_enter_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_focus_in_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfunc_get_bounds(): /* bounds */ CanvasBounds
    vfunc_get_canvas(): Canvas
    vfunc_get_child(child_num: number): CanvasItem
    vfunc_get_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_is_static(): boolean
    vfunc_get_items_at(x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]): CanvasItem[]
    vfunc_get_model(): CanvasItemModel
    vfunc_get_n_children(): number
    vfunc_get_parent(): CanvasItem
    vfunc_get_requested_area(cr: cairo.Context, requested_area: CanvasBounds): boolean
    vfunc_get_requested_area_for_width(cr: cairo.Context, width: number, requested_area: CanvasBounds): boolean
    vfunc_get_requested_height(cr: cairo.Context, width: number): number
    vfunc_get_style(): CanvasStyle
    vfunc_get_transform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_get_transform_for_child(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfunc_grab_broken_event(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfunc_is_visible(): boolean
    vfunc_key_press_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_key_release_event(target: CanvasItem, event: Gdk.EventKey): boolean
    vfunc_leave_notify_event(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfunc_motion_notify_event(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfunc_move_child(old_position: number, new_position: number): void
    vfunc_paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_remove_child(child_num: number): void
    vfunc_request_update(): void
    vfunc_scroll_event(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfunc_set_canvas(canvas: Canvas): void
    vfunc_set_child_property(child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_is_static(is_static: boolean): void
    vfunc_set_model(model: CanvasItemModel): void
    vfunc_set_parent(parent: CanvasItem): void
    vfunc_set_style(style: CanvasStyle): void
    vfunc_set_transform(transform?: cairo.Matrix | null): void
    vfunc_update(entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-3.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasWidget, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasWidget, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", target_item: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", target_item: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", target_item: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", target_item: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", target_item: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", target_item: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: (($obj: CanvasWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasWidget, target_item: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", target_item: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::anchor", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::widget", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasWidget_ConstructProps)
    _init (config?: CanvasWidget_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasWidgetAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasWidgetAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Atk.Object
    get_accessible_type(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk-1.0.Atk.ObjectFactory */
    vfunc_invalidate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasWidgetAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasWidgetAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CanvasWidgetAccessibleFactory_ConstructProps)
    _init (config?: CanvasWidgetAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export class CanvasBounds {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasBounds */
    x1: number
    y1: number
    x2: number
    y2: number
    static name: string
}
export abstract class CanvasClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasClass */
    create_item: (canvas: Canvas, model: CanvasItemModel) => CanvasItem
    item_created: (canvas: Canvas, item: CanvasItem, model: CanvasItemModel) => void
    static name: string
}
export abstract class CanvasEllipseClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasEllipseClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasEllipseData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasEllipseData */
    center_x: number
    center_y: number
    radius_x: number
    radius_y: number
    static name: string
}
export abstract class CanvasEllipseModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasEllipseModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasGridClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGridClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasGridData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGridData */
    x: number
    y: number
    width: number
    height: number
    x_step: number
    y_step: number
    x_offset: number
    y_offset: number
    horz_grid_line_width: number
    vert_grid_line_width: number
    horz_grid_line_pattern: cairo.Pattern
    vert_grid_line_pattern: cairo.Pattern
    border_width: number
    border_pattern: cairo.Pattern
    show_horz_grid_lines: number
    show_vert_grid_lines: number
    vert_grid_lines_on_top: number
    static name: string
}
export abstract class CanvasGridModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGridModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasGroupClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroupClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export abstract class CanvasGroupModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasGroupModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasImageClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasImageClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasImageData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasImageData */
    pattern: cairo.Pattern
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class CanvasImageModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasImageModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasItemIface {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemIface */
    get_canvas: (item: CanvasItem) => Canvas
    set_canvas: (item: CanvasItem, canvas: Canvas) => void
    get_n_children: (item: CanvasItem) => number
    get_child: (item: CanvasItem, child_num: number) => CanvasItem
    request_update: (item: CanvasItem) => void
    add_child: (item: CanvasItem, child: CanvasItem, position: number) => void
    move_child: (item: CanvasItem, old_position: number, new_position: number) => void
    remove_child: (item: CanvasItem, child_num: number) => void
    get_child_property: (item: CanvasItem, child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    set_child_property: (item: CanvasItem, child: CanvasItem, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    get_transform_for_child: (item: CanvasItem, child: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    get_parent: (item: CanvasItem) => CanvasItem
    set_parent: (item: CanvasItem, parent: CanvasItem) => void
    get_bounds: (item: CanvasItem) => /* bounds */ CanvasBounds
    get_items_at: (item: CanvasItem, x: number, y: number, cr: cairo.Context, is_pointer_event: boolean, parent_is_visible: boolean, found_items: CanvasItem[]) => CanvasItem[]
    update: (item: CanvasItem, entire_tree: boolean, cr: cairo.Context, bounds: CanvasBounds) => void
    paint: (item: CanvasItem, cr: cairo.Context, bounds: CanvasBounds, scale: number) => void
    get_requested_area: (item: CanvasItem, cr: cairo.Context, requested_area: CanvasBounds) => boolean
    allocate_area: (item: CanvasItem, cr: cairo.Context, requested_area: CanvasBounds, allocated_area: CanvasBounds, x_offset: number, y_offset: number) => void
    get_transform: (item: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    set_transform: (item: CanvasItem, transform?: cairo.Matrix | null) => void
    get_style: (item: CanvasItem) => CanvasStyle
    set_style: (item: CanvasItem, style: CanvasStyle) => void
    is_visible: (item: CanvasItem) => boolean
    get_requested_height: (item: CanvasItem, cr: cairo.Context, width: number) => number
    get_model: (item: CanvasItem) => CanvasItemModel
    set_model: (item: CanvasItem, model: CanvasItemModel) => void
    enter_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    leave_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    motion_notify_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventMotion) => boolean
    button_press_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    button_release_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    focus_in_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    focus_out_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    key_press_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    key_release_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    grab_broken_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventGrabBroken) => boolean
    child_notify: (item: CanvasItem, pspec: GObject.ParamSpec) => void
    query_tooltip: (item: CanvasItem, x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip) => boolean
    get_is_static: (item: CanvasItem) => boolean
    set_is_static: (item: CanvasItem, is_static: boolean) => void
    animation_finished: (item: CanvasItem, stopped: boolean) => void
    scroll_event: (item: CanvasItem, target: CanvasItem, event: Gdk.EventScroll) => boolean
    get_requested_area_for_width: (item: CanvasItem, cr: cairo.Context, width: number, requested_area: CanvasBounds) => boolean
    static name: string
}
export abstract class CanvasItemModelIface {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelIface */
    get_n_children: (model: CanvasItemModel) => number
    get_child: (model: CanvasItemModel, child_num: number) => CanvasItemModel
    add_child: (model: CanvasItemModel, child: CanvasItemModel, position: number) => void
    move_child: (model: CanvasItemModel, old_position: number, new_position: number) => void
    remove_child: (model: CanvasItemModel, child_num: number) => void
    get_child_property: (model: CanvasItemModel, child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    set_child_property: (item: CanvasItemModel, child: CanvasItemModel, property_id: number, value: any, pspec: GObject.ParamSpec) => void
    get_parent: (model: CanvasItemModel) => CanvasItemModel
    set_parent: (model: CanvasItemModel, parent: CanvasItemModel) => void
    get_transform: (model: CanvasItemModel, transform: cairo.Matrix) => boolean
    set_transform: (model: CanvasItemModel, transform?: cairo.Matrix | null) => void
    get_style: (model: CanvasItemModel) => CanvasStyle
    set_style: (model: CanvasItemModel, style: CanvasStyle) => void
    child_added: (model: CanvasItemModel, child_num: number) => void
    child_moved: (model: CanvasItemModel, old_child_num: number, new_child_num: number) => void
    child_removed: (model: CanvasItemModel, child_num: number) => void
    changed: (model: CanvasItemModel, recompute_bounds: boolean) => void
    child_notify: (model: CanvasItemModel, pspec: GObject.ParamSpec) => void
    animation_finished: (model: CanvasItemModel, stopped: boolean) => void
    static name: string
}
export abstract class CanvasItemModelSimpleClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemModelSimpleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CanvasItemSimpleClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimpleClass */
    simple_create_path: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simple_update: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simple_paint: (simple: CanvasItemSimple, cr: cairo.Context, bounds: CanvasBounds) => void
    simple_is_item_at: (simple: CanvasItemSimple, x: number, y: number, cr: cairo.Context, is_pointer_event: boolean) => boolean
    static name: string
}
export class CanvasItemSimpleData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasItemSimpleData */
    style: CanvasStyle
    transform: cairo.Matrix
    clip_path_commands: object[]
    tooltip: string
    visibility_threshold: number
    visibility: number
    pointer_events: number
    can_focus: number
    own_style: number
    clip_fill_rule: number
    is_static: number
    static name: string
}
export class CanvasLineDash {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasLineDash */
    ref_count: number
    num_dashes: number
    dashes: number
    dash_offset: number
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasLineDash */
    ref(): CanvasLineDash
    set_offset(dash_offset: number): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(dashes: number[]): CanvasLineDash
}
export abstract class CanvasPathClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPathClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasPathData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPathData */
    path_commands: object[]
    static name: string
}
export abstract class CanvasPathModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPathModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export class CanvasPoints {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPoints */
    coords: number
    num_points: number
    ref_count: number
    /* Methods of GooCanvas-3.0.GooCanvas.CanvasPoints */
    get_point(idx: number): [ /* x */ number, /* y */ number ]
    ref(): CanvasPoints
    set_point(idx: number, x: number, y: number): void
    unref(): void
    static name: string
    static new(num_points: number): CanvasPoints
    constructor(num_points: number)
    /* Static methods and pseudo-constructors */
    static new(num_points: number): CanvasPoints
}
export class CanvasPolylineArrowData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolylineArrowData */
    arrow_width: number
    arrow_length: number
    arrow_tip_length: number
    line_start: number[]
    line_end: number[]
    start_arrow_coords: number[]
    end_arrow_coords: number[]
    static name: string
}
export abstract class CanvasPolylineClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolylineClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasPolylineData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolylineData */
    coords: number
    arrow_data: CanvasPolylineArrowData
    num_points: number
    close_path: number
    start_arrow: number
    end_arrow: number
    reconfigure_arrows: number
    static name: string
}
export abstract class CanvasPolylineModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasPolylineModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasRectClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasRectClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasRectData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasRectData */
    x: number
    y: number
    width: number
    height: number
    radius_x: number
    radius_y: number
    radius_top_left_x: number
    radius_top_left_y: number
    radius_top_right_x: number
    radius_top_right_y: number
    radius_bottom_right_x: number
    radius_bottom_right_y: number
    radius_bottom_left_x: number
    radius_bottom_left_y: number
    static name: string
}
export abstract class CanvasRectModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasRectModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasStyleClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasStyleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CanvasStyleProperty {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasStyleProperty */
    id: GLib.Quark
    value: any
    static name: string
}
export abstract class CanvasTableClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTableClass */
    parent_class: CanvasGroupClass
    static name: string
}
export class CanvasTableData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTableData */
    width: number
    height: number
    dimensions: CanvasTableDimension[]
    border_width: number
    children: object[]
    layout_data: CanvasTableLayoutData
    static name: string
}
export class CanvasTableDimension {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTableDimension */
    size: number
    default_spacing: number
    spacings: number
    homogeneous: number
    static name: string
}
export class CanvasTableLayoutData {
    static name: string
}
export abstract class CanvasTableModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTableModelClass */
    parent_class: CanvasGroupModelClass
    static name: string
}
export abstract class CanvasTextClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTextClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasTextData {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTextData */
    text: string
    x: number
    y: number
    width: number
    use_markup: number
    anchor: number
    alignment: number
    ellipsize: number
    wrap: number
    static name: string
}
export abstract class CanvasTextModelClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasTextModelClass */
    parent_class: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasWidgetClass {
    /* Fields of GooCanvas-3.0.GooCanvas.CanvasWidgetClass */
    parent_class: CanvasItemSimpleClass
    static name: string
}
export class CanvasPathCommand {
    static name: string
}