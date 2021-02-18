/**
 * GtkClutter-1.0
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
import type * as Clutter from './Clutter-1.0';
import type * as Json from './Json-1.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Cogl from './Cogl-1.0';

export enum TextureError {
    TEXTURE_ERROR_INVALID_STOCK_ID,
}
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export function init_with_args(argv?: string[] | null, parameter_string?: string | null, entries?: GLib.OptionEntry[] | null, translation_domain?: string | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export interface Actor_ConstructProps extends Clutter.Actor_ConstructProps {
    contents?: Gtk.Widget
}
export class Actor {
    /* Properties of GtkClutter.Actor */
    contents: Gtk.Widget
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchor_gravity: Clutter.Gravity
    anchor_x: number
    anchor_y: number
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Clutter.Matrix
    readonly child_transform_set: boolean
    clip: Clutter.Geometry
    clip_rect: Clutter.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Clutter.Point
    pivot_point_z: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    rotation_center_x: Clutter.Vertex
    rotation_center_y: Clutter.Vertex
    rotation_center_z: Clutter.Vertex
    rotation_center_z_gravity: Clutter.Gravity
    scale_center_x: number
    scale_center_y: number
    scale_gravity: Clutter.Gravity
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Clutter.Size
    text_direction: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkClutter.Actor */
    get_contents(): Gtk.Widget
    get_widget(): Gtk.Widget
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: Clutter.AllocationFlags): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: Clutter.AllocationFlags): void
    allocate_preferred_size(flags: Clutter.AllocationFlags): void
    animate_with_alphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    animate_with_timelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    apply_transform_to_point(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    detach_animation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Clutter.Vertex[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_allocation_geometry(): /* geom */ Clutter.Geometry
    get_allocation_vertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    get_anchor_point(): [ /* anchor_x */ number, /* anchor_y */ number ]
    get_anchor_point_gravity(): Clutter.Gravity
    get_animation(): Clutter.Animation
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Clutter.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_depth(): number
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_geometry(): /* geometry */ Clutter.Geometry
    get_gid(): number
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_rotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_center(): [ /* center_x */ number | null, /* center_y */ number | null ]
    get_scale_gravity(): Clutter.Gravity
    get_scale_z(): number
    get_shader(): Clutter.Shader
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Clutter.Matrix
    get_transformation_matrix(): /* matrix */ Clutter.Matrix
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    get_z_rotation_gravity(): Clutter.Gravity
    grab_key_focus(): void
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_overlaps(): boolean
    hide(): void
    hide_all(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    lower(above?: Clutter.Actor | null): void
    lower_bottom(): void
    map(): void
    move_anchor_point(anchor_x: number, anchor_y: number): void
    move_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(): void
    pop_internal(): void
    push_internal(): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    raise(below?: Clutter.Actor | null): void
    raise_top(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    reparent(new_parent: Clutter.Actor): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    set_anchor_point(anchor_x: number, anchor_y: number): void
    set_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Clutter.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_depth(depth: number): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_geometry(geometry: Clutter.Geometry): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_parent(parent: Clutter.Actor): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void
    set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Clutter.Gravity): void
    set_scale_z(scale_z: number): void
    set_shader(shader?: Clutter.Shader | null): boolean
    set_shader_param(param: string, value: any): void
    set_shader_param_float(param: string, value: number): void
    set_shader_param_int(param: string, value: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Clutter.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    set_z_rotation_from_gravity(angle: number, gravity: Clutter.Gravity): void
    should_pick_paint(): boolean
    show(): void
    show_all(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    find_property(property_name: string): GObject.ParamSpec
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreach_with_internals(callback: Clutter.Callback): void
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of GtkClutter.Actor */
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_foreach(callback: Clutter.Callback): void
    vfunc_foreach_with_internals(callback: Clutter.Callback): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfunc_apply_transform(matrix: Clutter.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(color: Clutter.Color): void
    vfunc_queue_redraw(leaf_that_queued: Clutter.Actor): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Actor, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Actor, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Actor) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Actor) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Actor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Actor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Actor) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Actor, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Actor, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Actor, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Actor, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Actor, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Actor, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Actor) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Actor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Actor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "show", callback: (($obj: Actor) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Actor, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Actor, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Actor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Actor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::contents", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Actor
    static new_with_contents(contents: Gtk.Widget): Actor
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Embed_ConstructProps extends Gtk.Container_ConstructProps {
    use_layout_size?: boolean
}
export class Embed {
    /* Properties of GtkClutter.Embed */
    use_layout_size: boolean
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
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkClutter.Embed */
    get_stage(): Clutter.Actor
    get_use_layout_size(): boolean
    set_use_layout_size(use_layout_size: boolean): void
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
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of GtkClutter.Embed */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Embed) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Embed) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Embed, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Embed, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Embed, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Embed, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Embed, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Embed, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: Embed, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Embed, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Embed) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Embed, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Embed, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Embed, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Embed, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Embed) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Embed, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Embed, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Embed, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Embed, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Embed, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Embed, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Embed, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Embed, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Embed, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Embed, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Embed, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Embed, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Embed, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Embed, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Embed, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Embed, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Embed, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Embed, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Embed, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Embed, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Embed, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Embed, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Embed, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Embed) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Embed, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Embed, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Embed) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Embed, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Embed, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Embed, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Embed, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Embed, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Embed, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Embed, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Embed, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "map", callback: (($obj: Embed) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Embed, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Embed, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Embed, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Embed, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Embed, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Embed, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Embed, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Embed, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Embed) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Embed) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Embed, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Embed, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Embed, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Embed, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Embed, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Embed, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Embed, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Embed, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Embed) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Embed, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Embed, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Embed, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Embed, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Embed, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Embed, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Embed, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Embed, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Embed, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "show", callback: (($obj: Embed) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Embed, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Embed, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Embed, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Embed, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Embed, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Embed, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Embed, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Embed, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Embed, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Embed, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Embed) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Embed, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Embed, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Embed) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Embed, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Embed, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Embed) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Embed, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Embed, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Embed, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Embed, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-layout-size", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-layout-size", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Embed_ConstructProps)
    _init (config?: Embed_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Embed
    static $gtype: GObject.Type
}
export interface Texture_ConstructProps extends Clutter.Texture_ConstructProps {
}
export class Texture {
    /* Properties of Clutter.Texture */
    filename: string
    filter_quality: Clutter.TextureQuality
    keep_aspect_ratio: boolean
    load_async: boolean
    load_data_async: boolean
    pick_with_alpha: boolean
    readonly pixel_format: Cogl.PixelFormat
    repeat_x: boolean
    repeat_y: boolean
    sync_size: boolean
    readonly tile_waste: number
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchor_gravity: Clutter.Gravity
    anchor_x: number
    anchor_y: number
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Clutter.Matrix
    readonly child_transform_set: boolean
    clip: Clutter.Geometry
    clip_rect: Clutter.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Clutter.Point
    pivot_point_z: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    rotation_center_x: Clutter.Vertex
    rotation_center_y: Clutter.Vertex
    rotation_center_z: Clutter.Vertex
    rotation_center_z_gravity: Clutter.Gravity
    scale_center_x: number
    scale_center_y: number
    scale_gravity: Clutter.Gravity
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Clutter.Size
    text_direction: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkClutter.Texture */
    set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean
    set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean
    /* Methods of Clutter.Texture */
    get_base_size(): [ /* width */ number, /* height */ number ]
    get_cogl_material(): Cogl.Handle
    get_cogl_texture(): Cogl.Handle
    get_filter_quality(): Clutter.TextureQuality
    get_keep_aspect_ratio(): boolean
    get_load_async(): boolean
    get_load_data_async(): boolean
    get_max_tile_waste(): number
    get_pick_with_alpha(): boolean
    get_pixel_format(): Cogl.PixelFormat
    get_repeat(): [ /* repeat_x */ boolean, /* repeat_y */ boolean ]
    get_sync_size(): boolean
    set_area_from_rgb_data(data: Uint8Array[], has_alpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    set_cogl_material(cogl_material: Cogl.Handle): void
    set_cogl_texture(cogl_tex: Cogl.Handle): void
    set_filter_quality(filter_quality: Clutter.TextureQuality): void
    set_from_file(filename: string): boolean
    set_from_rgb_data(data: Uint8Array[], has_alpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    set_from_yuv_data(data: Uint8Array[], width: number, height: number, flags: Clutter.TextureFlags): boolean
    set_keep_aspect_ratio(keep_aspect: boolean): void
    set_load_async(load_async: boolean): void
    set_load_data_async(load_async: boolean): void
    set_pick_with_alpha(pick_with_alpha: boolean): void
    set_repeat(repeat_x: boolean, repeat_y: boolean): void
    set_sync_size(sync_size: boolean): void
    /* Methods of Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: Clutter.AllocationFlags): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: Clutter.AllocationFlags): void
    allocate_preferred_size(flags: Clutter.AllocationFlags): void
    animate_with_alphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    animate_with_timelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    apply_transform_to_point(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    detach_animation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Clutter.Vertex[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_allocation_geometry(): /* geom */ Clutter.Geometry
    get_allocation_vertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    get_anchor_point(): [ /* anchor_x */ number, /* anchor_y */ number ]
    get_anchor_point_gravity(): Clutter.Gravity
    get_animation(): Clutter.Animation
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Clutter.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_depth(): number
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_geometry(): /* geometry */ Clutter.Geometry
    get_gid(): number
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_rotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_center(): [ /* center_x */ number | null, /* center_y */ number | null ]
    get_scale_gravity(): Clutter.Gravity
    get_scale_z(): number
    get_shader(): Clutter.Shader
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Clutter.Matrix
    get_transformation_matrix(): /* matrix */ Clutter.Matrix
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    get_z_rotation_gravity(): Clutter.Gravity
    grab_key_focus(): void
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_overlaps(): boolean
    hide(): void
    hide_all(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    lower(above?: Clutter.Actor | null): void
    lower_bottom(): void
    map(): void
    move_anchor_point(anchor_x: number, anchor_y: number): void
    move_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(): void
    pop_internal(): void
    push_internal(): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    raise(below?: Clutter.Actor | null): void
    raise_top(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    reparent(new_parent: Clutter.Actor): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    set_anchor_point(anchor_x: number, anchor_y: number): void
    set_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Clutter.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_depth(depth: number): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_geometry(geometry: Clutter.Geometry): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_parent(parent: Clutter.Actor): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void
    set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Clutter.Gravity): void
    set_scale_z(scale_z: number): void
    set_shader(shader?: Clutter.Shader | null): boolean
    set_shader_param(param: string, value: any): void
    set_shader_param_float(param: string, value: number): void
    set_shader_param_int(param: string, value: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Clutter.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    set_z_rotation_from_gravity(angle: number, gravity: Clutter.Gravity): void
    should_pick_paint(): boolean
    show(): void
    show_all(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    find_property(property_name: string): GObject.ParamSpec
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreach_with_internals(callback: Clutter.Callback): void
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Virtual methods of GtkClutter.Texture */
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_foreach(callback: Clutter.Callback): void
    vfunc_foreach_with_internals(callback: Clutter.Callback): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    /* Virtual methods of Clutter.Texture */
    vfunc_load_finished(error: GLib.Error): void
    vfunc_pixbuf_change(): void
    vfunc_size_change(width: number, height: number): void
    /* Virtual methods of Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfunc_apply_transform(matrix: Clutter.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(color: Clutter.Color): void
    vfunc_queue_redraw(leaf_that_queued: Clutter.Actor): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Texture */
    connect(sigName: "load-finished", callback: (($obj: Texture, error: GLib.Error) => void)): number
    connect_after(sigName: "load-finished", callback: (($obj: Texture, error: GLib.Error) => void)): number
    emit(sigName: "load-finished", error: GLib.Error): void
    connect(sigName: "pixbuf-change", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "pixbuf-change", callback: (($obj: Texture) => void)): number
    emit(sigName: "pixbuf-change"): void
    connect(sigName: "size-change", callback: (($obj: Texture, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Texture, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Texture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Texture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Texture) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Texture) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Texture) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Texture) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Texture, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Texture, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Texture) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Texture, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Texture, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Texture, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Texture, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Texture, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Texture, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Texture) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Texture) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Texture, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Texture, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "show", callback: (($obj: Texture) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Texture, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Texture, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Texture) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Texture) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Texture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Texture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filename", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-quality", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-data-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixel-format", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-waste", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Texture
    static error_quark(): GLib.Quark
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends Gtk.Window_ConstructProps {
}
export class Window {
    /* Properties of Gtk.Window */
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
    /* Fields of Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GtkClutter.Window */
    get_stage(): Clutter.Actor
    /* Methods of Gtk.Window */
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
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget | null
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
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of GtkClutter.Window */
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
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    vfunc_set_focus(focus?: Gtk.Widget | null): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "set-focus", callback: (($obj: Window, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: Window, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Window) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Window, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: Window, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Window, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: Window, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Window, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: Window, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Window, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: Window, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Window, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: Window, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Window, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: Window, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Window, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Window) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: Window, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Window, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: Window, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Window, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Window, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: Window, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Window, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: Window, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Window, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Window, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: Window, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: Window, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: Window, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Window, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Window, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: Window, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Window, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: Window, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Window, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: Window, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Window, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: Window, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Window, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Window) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: Window, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Window, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: Window) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Window) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: Window, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Window, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: Window, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Window, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: Window, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Window, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: Window, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Window, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: Window) => void)): number
    connect_after(sigName: "map", callback: (($obj: Window) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: Window, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Window, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: Window, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Window, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: Window, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Window, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: Window, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Window, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: Window) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Window) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: Window, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Window, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: Window, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Window, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: Window, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Window, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Window) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: Window, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Window, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: Window, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Window, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: Window, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Window, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: Window, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Window, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Window, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: Window) => void)): number
    connect_after(sigName: "show", callback: (($obj: Window) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: Window, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Window, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: Window, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Window, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: Window, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Window, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: Window, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Window, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: Window) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: Window) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: Window, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Window, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Window) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: Window, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Window, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Window) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: Window, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Window, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: Window, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Window, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Window
    static new(type: Gtk.WindowType): Window
    static $gtype: GObject.Type
}
export abstract class ActorClass {
    static name: string
}
export class ActorPrivate {
    static name: string
}
export abstract class EmbedClass {
    static name: string
}
export class EmbedPrivate {
    static name: string
}
export abstract class TextureClass {
    static name: string
}
export abstract class WindowClass {
    static name: string
}
export class WindowPrivate {
    static name: string
}